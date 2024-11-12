import React from 'react';
import { BrowserProvider, Contract, parseEther, parseUnits } from 'ethers';
import axios from 'axios';
import { toast } from 'react-toastify';

function PaymentButton({ amount, tokenAddress, tokenDecimals, network, itemId, type, setReFetch, addressData }) {
  const handlePayment = async () => {
    if (!window.ethereum) {
      toast.error('MetaMask is not installed');
      return;
    }

    try {
      // Initialize BrowserProvider using MetaMask's injected provider
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const recipient = process.env.REACT_APP_RECEIVERADDRESS
      console.log('Recipient:', recipient);

      let transaction;
      let expectedValues = {};

      if (tokenAddress) {
        // ERC20 Token Transaction
        const ERC20_ABI = [
          'function transfer(address to, uint256 amount) public returns (bool)',
        ];
        const tokenContract = new Contract(tokenAddress, ERC20_ABI, signer);

        // Calculate the token amount with decimals
        const tokenAmount = parseUnits(amount.toString(), tokenDecimals);

        // Initiate token transfer
        transaction = await tokenContract.transfer(recipient, tokenAmount);

        // Expected values for verification
        expectedValues = {
          from: await signer.getAddress(),
          to: recipient,
          value: amount.toString(),
          tokenContractAddress: tokenAddress,
          tokenDecimals: tokenDecimals,
        };
      } else {
        // Native Currency Transaction (e.g., tBNB)
        const tx = {
          to: recipient,
          value: parseEther(amount.toString()),
        };

        // Initiate transaction
        transaction = await signer.sendTransaction(tx);

        // Expected values for verification
        expectedValues = {
          from: await signer.getAddress(),
          to: recipient,
          value: amount.toString(),
          tokenContractAddress: tokenAddress,
          tokenDecimals: tokenDecimals,
        };
      }

      // Wait for the transaction to be mined (optional)
      await transaction.wait();

      const url = `${process.env.REACT_APP_BASE_URL}/transaction/save-transaction`;
      const token = localStorage.getItem('token');
      // Send transaction hash and expected values to backend for verification
      const response = await axios.post(url, {
        txHash: transaction.hash,
        expectedValues,
        network,
        type,
        itemId,
        ...addressData,
      }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });

      if (response.data.success) {
        setReFetch(true);
        toast.success('Payment successful and verified!');
      } else {
        toast.error('Payment failed verification.');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Payment failed.');
    }
  };

  return (
    <button onClick={handlePayment} className="bottom text-white textexpansiva-bold">
      Buy {amount} {tokenAddress ? 'Tokens' : 'BNB'}
    </button>
  );
}

export default PaymentButton;
