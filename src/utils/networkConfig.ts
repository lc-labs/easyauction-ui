import { Chain, base } from 'viem/chains'

export { base }
export type { Chain }

export enum ChainId {
  BASE = 8453,
}

export const NETWORK_CONFIGS: {
  [chainId in ChainId]: Chain
} = {
  [base.id]: base,
}
