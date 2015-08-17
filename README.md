The project this week is to create a simple digital thermostat, using JavaScript, test-driven with Jasmine and using jQuery to interact with the HTML page.

- Build a thermostat model, which encapsulates the business logic.
- Create a user interface (UI) in HTML to interact with the thermostat and provide buttons and a display.

As a user
I would like to have a thermostat to be able set the temperature
The thermostat has a default setting of 20C

As a user
So I can increase the temperature
I would like to have a button that increments the temperature

As a user
So I can decrease the temperature
I would like to have a button that decreases the temperature

As a user
So I do not get too cold
I would like a minimum setting to be 10C

As a user
So I can save energy when power save is on
I would like to limit the max. temperature going above 25C

As a user
When energy save is not on
I would like to limit the max. temperature going above 32C

As a user
So I can save energy
I would like the power save option to be as as default

As a user
So I can reset the temperature to the default setting
I would like a reset button to be included

As a user
So I can see the temperature as a colour
I would like to see the display to be green when < 18C, yellow when < 25C, red when > 25C