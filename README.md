# ActiveArray #

An array which fires a callback when either a count of items is reached, or an interval fires and a minimum count is present.

``` javascript
let x = new ActiveArray(callback, countThreshold, timeCountThreshold, intervalMilliseconds);

x.push(object);
console.log(x.length);

## Example: ##

``` javascript
const ActiveArray = require('active-array');

let x = {};
let max = 5;
for (var i=0; i< max; i++) {
  let id = i;
  x[i] = new ActiveArray(function (list, why) { console.log(`fire ${why} ${id} ${list.length}`); }, 400, 100, 6000);
}
  
// periodically push messages into the buffers
setInterval(function () {
    let id = Math.floor(Math.random()*max);
    x[id].push("m"); // consume message from sqs and store here:
}, 1);
