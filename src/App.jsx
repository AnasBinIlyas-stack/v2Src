/* eslint-disable no-unused-vars */
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { polygon, polygonAmoy } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

import { Route, Routes } from "react-router-dom";
import NotFound from "./page/notFound";
// import Login from "./page/account/login";
// import Register from "./page/account/register";

import Mining from "./page/mining";
import Story from "./page/Story";
// import Home from "./page/HomePage";
import Navbar from "./components/layout/navbar";
import HomePage from "./page/HomePage";
import EoasGame from "./page/eoasGame";
import Footer from "./components/layout/footer";
import EcoSystem from "./page/EcoSystem";
import CharacterPage from "./page/CharacterPage";
import LandPage from "./page/LandPage";
// // import LorePage from "./page/LorePage";
import MapComponent from "./page/map/MapComponent";
import { useLocation } from "react-router-dom";
import store from "./components/marketplaceside/redux/store";

const config = getDefaultConfig({
  appName: "elementsofsoul",
  projectId: "1493c640a5c3e05131391d8677a3403c",
  chains: [polygon, polygonAmoy],
  ssr: false,
});

const queryClient = new QueryClient();
import Marketplace from "./page/marketplace/marketplace";
import Nftmarketplace from "./page/marketplaceside/nftmarketplace/nftmarketplace";
import { Provider } from "react-redux";
import Mintednfts from "./page/marketplaceside/mintednfts/mintednfts";
import Listing from "./page/marketplaceside/listing/listing";
import Assetpage from "./page/dashboardside/assetpage/assetpage";
import Createnft from "./components/marketplaceside/createnft/createnft";
// import Alltopnft from "./page/marketplaceside/alltopnft/alltopnft";

function App() {
  const { pathname } = useLocation();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Provider store={store}>
            <div className="relative">
              {pathname !== "/map" && <Navbar />}
              <Routes>
                {/* <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/eoasgame" element={<EoasGame />} />
                <Route path="/mining" element={<Mining />} />
                <Route path="/story" element={<Story />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/ecosystem" element={<EcoSystem />} />
                <Route path="/character" element={<CharacterPage />} />
                <Route path="/land" element={<LandPage />} />
                {/* marketplace routes start here */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/nftmarketplace" element={<Nftmarketplace />} />
                <Route
                  path="/nftmarketplace/createnft"
                  element={<Createnft />}
                />
                {/* <Route path="/alltopnft" element={<Alltopnft />} /> */}
                {/* <Route path="/lore" element={<LorePage />} /> */}
                <Route path="/map" element={<MapComponent />} />
                <Route
                  path="/nftmarketplace/mintednft"
                  element={<Mintednfts />}
                />
                <Route path="/listing" element={<Listing />} />
                {/* {isDashboardRoute && (
                  <> */}
                <Route path="/assets" element={<Assetpage />} />
                {/* </>
                )} */}
              </Routes>
              {pathname !== "/map" && <Footer />}
            </div>
          </Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
