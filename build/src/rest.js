"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTClient = void 0;
const rpc_request_1 = require("rpc-request");
class RESTClient extends rpc_request_1.RPC {
    constructor({ url = "http://localhost", port = 8332, timeout = 30000, ...options } = {}) {
        super({ ...options, baseUrl: `${url}:${port}`, timeout, json: true });
    }
    getBlock({ hash, format = "json" }) {
        return this.get({ uri: `/rest/block/${hash}.${format}` });
    }
    getBlockNoTxDetails({ hash, format = "json" }) {
        return this.get({ uri: `/rest/block/notxdetails/${hash}.${format}` });
    }
    getBlockHashByHeight({ height, format = "json" }) {
        return this.get({ uri: `/rest/blockhashbyheight/${height}.${format}` });
    }
    getChainInfo() {
        return this.get({ uri: "rest/chaininfo.json" });
    }
    getUtxos({ checkmempool = true, outpoints, format = "json" }) {
        let uri = `rest/getutxos${checkmempool ? "/checkmempool" : ""}`;
        outpoints = !Array.isArray(outpoints) ? [outpoints] : outpoints;
        for (const { txid, n } of outpoints) {
            uri += `/${txid}-${n}`;
        }
        return this.get({ uri: uri + "." + format });
    }
    getHeaders({ count, hash, format = "json" }) {
        return this.get({ uri: `rest/headers/${count}/${hash}.${format}` });
    }
    getMemPoolContents() {
        return this.get({ uri: "rest/mempool/contents.json" });
    }
    getMemPoolInfo() {
        return this.get({ uri: "rest/mempool/info.json" });
    }
    getTx({ txid, format = "json" }) {
        return this.get({ uri: `rest/tx/${txid}.${format}` });
    }
}
exports.RESTClient = RESTClient;
