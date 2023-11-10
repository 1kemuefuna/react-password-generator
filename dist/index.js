'use strict';

var React = require('react');

var ReactifyPasswordGenerator = function (_a) {
    var renderTrigger = _a.renderTrigger, onGenerate = _a.onGenerate, _b = _a.regex, regex = _b === void 0 ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ : _b;
    var _c = React.useState(""); _c[0]; var setPassword = _c[1];
    var generatePassword = function (length, complexity) {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        var newPassword = "";
        for (var i = 0; i < length; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        // Ensure the generated password matches the regex
        while (!regex.test(newPassword)) {
            newPassword = "";
            for (var i = 0; i < length; i++) {
                newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }
        setPassword(newPassword);
        onGenerate(newPassword);
    };
    return React.createElement(React.Fragment, null, renderTrigger({ onClick: function () { return generatePassword(12); } }));
};

var ReactifyPasswordStrengthIndicator = function (_a) {
    var password = _a.password, _b = _a.regex, regex = _b === void 0 ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ : _b;
    var calculateStrength = function (password) {
        if (regex.test(password)) {
            return 'Strong';
        }
        else {
            return 'Weak';
        }
    };
    return React.createElement("div", null,
        "Password Strength: ",
        calculateStrength(password));
};

exports.ReactifyPasswordGenerator = ReactifyPasswordGenerator;
exports.ReactifyPasswordStrengthIndicator = ReactifyPasswordStrengthIndicator;
//# sourceMappingURL=index.js.map
