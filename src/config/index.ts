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
				'data' in (error.data as any)
			) {
				error.data = (error.data as any).data
			}
			throw error
		}
	}
}

extendProvider(async (provider, config, network) => {
	const newProvider = new HardhatTxDecoderProvider(provider)
	return newProvider
})
