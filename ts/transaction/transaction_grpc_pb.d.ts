// GENERATED CODE -- DO NOT EDIT!

// package: transaction
// file: transaction.proto

import * as transaction_pb from "./transaction_pb";
import * as message_get_single_pb from "./message/get_single_pb";
import * as message_get_multiple_pb from "./message/get_multiple_pb";
import * as message_transaction_pb from "./message/transaction_pb";
import * as grpc from "grpc";

interface ITransactionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllTransactions: grpc.MethodDefinition<message_get_multiple_pb.GetTransactionsRequest, message_get_multiple_pb.GetTransactionsResponse>;
  getById: grpc.MethodDefinition<message_get_single_pb.GetByIdRequest, message_transaction_pb.Transaction>;
}

export const TransactionService: ITransactionService;

export class TransactionClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllTransactions(argument: message_get_multiple_pb.GetTransactionsRequest, callback: grpc.requestCallback<message_get_multiple_pb.GetTransactionsResponse>): grpc.ClientUnaryCall;
  getAllTransactions(argument: message_get_multiple_pb.GetTransactionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<message_get_multiple_pb.GetTransactionsResponse>): grpc.ClientUnaryCall;
  getAllTransactions(argument: message_get_multiple_pb.GetTransactionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<message_get_multiple_pb.GetTransactionsResponse>): grpc.ClientUnaryCall;
  getById(argument: message_get_single_pb.GetByIdRequest, callback: grpc.requestCallback<message_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  getById(argument: message_get_single_pb.GetByIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<message_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  getById(argument: message_get_single_pb.GetByIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<message_transaction_pb.Transaction>): grpc.ClientUnaryCall;
}
