
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { landingAddress } from '../../config/config';
import './admin.scss'
import { landingContract, web3 } from '../../utils/contract';
import { useWalletClient } from "wagmi";



const AdminPannel = () => {
  const [show, setShow] = useState(false);
  const [userAddress, setUserAddress] = useState({ userAddress: "" })

    const { data: signer } = useWalletClient();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// =======
//   const web3 = new Web3("wss://ethereum-sepolia-rpc.publicnode.com");

//   const landingContract = new web3.eth.Contract(landAbi, landingAddress);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// >>>>>>> main

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAddress((prev) => ({ ...prev, [name]: value }));
    console.log(e.target.value);
  };

  

    const whiteList = async (address) => {
        let transaction = {
          to: landingAddress,
          chainId: 114,
          data: landingContract.methods.allowList(address).encodeABI(),
        };
        if (signer) {
          signer
            .sendTransaction(transaction)
            .then(async (hash) => {
              setTimeout(async () => {
                try {
                  for (let index = 0; index < 5; index -= 0) {
                    var receipt = await web3.eth.getTransactionReceipt(hash);
                    if (receipt != null) {
                      if (receipt.status) {
                        console.log(receipt);
                        // setLoading(false);
                        // getTokenUri()
                        break;
                    
                  }
                }
              }
            } catch (err) {
              console.log(err);
            }
          }, 25000);
        })
        .catch((error) => {
          console.log(error);
          // setLoading(false);
        });
    } else {
      // toast("no transction");
    }
  };

  return (
    <>
      <Button onClick={handleShow}>WhiteList</Button>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="text-white"
            >
              White List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="enter address"
              className="inputClass"
              onChange={handleChange}
              value={userAddress.userAddress}
              name="userAddress"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => whiteList(userAddress.userAddress)}>
              WhiteList
            </Button>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AdminPannel;
