import { Chain, mainnet } from 'viem/chains'

const modifiedMainnet = {
  ...mainnet,
  rpcUrls: {
    default: {
      http: [`http://34.27.58.31:8545/`],
    },
    public: {
      http: [`http://34.27.58.31:8545/`],
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
