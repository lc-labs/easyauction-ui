import { PortisConnector } from '@web3-react/portis-connector'
import { configureChains, createConfig } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { SafeConnector } from 'wagmi/connectors/safe'
import { WalletConnectConnector as WC } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'

import { ChainId, NETWORK_CONFIGS, modifiedMainnet } from './../utils/networkConfig'
import { PORTIS_ID, WALLET_CONNECT_PROJECT_ID } from '../constants/config'

const { chains, publicClient } = configureChains([modifiedMainnet], [publicProvider()])

export { chains }

const metamaskConnector = new MetaMaskConnector({ chains })
export const injected = new InjectedConnector({ chains })
const coinbaseWalletConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'gnosis-auction.eth',
    jsonRpcUrl: `http://34.27.58.31:8545/`,
  },
})

export const walletConnectConnector = new WC({
  chains,
  options: {
    projectId: WALLET_CONNECT_PROJECT_ID,
    metadata: {
      name: 'gnosis-auction',
      description: 'Decentralised token price discovery platform',
      url: 'gnosis-auction.eth',
      icons: [],
    },
  },
})

const safeConnector = new SafeConnector({
  chains,
  options: {
    allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
    debug: true,
  },
})

export const wagmiClient = createConfig({
  autoConnect: true,
  connectors: [
    metamaskConnector,
    injected,
    coinbaseWalletConnector,
    walletConnectConnector,
    safeConnector,
  ],
  publicClient,
})

const urls: string[] = []

// TOOD Try to use reduce to improve types
const rpcs: any = {}

const chainIds = Object.keys(NETWORK_CONFIGS).map(Number)
chainIds.forEach((chainId: ChainId) => {
  if (NETWORK_CONFIGS[chainId].rpcUrls.default) {
    urls[chainId] = `${NETWORK_CONFIGS[chainId].rpcUrls.default.http}`
    rpcs[chainId] = NETWORK_CONFIGS[chainId].rpcUrls.default.http
  }
})

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID,
  networks: [1],
})
