import { ChainId } from './networkConfig'

export const setupNetwork = async (chainId: ChainId) => {
  const provider = (window as Window)?.ethereum
  if (provider && provider.request) {
    try {
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error(
      `Can't setup the network with chainId: ${chainId} on metamask because window.ethereum is undefined`,
    )
    return false
  }
}
