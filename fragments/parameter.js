const {I} = inject();
let Parameters = require('../parameters/' + I.getEnvironment() + '.json');
module.exports = {
    getParam: function (key) {
        return Parameters[key];
    }
};