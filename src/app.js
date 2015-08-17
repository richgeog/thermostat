thermostat = new Thermostat();

var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.showTemperature();

var upTemperature = document.getElementById('increase');
  upTemperature.onclick = function() {
    thermostat.increaseTemperature();
    temperature.innerHTML = thermostat.showTemperature();
  }

var downTemperature = document.getElementById('decrease');
  downTemperature.onclick = function() {
    thermostat.decreaseTemperature();
    temperature.innerHTML = thermostat.showTemperature();
  }

var resetTemperature = document.getElementById('reset');
  resetTemperature.onclick = function() {
    thermostat.resetTemperature();
    temperature.innerHTML = thermostat.showTemperature();
  }

function powerSaveChange() {
  if (document.getElementById('power_save').checked){
    thermostat.powerSaveOn();
  } else {
    thermostat.powerSaveOff();
  }
}