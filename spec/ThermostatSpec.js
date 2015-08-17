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
  });


});