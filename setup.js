var from = { from: web3.eth.coinbase, gas: 10000000 };
var cb = function(hub){ window.hub = hub };
EntityHub.new(null, from).then(cb);
hub2 = EntityHub.deployed();
hub2.ping(null, from).then(function(){});
hub;
hub2.ping(null, from).then(function(){});
hub;
hub2.ping(null, from).then(function(){});

hub.createBank('CMB', from).then(function(){});
hub.createBank('ICBC', from).then(function(){});
hub.createBank('CMBC', from).then(function(){});

hub.getBanks(null, from).then(function(res){ console.log(res) })

hub.NewBank('latest', function(bank){
  console.log(bank);
})