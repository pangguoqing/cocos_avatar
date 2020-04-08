System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Sex, AvatarSys;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
    Sex: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b86b8kNs9hOSJNXHK3J9+CX", "AvatarSys", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (Sex) {
        Sex[Sex["MALE"] = 0] = "MALE";
        Sex[Sex["FEMALE"] = 1] = "FEMALE";
      })(Sex || (Sex = {}));

      ;

      _export("AvatarSys", AvatarSys = (_dec = ccclass("AvatarSys"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        _inherits(AvatarSys, _Component);

        function AvatarSys() {
          _classCallCheck(this, AvatarSys);

          return _possibleConstructorReturn(this, _getPrototypeOf(AvatarSys).apply(this, arguments));
        }

        _createClass(AvatarSys, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "getInfo",
          value: function getInfo() {
            // 基本信息
            var avatarInfo = cc.sys.localStorage.getItem('avatar_info'); // 男性穿着信息

            var avatarDressInfoOfMale = cc.sys.localStorage.getItem('avatar_dress_info_male'); // 女性穿着信息

            var avatarDressInfoOfFemale = cc.sys.localStorage.getItem('avatar_dress_info_female');

            if (!avatarInfo) {
              return {
                'sex': Sex.FEMALE
              };
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AvatarSys;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWxpL0RvY3VtZW50cy93b3JrL2NvY29zX2F2YXRhci9hc3NldHMvc2NyaXB0cy9BdmF0YXJTeXMudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNleCIsIkF2YXRhclN5cyIsImF2YXRhckluZm8iLCJjYyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhdmF0YXJEcmVzc0luZm9PZk1hbGUiLCJhdmF0YXJEcmVzc0luZm9PZkZlbWFsZSIsIkZFTUFMRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7O0FBQ2JDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O2lCQUVaQyxHO0FBQUFBLFFBQUFBLEcsQ0FBQUEsRztBQUFBQSxRQUFBQSxHLENBQUFBLEc7U0FBQUEsRyxLQUFBQSxHOztBQUdKOzsyQkFHWUMsUyxXQURaSCxPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7OztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO2tDQUVTLENBQ0w7QUFDSDs7O29DQUVVO0FBQ1A7QUFDQSxnQkFBSUksVUFBVSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsYUFBNUIsQ0FBakIsQ0FGTyxDQUdQOztBQUNBLGdCQUFJQyxxQkFBcUIsR0FBR0osRUFBRSxDQUFDQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLHdCQUE1QixDQUE1QixDQUpPLENBS1A7O0FBQ0EsZ0JBQUlFLHVCQUF1QixHQUFHTCxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsMEJBQTVCLENBQTlCOztBQUNBLGdCQUFJLENBQUNKLFVBQUwsRUFBaUI7QUFDYixxQkFBTztBQUNILHVCQUFPRixHQUFHLENBQUNTO0FBRFIsZUFBUDtBQUdIO0FBQ0osVyxDQUlEO0FBQ0E7QUFDQTs7Ozs7UUE5QjJCWixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5lbnVtIFNleHtcbiAgICBNQUxFLFxuICAgIEZFTUFMRSxcbn07XG5cbkBjY2NsYXNzKFwiQXZhdGFyU3lzXCIpXG5leHBvcnQgY2xhc3MgQXZhdGFyU3lzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgfVxuXG4gICAgZ2V0SW5mbyAoKSB7XG4gICAgICAgIC8vIOWfuuacrOS/oeaBr1xuICAgICAgICBsZXQgYXZhdGFySW5mbyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyX2luZm8nKTtcbiAgICAgICAgLy8g55S35oCn56m/552A5L+h5oGvXG4gICAgICAgIGxldCBhdmF0YXJEcmVzc0luZm9PZk1hbGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcl9kcmVzc19pbmZvX21hbGUnKTtcbiAgICAgICAgLy8g5aWz5oCn56m/552A5L+h5oGvXG4gICAgICAgIGxldCBhdmF0YXJEcmVzc0luZm9PZkZlbWFsZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyX2RyZXNzX2luZm9fZmVtYWxlJyk7XG4gICAgICAgIGlmICghYXZhdGFySW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnc2V4JzogU2V4LkZFTUFMRSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19