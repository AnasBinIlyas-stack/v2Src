import React, { useEffect, useRef } from "react";
import "./dropdown.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const DropdownS = () => {
  const connectButtonRef = useRef(null);

  const isLoggedIn = useSelector((state) => state.data.login);
  const user = useSelector((state) => state.data.userData);

  useEffect(() => {
    if (isLoggedIn && connectButtonRef.current) {
      connectButtonRef.current.click(); // Programmatically click the button
    }
  }, [isLoggedIn]);

  return (
    <div className="profile-header">
      <div className="header-content">
        <img className="profile-image" style={{ objectFit: "cover" }} src={user?.profilePicture} alt="Profile" />
        <div className="profile-name">{user?.username}</div>
        <div className="profile-options">
          <Link to={"/settings"} className="option" style={{ textDecoration: "none" }}>Edit Profile</Link>
          <Link style={{ textDecoration: "none" }}>
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
                            className="wallet-btn-dashboard"
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
                            className="wallet-btn-dashboard"
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
                            className="wallet-btn-dashboard d-none"
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
                            className="wallet-btn-dashboard"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownS;
