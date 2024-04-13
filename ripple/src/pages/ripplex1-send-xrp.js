// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************   

function getNet() {
    let net;
    if (document.getElementById("tn").checked) net = "wss://s.altnet.rippletest.net:51233";
    if (document.getElementById("dn").checked) net = "wss://s.devnet.rippletest.net:51233";
    return net;
  }
  
  // *******************************************************
  // ************* Get Account *****************************
  // *******************************************************
  
  async function getAccount(type) {
    
      let net = getNet();
      const client = new xrpl.Client(net);
      results = 'Connecting to ' + net + '....'
      
      // This uses the default faucet for Testnet/Devnet
      let faucetHost = null;
  
      if (type === 'standby') {
        document.getElementById('standbyResultField').value = results;
      } else {
        document.getElementById('operationalResultField').value = results;
      }
  
      await client.connect();
  
      results += '\nConnected, funding wallet.';
      if (type === 'standby') {
        document.getElementById('standbyResultField').value = results;
      } else {
        document.getElementById('operationalResultField').value = results;
      }
  
      // Increase the timeout to 60 seconds
      
      const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet
        
      results += '\nGot a wallet.'
      if (type == 'standby') {
        standbyResultField.value = results
      } else {
        operationalResultField.value = results
      }       
  
      results += '\nGot a wallet.';
      if (type === 'standby') {
        document.getElementById('standbyResultField').value = results;
        document.getElementById('standbyAccountField').value = my_wallet.address;
        document.getElementById('standbyPubKeyField').value = my_wallet.publicKey;
        document.getElementById('standbyPrivKeyField').value = my_wallet.privateKey;
        document.getElementById('standbySeedField').value = my_wallet.seed;
        document.getElementById('standbyBalanceField').value = (await client.getXrpBalance(my_wallet.address));
      } else {
        document.getElementById('operationalResultField').value = results;
        document.getElementById('operationalAccountField').value = my_wallet.address;
        document.getElementById('operationalPubKeyField').value = my_wallet.publicKey;
        document.getElementById('operationalPrivKeyField').value = my_wallet.privateKey;
        document.getElementById('operationalSeedField').value = my_wallet.seed;
        document.getElementById('operationalBalanceField').value = (await client.getXrpBalance(my_wallet.address));
      }
  
    } catch (error) {
      console.error('Error in getAccount:', error);
      if (type === 'standby') {
        document.getElementById('standbyResultField').value = 'Error: ' + error.message;
      } else {
        document.getElementById('operationalResultField').value = 'Error: ' + error.message;
      }
    }
  }
  