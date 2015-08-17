var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.showTemperature = function() {
  return this.temperature;

};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;

};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature = (this.temperature === 10) ? 10 : this.temperature - 1

};