import React, { useEffect, useState } from "react";
import Nftcard from "../../../components/marketplaceside/nftcard/nftcard";
import { marketplaceContract } from "../../../utils/contract";

function Listing() {
  const [listed, setListed] = useState([]);

  useEffect(() => {
    userLandListings();
  }, []);

  const userLandListings = async () => {
    const listing = await marketplaceContract.methods
      .getAllLandListedNfts()
      .call();
    console.log(listed);

    setListed(listing);
  };

  return (
    <section className="auction-sec h-dvh bg-[#020808] text-white">
      <div className="auc-inner">
        <h1 className="text-center textexpansiva-bold secondary-text">
          Listing
        </h1>
        <div className="nft-content">
          <h3 className="textexpansiva-bold secondary-text">LISTED NFTS</h3>
          <div className="nft-cards">
            {listed && listed.length > 0 ? (
              listed.map((nft, index) => {
                return (
                  <>
                    <Nftcard
                      key={index}
                      uriData={nft.uriData}
                      tokenIdOfListedNfts={
                        listed.includes(nft?.tokenId?.toString()) ? true : false
                      }
                      count={nft?.listedData?.count}
                      priceOfNft={nft?.listedData?.price}
                      listNftsIds={nft?.listedData?.tokenId}
                      owner={nft?.listedData?.owner}
                      listedFunction={userLandListings}
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
    </section>
  );
}

export default Listing;
