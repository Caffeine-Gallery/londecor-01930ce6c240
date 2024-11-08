import { backend } from "declarations/backend";

// Wallet connection handler
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert('Wallet connected! You can now send donations directly through MetaMask.');
        } catch (error) {
            console.error('Error connecting wallet:', error);
            alert('Error connecting wallet. Please make sure MetaMask is installed and try again.');
        }
    } else {
        alert('Please install MetaMask or another Web3 wallet to make donations.');
    }
}

// Add wallet connection listener
document.getElementById('connect-wallet').addEventListener('click', connectWallet);

// Rest of the original JavaScript remains exactly the same
