import { RPC, RPCOptions } from "rpc-request";
export type formatParam = {
    format?: "json" | "hex" | "bin";
};
export type BlockParams = formatParam & {
    hash: string;
};
export type BlockHeightParams = formatParam & {
    height: number;
};
export type Outpoint = {
    txid: string;
    n: number;
};
export type UtxosParams = formatParam & {
    checkmempool?: boolean;
    outpoints: Outpoint[] | Outpoint;
};
export type HeaderParams = BlockParams & {
    count?: number;
};
export type TxParams = formatParam & {
    txid: string;
};
export type RESTIniOptions = RPCOptions & {
    url?: string;
};
export declare class RESTClient extends RPC {
    constructor({ url, port, timeout, ...options }?: RESTIniOptions);
    getBlock({ hash, format }: BlockParams): Promise<any>;
    getBlockNoTxDetails({ hash, format }: BlockParams): Promise<any>;
    getBlockHashByHeight({ height, format }: BlockHeightParams): Promise<any>;
    getChainInfo(): Promise<any>;
    getUtxos({ checkmempool, outpoints, format }: UtxosParams): Promise<any>;
    getHeaders({ count, hash, format }: HeaderParams): Promise<any>;
    getMemPoolContents(): Promise<any>;
    getMemPoolInfo(): Promise<any>;
    getTx({ txid, format }: TxParams): Promise<any>;
}
