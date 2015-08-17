describe ("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("default setting", function() {

    it("temperature starts at 20", function() {
      expect(thermostat.showTemperature()).toEqual(20);
    });

  });

  describe("temperature increase", function() {

    it("increases temperature", function() {
      thermostat.increaseTemperature();
      expect(thermostat.showTemperature()).toEqual(21);
    });

    it("with power save mode on, max is 25", function() {
      for (i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.showTemperature()).toEqual(25);
    });

    it("with power save mode off, max is 32", function() {
      thermostat.powerSaveOff();
        for (i = 0; i < 13; i++) {
          thermostat.increaseTemperature();
        }
        expect(thermostat.showTemperature()).toEqual(32);
      });
    });

  describe("temperature decrease", function() {

    it("decreases temperature", function() {
      thermostat.decreaseTemperature();
      expect(thermostat.showTemperature()).toEqual(19);
    });
  });

  describe("minimum temperature", function() {

    it("can only be decreased to 10 degrees", function() {
      for (i = 0; i < 11; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.showTemperature()).toEqual(10);
    });
  });


});