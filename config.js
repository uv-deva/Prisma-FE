import { createConfig, http } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { walletConnect } from 'wagmi/connectors'

const projectId = '8e5776c8f369b3a8490d1677bdc34773'

export const config = createConfig({
  autoConnect: true,
  chains: [mainnet, base,sepolia],
  connectors: [
    walletConnect({ projectId }),
    // metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})