# hardhat-tx-decoder

This Hardhat plugin integrates the `blockchain-tx-decoder` library into your Hardhat workflow. It allows you to decode Ethereum transactions, providing detailed information such as transaction data, contract interactions, and emitted events directly within your Hardhat tasks.

---

## 🚀 Installation

To install the plugin, follow these steps:
```bash
npm install --save-dev hardhat-tx-decoder
```
---

## ⚙️ Setup
After installing the plugin, you need to add it to your Hardhat project configuration.

Import the plugin in `hardhat.config.ts`:
```typescript
import 'hardhat-tx-decoder';
```
---

## 📖 Usage
To decode a transaction, simply run the following Hardhat command:

```bash
npx hardhat txDecode <txId> --network <network-name>
```

Where:
- `txId`: is the transaction hash of the Ethereum transaction you want to decode.
- `network-name` is the name of the network you have configured in your `hardhat.config.js` (e.g., localhost, rinkeby, mainnet, etc.).

### Example:

This command will decode the transaction with the given hash on the localhost network.
```bash
npx hardhat txDecode 0xb2f9890b5845a74376535eee721c35ca58eeb363f783df0c515b8858c98a5e0f --network localhost
```
The console will show:
```bash
{
  transactionData: {
    from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    to: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    status: 1,
    blockNumber: 4,
    isConstructorTransaction: false,
    blockTimestamp: 1732212030,
    txValue: '0.0 ETH',
    txGasPrice: '0.746660867 Gwei',
    txGasUsed: '0.00001788999437332 ETH'
  },
  contractData: {
    name: 'emitEvent',
    selector: '0x6fbd0832',
    args: [
      {
        key: 'inputStruct',
        value: [
          { key: 'amount', value: 23n },
          {
            key: 'owner',
            value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
          }
        ]
      }
    ],
    events: [
      {
        name: 'EventWithStruct',
        args: [
          {
            key: 'structEvent',
            value: [
              { key: 'amount', value: 23n },
              {
                key: 'owner',
                value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
              }
            ]
          }
        ]
      },
      { name: 'OtherEvent', args: [] }
    ]
  },
  revertData: undefined
}
```
