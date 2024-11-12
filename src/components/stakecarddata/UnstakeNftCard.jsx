import React, { useEffect, useState } from "react";
import { landingAddress, marketplaceAddress } from "../../config/config";
import { useWalletClient } from "wagmi";
import { toast } from "react-toastify";
import { landingContract, marketplaceContract, web3 } from "../../utils/contract";

const UnstakeNftCard = ({ uri, tokenId, disableBtn }) => {
  const [isActive, setIsActive] = useState(false);
  const [approved, setApproved] = useState({});
  const [uriData, setUriData] = useState([]);

  useEffect(() => {
    getApprovedfunc();
  }, []);

  useEffect(() => {
    fetchStakeData();
  }, []);

  useEffect(() => {
    checkRewards();
  }, []);

  const { data: signer } = useWalletClient();

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

  const unStakeNFT = async () => {
    try {
      let transction = {
        to: marketplaceAddress,
        chainId: 114,
        data: marketplaceContract.methods
          .unStakeNFT(landingAddress, signer.account.address, tokenId)
          .encodeABI(),
      };
      if (signer) {
        const transactionHash = await signer.sendTransaction(transction);
  
        const checkTransactionReceipt = async (txHash, retries = 5, interval = 5000) => {
          for (let i = 0; i < retries; i++) {
            try {
              const receipt = await web3.eth.getTransactionReceipt(txHash);
              if (receipt != null) {
                if (receipt.status) {
                  console.log('Transaction confirmed:', receipt);
                  toast.success('This nft has to be approved now')
                  checkRewards()
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

  const checkRewards = async () => {
    const reward = await marketplaceContract.methods.lockedNFT(tokenId).call();
    setIsActive(reward?.isActive);
  };



  const claimReward = async()=>{
    try {
      let transaction ={
        to: marketplaceAddress,
        chainId: 114,
        data: marketplaceContract.methods.userClaimFT(signer?.account?.address, tokenId).encodeABI()
      }
      if (signer) {
        const transactionHash = await signer.sendTransaction(transaction);
        const checkTransactionReceipt = async (txHash, retries = 5, interval = 5000) => {
          for (let i = 0; i < retries; i++) {
            try {
              const receipt = await web3.eth.getTransactionReceipt(txHash);
              if (receipt != null) {
                if (receipt.status) {
                  console.log('Transaction confirmed:', receipt);
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
          console.log(receipt);
        } else {
       console.log('receipt not found');

        }
      }
    } catch (error) {
      
    }
  }

  return (
    <>
      {isActive ? (
        <section className="nftcard-sec">
          {
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
                  <button
                    className="nftcard-btn mt-2"
                    onClick={unStakeNFT}
                    disabled={disableBtn}
                  >
                    Unstake
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
          }
               <button onClick={claimReward}>claimReward</button>
        </section>
   
      ) : null}
    </>
  );
};

export default UnstakeNftCard;
