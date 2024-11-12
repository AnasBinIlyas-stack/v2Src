import React, { useEffect, useRef, useState } from "react";
import "./nftnavbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function NftNavbar() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isuserOpen, setUserOpen] = useState(true);
  const handleProfileClick = () => {
    setUserOpen(!isuserOpen); // Toggle the state
  };
  const dropDownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropDownRef.current.contains(event.target)) {
        setUserOpen(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <section className="nftnavbar-sec-dev">
        <img
          src="/assets/icons/logo.svg"
          alt="..."
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <div className="nav-pages">
          <NavLink to="/" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/home.svg" alt="..." />
            <span>HOME</span>
          </NavLink>
          <NavLink to="/nftmarketplace" className="text-white text-inter">
            <img
              src="/assets/icons/nftnavbaricons/nft-marketplace.svg"
              alt="..."
            />
            <span>MARKETPLACE</span>
          </NavLink>
          <NavLink to="/auction" className="text-white text-inter">
            <img src="/assets/icons/nftnavbaricons/auction.svg" alt="..." />
            <span>AUCTION</span>
          </NavLink>
          <NavLink to="/listing" className="text-white text-inter">
            <img src="/assets/icons/nftnavbaricons/auction.svg" alt="..." />
            <span>LISTING</span>
          </NavLink>
          <NavLink to="/staking" className="text-white text-inter">
            <img src="/assets/icons/nftnavbaricons/staking.svg" alt="..." />
            <span>STAKING</span>
          </NavLink>
          <div
            className="profile"
            onClick={handleProfileClick}
            ref={dropDownRef}
          >
            <div className="user-top">
              <img
                src="/assets/icons/navbaricons/user.webp"
                alt="..."
                className="user-img"
              />
              <img
                src="/assets/icons/navbaricons/up.svg"
                alt="..."
                className={isuserOpen ? "rotateimg" : "normalimg"}
              />
            </div>
            <div
              className={`user-dropdown ${
                isuserOpen ? "active-user" : "close-user"
              }`}
            >
              <a>
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== "loading";
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === "authenticated");

                    return (
                      <div
                        {...(!ready && {
                          "aria-hidden": true,
                          style: {
                            opacity: 0,
                            pointerEvents: "none",
                            userSelect: "none",
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button
                                onClick={openConnectModal}
                                type="button"
                                className="wallet-btn"
                              >
                                Connect Wallet
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="wallet-btn"
                              >
                                Wrong network
                              </button>
                            );
                          }

                          return (
                            <div style={{ display: "flex", gap: 12 }}>
                              <button
                                onClick={openChainModal}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                type="button"
                                className="wallet-btn d-none"
                              >
                                {chain.hasIcon && (
                                  <div
                                    style={{
                                      background: chain.iconBackground,
                                      width: 12,
                                      height: 12,
                                      borderRadius: 999,
                                      overflow: "hidden",
                                      marginRight: 4,
                                    }}
                                  >
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? "Chain icon"}
                                        src={chain.iconUrl}
                                        style={{ width: 12, height: 12 }}
                                      />
                                    )}
                                  </div>
                                )}
                                {chain.name}
                              </button>

                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="wallet-btn"
                              >
                                {account.displayName}
                                {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ""}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </a>
              <a href="#">Log In</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </section>

      <section className="nftnavbar-sec-mob">
        <div className="inner">
          <img
            src="/assets/icons/logo.svg"
            alt="..."
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <div className="d-flex align-items-center gap-2">
            <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
          </div>
          {isOpen && (
            <div className="mob-pages">
              <NavLink
                to="/"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/home.svg" alt="..." />
                <span>HOME</span>
              </NavLink>
              <NavLink
                to="/nftmarketplace"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img
                  src="/assets/icons/nftnavbaricons/nft-marketplace.svg"
                  alt="..."
                />
                <span>MARKETPLACE</span>
              </NavLink>
              <NavLink
                to="/auction"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/nftnavbaricons/auction.svg" alt="..." />
                <span>AUCTION</span>
              </NavLink>
              <NavLink
                to="/listing"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/nftnavbaricons/auction.svg" alt="..." />
                <span>LISTING</span>
              </NavLink>
              <NavLink
                to="/staking"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/nftnavbaricons/staking.svg" alt="..." />
                <span>STAKING</span>
              </NavLink>
              <div
                className="d-flex justify-content-center"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== "loading";
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === "authenticated");

                    return (
                      <div
                        {...(!ready && {
                          "aria-hidden": true,
                          style: {
                            opacity: 0,
                            pointerEvents: "none",
                            userSelect: "none",
                          },
                        })}
                      >
                        {(() => {
                          if (!connected) {
                            return (
                              <button
                                onClick={openConnectModal}
                                type="button"
                                className="mob-wallet"
                              >
                                Connect Wallet
                              </button>
                            );
                          }

                          if (chain.unsupported) {
                            return (
                              <button
                                onClick={openChainModal}
                                type="button"
                                className="mob-wallet"
                              >
                                Wrong network
                              </button>
                            );
                          }

                          return (
                            <div style={{ display: "flex", gap: 12 }}>
                              <button
                                onClick={openChainModal}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                type="button"
                                className="mob-wallet d-none"
                              >
                                {chain.hasIcon && (
                                  <div
                                    style={{
                                      background: chain.iconBackground,
                                      width: 12,
                                      height: 12,
                                      borderRadius: 999,
                                      overflow: "hidden",
                                      marginRight: 4,
                                    }}
                                  >
                                    {chain.iconUrl && (
                                      <img
                                        alt={chain.name ?? "Chain icon"}
                                        src={chain.iconUrl}
                                        style={{ width: 12, height: 12 }}
                                      />
                                    )}
                                  </div>
                                )}
                                {chain.name}
                              </button>

                              <button
                                onClick={openAccountModal}
                                type="button"
                                className="mob-wallet"
                              >
                                {account.displayName}
                                {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ""}
                              </button>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
              <NavLink
                to="/nfts"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span>My NFTs</span>
              </NavLink>
              <NavLink
                to="/signup"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span>SIGN UP</span>
              </NavLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default NftNavbar;
