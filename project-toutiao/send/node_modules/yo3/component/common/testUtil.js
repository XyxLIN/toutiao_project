'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractProp = extractProp;
exports.getStyle = getStyle;
exports.delay = delay;
exports.getRandomNumber = getRandomNumber;
exports.getRandomOptions = getRandomOptions;

var _util = require('./util');

function extractProp(hostNode, prop) {
    var propReg = new RegExp(prop + '="([^"]+)"');
    var matches = hostNode.html().match(propReg);
    return matches ? matches[1] : null;
} /**
   * Created by chenjiao on 2017/3/21.
   */
function getStyle(hostNode, propName) {
    var styleStr = extractProp(hostNode, 'style');
    var propReg = new RegExp(propName + ':([^;]+);');
    var matches = styleStr.match(propReg);
    return matches ? matches[1].trim() : null;
}

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOptions() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    return (0, _util.getArrayByLength)(size).fill(1).map(function (item, i) {
        return { value: i };
    });
}