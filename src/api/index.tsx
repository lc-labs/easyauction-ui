import {
  AdditionalServicesApi,
  AdditionalServicesApiImpl,
  AdditionalServicesEndpoint,
} from './AdditionalServicesApi'
import { TokenLogosServiceApi, TokenLogosServiceApiInterface } from './TokenLogosServiceApi'

function createAdditionalServiceApi(): AdditionalServicesApi {
  const config: AdditionalServicesEndpoint[] = [
    {
      networkId: 8453,
      graph_url_production: 'http://34.68.171.46:8000/subgraphs/name/gnosis-auction/ga-base',
    },
  ]

  const dexPriceEstimatorApi = new AdditionalServicesApiImpl(config)

  window['dexPriceEstimatorApi'] = dexPriceEstimatorApi

  return dexPriceEstimatorApi
}

// Build APIs
export const additionalServiceApi: AdditionalServicesApi = createAdditionalServiceApi()
export const tokenLogosServiceApi: TokenLogosServiceApiInterface = new TokenLogosServiceApi()
