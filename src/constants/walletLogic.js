import { METIS_TESTNET_STARDUST } from "../constants/network";

export const toHex = (num) => {
    return "0x" + num.toString(16);
};

export const isMetaMaskInstalled = () => {
    if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");
        return true;
    } else {
        console.log("please install metamask");
        return false;
    }
};

export const addNetworkToWallet = async (chain) => {
    const params = {
        chainId: toHex(chain.chainId),
        chainName: chain.name,
        nativeCurrency: {
        name: chain.nativeCurrency.name,
        symbol: chain.nativeCurrency.symbol,
        decimals: chain.nativeCurrency.decimals,
        },
        rpcUrls: chain.rpc,
        blockExplorerUrls: [
        chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url
            ? chain.explorers[0].url
            : chain.infoURL,
        ],
    };

    await window.ethereum
        .request({
            method: "wallet_addEthereumChain",
            params: [params],
        })
        .then((res) => {
            console.log(res);
            window.location.reload();
            window.location.href("/wallet");
        })
        .catch((err) => {
            console.log(err.message);
    });
};

export const changeWalletNetwork = async (chainID) => {
    await window.ethereum
        .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: toHex(chainID) }], // chainId must be in hexadecimal numbers
        })
        .then((res) => {
            window.location.reload();
        })
        .catch(async (error) => {
            console.log(error.code);
            if (error.code === 4902) {
                addNetworkToWallet(METIS_TESTNET_STARDUST);
            }
        });
};

//if not connected show sign in pop-up(in-built)
export  const tryMetaMaskConnect = async () => {
    await window.ethereum
        .request({ method: "eth_requestAccounts" })
            .then(() => {
            changeWalletNetwork(588);
        })
        .catch((error) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log("Please connect to MetaMask.");
            } else {
                console.error(error);
            }
        });
};

