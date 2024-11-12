import React, { useEffect, useState } from "react";
import "./mainnftcards.scss";
import Nftcard from "../../../nftcard/nftcard";
import Secondarybtn from "../../../secondarybtn/secondarybtn";
import { useWalletClient } from "wagmi";
import Web3 from "web3";
import landAbi from "../../../../ABIs/landingAbi.json";
import marketAbi from "../../../../ABIs/marketplaceAbi.json";
import { landingAddress, marketplaceAddress } from "../../../../config/config";

function Mainnftcards() {
  const [tokenIds, setTokenIds] = useState([]);
  const [listed, setListed] = useState([]);
  const { data: signer } = useWalletClient();

  const web3 = new Web3("https://coston2.enosys.global/ext/C/rpc");
  const landingContract = new web3.eth.Contract(landAbi, landingAddress);
  const MarketContract = new web3.eth.Contract(marketAbi, marketplaceAddress);

  const getTokenId = async () => {
    if (signer) {
      const tokenid = await landingContract.methods
        .getTokenId(signer.account.address)
        .call();
      setTokenIds(tokenid);
    }
  };
  console.log(tokenIds);

  useEffect(() => {
    getTokenId();
  }, [signer]);

  const userLandListings = async () => {
    const listing = await MarketContract.methods.getAllLandListedNfts().call();
    const isListed = listing.map((item) =>
      item?.listedData?.tokenId?.toString()
    );
    setListed(isListed);
  };
  useEffect(() => {
    userLandListings();
  }, []);

  const handleRefresh = () => {
    getTokenId();
    userLandListings();
  };

  const topnft = [
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P001",
    //   price: 100000,
    //   name: "Green Acres",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P002",
    //   price: 150000,
    //   name: "Sunset Valley",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/3.webp",
    //   plot_id: "P003",
    //   price: 120000,
    //   name: "Lakeside Meadow",
    //   category: "cat2",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/4.webp",
    //   plot_id: "P004",
    //   price: 180000,
    //   name: "Mountain View",
    //   category: "cat1",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P005",
    //   price: 140000,
    //   name: "Riverbend",
    //   category: "cat2",
    //   time: "second",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P006",
    //   price: 160000,
    //   name: "Forest Haven",
    //   category: "cat2",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/3.webp",
    //   plot_id: "P007",
    //   price: 200000,
    //   name: "Hilltop Retreat",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/4.webp",
    //   plot_id: "P008",
    //   price: 170000,
    //   name: "Seaside Grove",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P009",
    //   price: 130000,
    //   name: "Canyon Ridge",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P010",
    //   price: 110000,
    //   name: "Prairie Fields",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
  ];

  const latestnft = [
    {
      imgurl: "/assets/images/nftcard/1.webp",
      plot_id: "P001",
      price: 100000,
      name: "Green Acres",
      category: "cat1",
      time: "ist",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/2.webp",
      plot_id: "P002",
      price: 150000,
      name: "Sunset Valley",
      category: "cat1",
      time: "ist",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/3.webp",
      plot_id: "P003",
      price: 120000,
      name: "Lakeside Meadow",
      category: "cat2",
      time: "ist",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/4.webp",
      plot_id: "P004",
      price: 180000,
      name: "Mountain View",
      category: "cat1",
      time: "second",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/1.webp",
      plot_id: "P005",
      price: 140000,
      name: "Riverbend",
      category: "cat2",
      time: "second",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/2.webp",
      plot_id: "P006",
      price: 160000,
      name: "Forest Haven",
      category: "cat2",
      time: "ist",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/3.webp",
      plot_id: "P007",
      price: 200000,
      name: "Hilltop Retreat",
      category: "cat2",
      time: "second",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/4.webp",
      plot_id: "P008",
      price: 170000,
      name: "Seaside Grove",
      category: "cat1",
      time: "ist",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/1.webp",
      plot_id: "P009",
      price: 130000,
      name: "Canyon Ridge",
      category: "cat2",
      time: "second",
      type: "normal",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/2.webp",
      plot_id: "P010",
      price: 110000,
      name: "Prairie Fields",
      category: "cat2",
      time: "second",
      type: "normal",
      stake: "false",
    },
  ];

  const soldnft = [
    {
      imgurl: "/assets/images/nftcard/1.webp",
      plot_id: "P001",
      price: 100000,
      name: "Green Acres",
      category: "cat1",
      time: "ist",
      type: "sold",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/2.webp",
      plot_id: "P002",
      price: 150000,
      name: "Sunset Valley",
      category: "cat1",
      time: "ist",
      type: "sold",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/3.webp",
      plot_id: "P003",
      price: 120000,
      name: "Lakeside Meadow",
      category: "cat2",
      time: "ist",
      type: "sold",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/4.webp",
      plot_id: "P004",
      price: 180000,
      name: "Mountain View",
      category: "cat1",
      time: "second",
      type: "sold",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/1.webp",
      plot_id: "P005",
      price: 140000,
      name: "Riverbend",
      category: "cat2",
      time: "second",
      type: "sold",
      stake: "false",
    },
    {
      imgurl: "/assets/images/nftcard/2.webp",
      plot_id: "P006",
      price: 160000,
      name: "Forest Haven",
      category: "cat2",
      time: "ist",
      type: "sold",
      stake: "false",
    },
  ];

  return (
    <section className="mainnftcards-sec">
      <div className="nft-inner">
        <div className="topnft-sec main">
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
                <option selected>Categories</option>
                <option value="cat1">Lands</option>
                <option value="cat2">Building / Item</option>
              </select>

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
          <div className="cards-content">
            {topnft.length > 0 &&
              topnft
                .slice(0, 7)
                .map((nft) => (
                  <Nftcard
                    key={nft.plot_id}
                    imgurl={nft.imgurl}
                    plotid={nft.plot_id}
                    price={nft.price}
                    name={nft.name}
                    category={nft.category}
                    time={nft.time}
                    type={nft.type}
                  />
                ))}
          </div>

          <div className="all-btn">
            <Secondarybtn
              btntext="> VIEW ALL"
              path={"/nftmarketplace/topnft"}
            />
          </div>

          <div className="back-div left-back"></div>
          <div className="back-div right-back"></div>
        </div>

        <div className="latestcollection-sec main">
          <div className="head">
            <div className="left">
              <h1 className="textexpansiva-bold">LATEST COLLECTION</h1>
              <h3 className="textexpansiva-bold secondary-text">
                LATEST COLLECTION
              </h3>
            </div>
            <div className="right">
              <select
                class="form-select nft-select"
                aria-label="Default select example"
              >
                <option selected>Categories</option>
                <option value="cat1">Lands</option>
                <option value="cat2">Building / Item</option>
              </select>

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
          {/* <div className="cards-content">
            {latestnft.slice(0, 8).map((nft) => (
              <Nftcard
                key={nft.plot_id}
                imgurl={nft.imgurl}
                plotid={nft.plot_id}
                price={nft.price}
                name={nft.name}
                category={nft.category}
                time={nft.time}
                type={nft.type}
              />
            ))}
          </div> */}
          <div className="all-btn">
            <Secondarybtn
              btntext="> VIEW ALL"
              path={"/nftmarketplace/latestcollection"}
            />
          </div>

          <div className="back-div left-back"></div>
          <div className="back-div right-back"></div>
        </div>

        <div className="sold-sec main">
          <div className="head">
            <div className="left">
              <h1 className="textexpansiva-bold">RECENT SOLDN</h1>
              <h3 className="textexpansiva-bold secondary-text">RECENT SOLD</h3>
            </div>
            <div className="right"></div>
          </div>
          <div className="cards-content">
            {soldnft.slice(0, 4).map((nft) => (
              <Nftcard
                key={nft.plot_id}
                imgurl={nft.imgurl}
                plotid={nft.plot_id}
                price={nft.price}
                name={nft.name}
                category={nft.category}
                time={nft.time}
                type={nft.type}
              />
            ))}
          </div>
        </div>

        <div className="minted-sec main">
          <div className="head">
            <div className="left">
              <h1 className="textexpansiva-bold">MINTED NFTs</h1>
              <h3 className="textexpansiva-bold secondary-text">MINTED NFTs</h3>
            </div>
            {/* <div className="right">
              <select
                class="form-select nft-select"
                aria-label="Default select example"
              >
                <option selected>Categories</option>
                <option value="cat1">Lands</option>
                <option value="cat2">Building / Item</option>
              </select>

              <select
                class="form-select nft-select"
                aria-label="Default select example"
              >
                <option selected>Last 15 Minutes</option>
                <option value="ist">Last 15 Minutes</option>
                <option value="second">Last 30 Minutes</option>
              </select>
            </div> */}
          </div>
          <div className="cards-content">
            {tokenIds && tokenIds.length > 0 ? (
              tokenIds.slice(0, 8).map((nft, index) => {
                console.log(nft?.uri);

                return (
                  <>
                    <Nftcard
                      key={index}
                      uri={nft.uri}
                      tokenId={nft.tokenId}
                      isListed={
                        listed.includes(nft?.tokenId?.toString()) ? true : false
                      }
                      handleRefresh={handleRefresh}
                      allUri={tokenIds}
                    />
                  </>
                );
              })
            ) : (
              <p>No NFTs found</p>
            )}
          </div>
          <div className="all-btn">
            <Secondarybtn
              btntext="> VIEW ALL"
              path={"/nftmarketplace/mintednft"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mainnftcards;
