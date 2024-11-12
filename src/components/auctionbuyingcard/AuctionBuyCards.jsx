import React, { useEffect, useState } from "react";
import "./auctionbuyingcard.scss"
import { useWalletClient } from "wagmi";
import { toast } from "react-toastify";
import { marketplaceAddress } from "../../config/config";
import { marketplaceContract, web3 , chainId} from "../../utils/contract";
function AuctionBuyCards({
  auctionUri,
  id,
  nftAmount,
  artistFee,
  price,
  type,
}) {
const {data: signer} = useWalletClient();
    const [ auctionData, setAuctionData ] = useState({});
const fetchAuctionUriData = async () => {
    try {
      const response = await fetch(auctionUri);
      const data = await response.json();
      setAuctionData(data)
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
     
    }   

    };
  useEffect(()=>{
    fetchAuctionUriData()
  },[])
   
    async function buyBuilding(){

      try {
        let transaction = {
          to: marketplaceAddress,
          chainId: chainId,
          data: marketplaceContract.methods
            .buyBuildings(id?.toString() )
            .encodeABI(),
            value: Number(price)
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
        console.log(error);
      }
    }
  return (
    
    <section className="nftcard-sec">
      <div className={`inner ${type === "sold" ? "blur-card" : ""}`}>
        <div className="top">
          <img src={auctionData?.image} alt="image" />
        </div>
        <div className="center">
    
         
<div className="price">
   

<p>{nftAmount}</p>
            <p className="text-white text-inter fw-bold">{auctionData?.name}</p>
            <p className="text-white text-inter fw-bold">{auctionData?.price}</p>
          
            {/* <p style={{fontSize: '29px', color: 'white'}}>price: {priceOfNft?.toString()}</p> */}
          </div>
          <p className="text-white text-inter fw-normal">{auctionData?.description}</p>
          <p>{price.toString()} eth</p>

         
         
          
        </div>
        <div className="bottom">
        <div>
          <button className="nftcard-btn" onClick={buyBuilding} >
          buy
          </button>
        </div>
     
        </div>
        {type === "sold" && (
          <div className="sold">
            <div className="sold-main"></div>
            <span>Sold</span>
          </div>
        )}
      </div>

      {/* Modal opens onClick of Stack */}
      {/* <Modal show={show} onHide={handleClose} centered className="stake-modal">
        <Modal.Header closeButton className="stake-header">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="stake-body">
          <h1 className="h1-small text-white fw-bold">list building nft</h1>
          <div className="stake-tabs">
          <input
  type="number"
  placeholder="Enter NFTs Quantity"
  onChange={handleQuantityChange}
  value={listData.nftQuantity}
/>
<input
  type="number"
  placeholder="Enter Price"
  onChange={(e) => setListData({ ...listData, price: e.target.value })}
  value={listData.price}
/>
<input
  type="number"
  placeholder="Enter Fee"
  onChange={(e) => setListData({ ...listData, artistFee: e.target.value })}
  value={listData.artistFee}
/>
<button onClick={() => listBuildings(listData.nftQuantity, listData.artistFee, listData.price)}>List Building</button>

          </div>
        </Modal.Body>
      </Modal> */}

      {/* Modal for listing NFTs */}
      {/* <Modal  size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-white"
          >
            List Land NFTs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            
          />
        </Modal.Body>
        <Modal.Footer>
          <Button>
            List NFTs
          </Button>
          <Button >Close</Button>
        </Modal.Footer>
      </Modal> */}
    </section>
  );
}

export default AuctionBuyCards;
