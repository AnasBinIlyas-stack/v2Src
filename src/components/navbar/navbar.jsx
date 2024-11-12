import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogin, setUserData } from "../redux/dataSlice";
import { toast } from "react-toastify";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [isuserOpen, setUserOpen] = useState(true);

  const isLoggedIn = useSelector((state) => state.data.login);

  const user = useSelector((state) => state.data.userData);

  const connectButtonRef = useRef(null);

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
  useEffect(() => {
    if (isLoggedIn && connectButtonRef.current) {
      connectButtonRef.current.click(); // Programmatically click the button
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLogin(false));
    dispatch(setUserData({}));
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <>
      <section className="navbar-sec-dev">
        <img
          src="/assets/icons/logo.svg"
          alt="..."
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/home")}
        />
        <div className="nav-pages">
          {/* <NavLink to="/home" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/home.svg" alt="..." />
            <span>HOME</span>
          </NavLink> */}
          <NavLink to="/eoas_game" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/eoas.svg" alt="..." />
            <span>EOAS GAME</span>
          </NavLink>
          <NavLink to="/mining" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/mining.svg" alt="..." />
            <span>MINING</span>
          </NavLink>

          <NavLink to="/story" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/story.svg" alt="..." />
            <span>STORY</span>
          </NavLink>
          <NavLink to="/lore" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/lore.svg" alt="..." />
            <span>LORE</span>
          </NavLink>

          <NavLink to="/ecosystem" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/economy.svg" alt="..." />
            <span>ECOSYSTEM</span>
          </NavLink>
          {/* 
          <NavLink to="/merchandise" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/merchandise.svg" alt="..." />
            <span>Merchandise</span>
          </NavLink>
          <NavLink to="/marketplace" className="text-white text-inter">
            <img src="/assets/icons/navbaricons/marketplace.svg" alt="..." />
            <span>MARKETPLACE</span>
          </NavLink> */}
          <a
            href="https://elementsofasoul.gitbook.io/elements-of-a-soul"
            className="text-white text-inter"
            target="_blank"
          >
            <img src="/assets/icons/navbaricons/docs.svg" alt="..." />
            <span>DOCS</span>
          </a>
          <a
            href="https://discord.com/invite/eoas"
            target="_blank"
            className="text-white text-inter"
          >
            <img src="/assets/icons/navbaricons/discord.svg" alt="..." />
            <span>DISCORD</span>
          </a>

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
                                ref={connectButtonRef}
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
              {!user || Object.keys(user || {}).length === 0 ? (
                <>
                  <a href="/auth/signin">Log In</a>
                  <a href="/auth/signup">Sign Up</a>
                </>
              ) : (
                <>
                  <Link to={"/dashboard"}>{user?.username}</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </>
              )}
            </div>
          </div>
          {/* 
          <div className="desktop-wallet">
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
                            style={{ display: "flex", alignItems: "center" }}
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
          </div> */}
        </div>
      </section>

      <section className="navbar-sec-mob">
        <div className="inner">
          <img
            src="/assets/icons/logo.svg"
            alt="..."
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          />
          <div className="d-flex align-items-center gap-2">
            <div>
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
                              ref={connectButtonRef}
                              onClick={openConnectModal}
                              type="button"
                              className="tab-wallet"
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
                              className="tab-wallet"
                            >
                              Wrong network
                            </button>
                          );
                        }

                        return (
                          <div style={{ display: "flex", gap: 12 }}>
                            <button
                              onClick={openChainModal}
                              style={{ display: "flex", alignItems: "center" }}
                              type="button"
                              className="tab-wallet d-none"
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
                              className="tab-wallet"
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

            <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
          </div>
          {isOpen && (
            <div className="mob-pages">
              {/* <NavLink
                to="/"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/home.svg" alt="..." />
                <span>HOME</span>
              </NavLink> */}
              <NavLink
                to="/eoas_game"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/eoas.svg" alt="..." />
                <span>EOAS GAME</span>
              </NavLink>
              <NavLink
                to="/mining"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/mining.svg" alt="..." />
                <span>MINING</span>
              </NavLink>

              <NavLink
                to="/story"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/story.svg" alt="..." />
                <span>STORY</span>
              </NavLink>
              <NavLink
                to="/lore"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/lore.svg" alt="..." />
                <span>LORE</span>
              </NavLink>

              <NavLink
                to="/ecosystem"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/economy.svg" alt="..." />
                <span>ECOSYSTEM</span>
              </NavLink>

              {/* <NavLink
                to="/merchandise"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img
                  src="/assets/icons/navbaricons/merchandise.svg"
                  alt="..."
                />
                <span>Merchandise</span>
              </NavLink>
              <NavLink
                to="/marketplace"
                className="text-white text-inter"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img
                  src="/assets/icons/navbaricons/marketplace.svg"
                  alt="..."
                />
                <span>MARKETPLACE</span>
              </NavLink> */}
              <NavLink
                to="https://elementsofasoul.gitbook.io/elements-of-a-soul"
                className="text-white text-inter"
                target="_blank"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src="/assets/icons/navbaricons/docs.svg" alt="..." />
                <span>DOCS</span>
              </NavLink>
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="d-flex justify-content-center"
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
                to="/auth/signup"
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

export default Navbar;
