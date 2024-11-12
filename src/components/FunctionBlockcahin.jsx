import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import landAbi from "../../src/ABIs/landingAbi.json";
import marketAbi from "../../src/ABIs/marketplaceAbi.json";
import tokenAbi from "../../src/ABIs/tokenAbi.json";
import buildingAbi from "../../src/ABIs/buildingAbi.json";
import {
  buildingAddress,
  landingAddress,
  marketplaceAddress,
  tokenAddress,
} from "../../src/config/config";
import { useAccount, useWalletClient } from "wagmi";

const FunctionBlockcahin = () => {
  const [userAddress, setUserAddress] = useState({
    whitelistAddresses: "",
    tokenUri: "",
    tokenId: "",
    price: "",
    tokenIdNew: "",
    id: "",
    priceOfNft: "",
    value: "",
    tokenValue: "",
    startDate: "",
    endDate: "",
    userToken: "",
    tokenIdForUnstacking: "",
    claimToken: "",
    enterAddress: "",
    tokenIds_Quantity: "",
    amounts: "",
    uri: "",
  });
  const [loading, setLoading] = useState(false);

  const { data: signer } = useWalletClient();
  const { address } = useAccount();

  const web3 = new Web3("wss://ethereum-sepolia-rpc.publicnode.com");

  ///contract assigns
  const landingContract = new web3.eth.Contract(landAbi, landingAddress);
  const MarketContract = new web3.eth.Contract(marketAbi, marketplaceAddress);
  const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  const buildingContract = new web3.eth.Contract(buildingAbi, buildingAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAddress((prev) => ({ ...prev, [name]: value }));
  };

  //// landing contract function (safemint)
  const landMintNft = async (tokenUri) => {
    console.log(tokenUri);
    let transction = {
      to: landingAddress,
      chainId: 11155111,
      data: landingContract.methods.safeMint(tokenUri).encodeABI(),
    };

    if (signer) {
      signer.sendTransaction(transction).then(async (hash) => {
        setTimeout(async () => {
          try {
            for (let index = 0; index < 5; index++) {
              let receipt = await web3.eth.getTransactionReceipt(hash);
              if (receipt != null) {
                if (receipt.status) {
                  console.log(receipt);
                  setLoading(false);
                  // getTokenUri()
                  break;
                }
              }
            }
          } catch (error) {
            console.log(error);
          }
        });
      });
    }
  };

  //// landing contract function (approve function)
  const Approve = async () => {
    let transction = {
      to: landingAddress,
      chainId: 11155111,
      data: landingContract.methods.approve(marketplaceAddress, 34).encodeABI(),
    };

    if (signer) {
      signer.sendTransaction(transction).then(async (hash) => {
        setTimeout(async () => {
          try {
            for (let index = 0; index < 5; index++) {
              let receipt = await web3.eth.getTransactionReceipt(hash);
              if (receipt != null) {
                if (receipt.status) {
                  console.log(receipt);
                  setLoading(false);
                  // getTokenUri()
                  break;
                }
              }
            }
          } catch (error) {}
        });
      });
    }
  };
  //// landing contract function (whitelist)
  const whiteList = async (addressa) => {
    let transaction = {
      to: landingAddress,
      chainId: 11155111,
      data: landingContract.methods.whitelist(addressa).encodeABI(),
    };
    if (signer) {
      signer
        .sendTransaction(transaction)
        .then(async (hash) => {
          setTimeout(async () => {
            try {
              for (let index = 0; index < 5; index -= 0) {
                var receipt = await web3.eth.getTransactionReceipt(hash);
                if (receipt != null) {
                  if (receipt.status) {
                    console.log(receipt);
                    setLoading(false);
                    // getTokenUri()
                    break;
                  }
                }
              }
            } catch (err) {
              console.log(err);
            }
          }, 25000);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      // toast("no transction");
    }
  };

  const getTokenId = async () => {
    const tokenid = await landingContract.methods
      .getTokenId(signer.account.address)
      .call();
    console.log(tokenid);
  };

  //// Market Place contract functions (User land listing)
  const userLandListings = async () => {
    const listing = await MarketContract.methods.getAllLandListedNfts().call();

    console.log(listing);
    console.log("hello");
  };

  /// Market Place contract functions (listLandNft)
  const listLandNft = async (tokenId, price) => {
    let transction = {
      to: marketplaceAddress,
      chainId: 11155111,
      data: MarketContract.methods
        .listLandNft(landingAddress.toString(), price, tokenId)
        .encodeABI(),
    };

    if (signer) {
      signer.sendTransaction(transction).then(async (hash) => {
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
          } catch (error) {}
        }, 2000);
      });
    }
  };

  /// Market Place contract functions (buyLandNft)
  const unStakeNFT = async (tokenIdForUnstacking) => {
    let transction = {
      to: marketplaceAddress,
      chainId: 11155111,
      data: MarketContract.methods
        .unStakeNFT(
          landingAddress,
          signer.account.address,
          tokenIdForUnstacking
        )
        .encodeABI(),
    };

    if (signer) {
      signer.sendTransaction(transction).then(async (hash) => {
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
          } catch (error) {}
        }, 2000);
      });
    }
  };

  const buyLandNft = async (id, price) => {
    let transction = {
      to: marketplaceAddress,
      chainId: 11155111,
      data: MarketContract.methods.buyLandNft(id, price).encodeABI(),
      value: price, // Add this line
    };

    if (signer) {
      signer.sendTransaction(transction).then(async (hash) => {
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
          } catch (error) {}
        }, 2000);
      });
    }
  };

  /////// Calling USDC contract and it's mint function

  const mintUSDC = async () => {
    try {
      let tokenTransaction = {
        to: tokenAddress,
        chainId: 11155111,
        data: tokenContract.methods.mint().encodeABI(),
      };
      if (signer) {
        signer.sendTransaction(tokenTransaction).then((hash) => {
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
            } catch (error) {}
          }, 2000);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////token Approve//////////////////////////

  const approveTokenUsdc = async (value) => {
    try {
      let tokenTransaction = {
        to: tokenAddress,
        chainId: 11155111,
        data: tokenContract.methods
          .approve("0x846aFbbD99D41A2E9a48A37Fa8E6B4A1b273Faa1", value)
          .encodeABI(),
      };
      if (signer) {
        signer.sendTransaction(tokenTransaction).then((hash) => {
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
            } catch (error) {}
          }, 2000);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////marketplace admin deposit token //////////////////

  const adminDepositToken = async (tokenValue) => {
    try {
      let transaction = {
        to: marketplaceAddress,
        chainId: 11155111,
        data: MarketContract.methods
          .adminDepositToken(signer.account.address, tokenValue)
          .encodeABI(),
      };
      if (signer) {
        signer.sendTransaction(transaction).then((hash) => {
          setTimeout(async () => {
            try {
              for (let i = 0; i < 5; i++) {
                const receipt = await web3.eth.getTransaction(hash);
                if (receipt != null) {
                  if (receipt.status) {
                    console.log(receipt);
                    setLoading(false);
                    break;
                  }
                }
              }
            } catch (error) {
              console.log(error);
            }
          }, 2000);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  /////////////// stakingPeriod marketplace ///////////////

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

  /////////////////// staking period in markeplace contract//////////////////////////////////
  const stakingPeriod = async (startDate, endDate) => {
    console.log(startDate, endDate);

    const startUnix = convertToUnixTimestamp(startDate);
    const endUnix = convertToUnixTimestamp(endDate);

    console.log(startUnix, endUnix);
    try {
      let transaction = {
        to: marketplaceAddress,
        chainId: 11155111,
        data: MarketContract.methods
          .stakingPeriod(startUnix, endUnix)
          .encodeABI(),
      };
      if (signer) {
        signer.sendTransaction(transaction).then((hash) => {
          setTimeout(async () => {
            try {
              for (let i = 0; i < 5; i++) {
                const receipt = await web3.eth.getTransaction(hash);
                if (receipt != null) {
                  if (receipt.status) {
                    console.log(receipt);
                  }
                }
              }
            } catch (error) {
              console.log(error);
            }
          }, 2000);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const user_Staking_Rewards = async () => {
    const supply = await MarketContract.methods.user_Staking_Rewards(40).call();
    console.log(supply);
  };

  /////////////////// staking nft//////////////////////////////////

  const stakeNFT = async (userToken) => {
    try {
      let transaction = {
        to: marketplaceAddress,
        chainId: 11155111,
        data: MarketContract.methods
          .stakeNFT(landingAddress, signer.account.address, userToken)
          .encodeABI(),
      };
      if (signer) {
        signer.sendTransaction(transaction).then((e) => {
          setTimeout(async () => {
            try {
              for (let i = 0; i < 5; i++) {
                const receipt = await web3.eth.getTransaction(e);
                if (receipt != null) {
                  if (receipt.status) {
                    console.log(receipt);
                  }
                }
              }
            } catch (error) {
              console.log(error);
            }
          }, 2000);
        });
      }
    } catch (error) {}
  };

  const userClaimReward = async (claimToken) => {
    try {
      let transaction = {
        to: marketplaceAddress,
        chainId: 11155111,
        data: MarketContract.methods
          .userClaimFT(signer.account.address, claimToken)
          .encodeABI(),
      };
      if (signer) {
        signer.sendTransaction(transaction).then((e) => {
          setTimeout(async () => {
            try {
              for (let i = 0; i < 5; i++) {
                const receipt = await web3.eth.getTransaction(e);
                if (receipt != null) {
                  if (receipt.status) {
                    console.log(receipt);
                  }
                }
              }
            } catch (error) {
              console.log(error);
            }
          }, 2000);
        });
      }
    } catch (error) {}
  };

  // calling token supply in USDC contract

  const totalSupply = async () => {
    const supply = await tokenContract.methods.totalSupply().call();
    console.log(supply);
  };

  const checkReward = async () => {
    const supply = await MarketContract.methods
      .checkReward(landingAddress, 9)
      .call();
    console.log(supply);
  };
  const balanceOf = async () => {
    const supply = await tokenContract.methods
      .balanceOf(signer.account.address)
      .call();
    console.log(supply);
  };

  // ///////////////////// building contract

  const buildingWhiteList = async (enterAddress) => {
    let transction = {
      to: buildingAddress,
      chainId: 11155111,
      data: buildingContract.methods.whitelist(enterAddress).encodeABI(),
    };

    if (signer) {
      signer.sendTransaction(transction).then(async (hash) => {
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
          } catch (error) {}
        }, 2000);
      });
    }
  };

  const buildingsNft = async (
    enterAddress,
    tokenIds_Quantity,
    amounts,
    uri
  ) => {
    let transaction = {
      to: buildingAddress,
      chainId: 11155111,
      data: buildingContract.methods
        .Buildings(enterAddress, tokenIds_Quantity, amounts, uri)
        .encodeABI(),
    };

    if (signer) {
      signer.sendTransaction(transaction).then(async (e) => {
        setTimeout(async () => {
          try {
            for (let i = 0; i < 5; i++) {
              let receipt = await web3.eth.getTransaction(e);
              if (receipt != null) {
                if (receipt.status) {
                  console.log(receipt);
                }
              }
            }
          } catch (error) {}
        }, 2000);
      });
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          {address && (
            <p style={{ color: "white" }}>Connected account: {address}</p>
          )}

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Whitelist</h4>
                <input
                  type="text"
                  value={userAddress.whitelistAddresses}
                  name="whitelistAddresses"
                  onChange={handleChange}
                />
                <button
                  onClick={() => whiteList(userAddress.whitelistAddresses)}
                >
                  Whitelist
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Mint NFT</h4>
                <input
                  type="text"
                  value={userAddress.tokenUri}
                  name="tokenUri"
                  onChange={handleChange}
                />
                <button onClick={() => landMintNft(userAddress.tokenUri)}>
                  mint nft
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Approve tokenId</h4>
                <input
                  type="number"
                  name="tokenId"
                  value={userAddress.tokenId}
                  onChange={handleChange}
                />
                <button onClick={() => Approve(userAddress.tokenId)}>
                  Approve
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>landing nft minting</h4>
                <input
                  type="number"
                  name="tokenIdNew"
                  value={userAddress.tokenIdNew}
                  onChange={handleChange}
                />
                <input
                  type="price"
                  name="price"
                  value={userAddress.price}
                  onChange={handleChange}
                />
                <button
                  onClick={() =>
                    listLandNft(userAddress.tokenIdNew, userAddress.price)
                  }
                >
                  listLandNft
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Buy Landing Nft</h4>
                <input
                  type="number"
                  name="id"
                  value={userAddress.id}
                  onChange={handleChange}
                />
                <input
                  type="price"
                  name="priceOfNft"
                  value={userAddress.priceOfNft}
                  onChange={handleChange}
                />
                <button
                  onClick={() =>
                    buyLandNft(userAddress.id, userAddress.priceOfNft)
                  }
                >
                  buyLandNft
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Approve Token</h4>
                <input
                  type="number"
                  name="value"
                  value={userAddress.value}
                  onChange={handleChange}
                />

                <button onClick={() => approveTokenUsdc(userAddress.value)}>
                  approveToken
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Admin Token Approval</h4>
                <input
                  type="number"
                  name="tokenValue"
                  value={userAddress.tokenValue}
                  onChange={handleChange}
                />

                <button
                  onClick={() => adminDepositToken(userAddress.tokenValue)}
                >
                  Admin Token Approve
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Select Time For Staking</h4>
                <input
                  type="time"
                  name="startDate"
                  placeholder="select start time"
                  value={userAddress.startDate}
                  onChange={handleChange}
                />
                <input
                  type="time"
                  name="endDate"
                  value={userAddress.endDate}
                  placeholder="select end time"
                  onChange={handleChange}
                />

                <button
                  onClick={() =>
                    stakingPeriod(userAddress.startDate, userAddress.endDate)
                  }
                >
                  select time
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Stack Nft</h4>
                <input
                  type="number"
                  name="userToken"
                  value={userAddress.userToken}
                  onChange={handleChange}
                />

                <button onClick={() => stakeNFT(userAddress.userToken)}>
                  stack nft
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Unstack the NFT</h4>
                <input
                  type="number"
                  name="tokenIdForUnstacking"
                  value={userAddress.tokenIdForUnstacking}
                  onChange={handleChange}
                />

                <button
                  onClick={() => unStakeNFT(userAddress.tokenIdForUnstacking)}
                >
                  Unstack
                </button>
              </>
            )}
          </div>

          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>Claim Reward</h4>
                <input
                  type="number"
                  name="claimToken"
                  value={userAddress.claimToken}
                  onChange={handleChange}
                />

                <button onClick={() => userClaimReward(userAddress.claimToken)}>
                  ClaimNFT
                </button>
              </>
            )}
          </div>
          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>
                  enterAddress for whiteList in building
                </h4>
                <input
                  type="text"
                  name="enterAddress"
                  value={userAddress.enterAddress}
                  onChange={handleChange}
                />

                <button
                  onClick={() => buildingWhiteList(userAddress.enterAddress)}
                >
                  enterAddress
                </button>
              </>
            )}
          </div>
          <div>
            {address && (
              <>
                <h4 style={{ color: "white" }}>buliding nft</h4>
                <input
                  type="text"
                  name="enterAddress"
                  placeholder="enter address"
                  value={userAddress.enterAddress}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="enter tokenids"
                  name="tokenIds_Quantity"
                  value={userAddress.tokenIds_Quantity}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="uri"
                  placeholder="enter uri"
                  value={userAddress.uri}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="enter amount"
                  name="amounts"
                  value={userAddress.amounts}
                  onChange={handleChange}
                />
                <button
                  onClick={() =>
                    buildingsNft(
                      userAddress.enterAddress,
                      userAddress.tokenIds_Quantity,
                      userAddress.uri,
                      userAddress.amounts
                    )
                  }
                >
                  mint bulid nft
                </button>
              </>
            )}
          </div>
        </div>

        <div style={{ width: "50%" }}>
          <div>
            <p style={{ color: "white" }}>landing listings</p>
            <button onClick={userLandListings}> listing</button>
          </div>

          <div>
            <p style={{ color: "white" }}>mint token usdc</p>
            <button onClick={mintUSDC}> mintUSDC</button>
          </div>
          <div>
            <p style={{ color: "white" }}>check total supply</p>
            <button onClick={totalSupply}> totalSupply</button>
          </div>

          <div>
            <p style={{ color: "white" }}>check tokenIds</p>
            <button onClick={getTokenId}> getTokenId</button>
          </div>

          <div>
            <p style={{ color: "white" }}> User Staking</p>
            <button onClick={user_Staking_Rewards}>staking rewards</button>
          </div>

          <div>
            <p style={{ color: "white" }}> Check Reward</p>
            <button onClick={checkReward}>check reward</button>
          </div>
          <div>
            <p style={{ color: "white" }}> Check balance of owner</p>
            <button onClick={balanceOf}>balance</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionBlockcahin;
