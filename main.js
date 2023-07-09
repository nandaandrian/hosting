const si = require('systeminformation');

si.system()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
