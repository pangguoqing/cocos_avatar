System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Sex, AvatarSys;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

      _export("AvatarSys", AvatarSys = (_dec = ccclass("AvatarSys"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(AvatarSys, _Component);

        var _super = _createSuper(AvatarSys);

        function AvatarSys() {
          _classCallCheck(this, AvatarSys);

          return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyU3lzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTZXgiLCJBdmF0YXJTeXMiLCJhdmF0YXJJbmZvIiwiY2MiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXZhdGFyRHJlc3NJbmZvT2ZNYWxlIiwiYXZhdGFyRHJlc3NJbmZvT2ZGZW1hbGUiLCJGRU1BTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7Ozs7QUFDYkMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7aUJBRVpDLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO0FBQUFBLFFBQUFBLEcsQ0FBQUEsRztTQUFBQSxHLEtBQUFBLEc7O0FBR0o7OzJCQUdZQyxTLFdBRFpILE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBRVMsQ0FDTDtBQUNIOzs7b0NBRVU7QUFDUDtBQUNBLGdCQUFJSSxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixhQUE1QixDQUFqQixDQUZPLENBR1A7O0FBQ0EsZ0JBQUlDLHFCQUFxQixHQUFHSixFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsd0JBQTVCLENBQTVCLENBSk8sQ0FLUDs7QUFDQSxnQkFBSUUsdUJBQXVCLEdBQUdMLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QiwwQkFBNUIsQ0FBOUI7O0FBQ0EsZ0JBQUksQ0FBQ0osVUFBTCxFQUFpQjtBQUNiLHFCQUFPO0FBQ0gsdUJBQU9GLEdBQUcsQ0FBQ1M7QUFEUixlQUFQO0FBR0g7QUFDSixXLENBSUQ7QUFDQTtBQUNBOzs7OztRQTlCMkJaLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmVudW0gU2V4e1xuICAgIE1BTEUsXG4gICAgRkVNQUxFLFxufTtcblxuQGNjY2xhc3MoXCJBdmF0YXJTeXNcIilcbmV4cG9ydCBjbGFzcyBBdmF0YXJTeXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICB9XG5cbiAgICBnZXRJbmZvICgpIHtcbiAgICAgICAgLy8g5Z+65pys5L+h5oGvXG4gICAgICAgIGxldCBhdmF0YXJJbmZvID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJfaW5mbycpO1xuICAgICAgICAvLyDnlLfmgKfnqb/nnYDkv6Hmga9cbiAgICAgICAgbGV0IGF2YXRhckRyZXNzSW5mb09mTWFsZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyX2RyZXNzX2luZm9fbWFsZScpO1xuICAgICAgICAvLyDlpbPmgKfnqb/nnYDkv6Hmga9cbiAgICAgICAgbGV0IGF2YXRhckRyZXNzSW5mb09mRmVtYWxlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJfZHJlc3NfaW5mb19mZW1hbGUnKTtcbiAgICAgICAgaWYgKCFhdmF0YXJJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdzZXgnOiBTZXguRkVNQUxFLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=