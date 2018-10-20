'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../common/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function aniLoopInfinte
 * @description
 * 该动画适用于图片查看器情景，即图片数较多的情况下,支持定义节点数量。
 * @param [ALLOWANCE, ALLOWANCEAngle, showPage] 触发翻页的水平位移, 触发事件处理的手势角度tan绝对值，固定的节点数量。
*/
exports.default = function () {
    var ALLOWANCE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    var ALLOWANCEAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var showPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    var _getRAF = (0, _util.getRAF)(),
        rAF = _getRAF.rAF,
        cancelrAF = _getRAF.cancelrAF;

    var obj = {
        aniQue: [],
        handleData: function handleData(_ref, children) {
            var pageNow = _ref.pageNow,
                operationTimer = _ref.operationTimer,
                pagesNum = _ref.pagesNum,
                width = _ref.width;

            var newChildren = [];
            if (pagesNum < showPage) {
                console.error('carousel 组建的 aniLoopInfinte 动画的数据条数应大于组件 showPage 且为奇数');
            }
            var locatArr = [];
            for (var i = -Math.floor(showPage / 2); i <= Math.floor(showPage / 2); i++) {
                locatArr.push((operationTimer + i) % pagesNum < 0 ? (operationTimer + i) % pagesNum + pagesNum : (i + operationTimer) % pagesNum);
            }
            newChildren = locatArr.map(function (item, i) {
                return _react2.default.cloneElement(children[item], {
                    style: {
                        position: 'absolute',
                        left: (operationTimer + i - Math.floor(showPage / 2)) * 100 + '%',
                        key: item
                    }
                });
            });
            newChildren.unshift(_react2.default.cloneElement(children[0], {
                key: 0,
                currentPage: pageNow,
                style: {
                    visibility: 'hidden'
                }
            }));
            return newChildren;
        },
        touchstart: function touchstart() {},
        touchmove: function touchmove(_ref2) {
            var touchmoveLocation = _ref2.touchmoveLocation,
                touchstartLocation = _ref2.touchstartLocation,
                containerDOM = _ref2.containerDOM,
                speed = _ref2.speed,
                operationTimer = _ref2.operationTimer,
                width = _ref2.width;

            if (!this._checkTouchAngle(touchstartLocation, touchmoveLocation)) {
                return;
            }
            var translateX = ((touchstartLocation[0] - touchmoveLocation[0]) / containerDOM.clientWidth + operationTimer) * width;
            this._addCss({
                dom: containerDOM,
                speed: speed,
                translateX: -translateX,
                isAni: false
            });
        },
        _checkTouchAngle: function _checkTouchAngle(prev, next) {
            var changeX = prev[0] - next[0];
            var changeY = next[1] - prev[1];
            var tan = Math.abs(changeX) / Math.abs(changeY);
            return tan > ALLOWANCEAngle;
        },
        touchend: function touchend(aniObj) {
            var touchendLocation = aniObj.touchendLocation,
                touchstartLocation = aniObj.touchstartLocation;

            var cAniObj = aniObj;
            var distanceX = touchendLocation[0] - touchstartLocation[0];
            var operat = void 0;
            if (Math.abs(distanceX) > ALLOWANCE && this._checkTouchAngle(touchstartLocation, touchendLocation)) {
                operat = distanceX > 0 ? -1 : 1;
                cAniObj.operationTimer = aniObj.operationTimer + operat;
                return this.checkAni(cAniObj, operat);
            }
            return this.checkAni(cAniObj, 0);
        },
        checkAni: function checkAni(aniObj) {
            var isAni = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var pagesNum = aniObj.pagesNum,
                containerDOM = aniObj.containerDOM,
                operationTimer = aniObj.operationTimer,
                width = aniObj.width;

            this._addCss({ dom: containerDOM, translateX: -operationTimer * width, isAni: isAni });
            var u = operationTimer % pagesNum;
            if (u === 0) {
                return 1;
            }
            return u < 0 ? u + pagesNum + 1 : u + 1;
        },
        next: function next(aniObj) {
            return this.checkAni(aniObj);
        },
        arrive: function arrive(aniObj, num, isAni) {
            return this.checkAni(aniObj, isAni);
        },
        prev: function prev(aniObj) {
            return this.checkAni(aniObj);
        },
        _addCss: function _addCss(_ref3) {
            var dom = _ref3.dom,
                translateX = _ref3.translateX,
                _ref3$isAni = _ref3.isAni,
                isAni = _ref3$isAni === undefined ? true : _ref3$isAni;

            var that = this;
            // 此处为Dom操作
            this.aniQue.push({ translateX: translateX, isAni: isAni });
            if (this.reqAni) {
                cancelrAF(this.reqAni);
            }
            this.reqAni = rAF(function () {
                if (!that.aniQue.length) return;
                var last = that.aniQue.pop();
                that.aniQue.length = 0;
                if (!last.isAni) {
                    dom.style.webkitTransition = 'none';
                    dom.style.transition = 'none';
                } else {
                    dom.style.webkitTransition = '';
                    dom.style.transition = '';
                }
                dom.style.webkitTransform = 'translate(' + last.translateX + 'px, 0) translateZ(0)';
                dom.style.transform = 'translate(' + last.translateX + 'px, 0) translateZ(0)';
                that.reqAni = null;
            });
        }
    };
    return obj;
};