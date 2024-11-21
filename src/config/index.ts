import { extendProvider } from 'hardhat/config'
import { type EIP1193Provider, type RequestArguments } from 'hardhat/types'
import { ProviderWrapper } from 'hardhat/plugins'
import { ProviderError } from 'hardhat/internal/core/providers/errors'

class HardhatTxDecoderProvider extends ProviderWrapper {
	constructor(protected readonly _wrappedProvider: EIP1193Provider) {
		super(_wrappedProvider)
	}

	async request(args: RequestArguments): Promise<unknown> {
		try {
			return await this._wrappedProvider.request(args)
		} catch (error) {
			if (
				ProviderError.isProviderError(error) &&
				error.data != null &&
				typeof error.data === 'object' &&
				'data' in error.data
			) {
				error.data = error.data.data
			}
			throw error
		}
	}
}

extendProvider(async (provider) => {
	const newProvider = new HardhatTxDecoderProvider(provider)
	return newProvider
})
