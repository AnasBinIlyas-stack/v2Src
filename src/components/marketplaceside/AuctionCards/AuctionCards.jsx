import React, { useEffect, useState } from "react";
import "./auctioncard.scss";
import Modal from "react-bootstrap/Modal";
import { useWalletClient } from "wagmi";
import { toast } from "react-toastify";
import { buildingAddress, marketplaceAddress } from "../../../config/config";
import { marketplaceContract, web3, chainId } from "../../../utils/contract";
function AuctionCards({
  artist,
  auctionUri,
  id,
  amount,
  nftId,
  nftAmount,
  type,
}) {


const {data: signer} = useWalletClient();
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [listData, setListData] = useState({
      price: '',
      nftQuantity: [],
      amountOfToken: '',
      artistFeeAuction: '',
      max_price: '',
      artistFee: ''
    })
    const [ auctionData, setAuctionData ] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

const fetchAuctionUriData = async () => {
    try {
      const response = await fetch(auctionUri);
      const data = await response.json();
      setAuctionData(data)
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
     
    }
  };
  useEffect(() => {
    fetchAuctionUriData();
  }, []);

  function handleQuantityChange(e) {
    
    const value = e.target.value;
    setListData({ ...listData, nftQuantity: [value] });
  }
  
async function listBuildings(){

  try {
    let transaction = {
      to: marketplaceAddress,
      chainId: chainId,
      data: marketplaceContract.methods
        .listBuildings(buildingAddress, signer.account.address, [String(id)], listData.nftQuantity, listData.price,listData.artistFee )
        .encodeABI(),
    };
    
    if (signer) {
      const transactionHash = await signer.sendTransaction(transaction);
      handleClose();
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

async function listForAuction(){
console.log(id);
console.log(listData.amountOfToken);
 

  try {
    let transaction = {
      to: marketplaceAddress,
      chainId: chainId,
      data: marketplaceContract.methods
        .OfferList(buildingAddress, id?.toString(), listData.amountOfToken, listData.max_price, signer.account.address ,listData.artistFeeAuction)
        .encodeABI(),
    };
    handleClose();
    if (signer) {
      const transactionHash = await signer.sendTransaction(transaction);
handleCloseModal()
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
   

<p>{amount.toString()}</p>
            <p className="text-white text-inter fw-bold">{auctionData?.name}</p>
            <p className="text-white text-inter fw-bold">{auctionData?.price}</p>
          
            {/* <p style={{fontSize: '29px', color: 'white'}}>price: {priceOfNft?.toString()}</p> */}
          </div>
          <p className="text-white text-inter fw-normal">{auctionData?.description}</p>

         
         
          
        </div>
        <div className="bottom">
        <div>
          <button className="nftcard-btn" onClick={handleShow} >
          listBuildings
          </button>
        </div>
        <div>
          <button className="nftcard-btn" onClick={handleShowModal} >
          listForAuction
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
      <Modal show={show} onHide={handleClose} centered className="stake-modal">
        <Modal.Header closeButton className="stake-header">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="stake-body">
          <h1 className="h1-small text-white fw-bold">List Building Nft</h1>
          <div className="stake-tabs">
          <input
  type="number"
  name="nftQuantity"
  placeholder="Enter NFTs Quantity"
  value={listData.nftQuantity}
  onChange={handleQuantityChange}
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
<button onClick={listBuildings}>List Building</button>

          </div>
        </Modal.Body>
      </Modal>






      <Modal show={showModal} onHide={handleCloseModal} centered className="stake-modal">
        <Modal.Header closeButton className="stake-header">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="stake-body">
          <h1 className="h1-small text-white fw-bold">List Auction nft</h1>
          <div className="stake-tabs">
          <input
  type="number"
  name="amountOfToken"
  placeholder="Enter NFTs Quantity"
  value={listData.amountOfToken}
  onChange={(e) => setListData({ ...listData, amountOfToken: e.target.value })}
/>
<input
  type="number"
  placeholder="Enter Price"
  onChange={(e) => setListData({ ...listData, max_price: e.target.value })}
  value={listData.max_price}
/>
<input
  type="number"
  placeholder="Enter Fee"
  onChange={(e) => setListData({ ...listData, artistFeeAuction: e.target.value })}
  value={listData.artistFeeAuction}
/>
<button onClick={listForAuction}>List Auction</button>

          </div>
        </Modal.Body>
      </Modal>
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

export default AuctionCards;
