require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit foot blanket royal nominee common gesture pave army gate'; 
let testAccounts = [
"0x18f5cb9f8608be3264b1ddcc2642919dbc18059e917c45cc69e37f3e33166a11",
"0xd6fa7d5f1a85a79b75c339d534cb6cb83a154c58c6ab9d9724b19c966924675d",
"0x54d44abbd44fc2b192b6f597ecf9650c4608a2204679397f58981802ceb8e264",
"0x38f52c9f0ffd73dd7acc1f0612004a50a608cacef79d950e630bb9b83e82ee4d",
"0x358069d7ec13e2d1969f4480ff1b4a23ed5e62981e193e6de7caf89def8115a1",
"0x65f1b7706f3ac9f7cc0ed8c035151b549700bdc7781174d22ba52269f9f1efca",
"0x45080e0c21aa2a419452c1e8858c4ecd4fc6f99be5773ee737ffa1a74cd8c718",
"0x9cb5ceb0152d2579096011c7523ed2a062fe88d120ffbbe5a4a1db5eea143fec",
"0xd780c9060d5686f05c1ce9a32ec0bdd39da4578721f54775cf27693f519c5c0a",
"0xb18c214cf9c6fbf836e6f59acaa2e0dd705a7255c77e1a5dffefb61138aa31ea"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


