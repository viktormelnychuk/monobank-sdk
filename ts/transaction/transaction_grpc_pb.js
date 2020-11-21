// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var message_get_single_pb = require('./message/get_single_pb.js');
var message_get_multiple_pb = require('./message/get_multiple_pb.js');
var message_transaction_pb = require('./message/transaction_pb.js');

function serialize_transaction_message_GetByIdRequest(arg) {
  if (!(arg instanceof message_get_single_pb.GetByIdRequest)) {
    throw new Error('Expected argument of type transaction.message.GetByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_transaction_message_GetByIdRequest(buffer_arg) {
  return message_get_single_pb.GetByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_message_GetTransactionsRequest(arg) {
  if (!(arg instanceof message_get_multiple_pb.GetTransactionsRequest)) {
    throw new Error('Expected argument of type transaction.message.GetTransactionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_transaction_message_GetTransactionsRequest(buffer_arg) {
  return message_get_multiple_pb.GetTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_message_GetTransactionsResponse(arg) {
  if (!(arg instanceof message_get_multiple_pb.GetTransactionsResponse)) {
    throw new Error('Expected argument of type transaction.message.GetTransactionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_transaction_message_GetTransactionsResponse(buffer_arg) {
  return message_get_multiple_pb.GetTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_message_Transaction(arg) {
  if (!(arg instanceof message_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type transaction.message.Transaction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_transaction_message_Transaction(buffer_arg) {
  return message_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionService = exports.TransactionService = {
  getAllTransactions: {
    path: '/transaction.Transaction/GetAllTransactions',
    requestStream: false,
    responseStream: false,
    requestType: message_get_multiple_pb.GetTransactionsRequest,
    responseType: message_get_multiple_pb.GetTransactionsResponse,
    requestSerialize: serialize_transaction_message_GetTransactionsRequest,
    requestDeserialize: deserialize_transaction_message_GetTransactionsRequest,
    responseSerialize: serialize_transaction_message_GetTransactionsResponse,
    responseDeserialize: deserialize_transaction_message_GetTransactionsResponse,
  },
  getById: {
    path: '/transaction.Transaction/GetById',
    requestStream: false,
    responseStream: false,
    requestType: message_get_single_pb.GetByIdRequest,
    responseType: message_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_message_GetByIdRequest,
    requestDeserialize: deserialize_transaction_message_GetByIdRequest,
    responseSerialize: serialize_transaction_message_Transaction,
    responseDeserialize: deserialize_transaction_message_Transaction,
  },
};

exports.TransactionClient = grpc.makeGenericClientConstructor(TransactionService);
