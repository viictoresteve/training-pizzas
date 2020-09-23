module.exports = function () {
    var Faker = require("faker");
    var _ = require("lodash");

    return {
        chefs: _.times(15, function (n) {
            return {
                id: n,
                name: Faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
            }

        }),
        vehicles: _.times(45, function (n) {
            return {
                id: n,
                name: Faker.vehicle.vehicle()
            }
        })
    }
}
