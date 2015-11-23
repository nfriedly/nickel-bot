"use strict";

var Nightmare = require('nightmare');
var vo = require('vo');

if (!process.env.USERNAME || !process.env.PASSWORD) {
    console.error('Please set USERNAME and PASSWORD environment variables');
    process.exit(1);
}

vo(function* () {
    var nightmare = Nightmare({ show: false });
    yield nightmare
        .goto('https://wellnessforlifecenter.com/')
        .wait('input[name="standnavLogin"]')
        .type('input[name="login"]', process.env.USERNAME)
        .type('input[name="password"]', process.env.PASSWORD)
        .click('input[name="standnavLogin"]')
        .click('a[href="/register.cfm?mode=19"]')
        .wait(5000)
        .goto('https://www.powerofvitality.com/vitalityportal/healthy_habits/1299413')
        .evaluate(function() {
            /*globals $*/
            $('input.radioYes').click(); // check *all* of the workout radios
            $('input.registerSubmit').click(); // submit the form
        });
    var numPoints = yield nightmare
        .goto('https://www.powerofvitality.com/vitalityportal/points/statement')
        .evaluate(function() {
            /*globals $*/
            return $('tr.total td.align_right:eq(0)').text().trim()
        });
    yield nightmare.end();
    return numPoints;
})(function(err, numPoints) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("%s points", numPoints);
});

