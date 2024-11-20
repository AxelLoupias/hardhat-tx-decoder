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
