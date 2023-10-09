import { Chain, mainnet } from 'viem/chains'

const modifiedMainnet = {
  ...mainnet,
  rpcUrls: {
    default: {
      http: [`https://rpc.forknet.org/`],
    },
    public: {
      http: [`https://rpc.forknet.org/`],
    },
  },
}

export { modifiedMainnet }
export type { Chain }

export enum ChainId {
  MAINNET = 1,
}

export const NETWORK_CONFIGS: {
  [chainId in ChainId]: Chain
} = {
  [modifiedMainnet.id]: modifiedMainnet,
}
