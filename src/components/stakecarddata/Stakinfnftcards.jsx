import React, { useEffect, useState } from "react";
import { landingAddress, marketplaceAddress } from "../../config/config";
import { useWalletClient } from "wagmi";
import { landingContract, marketplaceContract, web3 } from "../../utils/contract";
const Stakinfnftcards = ({ uri, tokenId, disableBtn }) => {

  const [approved, setApproved] = useState({});
  const [uriData, setUriData] = useState([]);

  const { data: signer } = useWalletClient();


  useEffect(() => {
    getApprovedfunc();
  }, []);

  useEffect(() => {
    fetchStakeData();
  }, []);




  const getApprovedfunc = async () => {
    if (tokenId) {
      const obj = {};
      const approveds = await landingContract.methods
        .getApproved(tokenId)
        .call();
      obj[tokenId] = approveds;
      setApproved(obj);
    }
  };

  const fetchStakeData = async () => {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      setUriData(data);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
    }
  };
 
  const { name, price, image, description } = uriData;

  const stakeNft = async () => {
    try {
      let transaction = {
        to: marketplaceAddress,
        chainId: 114,
        data: marketplaceContract.methods
          .stakeNFT(landingAddress, signer.account.address, tokenId)
          .encodeABI(),
      };
      if (signer) {
        const transactionHash = await signer.sendTransaction(transaction);
  
        const checkTransactionReceipt = async (txHash, retries = 5, interval = 5000) => {
          for (let i = 0; i < retries; i++) {
            try {
              const receipt = await web3.eth.getTransactionReceipt(txHash);
              if (receipt != null) {
                if (receipt.status) {
                  console.log('Transaction confirmed:', receipt);
                  getApprovedfunc()
                  return receipt;
                } else {
                  console.error('Transaction failed:', receipt);
                  return null;
                }
              }
            } catch (error) {
              console.error('Error fetching transaction receipt:', error);
            }
            await new Promise((resolve) => setTimeout(resolve, interval)); 
          }
          console.error('Transaction receipt not found after retries');
          return null;
        };
  
        const receipt = await checkTransactionReceipt(transactionHash);
        console.log(receipt);  
        if (receipt) {
          
        } else {
       
        }
      }
    } catch (error) {
      console.log('Error sending transaction:', error);
    }
  };



  return (
    <>
      {approved[tokenId] !== "0x0000000000000000000000000000000000000000" ? (
        <section className="nftcard-sec">
          <div className={`inner`}>
            <div className="top">
              <img src={image} alt="image" />
            </div>
            <div className="center">
              <div className="price">
                <p className="text-white text-inter fw-bold">{name}</p>
                <p className="text-white text-inter fw-bold">{price}</p>

                <p className="text-white text-inter fw-bold">
                  {tokenId?.toString()}
                </p>
              </div>
              <p className="text-white text-inter fw-normal">{description}</p>
            </div>
            <div className="bottom">
              <div>
                <button className="nftcard-btn mt-2" onClick={stakeNft} disabled={!disableBtn}>
                  Staking
                </button>
              </div>
            </div>
            {/* {type === "sold" && (
          <div className="sold">
            <div className="sold-main"></div>
            <span>Sold</span>
          </div>
        )} */}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Stakinfnftcards;
