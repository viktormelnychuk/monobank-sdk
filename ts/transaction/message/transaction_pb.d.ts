// package: transaction.message
// file: message/transaction.proto

import * as jspb from "google-protobuf";

export class Transaction extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMcc(): number;
  setMcc(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getCurrencycode(): number;
  setCurrencycode(value: number): void;

  getCommissionrate(): number;
  setCommissionrate(value: number): void;

  getCashbackamount(): number;
  setCashbackamount(value: number): void;

  getBalance(): number;
  setBalance(value: number): void;

  getHold(): boolean;
  setHold(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: number,
    time: number,
    description: string,
    mcc: number,
    amount: number,
    currencycode: number,
    commissionrate: number,
    cashbackamount: number,
    balance: number,
    hold: boolean,
  }
}

