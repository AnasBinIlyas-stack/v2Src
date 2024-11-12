import TileData from '../path/to/TileData.json'; // Adjust the path as necessary

const boughtTiles = {
    "plotIndexs": [
        0,
        1,
        3,
        5,
        10,
        2,
        15,
        558,
        559,
        220,
        157,
        72,
        260,
        339,
        153,
        38,
        30,
        263,
        119
    ],
    "plotOwners": [
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0x91C87276432Ab733C33144FA67D49B5D0658c380",
        "0xc31816250352A5b7D2C6d02F2F10e21CF24950Ee",
        "0x437cbe0F6F45A1B0D1725eAD7d940BA5E59819ac",
        "0x9B7fa8c2b7545FBCde4B487780833Bca2C89Df37",
        "0x9B7fa8c2b7545FBCde4B487780833Bca2C89Df37",
        "0x9B7fa8c2b7545FBCde4B487780833Bca2C89Df37",
        "0x437cbe0F6F45A1B0D1725eAD7d940BA5E59819ac",
        "0x437cbe0F6F45A1B0D1725eAD7d940BA5E59819ac",
        "0x437cbe0F6F45A1B0D1725eAD7d940BA5E59819ac",
        "0xc31816250352A5b7D2C6d02F2F10e21CF24950Ee",
        "0xc31816250352A5b7D2C6d02F2F10e21CF24950Ee"
    ]
};

const filteredTiles = TileData.filter((tile, index) => boughtTiles.plotIndexs.includes(index));

console.log(filteredTiles);

const ShowBought = () => {
  return (
    <div>
      Hi
    </div>
  )
}

export default ShowBought
