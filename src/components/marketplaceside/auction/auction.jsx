import React, { useEffect, useState } from "react";
import "./auction.scss";
import AuctionCards from "../AuctionCards/AuctionCards";
import { useWalletClient } from "wagmi";
import { buildingContract, marketplaceContract } from "../../../utils/contract";

function Auction() {
  const [auctionData, setAuctionData] = useState([]);

  const { data: signer } = useWalletClient()
  console.log(signer?.account?.address)

  const getBatchNFTsDetail = async () => {
    const getAuctionDetails = await buildingContract.methods.getBatchNFTsDetail('0xE69D13dAe42540b5e23C696385E8B0a859f368Cf').call()
    console.log(getAuctionDetails);

    setAuctionData(getAuctionDetails)
  }
  const getAllListedAuction = async () => {
    const getAuctionDetails = await marketplaceContract.methods.getAllListedAuctionNfts().call()
    console.log(getAuctionDetails);

  }
  useEffect(() => {
    getAllListedAuction()
    getBatchNFTsDetail()
  }, [])

  return (
    <>

      <section className="auction-sec">
        <div className="auc-inner">
          <h1 className="text-center textexpansiva-bold secondary-text">
            AUCTION
          </h1>
          <div className="nft-content">
            <h3 className="textexpansiva-bold secondary-text">TOP LISTED NFTS</h3>
            <div className="nft-cards">


              {auctionData && auctionData.length > 0 && auctionData.map((nft, index) => (
                nft.id?.length > 0 && nft?.id.map((id, idx) => (
                  <AuctionCards
                    key={`${index}-${id}`}
                    artist={nft?.Artist}
                    id={id}
                    nftId={nft?.id}
                    nftAmount={nft?.amount}
                    amount={nft?.amount[idx]}
                    auctionUri={nft?.uri}
                  />
                ))
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auction;
