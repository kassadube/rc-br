var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'RUNRETHINK',
  description: 'The nodejs.org example web server.',
  script: 'C:\\Users\\noams\\RethinkDB\\rundb\\runRethinkDBCMD.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
// Listen for the "uninstall" event so we know when it's done.

svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
//svc.uninstall();

svc.install();