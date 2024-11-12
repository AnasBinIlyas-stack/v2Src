import React, { useEffect, useState } from "react";
import "./mintednftcards.scss";
import { useWalletClient } from "wagmi";
import Web3 from "web3";
import landAbi from "../../../../ABIs/landingAbi.json";
import marketAbi from "../../../../ABIs/marketplaceAbi.json";
import { landingContract, buildingContract } from "../../../../utils/contract";
import { landingAddress, marketplaceAddress } from "../../../../config/config";
import Nftcard from "../../../../components/marketplaceside/nftcard/nftcard";

const web3 = new Web3("https://bsc-testnet-rpc.publicnode.com");
function Mintednftcards() {
  const [tokenIds, setTokenIds] = useState([]);
  const [listed, setListed] = useState([]);
  const { data: signer } = useWalletClient();

  useEffect(() => {
    getTokenId();
  }, [signer]);

  useEffect(() => {
    userLandListings();
  }, []);

  // const landingContract = new web3.eth.Contract(landAbi, landingAddress);
  const MarketContract = new web3.eth.Contract(marketAbi, marketplaceAddress);
  const getTokenId = async () => {
    if (signer) {
      const tokenid = await landingContract.methods
        .getTokenId(signer.account.address)
        .call();

      console.log("tokenid", tokenid);
      setTokenIds(tokenid);
    }
  };

  const userLandListings = async () => {
    try {
      const listing = await MarketContract.methods
        .getAllLandListedNfts()
        .call();
      console.log(listing, "listing");

      // Map over the listing and create objects containing tokenId and price
      const isListed = listing.map((item) => ({
        tokenId: item?.listedData?.tokenId?.toString(),
        price: item?.listedData?.price?.toString(),
      }));

      // Set the state with the mapped data
      setListed(isListed);
    } catch (error) {
      console.error("Error fetching land listings:", error);
    }
  };

  useEffect(() => {
    console.log(listed, "listed nfts");
  }, [listed]);

  const handleRefresh = () => {
    getTokenId();
    userLandListings();
  };

  return (
    <section className="mintednftcards-sec">
      <div className="cards-inner">
        <div className="head">
          <div className="left">
            <h1 className="textexpansiva-bold">MINTED NFTs</h1>
            <h3 className="textexpansiva-bold secondary-text">MINTED NFTs</h3>
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
          {tokenIds && tokenIds.length > 0 ? (
            tokenIds.map((nft, index) => {
              return (
                <>
                  <Nftcard
                    key={index}
                    uri={nft.uri}
                    tokenId={nft.tokenId}
                    isListed={listed.some(
                      (item) => item.tokenId === nft?.tokenId?.toString()
                    )}
                    listedPrice={
                      listed.find(
                        (item) => item.tokenId === nft?.tokenId?.toString()
                      )?.price || null
                    }
                    handleRefresh={handleRefresh}
                  />
                </>
              );
            })
          ) : (
            <p>No NFTs found</p>
          )}
        </div>
      </div>
      <div className="back-div left-back"></div>
      <div className="back-div right-back"></div>
    </section>
  );
}

export default Mintednftcards;
