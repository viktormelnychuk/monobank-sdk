#!/bin/bash
set -e
DOCKER_IMAGE="791136071775.dkr.ecr.eu-west-1.amazonaws.com/common/platform/protoc:latest"

declare -a SUPPORTED_LANGS=("go" "ts")

# get list of proto "packages"
PROTO_PKGS=(proto/*)
VERSION=$(cat .VERSION)

rm -Rf ./ts ./gen ./go
mkdir ./ts ./gen ./go

function getParams() {
  lang=$1
  pkg=$2
  pkgDestDir=$3
  case "$lang" in
  go)
    PARAMS="-I=./${pkg}/ --go_out=plugins=grpc:${pkgDestDir}"
    ;;
  python)
    PARAMS="-I=./${pkg}/ \
            --python_out=${pkgDestDir} \
            --plugin=protoc-gen-grpc=/usr/bin/grpc_python_plugin \
            --grpc_out=${pkgDestDir}"
    ;;
  js)
    PARAMS="-I=./${pkg}/ --js_out=import_style=commonjs:${pkgDestDir} \
            --grpc_out=${pkgDestDir} \
            --plugin=protoc-gen-grpc=/usr/bin/grpc_node_plugin"
    ;;
  ts)
    PARAMS="-I=./${pkg}/ \
            --js_out=import_style=commonjs,binary:${pkgDestDir} \
            --plugin=protoc-gen-grpc=/usr/bin/grpc_node_plugin \
            --ts_out=service=grpc-node:${pkgDestDir} \
            --plugin=protoc-gen-ts=/usr/bin/protoc-gen-ts \
            --grpc_out=${pkgDestDir}"
    ;;
  grpc-web)
    PARAMS="-I=./${pkg}/ \
            --js_out=import_style=commonjs,binary:${pkgDestDir} \
            --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${pkgDestDir}"
    ;;
  ruby)
    PARAMS="-I=./${pkg}/ \
            --ruby_out=${pkgDestDir} \
            --plugin=protoc-gen-grpc=/usr/bin/grpc_ruby_plugin \
            --grpc_out=${pkgDestDir}"
    ;;
  php)
    PARAMS="-I=./${pkg}/ \
            --php_out=${pkgDestDir} \
            --grpc_out=${pkgDestDir} \
            --plugin=protoc-gen-grpc=/usr/bin/grpc_php_plugin"
    ;;
  *)
    PARAMS=""
    ;;
  esac

  echo $PARAMS
}

for lang in "${SUPPORTED_LANGS[@]}"; do
  echo "Building $lang"
  echo "Removing ./gen/${lang}/*"

  rm -rf ./gen/${lang}

  for pkg in "${PROTO_PKGS[@]}"; do

    # create dest dir
    if [[ "$lang" == "go" ]]; then
      PKG_DEST_DIR="/go_gen"
      mkdir -p ./gen/go
    elif [[ "$lang" == "ruby" ]]; then
      PKG_DEST_DIR="./gen/${lang}/$(basename ${pkg})/lib"
      echo "[$pkg] Creating $PKG_DEST_DIR"
      mkdir -p "${PKG_DEST_DIR}"
    else
      PKG_DEST_DIR="./gen/${lang}/$(basename ${pkg})"
      echo "[$pkg] Creating $PKG_DEST_DIR"
      mkdir -p "${PKG_DEST_DIR}"
    fi

    # Sub packages build
    find "${pkg}" -type d -print0 | while IFS= read -r -d $'\0' subpkg; do
      # Build library from proto file throught the docker image
      echo "[$subpkg] Building sub-package"
      docker run --rm \
        --user "$(id -u):$(id -g)" \
        -v "$(pwd):$(pwd)" \
        -v "$(pwd)/gen/go:/go_gen/github.com/viktormelnychuk/monobank-sdk" \
        -w "$(pwd)" "${DOCKER_IMAGE}" \
        $(getParams $lang $pkg $PKG_DEST_DIR) \
        ./${subpkg}/*.proto
    done
  done
done

mv ./gen/ts/* ./ts
mv ./gen/go/* ./
rm -rf ./gen

generatePackage
go mod tidy
