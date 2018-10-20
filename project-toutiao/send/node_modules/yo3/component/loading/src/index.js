'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = undefined;

require('../../common/tapEventPluginInit');

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

var _loadingAPI = require('./loadingAPI');

var _loadingAPI2 = _interopRequireDefault(_loadingAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loading2.default;
exports.loading = _loadingAPI2.default;