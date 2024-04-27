const contractAddress = "0x362b16FE9b84915005b1fA4b56D5FE8f62e2F6eB";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_note",
        type: "string",
      },
    ],
    name: "setNote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNote",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "note",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let provider;

let signer;
let contract;

window.onload = function() {
    provider = new ethers.providers.Web3Provider(window.etherum, 97);
    provider.send("eth_requestAccounts", []).then(() => {
        provider.listAccounts().then((accounts) => {
          signer = provider.getSigner(accounts[0]);
          contract = new ethers.Contract(contractAddress, abi, signer);
        });
      });
};





async function setNote() {
  const node = document.getElementById("note").value;
  await contract.setNode(note);
}

async function getNote() {
  const note = await contract.getNote();
  document.getElementById("note").innerText = note;
}
