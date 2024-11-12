import React, { useEffect, useState } from "react";
import "./stakingcards.scss";
import Stakinfnftcards from "../../../stakecarddata/Stakinfnftcards";
import { marketplaceAddress } from "../../../../config/config";
import { Modal } from "react-bootstrap";
import { useWalletClient } from "wagmi";
import Countdown from "react-countdown";
import UnstakeNftCard from "../../../stakecarddata/UnstakeNftCard";
import { useSelector } from "react-redux";
import { landingContract, marketplaceContract, web3, chainId } from "../../../../utils/contract";


function Stakingcards() {

  const [allUriData, setAllUriData] = useState([]);
  const [userAddress, setUserAddress] = useState({
    startingTime: "",
    endingTime: "",
  });
  const [show, setShow] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [unStakeTokenId, setUnStakeTokenId] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [endTime, setEndTime] = useState("");

  const { data: signer } = useWalletClient();
  const selector = useSelector((data) => data?.data?.value);

  useEffect(() => {
    setInterval(()=>{
      getStartTime();
      getEndTime();
      
    },1000)
    selector && setAllUriData(selector);
  }, []);

  useEffect(() => {
    getTokenId();
  }, [signer]);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAddress((prev) => ({ ...prev, [name]: value }));
  };

  const convertToUnixTimestamp = (timeString) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    } else if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return Math.floor(date.getTime() / 1000);
  };

  const stakingPeriod = async (startingTime, endingTime) => {
    const startUnix = convertToUnixTimestamp(startingTime);
    const endUnix = convertToUnixTimestamp(endingTime);
    try {
      let transaction = {
        to: marketplaceAddress,
        chainId: chainId,
        data: marketplaceContract.methods
          .stakingPeriod(startUnix, endUnix)
          .encodeABI(),
      };
      handleClose();
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

  

  const getStartTime = async () => {
    const contract = await marketplaceContract.methods.startTime().call();
    const timestamp = Number(contract);
    const startTimeMilliseconds = timestamp * 1000;
    setStartTime(startTimeMilliseconds);
    return startTimeMilliseconds;
  };

  const getEndTime = async () => {
    const contract = await marketplaceContract.methods.endTime().call();
    const timestamp = Number(contract);
    const date = new Date(timestamp * 1000);
    const dateNow = new Date();
    if (
      (await getStartTime()) <= dateNow.getTime() &&
      date > dateNow.getTime()
    ) {
      setEndTime(date);
      setIsButtonDisabled(true);
    }
    else{
      setEndTime(false);
      setIsButtonDisabled(false);
    }
  };



  const getTokenId = async () => {
    if (signer) {
      const getAllData = await landingContract.methods
        .getTokenId(signer.account.address).call();
        console.log(getAllData);
      getAllData && setAllUriData(getAllData);
    }
  };
  





  return (
    <section className="stakingcards-sec">
      <div className="staking-inner">
        <div className="main">
          <h1 className="textexpansiva-bold secondary-text text-center">
            STAKING
            
            {endTime && <Countdown date={endTime} />}
          </h1>
          <div className="head">
            <div className="left">
              <h1 className="textexpansiva-bold">TOP NFT</h1>
              <h3 className="textexpansiva-bold secondary-text">TOP NFT</h3>
            </div>
            <div className="right">
              <select
                class="form-select nft-select"
                aria-label="Default select example"
              >
                <option selected>Last 15 Minutes</option>
                <option value="ist">Last 15 Minutes</option>
                <option value="second">Last 30 Minutes</option>
              </select>
            </div>
          </div>
          <div>
            <button
             className="select-staking-btn nftcard-btn mt-2"
              onClick={handleShow}
              disabled={isButtonDisabled}
            >
              Select Staking Preiod
            </button>
          </div>
          <div className="cards-content">
            {allUriData && allUriData?.length > 0 ? (
              allUriData.map((nft, index) => {
                return (
                  <>
                    <Stakinfnftcards
                      key={index}
                      uri={nft.uri}
                      tokenId={nft.tokenId?.toString()}
                      disableBtn={isButtonDisabled}
                      setUnStakeTokenId={setUnStakeTokenId}
                    />
                  </>
                );
              })
            ) : (
              <p>No NFTs found</p>
            )}
          </div>
        </div>
        <div className="main">
          <h1 className="textexpansiva-bold secondary-text text-center">
            UNSTAKING
          </h1>
          <div className="cards-content">
            {allUriData && allUriData?.length > 0 ? (
              allUriData.map((nft, index) => {
                return (
                  <>
                    <UnstakeNftCard
                      key={index}
                      uri={nft.uri}
                      tokenId={nft.tokenId?.toString()}
                      disableBtn={isButtonDisabled}
                      setUnStakeTokenId={setUnStakeTokenId}
                    />
                  </>
                );
              })
            ) : (
              <p>No NFTs found</p>
            )}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered className="stake-modal">
        <Modal.Header closeButton className="stake-header">
          {/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="stake-body">
          <h1 className="h1-small text-white fw-bold">STACK FOR</h1>
          <div className="stake-tabs">
            {/* <Tabs
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
              </Tabs> */}
            <input
              type="time"
              name="startingTime"
              placeholder="select start time"
              value={userAddress.startingTime}
              onChange={handleChange}
            />
            <input
              type="time"
              name="endingTime"
              value={userAddress.endingTime}
              placeholder="select end time"
              onChange={handleChange}
            />

            <button
            className="select-staking-btn"
              disabled={isButtonDisabled}
              onClick={() =>
                stakingPeriod(userAddress.startingTime, userAddress.endingTime)
              }
            >
              select time
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Stakingcards;
