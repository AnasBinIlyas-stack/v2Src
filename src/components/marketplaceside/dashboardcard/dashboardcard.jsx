import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import { landingContract, web3, chainId } from "../../../utils/contract";
import { landingAddress, marketplaceAddress } from "../../../config/config";
import "./dashboardcard.scss";
import { useWalletClient } from "wagmi";

function Dashboardcard({
  productId,
  isListed,
  imgsrc,
  detail,
  price,
  description,
  tokenId,
  type,
  startCheckout,
}) {
  const [isApproved, setIsApproved] = useState(false); // State to store approval status
  const { data: signer } = useWalletClient();

  const getApprovedfunc = async () => {
    if (tokenId) {
      try {
        const approved = await landingContract.methods
          .getApproved(tokenId)
          .call();
        setIsApproved(
          approved !== "0x0000000000000000000000000000000000000000"
        ); // Check if not zero address
      } catch (error) {
        console.error("Error fetching approval status:", error);
      }
    }
  };

  useEffect(() => {
    getApprovedfunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenId]); // Run this function whenever the tokenId changes

  const approveToken = async () => {
    if (tokenId) {
      console.log(web3, "web 3 in approve tokens");
      console.log(landingAddress, chainId, tokenId, "testing token id");
      let transaction = {
        to: landingAddress,
        chainId: chainId,
        data: landingContract.methods
          .approve(marketplaceAddress, tokenId)
          .encodeABI(),
      };

      if (signer) {
        try {
          const transactionHash = await signer.sendTransaction(transaction);
          toast.info("Waiting for transaction...", { toastId: "approved" });

          const checkTransactionReceipt = async (
            txHash,
            retries = 5,
            interval = 5000
          ) => {
            for (let i = 0; i < retries; i++) {
              try {
                const receipt = await web3.eth.getTransactionReceipt(txHash); // Corrected the typo here
                if (receipt) {
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
              // Wait for the specified interval before trying again
              await new Promise((resolve) => setTimeout(resolve, interval));
            }

            console.error("Transaction receipt not found after retries");
            return null;
          };

          // Check the transaction receipt
          const receipt = await checkTransactionReceipt(transactionHash);
          if (receipt) {
            getApprovedfunc(); // Refresh the approval status if the transaction is confirmed
          }
        } catch (error) {
          console.error("Error during approval transaction:", error);
        }
      } else {
        console.error("Signer not available");
      }
    }
  };

  const listLandNft = async (price) => {
    // Listing logic...
  };

  return (
    <section className="dashboardcard-sec">
      <div className="inner">
        <div className="top">
          <img
            src={imgsrc}
            alt=""
            style={{ objectFit: "cover", borderRadius: "6px" }}
          />
          <div className="card-layer"></div>
        </div>
        <div className="center">
          <div className="price">
            <p
              className="text-white text-inter fw-semibold text-truncate"
              style={{ maxWidth: "60%" }}
            >
              {detail}
            </p>
            {price && (
              <p className="text-white text-inter fw-semibold fs-6">
                {price} BNB
              </p>
            )}
          </div>
          <p className="text-white text-inter fw-normal text-uppercase owner small">
            {description}
          </p>
        </div>

        {!isListed && type == "land" ? (
          isApproved ? (
            <button
              className="bottom text-white textexpansiva-bold"
              onClick={() => listLandNft(price)}
            >
              List for sale
            </button>
          ) : (
            <button
              className="bottom text-white textexpansiva-bold"
              onClick={approveToken}
            >
              Approve
            </button>
          )
        ) : (
          <button
            className="bottom text-white textexpansiva-bold"
            onClick={startCheckout ? () => startCheckout(productId) : () => {}}
          >
            Buy {price} BNB
          </button>
        )}
      </div>
    </section>
  );
}

export default Dashboardcard;
