import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Lore from "./components/lore/lore";
import Eoas from "./components/eoas/eoas";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/home";
import Economymain from "./components/economy/economymain/economymain";
import Mining from "./components/mining/mining";
import Story from "./components/story/story";
import Merchandise from "./components/merchandise/merchandise";
import Marketplace from "./components/marketplace/marketplace";
import ScrollToTop from "./components/scrolltotop/scrolltotop";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import Error404 from "./components/error404/error404";
import Nftcard from "./components/nftcard/nftcard";
import Nftmarketplace from "./components/marketplaceside/nftmarketplace/nftmarketplace";
import Createnft from "./components/createnft/createnft";
import NftDetail from "./components/marketplaceside/nftmarketplace/nftDetail/nftDetail";
import Auction from "./components/marketplaceside/auction/auction";
import Staking from "./components/marketplaceside/staking/staking";
import Alltopnft from "./components/marketplaceside/alltopnft/alltopnft";
import Mintednfts from "./components/marketplaceside/mintednfts/mintednfts";
import Latestcollection from "./components/marketplaceside/latestcollection/latestcollection";
import NftNavbar from "./components/nftnavbar/nftnavbar";
import NftFooter from "./components/nftfooter/nftfooter";
import HomeTwo from "./components/home/homeTwo";
import Sidebar from "./components/dashboardside/sidebar/sidebar";
import Dashboard from "./components/dashboardside/dashboard/dashboard";
import Game from "./components/dashboardside/game/game";
import Movie from "./components/dashboardside/movie/movie";
import FunctionBlockcahin from "./components/FunctionBlockcahin";
import AdminPannel from "./components/admin/AdminPannel";
import Listing from "./components/marketplaceside/listing/listing";
import Merchandise2 from "./components/dashboardside/merchandise2/merchandise2";
import Discord from "./components/dashboardside/discord/discord";
import Assetpage from "./components/dashboardside/assetpage/assetpage";
import Book from "./components/dashboardside/book/book";
import Audiobook from "./components/dashboardside/audiobook/audiobook";
import Mainpage from "./components/clientpage/mainpage/mainpage";
import Guildpage from "./components/clientpage/guildpage/guildpage";
import Discordpage from "./components/clientpage/discordpage/discordpage";
import Recruitment from "./components/clientpage/recruitmentpage/recruitment";
import MapComponent from "./map/MapComponent";

import BitcoinChart from "./components/dashboardside/bitcoinChart/bitcoinChart";
import Dashmining from "./components/dashboardside/dashmining/dashmining";
import CreateBuildingNfts from "./components/createBuildingNfts/createBuildingNfts";
import BuyAuction from "./components/buyAuction/BuyAuction";

import Discordinner from "./components/dashboardside/discord/discordinner";
import Audio from "./components/dashboardside/audio/audio";
import SignInPage from "./components/dashboardside/account/signin/SignIn";
import SignUp from "./components/dashboardside/account/signup/SignUp";
import Reset from "./components/dashboardside/account/reset/Reset";
import Verify from "./components/dashboardside/account/verify/Verify";
import SetPassword from "./components/dashboardside/account/setPassword/SetPassword";
import DiscordAuth from "./components/dashboardside/discord/discord-auth";
import DiscordAuthAdmin from "./components/dashboardside/discord/discord-auth-admin";
import BookRead from "./components/dashboardside/book/book-read";
import Settings from "./components/dashboardside/settings/settings";

