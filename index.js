const abi = require("./erc20abi.json");
const { ethers, BigNumber } = require("ethers");
const axios = require("axios");

const forBal = (num) => {
  //   const data = ethers.utils.parseEther(num);

  return (Math.round(num * 100) / 100).toFixed(2);

  //   parseFloat(num).toFixed(2);
};

const runApp = async () => {
  //   const staticProvider = new ethers.providers.JsonRpcProvider(
  //     "https://rpc.ankr.com/eth"
  //   );

  //   const plantContract = new ethers.Contract(
  //     "0xA183A8ce57eb3C6d15422655e3FE9544EE0fBbDC",
  //     abi,
  //     staticProvider
  //   );

  //   const balance = await plantContract.balanceOf(
  //     "0xceec235abcc6ee6dee8c0a80e26a4058039720a6"
  //   );

  //   console.log(ethers.utils.formatEther(balance));

  try {
    const response = await axios.get(
      "https://api.ethplorer.io/getTopTokenHolders/0xa183a8ce57eb3c6d15422655e3fe9544ee0fbbdc?apiKey=freekey&limit=100"
    );

    console.log(
      response.data.holders.map((item) =>
        console.table({
          holder: item.address,
          balance: forBal(item.balance),
          share: item.share + "%",
        })
      )
    );
  } catch (error) {
    console.log(error);
  }
};

runApp();
