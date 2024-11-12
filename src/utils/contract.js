import Web3 from "web3";
import marketplaceAbi from "../ABIs/marketplaceAbi.json";
import landAbi from "../ABIs/landingAbi.json";
import buildingAbi from "../ABIs/buildingAbi.json";
import tokenAbi from "../ABIs/tokenAbi.json";

export const web3 = new Web3("https://bsc-testnet-rpc.publicnode.com");
export const buildingContract = new web3.eth.Contract(
  buildingAbi,
  import.meta.VITE_BUILDINGADDRESS
);
export const marketplaceContract = new web3.eth.Contract(
  marketplaceAbi,
  import.meta.VITE_MARKETADDRESS
);
export const landingContract = new web3.eth.Contract(
  landAbi,
  import.meta.VITE_LANDINGADDRESS
);
export const tokenContract = new web3.eth.Contract(
  tokenAbi,
  import.meta.VITE_TOKENADDRESS
);

export const chainId = 97;