function App(props) {
  const location = useLocation();

  const isAuth =
    location.pathname.startsWith("/auth") ||
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/reset" ||
    location.pathname === "/verify" ||
    location.pathname === "/setpassword" ||
    location.pathname === "/map";
  const isNftRoute =
    location.pathname.startsWith("/nftmarketplace") ||
    location.pathname === "/auction" ||
    location.pathname === "/listing" ||
    location.pathname === "/staking" ||
    location.pathname === "/auction/listed" ||
    location.pathname === "/auction/NftBuy";

  const isDashboardRoute =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/merchandise2") ||
    location.pathname.startsWith("/game") ||
    location.pathname.startsWith("/dashmining") ||
    location.pathname.startsWith("/discord") ||
    location.pathname.startsWith("/assets") ||
    location.pathname.startsWith("/book") ||
    location.pathname.startsWith("/audio") ||
    location.pathname.startsWith("/audiobook") ||
    location.pathname.startsWith("/chart") ||
    location.pathname.startsWith("/movie") ||
    location.pathname.startsWith("/settings");
  return (
    <div className="App">
      {!isDashboardRoute && !isNftRoute && !isAuth && <Navbar />}
      {isNftRoute && <NftNavbar />}
      {isDashboardRoute && <Sidebar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/verify" element={<Verify />} />
        <Route path="/auth/reset" element={<Reset />} />
        <Route path="/auth/setpassword" element={<SetPassword />} />
        <Route path="/home" element={<HomeTwo />} />
        <Route path="/eoas_game" element={<Eoas />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/ecosystem" element={<Economymain />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/story" element={<Story />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/nftmarketplace" element={<Nftmarketplace />} />
        <Route path="/nftmarketplace/createnft" element={<Createnft />} />
        <Route path="auction" element={<CreateBuildingNfts />} />
        <Route path="/nftmarketplace/nftdetail" element={<NftDetail />} />
        <Route path="/auction/listed" element={<Auction />} />
        <Route path="/auction/NftBuy" element={<BuyAuction />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/nftmarketplace/topnft" element={<Alltopnft />} />
        <Route path="/nftmarketplace/mintednft" element={<Mintednfts />} />
        <Route path="/admin" element={<AdminPannel />} />
        <Route path="/bcfunctions" element={<FunctionBlockcahin />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/guildpage" element={<Guildpage />} />
        <Route path="/discordpage" element={<Discordpage />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/map" element={<MapComponent />} />
        <Route
          path="/nftmarketplace/latestcollection"
          element={<Latestcollection />}
        />
        {/* Non-Dashboard Routes */}
        {!isDashboardRoute && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomeTwo />} />
            <Route path="/eoas_game" element={<Eoas />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/ecosystem" element={<Economymain />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/story" element={<Story />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/nftmarketplace" element={<Nftmarketplace />} />
            <Route path="/nftmarketplace/createnft" element={<Createnft />} />
            <Route path="/nftmarketplace/nftdetail" element={<NftDetail />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/nftmarketplace/topnft" element={<Alltopnft />} />
            <Route path="/nftmarketplace/mintednft" element={<Mintednfts />} />
            <Route path="/admin" element={<AdminPannel />} />
            <Route path="/bcfunctions" element={<FunctionBlockcahin />} />
            <Route path="/mainpage" element={<Mainpage />} />
            <Route path="/guildpage" element={<Guildpage />} />
            <Route path="/offerings" element={<Discordpage />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/map" element={<MapComponent />} />
            <Route
              path="/nftmarketplace/latestcollection"
              element={<Latestcollection />}
            />
          </>
        )}

        {/* Dashboard Routes */}
        {isDashboardRoute && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/merchandise2"
              element={
                <Merchandise2
                  head="Merchandise"
                  head2="View all"
                  subhead="LATEST COLLECTION"
                />
              }
            />
            <Route path="/game" element={<Game />} />
            <Route path="/dashmining" element={<Dashmining />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/discord/discordinner" element={<Discordinner />} />
            <Route path="/discord/auth" element={<DiscordAuth />} />
            <Route path="/discord/auth-admin" element={<DiscordAuthAdmin />} />
            <Route path="/assets" element={<Assetpage />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book-read" element={<BookRead />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/audiobook" element={<Audiobook />} />
            <Route path="/chart" element={<BitcoinChart />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/settings" element={<Settings />} />
          </>
        )}

        <Route path="*" element={<Error404 />} />
      </Routes>
      {!isDashboardRoute && isNftRoute && <NftFooter />}
      {!isDashboardRoute && !isNftRoute && !isAuth && <Footer />}
    </div>
  );
}

export default App;
