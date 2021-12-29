export const METIS_TESTNET_STARDUST = {
    "name": "Metis Stardust Testnet",
    "chain": "ETH",
    "network": "rinkeby",
    "rpc": ["https://stardust.metis.io/?owner=588"],
    "faucets": [],
    "nativeCurrency": {
      "name": "tMetis",
      "symbol": "METIS",
      "decimals": 18
    },
    "infoURL": "https://www.metis.io",
    "shortName": "metis-stardust",
    "chainId": 588,
    "networkId": 588,
    "explorers": [
      {
        "name": "blockscout",
        "url": "https://stardust-explorer.metis.io/",
        "standard": "EIP3091"
      }
    ],
    "parent": {
      "type": "L2",
      "chain": "eip155-4",
      "bridges": [{ "url": "https://bridge.metis.io" }]
    }
  }