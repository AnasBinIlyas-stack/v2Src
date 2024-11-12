import React, { useEffect, useState } from "react";
import "./buyauction.scss";
import AuctionBuyCards from "../auctionbuyingcard/AuctionBuyCards";
import { marketplaceContract } from "../../utils/contract";
function BuyAuction() {
  const [auctionData, setAuctionData] = useState([]);
  const getBatchNFTsDetail = async () => {
    const getAuctionDetails = await marketplaceContract.methods
      .getAllListedBuildings()
      .call();
    setAuctionData(getAuctionDetails);
  };
  useEffect(() => {
    getBatchNFTsDetail();
  }, []);



  return (
    <>
      <section className="auction-sec">
        <div className="auc-inner">
          <h1 className="text-center textexpansiva-bold secondary-text">
            AUCTION
          </h1>
          <div className="nft-content">
            <h3 className="textexpansiva-bold secondary-text">
              TOP LISTED NFTS
            </h3>
            <div className="nft-cards">
              {auctionData &&
                auctionData.length > 0 &&
                auctionData.map(
                  (nft, index) =>
                    nft?.tokenIds?.length > 0 &&
                    nft?.tokenIds.map((id, idx) => (
                      <AuctionBuyCards
                        key={`${index}-${id}`}
                        artist={nft?.artist}
                        id={id}
                        nftId={nft?.id}
                        owner={nft?.owner}
                        nftAmount={nft?.amounts}
                        seller={nft?.seller}
                        auctionUri={nft?.uri}
                        price={nft?.price}
                        artistFee={nft?.artistFee}
                      />
                    ))
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyAuction;
