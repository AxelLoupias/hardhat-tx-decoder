import { task } from 'hardhat/config'
import '@nomicfoundation/hardhat-ethers'
import { type Artifacts } from 'hardhat/types'
import { TransactionDecoder, TxData } from 'blockchain-tx-decoder'

task('txDecode', 'Displays the transaction with decoded data')
	.addPositionalParam('txId', 'Transaction id you want to decode')
	.setAction(async (args, hre) => {
		const { txId } = args
		await hre.run('compile')
		const allABIs = await obtainABIs(hre.artifacts)

		const txDecoder = new TransactionDecoder({
			provider: hre.ethers.provider,
			contractInfo: allABIs,
		})
		let txData: TxData
		try {
			txData = await txDecoder.getTxData(txId)
		} catch (e: unknown) {
			console.log(e)
			return
		}

		console.dir(txData, {
			colors: true,
			depth: Infinity,
			numericSeparator: false,
		})
	})

async function obtainABIs(artifacts: Artifacts): Promise<any> {
	const namedArtifacts = await artifacts.getAllFullyQualifiedNames()

	return await Promise.all(
		namedArtifacts.map(async (item) => {
			const artifact = await artifacts.readArtifact(item)
			return { abi: artifact.abi, bytecode: artifact.bytecode }
		})
	)
}
