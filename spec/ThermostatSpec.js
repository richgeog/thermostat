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

  describe("power saving", function() {

    it("is on by default", function() {
      expect(thermostat.powerSave).toBe(true);
    });

    it("it can be turned off", function() {
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toBe(false);
    });

    it("it can be turned on", function() {
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toBe(true);
    })
  });

  describe("reset temperature", function() {

    it("resets temperature", function() {
      for (i = 0; i < 10; i++) {
        thermostat.increaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.showTemperature()).toEqual(20)
    });

    it("resets temperature", function() {
      for (i = 0; i < 8; i++) {
        thermostat.decreaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.showTemperature()).toEqual(20)
    });
  });
});