import React, { useEffect, useState } from "react";
import "./nftcard.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { landingAddress, marketplaceAddress } from "../../../config/config";
import { useWalletClient } from "wagmi";
import { setData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  landingContract,
  marketplaceContract,
  web3,
  chainId,
} from "../../../utils/contract";

function Nftcard({
  uriData,
  tokenIdOfListedNfts,
  uri,
  allUri,
  listedFunction,
  count,
  priceOfNft,
  tokenId,
  isListed,
  type,
  listedPrice,
}) {
  useEffect(() => {
    console.log(landingAddress, "landing address");
  }, [landingAddress]);

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [enterPrice, setEnterPrice] = useState({
    price: "",
  });
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [approved, setApproved] = useState({});

  const { data: signer } = useWalletClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

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
  useEffect(() => {
    getApprovedfunc();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnterPrice((prev) => ({ ...prev, [name]: value }));
  };
  const fetchListedData = async () => {
    try {
      const response = await fetch(uriData);
      const data = await response.json();
      console.log(data);

      setNftData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchListedData();
  }, [uriData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(uri);

        // Ensure the fetch was successful before proceeding
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Use .json() if the response is expected to be JSON
        const data = await response.json();
        console.log(data, "testtt");

        setNftData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from IPFS:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [uri]); // Added `uri` as a dependency if it might change

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!nftData) {
    return <div>Error loading NFT data.</div>;
  }
  const {
    name,
    description,
    price,
    unlockableContent,
    explicitContent,
    image,
  } = nftData;
  console.log(nftData);

  const Approve = async () => {
    let transaction = {
      to: landingAddress,
      chainId: chainId,
      data: landingContract.methods
        .approve(marketplaceAddress, tokenId)
        .encodeABI(),
    };

    if (signer) {
      const transactionHash = await signer.sendTransaction(transaction);
      toast.info("wait for transaction", { toastId: "approved" });
      const checkTransactionReceipt = async (
        txHash,
        retries = 5,
        interval = 5000
      ) => {
        for (let i = 0; i < retries; i++) {
          try {
            const receipt = await web3.eth.getTransactionReceipt(txHash);
            if (receipt != null) {
              if (receipt.status) {
                console.log("Transaction confirmed:", receipt);

                return receipt;
              } else {
                console.error("Transaction failed:", receipt);
                return null;
              }
            }
          } catch (error) {
            console.error("Error fetching transaction receipt:", error);
          }
          await new Promise((resolve) => setTimeout(resolve, interval));
        }
        console.error("Transaction receipt not found after retries");
        return null;
      };

      const receipt = await checkTransactionReceipt(transactionHash);
      console.log(receipt);
      if (receipt) {
        getApprovedfunc();
      }
    } else {
      console.error("Signer not available");
    }
  };
  const listLandNft = async (price) => {
    console.log(tokenId, landingAddress, chainId, "testing data");

    let transaction = {
      to: marketplaceAddress,
      chainId: chainId,
      data: marketplaceContract.methods
        .listLandNft(landingAddress, price, tokenId?.toString())
        .encodeABI(),
    };

    if (signer) {
      try {
        const hash = await signer.sendTransaction(transaction);

        setTimeout(async () => {
          try {
            for (let index = 0; index < 5; index++) {
              let receipt = await web3.eth.getTransactionReceipt(hash);
              if (receipt != null) {
                if (receipt.status) {
                  console.log(receipt);
                  setLoading(false);
                  break;
                }
              }
            }
          } catch (error) {
            console.error("Error checking transaction receipt:", error);
          }
        }, 2000);

        handleCloseModal();
      } catch (error) {
        console.error("Error sending transaction:", error);
      }
    } else {
      console.error("Signer not available");
    }
  };

  const buyLandNft = async () => {
    let transction = {
      to: marketplaceAddress,
      chainId: chainId,
      data: marketplaceContract.methods
        .buyLandNft(count?.toString(), priceOfNft?.toString())
        .encodeABI(),
      value: priceOfNft?.toString(),
    };
    fetchListedData();
    if (signer) {
      const transactionHash = await signer.sendTransaction(transction);
      setBtnDisabled(true);

      const checkTransactionReceipt = async (
        txHash,
        retries = 5,
        interval = 5000
      ) => {
        for (let i = 0; i < retries; i++) {
          try {
            const receipt = await web3.eth.getTransactionReceipt(txHash);
            if (receipt != null) {
              if (receipt.status) {
                console.log("Transaction confirmed:", receipt);
                return receipt;
              } else {
                console.error("Transaction failed:", receipt);
                return null;
              }
            }
          } catch (error) {
            console.error("Error fetching transaction receipt:", error);
          }
          await new Promise((resolve) => setTimeout(resolve, interval));
        }
        console.error("Transaction receipt not found after retries");
        return null;
      };

      const receipt = await checkTransactionReceipt(transactionHash);
      console.log(receipt.status);
      if (receipt) {
        setBtnDisabled(false);
        listedFunction();
      } else {
      }
    }
  };

  const stakingData = () => {
    dispatch(setData(allUri));
    navigate("/staking");
  };
  return (
    <section className="nftcard-sec">
      {/* <ToastContainer /> */}
      <div className={`inner ${type === "sold" ? "blur-card" : ""}`}>
        <div className="top">
          <img src={image} alt="image" />
        </div>
        <div className="center">
          {tokenIdOfListedNfts && location?.pathname === "/listing" ? (
            <>
              <div className="price">
                <p className="text-white text-inter fw-bold">{name}</p>
                <p className="text-white text-inter fw-bold">{price}</p>
                {/* <p style={{fontSize: '29px', color: 'white'}}>price: {priceOfNft?.toString()}</p> */}
              </div>
              <p className="text-white text-inter fw-normal">{description}</p>
            </>
          ) : (
            <>
              <div className="price">
                <p className="text-white text-inter fw-bold">{name}</p>
                <p className="text-white text-inter fw-bold">{price}</p>

                {/* <p className="text-white text-inter fw-bold">
              {tokenId?.toString()}
            </p> */}
              </div>
              <p className="text-white text-inter fw-normal">{description}</p>
            </>
          )}
        </div>
        {!isListed ? (
          <div className="bottom">
            {approved[tokenId] ===
              "0x0000000000000000000000000000000000000000" && !isListed ? (
              <div>
                <button className="nftcard-btn" onClick={Approve}>
                  Approve NFT
                </button>
              </div>
            ) : location?.pathname === "/listing" ? (
              <div>
                <button
                  className="nftcard-btn"
                  onClick={buyLandNft}
                  disabled={btnDisabled}
                >
                  Buy
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="nftcard-btn"
                  onClick={() => handleShowModal(tokenId)}
                >
                  List for sale
                </button>
                <button className="nftcard-btn mt-2" onClick={stakingData}>
                  List for stack
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-white text-inter fw-bold">
            <p>
              List Price:{" "}
              {listedPrice ? `${listedPrice} ETH` : "Price not available"}
            </p>
          </div>
        )}
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
          <h1 className="h1-small text-white fw-bold">STACK FOR</h1>
          <div className="stake-tabs">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Days">
                <input type="number" placeholder="Enter Days Here" />
                <button className="submit-btn">Submit</button>
              </Tab>
              <Tab eventKey="profile" title="Months">
                <input type="number" placeholder="Enter Days Here" />
                <button className="submit-btn">Submit</button>
              </Tab>
              <Tab eventKey="contact" title="Years">
                <input type="number" placeholder="Enter Days Here" />
                <button className="submit-btn">Submit</button>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal for listing NFTs */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
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
            type="number"
            placeholder="Enter price"
            className="inputClass"
            onChange={handleChange}
            value={enterPrice.price}
            name="price"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => listLandNft(enterPrice.price)}>
            List NFTs
          </Button>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Nftcard;
