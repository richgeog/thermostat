var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.showTemperature = function() {
  return this.temperature;

};

Thermostat.prototype.increaseTemperature = function(number) {
  this.temperature += 1;

};