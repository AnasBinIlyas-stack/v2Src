import React, { useEffect, useRef, useState } from "react";
import Dashboardcard from "../../../components/marketplaceside/dashboardcard/dashboardcard";
// import Dashdrop from "../dashdrop/dashdrop";
import Web3 from "web3";
import { useWalletClient } from "wagmi";

import {
  landingContract,
  buildingContract,
  marketplaceContract,
} from "../../../utils/contract";
function Assetpage() {
  const [categories, setCategories] = useState(false);
  const { data: signer } = useWalletClient();
  const [balance, setBalance] = useState(null);

  const [landingNfts, setLandingNfts] = useState([]);
  const [buildingNfts, setBuilidingNfts] = useState([]);

  useEffect(() => {
    const getBalance = async () => {
      if (signer) {
        try {
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          let symbol = signer.chain.nativeCurrency.symbol;
          const balance = await web3.eth.getBalance(accounts[0]);
          const balanceInEther = web3.utils.fromWei(balance, "ether");
          let parsed = parseFloat(balanceInEther).toFixed(2);
          setBalance(`${parsed} ${symbol}`);
        } catch (err) {
          console.error("Error fetching balance:", err);
        }
      }
    };

    getBalance();
  }, [signer]);

  const getTokenId = async () => {
    if (signer) {
      try {
        // Land NFTs
        const tokenIds = await landingContract.methods
          .getTokenId(signer.account.address)
          .call();
        console.log(tokenIds, "tokenid");

        // get listing data for land
        const listing = await marketplaceContract.methods
          .getAllLandListedNfts()
          .call();
        console.log(listing, "listing");

        const nftArray = await Promise.all(
          tokenIds.map(async (e) => {
            console.log(e.tokenId.toString());
            try {
              const res = await fetch(e.uri);
              console.log(res, "response");
              if (!res.ok) {
                throw new Error(`Failed to fetch URI: ${e.uri}`);
              }
              const data = await res.json();
              console.log(data, "response");

              const listingData = listing.find(
                (item) => item.listedData.tokenId == e.tokenId.toString()
              );
              console.log(listingData, "listing data");
              return {
                ...data,
                ...e,
                ...listingData,
              };
            } catch (error) {
              console.error(`Error fetching data for URI: ${e.uri}`, error);
              return null;
            }
          })
        );
        console.log(nftArray, "nft Array");
        setLandingNfts(nftArray);

        // Building NFTs
        const tokenIdsBuilding = await buildingContract.methods
          .getBatchNFTsDetail(signer.account.address)
          .call();
        console.log(tokenIdsBuilding, "token id building");
        const buildingNftArray = await Promise.all(
          tokenIdsBuilding.map(async (e) => {
            try {
              const res = await fetch(e.uri);
              if (!res.ok) {
                throw new Error(`Failed to fetch URI: ${e.uri}`);
              }
              const data = await res.json();
              console.log(data, "response");

              // Return an object that includes all properties of `e` and the fetched data
              return {
                ...data, // Fetched data from the URI
                ...e, // All properties from the object `e`
              };
            } catch (error) {
              console.error(`Error fetching data for URI: ${e.uri}`, error);
              return null;
            }
          })
        );
        console.log(buildingNftArray, "buildingNft Array");

        setBuilidingNfts(buildingNftArray);
      } catch (error) {
        console.error("Error fetching token IDs", error);
      }
    }
  };

  useEffect(() => {
    getTokenId();
  }, [signer]);

  useEffect(() => {
    console.log(landingNfts, "landing nfts");
  }, [landingNfts]);

  const handleCategories = () => {
    setCategories(!categories);
  };
  const [time, setTime] = useState(false);
  const handleTime = () => {
    setTime(!time);
  };
  const [categories2, setCategories2] = useState(false);
  const handleCategories2 = () => {
    setCategories2(!categories2);
  };
  const [time2, setTime2] = useState(false);
  const handleTime2 = () => {
    setTime2(!time2);
  };
  const categoriesData = [
    `T-Shirts`,
    `Mock's`,
    `Cap's`,
    `Hoodie's`,
    `Sticker's`,
    `Water Bottle`,
  ];
  const timeData = [`15 Minutes`, `30 Minutes`, `45 Minutes`];
  const categoriesRef = useRef(null);
  const timeRef = useRef(null);
  const categoriesRef2 = useRef(null);
  const timeRef2 = useRef(null);
  const handleOutsidecategories = (event) => {
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target)
    ) {
      setCategories(false);
    }
  };
  const handleOutsidetime = (event) => {
    if (timeRef.current && !timeRef.current.contains(event.target)) {
      setTime(false);
    }
  };
  const handleOutsidecategories2 = (event) => {
    if (
      categoriesRef2.current &&
      !categoriesRef2.current.contains(event.target)
    ) {
      setCategories2(false);
    }
  };
  const handleOutsidetime2 = (event) => {
    if (timeRef2.current && !timeRef2.current.contains(event.target)) {
      setTime2(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsidecategories);
    document.addEventListener("mousedown", handleOutsidetime);
    document.addEventListener("mousedown", handleOutsidecategories2);
    document.addEventListener("mousedown", handleOutsidetime2);
    return () => {
      document.removeEventListener("mousedown", handleOutsidecategories);
      document.removeEventListener("mousedown", handleOutsidetime);
      document.removeEventListener("mousedown", handleOutsidecategories2);
      document.removeEventListener("mousedown", handleOutsidetime2);
    };
  }, []);

  const data = [
    {
      imgsrc: "/assets/images/nftcard/1.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/2.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/3.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/4.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/1.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/2.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/3.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/4.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/1.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/2.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/3.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/4.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/1.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/2.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
    {
      imgsrc: "/assets/images/nftcard/3.webp",
      detail: "Players Plot",
      price: "1.1245",
      owner: "GOLD SMITH",
      showlayer: "true",
    },
  ];

  return (
    <div className="dashside-content">
      <section className="merchandisedash-sec">
        <div className="heading">
          <h2 className="text-white textexpansiva-bold text-uppercase">
            Assets
          </h2>
          <div>
            <p className="text-white text-inter fw-normal">
              Wallet Balance: {balance}
            </p>
            <p className="text-white text-inter fw-normal">BST Tokens: 300</p>
          </div>
        </div>
        <div className="sec-header">
          <div className="left">
            <h5 className="textexpansiva-bold">ERC 721 NFT’S</h5>
          </div>
          {/* <div className="right">
            <Dashdrop
              onClick={handleCategories}
              categories={categories}
              setCategories={setCategories}
              dropData={categoriesData}
              title={"Categories"}
              refCustom={categoriesRef}
            />
            <Dashdrop
              onClick={handleTime}
              categories={time}
              setCategories={setTime}
              dropData={timeData}
              title={"Last 15 Minutes"}
              refCustom={timeRef}
            />
          </div> */}
        </div>
        <div className="merchandise-cards">
          {landingNfts.slice(0, 10).map((item, index) => (
            <Dashboardcard
              imgsrc={item?.image}
              detail={item?.name}
              owner={item?.owner}
              price={item?.listedData?.price.toString()}
              showlayer={item?.showlayer}
              isListed={item?.listedData?.listed}
              tokenId={item?.tokenId}
              type="land"
            />
          ))}
        </div>
        <div className="sec-header">
          <div className="left">
            <h5 className="textexpansiva-bold">ERC 1155 NFT’S</h5>
          </div>
          {/* <div className="right">
            <Dashdrop
              onClick={handleCategories2}
              categories={categories2}
              setCategories={setCategories2}
              dropData={categoriesData}
              title={"Categories"}
              refCustom={categoriesRef2}
            />
            <Dashdrop
              onClick={handleTime2}
              categories={time2}
              setCategories={setTime2}
              dropData={timeData}
              title={"Last 15 Minutes"}
              refCustom={timeRef2}
            />
          </div> */}
        </div>
        <div className="merchandise-cards">
          {buildingNfts?.slice(0, 5).map((item, index) => (
            <Dashboardcard
              imgsrc={item?.image}
              detail={item?.name}
              owner={item?.owner}
              price={item?.price}
              showlayer={item?.showlayer}
              type="building"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Assetpage;
