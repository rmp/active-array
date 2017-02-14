const ActiveArray = require('./index');

let x = {};
for (var i=0; i< 5; i++) {
  let id = i;
  x[i] = new ActiveArray(function (list, why) { console.log(`fire ${why} ${id} ${list.length}`); }, 400, 100, 6000);
}
  
// periodically push messages into the buffers
setInterval(function () {
    let id = Math.floor(Math.random()*5);
    x[id].push("m"); // consume message from sqs and store here:
}, 1);
