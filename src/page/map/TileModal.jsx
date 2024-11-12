import { useEffect, useState } from "react";
import data from "./TileData.json";
import { Icon } from '@iconify/react';
import PropTypes from "prop-types";
import { mainPackageAddress, usdtAddress } from "../../config/config";
import toast from "react-hot-toast";

var elements = [{ name: "Pyroclast Essence", color: "#f00aec" },
{ name: "Celestial Dew", color: "#f00a3c" },
{ name: "Quantum Seeds", color: "#462bc2" },
{ name: "Eco Spheres", color: "#ee00ff" },
{ name: "Time Capsules", color: "#dbd818" },
{ name: "Harmonic Crystals", color: "#18d8db" }
]

var fundamentals = [
    { name: "Elemental Dominion", color: "#0085fa" },
    { name: "Astral Infusion", color: "#878787" },
    { name: "Quantum Claim Stakes", color: "#ffd500" },
    { name: "Resource Regeneration Cycle", color: "#8800ff" },
    { name: "Echo Boundaries", color: "#00ccff" },
    { name: "Harmonic Sanctuaries", color: "#3a3b3b" },
]


function TileModal({ hideModal, index, price, mainPackageContract, signer, address, web3, setRecall, isBought, usdtContract }) {
    const [loading, setLoading] = useState(false);
    const [currentTile, setCurrentTile] = useState({})
    const [userAllownace, setUserAllownace] = useState(0);

    const buyTile = async (fromApprove = false) => {
        try {
            const transction = {
                to: mainPackageAddress,
                chainId: 80002,
                data: mainPackageContract.methods.Buy(currentTile.index, `${currentTile.level}`, (price * 1000000).toString()).encodeABI(),
                // value: (price * 1000000).toString()
            };

            setLoading(true);
            const txResponse = await signer.sendTransaction(transction);

            let receipt;
            while (!receipt) {
                try {
                    receipt = await web3.eth.getTransactionReceipt(txResponse);
                } catch (error) {
                    console.log("Waiting...");
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            if (!fromApprove) {
                setRecall((prev) => !prev);
            }
            toast.success("Plot bought successfully!");
        } catch (error) {
            toast.error("Error buying plot");
            console.error("Error buying tile:", error);
        } finally {
            setLoading(false);
        }
    }

    const checkAllownace = async () => {
        const allowance = await usdtContract.methods.allowance(address, mainPackageAddress).call();
        setUserAllownace(parseInt(allowance) / 10 ** 6)
    }

    useEffect(() => {
        var object = findObjectById(data, index)
        object.name = findParentById(data, index).name
        setCurrentTile(object)
    }, [index])
    useEffect(() => {
        checkAllownace();
    }, [address])

    function findObjectById(mainArray, index) {
        for (let obj of mainArray) {
            for (let tile of obj.tiles) {
                if (tile.index === index) {
                    return tile;
                }
            }
        }
        return null; // return null if no matching object is found
    }

    function findParentById(mainArray, index) {
        for (let obj of mainArray) {
            for (let tile of obj.tiles) {
                if (tile.index === index) {
                    return obj;
                }
            }
        }
        return null; // return null if no matching parent object is found
    }

    const approveUSDTAndBuy = async () => {
        try {
            const transction = {
                to: usdtAddress,
                chainId: 80002,
                data: usdtContract.methods.approve(mainPackageAddress, (price * 1000000).toString()).encodeABI(),
                // value: (price * 1000000).toString()
            };

            setLoading(true);
            const txResponse = await signer.sendTransaction(transction);

            let receipt;
            while (!receipt) {
                try {
                    receipt = await web3.eth.getTransactionReceipt(txResponse);
                } catch (error) {
                    console.log("Waiting...");
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            toast.success("USDT Aprroved successfully!");
            checkAllownace();
            await buyTile(true);
            setRecall((prev) => !prev);
        } catch (error) {
            toast.error("Error approving USDT");
            console.error("Error approving USDT:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed right-10 top-10 max-w-[90vw] min-w-[450px] bg-[#110F24] p-5 rounded-lg">
            <img className="w-5 h-5 cursor-pointer float-right" src="/assets/cross.png" onClick={hideModal} />
            <div className="mt-7 flex justify-between text-white">
                <div className="flex flex-col items-start pb-5">
                    <span className="text-2xl font-bold">Plot #{currentTile.index}</span>
                    <span className="flex items-center text-sm mt-1 text-[#7f7fbe]">
                        <img src="/assets/map-icon.png" className="w-5" />{currentTile.name}
                    </span>
                    <span className="flex items-center text-sm mt-1 text-[#7f7fbe]">
                        <img src="/assets/location-pin.png" className="w-5" />{currentTile.latitude}, {currentTile.longitude}
                    </span>
                    <span className="flex items-center text-sm mt-1 text-[#7f7fbe]">
                        <Icon fontSize={20} icon="mdi:currency-usd" className="mr-1" />{!isBought ? price ? price : "-" : "-"}
                    </span>
                    {isBought &&
                        <span className="flex items-center text-sm mt-1 text-[#7f7fbe]">
                            <Icon icon="icons8:checked" className="mr-1" />Sold
                        </span>
                    }
                </div>
                <div className="text-5xl font-bold">{currentTile.level}</div>
            </div>

            <div className="border-t border-[#7f7fbe] flex justify-between text-white pt-5">
                <div className="flex flex-col items-start">
                    <span className="text-sm text-[#7f7fbe]">Elements</span>
                    {currentTile.elements?.map((v) => {
                        return (
                            <div className="flex items-center mt-2" key={v}>
                                <div className="w-5 h-5" style={{ backgroundColor: elements[v].color }}></div>
                                <div className="ml-2">{elements[v].name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-sm text-[#7f7fbe]">Fundamentals</span>
                    {currentTile.fundamentals?.map((v) => {
                        return (
                            <div className="flex items-center mt-2" key={v}>
                                <div className="w-5 h-5" style={{ backgroundColor: fundamentals[v].color }}></div>
                                <div className="ml-2">{fundamentals[v].name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {userAllownace >= price ?
                <div className={`w-full bg-gradient-to-r from-[#8000ff] to-[#004be0] p-2 mt-5 rounded cursor-pointer text-white font-bold text-center flex items-center justify-center ${isBought && 'opacity-70'}`} onClick={(isBought || loading) ? () => { } : async () => await buyTile()}>
                    {isBought ? <>{address}</> : <>
                        {loading ? <div className="w-6 h-6 rounded-full border-2 border-solid border-t-0 border-l-transparent animate-spin" /> : "Buy"}
                    </>}
                </div>
                : <>
                    <div className={`w-full bg-gradient-to-r from-[#8000ff] to-[#004be0] p-2 mt-5 rounded cursor-pointer text-white font-bold text-center flex items-center justify-center ${isBought && 'opacity-70'}`} onClick={async () => await approveUSDTAndBuy()}>
                        {isBought ? <>{address}</> : <>
                            {loading ? <div className="w-6 h-6 rounded-full border-2 border-solid border-t-0 border-l-transparent animate-spin" /> : "Buy"}
                        </>}
                    </div>
                </>}
        </div>
    )
}

TileModal.propTypes = {
    hideModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    price: PropTypes.number,
    mainPackageContract: PropTypes.object.isRequired,
    usdtContract: PropTypes.object.isRequired,
    signer: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired,
    web3: PropTypes.object.isRequired,
    setRecall: PropTypes.func.isRequired,
    isBought: PropTypes.bool.isRequired
};

export default TileModal;