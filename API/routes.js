'use strict'

var controller = require('./controller')

module.exports = function(app) {
    app.route('/games/report').get(controller.report);
    app.route('/games/:id').get(controller.gameSummary);
};