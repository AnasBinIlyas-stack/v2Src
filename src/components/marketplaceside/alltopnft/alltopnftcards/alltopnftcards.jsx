import React from "react";
import "./alltopnftcards.scss";
import Nftcard from "../../../nftcard/nftcard";
function Alltopnftcards() {
  const topnft = [
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P001",
    //   price: 100000,
    //   name: "Green Acres",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P002",
    //   price: 150000,
    //   name: "Sunset Valley",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/3.webp",
    //   plot_id: "P003",
    //   price: 120000,
    //   name: "Lakeside Meadow",
    //   category: "cat2",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/4.webp",
    //   plot_id: "P004",
    //   price: 180000,
    //   name: "Mountain View",
    //   category: "cat1",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P005",
    //   price: 140000,
    //   name: "Riverbend",
    //   category: "cat2",
    //   time: "second",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P006",
    //   price: 160000,
    //   name: "Forest Haven",
    //   category: "cat2",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/3.webp",
    //   plot_id: "P007",
    //   price: 200000,
    //   name: "Hilltop Retreat",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/4.webp",
    //   plot_id: "P008",
    //   price: 170000,
    //   name: "Seaside Grove",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P009",
    //   price: 130000,
    //   name: "Canyon Ridge",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P010",
    //   price: 110000,
    //   name: "Prairie Fields",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P005",
    //   price: 140000,
    //   name: "Riverbend",
    //   category: "cat2",
    //   time: "second",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P006",
    //   price: 160000,
    //   name: "Forest Haven",
    //   category: "cat2",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/3.webp",
    //   plot_id: "P007",
    //   price: 200000,
    //   name: "Hilltop Retreat",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/4.webp",
    //   plot_id: "P008",
    //   price: 170000,
    //   name: "Seaside Grove",
    //   category: "cat1",
    //   time: "ist",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/1.webp",
    //   plot_id: "P009",
    //   price: 130000,
    //   name: "Canyon Ridge",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
    // {
    //   imgurl: "/assets/images/nftcard/2.webp",
    //   plot_id: "P010",
    //   price: 110000,
    //   name: "Prairie Fields",
    //   category: "cat2",
    //   time: "second",
    //   type: "normal",
    //   stake: "false",
    // },
  ];
  return (
    <section className="topnftcards-sec">
      <div className="cards-inner">
        <div className="head">
          <div className="left">
            <h1 className="textexpansiva-bold">TOP NFT</h1>
            <h3 className="textexpansiva-bold secondary-text">TOP NFT</h3>
          </div>
          <div className="right">
            <select
              class="form-select nft-select"
              aria-label="Default select example"
            >
              <option selected>Categories</option>
              <option value="cat1">Lands</option>
              <option value="cat2">Building / Item</option>
            </select>

            <select
              class="form-select nft-select"
              aria-label="Default select example"
            >
              <option selected>Last 15 Minutes</option>
              <option value="ist">Last 15 Minutes</option>
              <option value="second">Last 30 Minutes</option>
            </select>
          </div>
        </div>
        <div className="cards-content">
          {topnft.length>0 && topnft.map((nft) => (
            <Nftcard
              key={nft.plot_id}
              imgurl={nft.imgurl}
              plotid={nft.plot_id}
              price={nft.price}
              name={nft.name}
              category={nft.category}
              time={nft.time}
              type={nft.type}
            />
          ))}
        </div>
        <div className="back-div left-back"></div>
        <div className="back-div right-back"></div>
      </div>
    </section>
  );
}

export default Alltopnftcards;
