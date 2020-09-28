module.exports = function () {
    var Faker = require("faker");
    var _ = require("lodash");

    return {
        mechanics: _.times(15, function (n) {
            return {
                id: n,
                name: Faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
            }

        }),
        vehicles: _.times(45, function (n) {
            return {
                id: n,
                content: Faker.vehicle.vehicle(),
                start: randomDate(new Date(2012, 0, 1), new Date()),
                group: parseInt((Math.random() * 15))
            }
        })
    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
