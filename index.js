var iotf = require("ibmiotf");
var config = require("./device.json");

var deviceClient = new iotf.IotfDevice(config);

deviceClient.log.setLevel('debug');

deviceClient.connect();

deviceClient.on('connect', function() {
    console.log("connected");
    setInterval(function function_name () {
      deviceClient.publish('temp', 'json', '{"temp":' + 4 +'}');
    },2000);
  });