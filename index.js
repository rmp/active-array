function ActiveArray (id, fire, countThreshold, timeCountThreshold, timeThreshold) {
  let that    = this;
  that.id     = id;
  that.list   = new Array();
  that.timer  = null;
  that.fire   = fire;
  that.length = 0;

  that.countThreshold     = countThreshold;     // count for count trigger
  that.timeCountThreshold = timeCountThreshold; // count for time trigger
  that.timeThreshold      = timeThreshold;      // period, milliseconds. Should account for the time the analysis process takes

  if(timeThreshold) {
    that.timer              = global.setInterval(function (arg) { that.trigger(arg) }, that.timeThreshold, "timer");
  }

  return 1;
};

ActiveArray.prototype.trigger = function (why) {
  let that = this;

  if(why === "timer" && that.list.length < that.timeCountThreshold) {
    return;
  }

  that.fire(why, that.list);
  that.list   = new Array();
  that.length = 0;
};

ActiveArray.prototype.push = function (item) {
  let that = this;
  that.list.push(item);
  that.length = that.list.length;

  if(that.list.length >= that.countThreshold) {
    that.trigger("counter");
    return 1;
  }

  return 0;
};

module.exports = ActiveArray;
