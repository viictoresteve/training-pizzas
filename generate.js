module.exports = function () {
    var Faker = require("faker");
    var _ = require("lodash");

    return {
        mechanics: _.times(15, function (n) {
            return {
                id: n,
                content: Faker.fake(" {{name.firstName}} {{name.lastName}} ")
            }

        }),
        vehicles: _.times(45, function (n) {
            return {
                id: 'Vehicle ' + n,
                content: Faker.vehicle.vehicle(),
                start: randomDate(new Date(2020, 0, 1), new Date()),
                end: randomDate(new Date(2020, 3, 1), new Date()),
                group: parseInt((Math.random() * 15))
            }
        })
    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
