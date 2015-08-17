var Thermostat = function() {
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this.powerSave = true;
  this.defaultMaxTemp = 32;
  this.minTemp = 10;
  this.powerSaveMaxTemp = 25;
  this.MaxTempw = 0
};

Thermostat.prototype.showTemperature = function() {
  return this.temperature;

};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature = (this.temperature >= this.MaxTemp()) ? this.MaxTemp() : this.temperature + 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature = (this.temperature <= this.minTemp) ? this.minTemp : this.temperature - 1;

};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;

};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;

};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.defaultTemp;

};

Thermostat.prototype.MaxTemp = function() {
  return (this.powerSave) ? this.powerSaveMaxTemp : this.defaultMaxTemp

};