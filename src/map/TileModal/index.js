import React, { useEffect, useState } from "react";
import data from "../TilesData";
import "./styles.scss"
import { Icon } from '@iconify/react';


var elements = [{ name: "Pyroclast Essence", color: "#f00aec" },
{ name: "Celestial Dew", color: "#f00a3c" },
{ name: "Quantum Seeds", color: "#462bc2" },
{ name: "Eco Spheres", color: "##ee00ff" },
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

function TileModal({ hideModal, index, price }) {


    const [currentTile, setCurrentTile] = useState({})

    useEffect(() => {
        var object = findObjectById(data, index)
        object.name = findParentById(data, index).name
        setCurrentTile(object)
    }, [index])


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

    console.log({ level: currentTile.level, index: currentTile.index, price })

    return (
        <div className="tile-modal-root">
            <img className="close-icon" src="assets/cross.png" onClick={hideModal} />
            <div className="plot-details">
                <div className="plot-text">
                    <span className="plot-heading">Plot #{currentTile.index}</span>
                    <span className="plot-location"><img src="assets/map-icon.png" className="plot-location-icon" />{currentTile.name}</span>
                    <span className="plot-location"><img src="assets/location-pin.png" className="plot-location-icon" />{currentTile.latitude}, {currentTile.longitude}</span>
                    <span className="plot-location"><Icon fontSize={20} icon="mdi:currency-usd" style={{marginRight: "4px"}}/>{price ? price : "-"}</span>
                </div>
                <div className="plot-level">{currentTile.level}</div>
            </div>

            <div className="plot-assets">
                <div className="plot-elements">
                    <span className="asset-heading">Elements</span>
                    {currentTile.elements?.map((v) => {
                        return (
                            <div className="element" key={v}>
                                <div className="element-color" style={{ backgroundColor: elements[v].color }}></div>
                                <div className="element-name">{elements[v].name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="plot-fundamentals">
                    <span className="asset-heading">Fundamentals</span>
                    {currentTile.fundamentals?.map((v) => {
                        return (
                            <div className="element" key={v}>
                                <div className="element-color" style={{ backgroundColor: fundamentals[v].color }}></div>
                                <div className="element-name">{fundamentals[v].name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="buy-button">
                Buy Now
            </div>
        </div>
    )
}


export default TileModal;