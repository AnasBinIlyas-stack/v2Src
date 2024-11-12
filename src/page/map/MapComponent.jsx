import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { loadMap } from "./MapLoader";
import { OrbitControls } from "./OrbitControls";
import addLights from "./AddLights";
import { sectorHighlighter } from "./SectorHighlighter";
import ZoomToolbar from "./ZoomToolbar";
import { createGridPlanes } from "./GridCreator";
import { addMeshToSwitcher, switchToMap, switchToTiles } from "./MapSwitcher";
import { onClick, onMouseMove, availableSections } from "./TileClickDetector";
import TileModal from "./TileModal";
import data from "./TileData.json";
import { WalletBtn } from "../../components/wallet-btn";
import mainPackageAbi from "../../ABIs/MainPackage.json";
import usdtabi from "../../ABIs/SepoliaUSDT.json";
import { mainPackageAddress, usdtAddress } from "../../config/config";
import { useAccount, useWalletClient } from "wagmi";
import Web3 from "web3";

function MapComponent() {
  const canvasRef = useRef();
  const [prices, setPrices] = useState({});
  const [currentTilePrice, setCurrentTilePrice] = useState(0);
  const [recall, setRecall] = useState(false);
  const [boughtTiles, setBoughtTiles] = useState([]);

  const { data: signer } = useWalletClient();
  const { address } = useAccount();

  const web3 = new Web3("https://polygon-amoy.drpc.org");

  const mainPackageContract = new web3.eth.Contract(
    mainPackageAbi,
    mainPackageAddress
  );
  const usdtContract = new web3.eth.Contract(usdtabi, usdtAddress);

  var scene, renderer, controls;

  const camera = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentTileIndex, setCurrentTileIndex] = useState(0);

  const currentState = useRef("map");

  useEffect(() => {
    init();
    window.addEventListener("resize", onWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPriceByTileIndex = (tileIndex) => {
    for (const key in prices) {
      const priceObject = Object.values(prices[key] || {}).reduce(
        (acc, item) => acc || item.find((i) => i.index === tileIndex),
        null
      );
      if (priceObject) {
        return priceObject.price;
      }
    }
    return null;
  };

  useEffect(() => {
    const currentTilePrice = getPriceByTileIndex(currentTileIndex);
    setCurrentTilePrice(currentTilePrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTileIndex]);

  function init() {
    scene = new THREE.Scene();

    camera.current = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.current.position.set(0, 0, 8);

    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    controls = new OrbitControls(camera.current, renderer.domElement);
    controls.maxDistance = 10;
    controls.minDistance = 1.5;

    controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      RIGHT: THREE.MOUSE.PAN,
    };

    controls.touches = {
      ONE: THREE.TOUCH.DOLLY_PAN,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };

    controls.update();

    addLights(scene);

    var instancedMesh = createGridPlanes(scene);

    addMeshToSwitcher(instancedMesh);
    loadMap(
      scene,
      sectorHighlighter,
      camera.current,
      canvasRef.current,
      currentState,
      controls
    );

    canvasRef.current.addEventListener("mousemove", onMouseMove);
    canvasRef.current.addEventListener("mousedown", () =>
      onClick(
        camera.current,
        instancedMesh,
        showModal,
        setCurrentTileIndex,
        currentState
      )
    );

    render();
  }

  function showModal() {
    setModalVisible(true);
  }

  function hideModal() {
    setModalVisible(false);
  }

  function render() {
    if (camera.current.position.z < 3) {
      switchToTiles(currentState);
      currentState.current = "tiles";
    } else {
      switchToMap(currentState);
      currentState.current = "map";
    }
    controls.update();
    renderer.render(scene, camera.current);
    requestAnimationFrame(render);
  }

  function zoomIn() {
    camera.current.position.z -= 0.5;
  }

  function zoomOut() {
    camera.current.position.z += 0.5;
  }

  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
  }

  const priceRanges = {
    1: { min: 650, max: 850, amount: 4104 },
    2: { min: 850, max: 1000, amount: 2345 },
    3: { min: 1000, max: 1250, amount: 2345 },
    4: { min: 2250, max: 2500, amount: 1759 },
    5: { min: 2500, max: 3000, amount: 1174 },
  };

  const generateRandomPrice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generatePricesForRegion = (regionId) => {
    const prices = {};
    const tilesInRegion =
      data.find((region) => region.id === regionId)?.tiles || [];

    for (let level in priceRanges) {
      prices[level] = [];
      const { min, max, amount } = priceRanges[level];

      const applicableTiles = tilesInRegion.filter(
        ({ level: tileLevel }) => tileLevel.toString() === level.toString()
      );

      for (let i = 0; i < Math.min(amount, applicableTiles.length); i++) {
        const randomPrice = generateRandomPrice(min, max);
        prices[level].push({
          price: randomPrice,
          index: applicableTiles[i].index,
        });
      }
    }
    return prices;
  };

  useEffect(() => {
    const generatePrices = async () => {
      const allPrices = {};
      const firstSection = availableSections[0];
      const pricesForFirstSection = generatePricesForRegion(firstSection);
      allPrices[firstSection] = pricesForFirstSection;
      setPrices(allPrices);

      // Call the rest with a 30s delay each
      for (let i = 1; i < availableSections.length; i++) {
        const section = availableSections[i];
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay of 2 seconds
        const pricesForSection = generatePricesForRegion(section);
        allPrices[section] = pricesForSection;
      }
      setPrices(allPrices);
    };

    generatePrices();
    const intervalId = setInterval(async () => {
      for (const section of availableSections) {
        const pricesForSection = generatePricesForRegion(section);
        setPrices((prevPrices) => ({
          ...prevPrices,
          [section]: pricesForSection,
        }));
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay of 2 seconds
      }
    }, 45 * 60 * 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMintedTokens = async () => {
    try {
      const tokens = await mainPackageContract.methods
        .getAllPlotOwners()
        .call();
      const plotIndexs = tokens?.[0]?.map((token) =>
        parseInt(token.toString().split("n")[0])
      );
      const plotOwners = tokens?.[1];
      setBoughtTiles({ plotIndexs, plotOwners });
    } catch (error) {
      console.error("Error fetching minted tokens:", error);
    }
  };

  useEffect(() => {
    fetchMintedTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recall]);

  console.log("boughtTiles", boughtTiles);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <img src="assets/compass.png" className="absolute left-2 bottom-2 w-24" />
      <ZoomToolbar zoomIn={zoomIn} zoomOut={zoomOut} />
      {modalVisible && (
        <TileModal
          hideModal={hideModal}
          index={currentTileIndex}
          price={currentTilePrice}
          mainPackageContract={mainPackageContract}
          signer={signer}
          address={address}
          web3={web3}
          setRecall={setRecall}
          isBought={boughtTiles?.plotIndexs?.includes(currentTileIndex)}
          plotOwner={
            boughtTiles?.plotOwners?.[
              boughtTiles?.plotIndexs?.indexOf(currentTileIndex)
            ]
          }
          usdtContract={usdtContract}
        />
      )}
      <div className="absolute left-3 top-3">
        <WalletBtn />
      </div>
    </div>
  );
}

export default MapComponent;
