import React, { useEffect, useRef } from "react";
import Secondarybtn from "../../secondarybtn/secondarybtn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./marketplacecontent.scss";
function Marketplacecontent() {
  gsap.registerPlugin(ScrollTrigger);

  const istmarketplaceRef = useRef(null);
  const secondmarketplaceRef = useRef(null);
  const thirdmarketplaceRef = useRef(null);
  const forthmarketplaceRef = useRef(null);
  const fifthmarketplaceRef = useRef(null);
  const sixthmarketplaceRef = useRef(null);
  const istleftmarketplaceRef = useRef(null);
  const istrightmarketplaceRef = useRef(null);
  const secondrightmarketplaceRef = useRef(null);
  const secondleftmarketplaceRef = useRef(null);
  const thirdrightmarketplaceRef = useRef(null);
  const thirdleftmarketplaceRef = useRef(null);
  const forthrightmarketplaceRef = useRef(null);
  const forthleftmarketplaceRef = useRef(null);
  const fifthrightmarketplaceRef = useRef(null);
  const fifthleftmarketplaceRef = useRef(null);
  const sixthrightmarketplaceRef = useRef(null);
  const sixthleftmarketplaceRef = useRef(null);

  useEffect(() => {
    const istcontainer = istmarketplaceRef.current;
    const secondcontainer = secondmarketplaceRef.current;
    const thirdcontainer = thirdmarketplaceRef.current;
    const forthcontainer = forthmarketplaceRef.current;
    const fifthcontainer = fifthmarketplaceRef.current;
    const sixthcontainer = sixthmarketplaceRef.current;
    const istleftCard = istleftmarketplaceRef.current;
    const istrightCard = istrightmarketplaceRef.current;
    const secondleftCard = secondleftmarketplaceRef.current;
    const secondrightCard = secondrightmarketplaceRef.current;
    const thirdleftCard = thirdleftmarketplaceRef.current;
    const thirdrightCard = thirdrightmarketplaceRef.current;
    const forthleftCard = forthleftmarketplaceRef.current;
    const forthrightCard = forthrightmarketplaceRef.current;
    const fifthleftCard = fifthleftmarketplaceRef.current;
    const fifthrightCard = fifthrightmarketplaceRef.current;
    const sixthleftCard = sixthleftmarketplaceRef.current;
    const sixthrightCard = sixthrightmarketplaceRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initial position of the cards
      gsap.set(istleftCard, { x: "-200%" });
      gsap.set(istrightCard, { x: "200%" });
      gsap.set(secondleftCard, { x: "-200%" });
      gsap.set(secondrightCard, { x: "200%" });
      gsap.set(thirdleftCard, { x: "-200%" });
      gsap.set(thirdrightCard, { x: "200%" });
      gsap.set(forthleftCard, { x: "-200%" });
      gsap.set(forthrightCard, { x: "200%" });
      gsap.set(fifthleftCard, { x: "-200%" });
      gsap.set(fifthrightCard, { x: "200%" });
      gsap.set(sixthleftCard, { x: "-200%" });
      gsap.set(sixthrightCard, { x: "200%" });
      // Animation
      gsap.to(istleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: istcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(istrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: istcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(thirdleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: thirdcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(thirdrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: thirdcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fifthleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: fifthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(fifthrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: fifthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(secondleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: secondcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(secondrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: secondcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(forthleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: forthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(forthrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: forthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sixthleftCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: sixthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(sixthrightCard, {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: sixthcontainer,
          start: "40% 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      mm.revert(); // Clean up the matchMedia
    };
  }, []);
  return (
    <section className="marketplacecontent-sec">
      <div className="inner">
        <div className="ist" ref={istmarketplaceRef}>
          <div className="left" ref={istleftmarketplaceRef}>
            <h4 className="secondaryhead-text fw-bold textexpansiva-bold">
              Nft Game Asstets
            </h4>
            <p className="text-white fw-normal text-inter">
              In NFT gaming, players own unique digital assets, from legendary
              weapons to mysterious items, each marked by its rarity. These NFTs
              offer exclusive rewards and play a key role in keeping the game
              economy balanced. To maintain their value and scarcity, certain
              items are periodically "burned," removing them from the game to
              ensure a fair and thriving ecosystem.
            </p>
            <Secondarybtn
              btntext={"> GO TO NFT MARKETPLACE"}
              path={"/nftmarketplace"}
            />
          </div>
          <div className="right" ref={istrightmarketplaceRef}>
            <img src="/assets/images/marketplace/1.webp" alt="..." />
          </div>
        </div>
        <div className="second" ref={secondmarketplaceRef}>
          <div className="left" ref={secondleftmarketplaceRef}>
            <h4 className="secondaryhead-text fw-bold textexpansiva-bold">
              NFT Land Ownership
            </h4>
            <p className="text-white fw-normal text-inter">
              In NFT gaming, owning virtual land through NFTs unlocks game
              access and exclusive benefits, making each plot a key asset in the
              game's universe. To preserve the game's balance and ensure fair
              access, a sustainability strategy involves selectively burning
              certain lands. This approach maintains the scarcity and value of
              NFT lands, fostering a thriving and equitable gaming world.
            </p>
            <Secondarybtn
              btntext={"> GO TO NFT MARKETPLACE"}
              path={"/nftmarketplace"}
            />
          </div>
          <div className="right" ref={secondrightmarketplaceRef}>
            <img src="/assets/images/marketplace/2.webp" alt="..." />
          </div>
        </div>
        <div className="ist" ref={thirdmarketplaceRef}>
          <div className="left" ref={thirdleftmarketplaceRef}>
            <h4 className="secondaryhead-text fw-bold textexpansiva-bold">
              "Landlords & Legends: Earn Together
            </h4>
            <p className="text-white fw-normal text-inter">
              In "Elements of a Soul," NFT landowners can enhance the game's
              ecosystem by inviting elite players to their territories. This
              collaboration boosts both gameplay and NFT sales. A smart contract
              ensures that players receive a transparent and secure 20% reward
              from the sales value of the sold NFTs, enriching the overall game
              experience.
            </p>
            <Secondarybtn
              btntext={"> GO TO NFT MARKETPLACE"}
              path={"/nftmarketplace"}
            />
          </div>
          <div className="right" ref={thirdrightmarketplaceRef}>
            <img
              src="/assets/images/marketplace/3.webp"
              alt="..."
              className="diamond-img"
            />
          </div>
        </div>
        <div className="second" ref={forthmarketplaceRef}>
          <div className="left" ref={forthleftmarketplaceRef}>
            <h4 className="secondaryhead-text fw-bold textexpansiva-bold">
              Battlechips
            </h4>
            <p className="text-white fw-normal text-inter">
              BattleChips are rare, permanent stat boosters that enhance your
              character's abilities. Unlike other items, they do not degrade or
              disappear, providing a lasting advantage in your quest for
              dominance.
            </p>
            <Secondarybtn
              btntext={"> GO TO NFT MARKETPLACE"}
              path={"/nftmarketplace"}
            />
          </div>
          <div className="right" ref={forthrightmarketplaceRef}>
            <img
              src="/assets/videos/battlechips.gif"
              alt="..."
              className="avatar-img"
            />
          </div>
        </div>
        <div className="ist" ref={fifthmarketplaceRef}>
          <div className="left" ref={fifthleftmarketplaceRef}>
            <h4 className="secondaryhead-text fw-bold textexpansiva-bold">
              Buildings
            </h4>
            <p className="text-white fw-normal text-inter ">
              In "Elements of a Soul," buildings are dynamic structures that can
              be individually added to or detached from your land. This
              flexibility allows players to customize their territories and
              strategically adapt their spaces to suit their gaming needs and
              preferences.
            </p>
            <Secondarybtn
              btntext={"> GO TO NFT MARKETPLACE"}
              path={"/nftmarketplace"}
            />
          </div>
          <div className="right" ref={fifthrightmarketplaceRef}>
            <img src="/assets/images/marketplace/5.webp" alt="..." />
          </div>
        </div>
        <div className="second" ref={sixthmarketplaceRef}>
          <div className="left" ref={sixthleftmarketplaceRef}>
            <h4 className="secondaryhead-text fw-bold textexpansiva-bold">
              Skins
            </h4>
            <p className="text-white fw-normal text-inter">
              In "Elements of a Soul," skins are more than just cosmetic
              enhancements. Each skin is crafted using rare resources and tokens
              and requires a special skill level to create. These unique skins
              are permanent, never burning away, and offer valuable stat boosts
              to enhance your character's abilities. This makes them a powerful
              tool for players looking to gain an edge in the game.
            </p>
            <Secondarybtn
              btntext={"> GO TO NFT MARKETPLACE"}
              path={"/nftmarketplace"}
            />
          </div>
          <div className="right" ref={sixthrightmarketplaceRef}>
            <img
              src="/assets/images/marketplace/6.webp"
              alt="..."
              className="skin-img"
            />
          </div>
        </div>
      </div>
      <img
        src="/assets/images/marketplaceleft.webp"
        className="left-back"
        alt="..."
      />
      <img
        src="/assets/images/marketplaceright.webp"
        className="right-back"
        alt="..."
      />
    </section>
  );
}

export default Marketplacecontent;
