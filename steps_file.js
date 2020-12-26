module.exports = function () {
    const parameterService = require('./fragments/parameter.js');

    let codeceptConfig = require('./codecept.conf.js');

    return actor({
        getEnvironmentParameters: function (parameter) {
            return parameterService.getParam(parameter);
        },

        getEnvironment: function () {
            return codeceptConfig.config.environment;
        },

        urlAc: function () {
            this.clearCookie();
            this.amOnPage(this.getEnvironmentParameters("url"));
        }


    });
};