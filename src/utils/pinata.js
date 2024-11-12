import axios from "axios";
const key = "0ef781f39f476fcae2cf";
const secret =
  "87f8417c3edc2cb36afef9d05db5c7a4ef1455776458c66a866b0dd411d3c73c";

export const uploadImgPinata = async (metadata1, formData, data) => {
  try {
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    return axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: key,
          pinata_secret_api_key: secret,
          pinata_metadata: JSON.stringify(metadata1),
        },
      })
      .then(async (res) => {
        const metadata = new Object();
        metadata.pinataMetadata = {
          name: data.name,
        };
        metadata.pinataContent = {
          name: data.name,
          description: data.description,
          price: data.url,
          image: "https://ipfs.io/ipfs/" + res.data.IpfsHash,
          explicitContent: data.explicitContent,
          unlockableContent: data.unlockableContent,
          owner: data.owner,
        };

        return pinJSONToIPFS(metadata)
          .then((res) => {
            return {
              pinataUrl: res.pinataUrl,
              imageHash: metadata.pinataContent.image,
            };
            // return res.pinataUrl;
          })
          .catch((err) => {
            console.log(err);
            return err;
          });
      })
      .catch((err) => {
        return err;
      });

  } catch (error) {
    console.error(error);
    return error;
 
  }
};

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl: "https://ipfs.io/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
