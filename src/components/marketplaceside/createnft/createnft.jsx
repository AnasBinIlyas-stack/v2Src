import React, { useState, useEffect } from "react";
import "./createnft.scss";
import Form from "react-bootstrap/Form";
import Secondarybtn from "../../shared/secondarybtn/secondarybtn";
import { Link, useNavigate } from "react-router-dom";
import { uploadImgPinata } from "../../../utils/pinata";
import { landingAddress } from "../../../config/config";
import { useWalletClient } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { landingContract, web3 } from "../../../utils/contract";
import { useSelector } from "react-redux";

import axios from "axios";

function Createnft() {
  const { data: signer } = useWalletClient();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [unlockableContent, setUnlockableContent] = useState(false);
  const [explicitContent, setExplicitContent] = useState(false);

  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setFile(file);
    }
  };

  const [userData, setUserdata] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/auth/user/loggedIn-user`,
          { token: localStorage.getItem("token") }
        );
        setUserdata(res.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleCreateNft = async () => {
    try {
      return new Promise(async (resolve, reject) => {
        if (!file) {
          alert("Please upload an image.");
          return;
        }

        console.log(userData, "user data from state");
        console.log(signer, "web 3 object in create ar t");
        const formData = new FormData();
        formData.append("file", file);
        // formData.append("owner", userData.username);
        let owner = userData?.username;

        const metadata1 = {
          name,
          keyvalues: {
            description,
            url,
            unlockableContent,
            explicitContent,
            owner,
          },
        };

        const data = {
          name,
          description,
          url,
          unlockableContent,
          explicitContent,
          owner,
        };

        try {
          const response = await uploadImgPinata(metadata1, formData, data);
          const { pinataUrl, imageHash } = response;

          console.log("Image uploaded successfully:", imageHash);
          console.log("Metadata URL:", pinataUrl);

          const encodedData = landingContract.methods
            .safeMint(pinataUrl)
            .encodeABI();
          console.log("Encoded ABI data:", encodedData);

          let transaction = {
            to: landingAddress,
            chainId: 97, // Make sure this is the correct network
            data: encodedData,
          };

          console.log(transaction, "Transaction details");

          const transactionHash = await signer.sendTransaction(transaction);
          toast.info("Wait for transaction being confirmed");

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
                    toast.success("NFT minted successfully");
                    return receipt;
                  } else {
                    console.error("Transaction failed:", receipt);
                    return null;
                  }
                }
              } catch (error) {
                console.log("Error fetching transaction receipt:", error);
              }
              await new Promise((resolve) => setTimeout(resolve, interval));
            }

            console.log("Transaction receipt not found after retries");
            return null;
          };

          const receipt = await checkTransactionReceipt(transactionHash);

          if (receipt) {
            navigate("/nftmarketplace");
          }
        } catch (error) {
          console.log(
            "Error uploading image or sending transaction:",
            error.message
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="createnft-sec  ">
      {/* <ToastContainer /> */}
      <div className="inner d-flex flex-column align-items-center justify-content-center gap-57">
        <h1 className="fw-bold textexpansiva-bold secondary-text text-center">
          CREATE YOUR OWN <br /> NFT
        </h1>
        <div className="content">
          <div className="top d-flex  gap-149">
            <div className="left">
              <label
                htmlFor="upload"
                className="d-flex align-items-center justify-content-center"
              >
                {image ? (
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6.884px",
                    }}
                  />
                ) : (
                  <img src="/assets/icons/file-icon.svg" alt="" />
                )}
              </label>
              <input
                type="file"
                name=""
                id="upload"
                className="d-none"
                onChange={handleFileChange}
              />
              <div className="mt-20 d-flex flex-column gap-8">
                <p className="small text-white">
                  Image, Video, Audio, or 3d Model
                </p>
                <p className="extra-small">
                  File types supported : JPG, PNG, GIF, SVG, MP4, WEBM, WAV,
                  OGG, GLB, GLTF . Max size : 100MB
                </p>
              </div>
            </div>
            <div className="right d-flex justify-content-center flex-column gap-30 ">
              <div className="d-flex flex-column gap-8">
                <p className="small text-white">Name :</p>
                <input
                  type="text"
                  placeholder="Item Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column gap-8">
                <p className="small text-white">External Links</p>
                <p className="extra-small">
                  Metamuze will include a link to this URl on this ite’s detail
                  page, so that can click to learn more about it. you are
                  welcome to link to your own webpage with more details.
                </p>
                <input
                  type="text"
                  placeholder="https:/www.elementofasoul.io"
                  className="mt-2"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="d-flex flex-column gap-8">
              <p className="small text-white">Desricption</p>
              <p className="extra-small">
                The description will be included on the item's detail page
                underneath its image. <span>Markdown </span> syntax is
                supported.
              </p>
              <textarea
                className="mt-2"
                placeholder="Provide a detailed description of your item."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >
                {description}
              </textarea>
            </div>
            <div className="d-flex justify-content-between mt-42">
              <div className="left-side d-flex flex-column gap-8">
                <p className="small text-white d-flex align-items-center gap-2">
                  <img src="/assets/icons/lock.svg" alt="" /> Unlockable Content
                </p>
                <p className="extra-small">
                  {/* <img src="/assets/icons/sensitive.svg" alt="" /> */}
                  Include unlockable content that can only be revealed by the
                  owner of the item.
                </p>
              </div>
              <div className="right-side">
                <input
                  type="checkbox"
                  className="skip-stream"
                  checked={unlockableContent}
                  onChange={(e) => setUnlockableContent(e.target.checked)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-42">
              <div className="left-side d-flex flex-column gap-8">
                <p className="small text-white d-flex align-items-center gap-2">
                  <img src="/assets/icons/sensitive.svg" alt="" />
                  Explicit & Sensitive Content
                </p>
                <p className="d-flex align-items-center gap-2 extra-small">
                  Set this item as explicit and sensitive content
                  <img src="/assets/icons/information-line.svg" alt="" />
                </p>
              </div>
              <div className="right-side">
                <input
                  type="checkbox"
                  className="skip-stream"
                  checked={explicitContent}
                  onChange={(e) => setExplicitContent(e.target.checked)}
                />
              </div>
            </div>
            <div className="supply d-flex gap-100 mt-42">
              <div className="left-side d-flex flex-column gap-8">
                <p className="small text-white">Supply</p>
                <p className="d-flex align-items-center gap-2 extra-small">
                  The number of items that can be minted. No gas cost to you!
                  <img src="/assets/icons/information-line.svg" alt="" />
                </p>
                <input type="number" name="" id="" />
              </div>
              <div className="right-side select-coin">
                <p className="small text-white">Blockchain</p>
                <p className="d-flex align-items-center gap-2 extra-small"></p>
                <div className="seletion mt-35">
                  <Form.Select
                    aria-label="Default select example"
                    className="form-drop"
                  >
                    <option>ETH</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </div>

          <div className="create-btn d-flex align-items-center justify-content-center mt-57">
            <Secondarybtn
              btntext="> CREATE"
              path={"/nftmarketplace/mintednft"}
              handleCreateNft={handleCreateNft}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Createnft;
