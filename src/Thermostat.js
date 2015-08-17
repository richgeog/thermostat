var Thermostat = function(){
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.showTemperature = function() {
  return this.temperature;

};

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSave) {
    this.temperature = (this.temperature === 25) ? 25 : this.temperature + 1;
  } else {
    this.temperature = (this.temperature === 32) ? 32 : this.temperature + 1;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature = (this.temperature === 10) ? 10 : this.temperature - 1;

};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;

};