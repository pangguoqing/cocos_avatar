System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, loader, SkinningModelComponent, Texture2D, systemEvent, SystemEvent, Vec3, math, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Sex, AvatarController;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0,
    Sex: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      loader = _cc.loader;
      SkinningModelComponent = _cc.SkinningModelComponent;
      Texture2D = _cc.Texture2D;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Vec3 = _cc.Vec3;
      math = _cc.math;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "bcd2dCsRCVNCZmHJYp9EtoB", "AvatarController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (Sex) {
        Sex[Sex["MALE"] = 1] = "MALE";
        Sex[Sex["FEMALE"] = 2] = "FEMALE";
      })(Sex || (Sex = {}));

      ;

      _export("AvatarController", AvatarController = (_dec = ccclass("AvatarController"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(AvatarController, _Component);

        function AvatarController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, AvatarController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AvatarController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "female", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "male", _descriptor2, _assertThisInitialized(_this));

          _this.hairIndex = 0;
          _this.faceIndex = 0;
          _this.eyesIndex = 0;
          _this.topIndex = 0;
          _this.pantsIndex = 0;
          _this.shoesIndex = 0;
          return _this;
        }

        _createClass(AvatarController, [{
          key: "dressHair",

          /**
           * 换发型
           */
          value: function dressHair() {
            var infos = [{
              kind: 1,
              sub: 'brown'
            }, {
              kind: 1,
              sub: 'normal'
            }, {
              kind: 1,
              sub: 'red'
            }, {
              kind: 1,
              sub: 'yellow'
            }, {
              kind: 2,
              sub: 'cyan'
            }, {
              kind: 2,
              sub: 'dark'
            }, {
              kind: 2,
              sub: 'pink'
            }];
            this.hairIndex = this.hairIndex >= infos.length - 1 ? -1 : this.hairIndex;
            var index = ++this.hairIndex;
            this.dress('hair', infos[index]);
          }
          /**
           * 换脸型
           */

        }, {
          key: "dressFace",
          value: function dressFace() {
            var infos = [{
              kind: 1
            }, {
              kind: 1,
              sub: 'normal'
            }, {
              kind: 2
            }, {
              kind: 2,
              sub: 'normal'
            }];
            this.faceIndex = this.faceIndex >= infos.length - 1 ? -1 : this.faceIndex;
            var index = ++this.faceIndex;
            this.dress('face', infos[index]);
          }
          /**
           * 换眼睛
           */

        }, {
          key: "dressEyes",
          value: function dressEyes() {
            var infos = [{
              sub: 'brown'
            }, {
              sub: 'blue'
            }, {
              sub: 'green'
            }];
            this.eyesIndex = this.eyesIndex >= infos.length - 1 ? -1 : this.eyesIndex;
            var index = ++this.eyesIndex;
            this.dress('eyes', infos[index]);
          }
          /**
           * 换上衣
           */

        }, {
          key: "dressTop",
          value: function dressTop() {
            var infos = [{
              kind: 1,
              sub: 'blue'
            }, {
              kind: 1,
              sub: 'green'
            }, {
              kind: 1,
              sub: 'pink'
            }, {
              kind: 1,
              sub: 'normal'
            }, {
              kind: 2,
              sub: 'orange'
            }, {
              kind: 2,
              sub: 'green'
            }, {
              kind: 2,
              sub: 'purple'
            }, {
              kind: 2,
              sub: 'normal'
            }];
            this.topIndex = this.topIndex >= infos.length - 1 ? -1 : this.topIndex;
            var index = ++this.topIndex;
            this.dress('top', infos[index]);
          }
          /**
           * 换裤子
           */

        }, {
          key: "dressPants",
          value: function dressPants() {
            var infos = [{
              kind: 1,
              sub: 'blue'
            }, {
              kind: 1,
              sub: 'green'
            }, {
              kind: 1,
              sub: 'dark'
            }, {
              kind: 1,
              sub: 'normal'
            }, {
              kind: 2,
              sub: 'orange'
            }, {
              kind: 2,
              sub: 'blue'
            }, {
              kind: 2,
              sub: 'black'
            }, {
              kind: 2,
              sub: 'normal'
            }];
            this.pantsIndex = this.pantsIndex >= infos.length - 1 ? -1 : this.pantsIndex;
            var index = ++this.pantsIndex;
            this.dress('pants', infos[index]);
          }
          /**
           * 换鞋
           */

        }, {
          key: "dressShoes",
          value: function dressShoes() {
            var infos = [{
              kind: 1,
              sub: 'blue'
            }, {
              kind: 1,
              sub: 'green'
            }, {
              kind: 1,
              sub: 'yellow'
            }, {
              kind: 1,
              sub: 'normal'
            }, {
              kind: 2,
              sub: 'yellow'
            }, {
              kind: 2,
              sub: 'blue'
            }, {
              kind: 2,
              sub: 'red'
            }, {
              kind: 2,
              sub: 'normal'
            }];
            this.shoesIndex = this.shoesIndex >= infos.length - 1 ? -1 : this.shoesIndex;
            var index = ++this.shoesIndex;
            this.dress('shoes', infos[index]);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.sex = this.getAvatarSex();
            this.avatar = this.sex === Sex.FEMALE ? this.getAvatarFemaleInfo() : this.getAvatarMaleInfo();
            this.target = this.sex === Sex.FEMALE ? this.female : this.female;
            this.dressAll().then(function () {
              _this2.target.active = true;
            });
            systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
            systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          }
          /**
           * 鼠标拖动操控人物旋转
           * @param event 事件对象
           */

        }, {
          key: "onMouseMove",
          value: function onMouseMove(event) {
            if (event.movementX != 0) {
              var up = new Vec3(0, 1, 0);
              var rotationx = this.target.getRotation();
              math.Quat.rotateAround(rotationx, rotationx, up, event.movementX / 5 / 360.0 * 3.1415926535);
              this.target.setRotation(rotationx);
            }
          }
          /**
           * 触摸操控人物旋转
           * @param event 事件对象
           */

        }, {
          key: "onTouchMove",
          value: function onTouchMove(event) {
            if (event.getDelta().x != 0) {
              var up = new Vec3(0, 1, 0);
              var rotationx = this.target.getRotation();
              math.Quat.rotateAround(rotationx, rotationx, up, event.getDelta().x / 5 / 360.0 * 3.1415926535);
              this.target.setRotation(rotationx);
            }
          }
          /**
           * 获取性别
           */

        }, {
          key: "getAvatarSex",
          value: function getAvatarSex() {
            return parseInt(cc.sys.localStorage.getItem('avatarsys_sex')) || Sex.FEMALE;
          }
          /**
           * 获取女性着装信息
           */

        }, {
          key: "getAvatarFemaleInfo",
          value: function getAvatarFemaleInfo() {
            return JSON.parse(cc.sys.localStorage.getItem('avatarsys_female_info')) || {
              hair: {
                kind: 1,
                sub: 'brown'
              },
              face: {
                kind: 1
              },
              eyes: {
                sub: 'blue'
              },
              top: {
                kind: 1,
                sub: 'blue'
              },
              pants: {
                kind: 1,
                sub: 'blue'
              },
              shoes: {
                kind: 1,
                sub: 'blue'
              }
            };
          }
          /**
           * 获取男性着装信息
           */

        }, {
          key: "getAvatarMaleInfo",
          value: function getAvatarMaleInfo() {
            return JSON.parse(cc.sys.localStorage.getItem('avatarsys_male_info')) || {
              hair: {
                kind: 1,
                sub: 'brown'
              },
              face: {
                kind: 1,
                sub: 'normal'
              },
              eyes: {
                sub: 'blue'
              },
              top: {
                kind: 1,
                sub: 'blue'
              },
              pants: {
                kind: 1,
                sub: 'blue'
              },
              shoes: {
                kind: 1,
                sub: 'blue'
              }
            };
          }
          /**
           * 整体着装
           */

        }, {
          key: "dressAll",
          value: function dressAll() {
            var _this3 = this;

            var promises = Object.keys(this.avatar).map(function (part) {
              return _this3.dress(part, _this3.avatar[part]);
            });
            return Promise.all(promises);
          }
          /**
           * 部位着装
           * @param part 部位
           * @param dressInfo 部位着装信息
           */

        }, {
          key: "dress",
          value: function dress(part, dressInfo) {
            var _this4 = this;

            var pre = this.getPart(part, this.avatar[part]);
            var current = this.getPart(part, dressInfo);
            var res = this.getTextureRes(part, dressInfo);
            return this.loadTexture2D(res).then(function (texture2D) {
              var material = current.getComponent(SkinningModelComponent).materials[0];
              material.setProperty('mainTexture', texture2D);

              if (current !== pre) {
                pre.active = false;
              }

              current.active = true;
              _this4.avatar[part] = dressInfo;
              return current;
            });
          }
          /**
           * 获取知道部位的元素
           * @param part 部位
           * @param dressInfo 部位着装信息
           */

        }, {
          key: "getPart",
          value: function getPart(part, dressInfo) {
            var kind = dressInfo.kind,
                sub = dressInfo.sub;
            var name = "".concat(part).concat(kind ? "-".concat(kind) : '');
            var children = this.target.children[0].children;

            for (var i = 0; i < children.length; i++) {
              var child = children[i];

              if (child.name === name) {
                return child;
              }
            }
          }
          /**
           * 获取部位相应的资源地址
           * @param part 部位
           * @param dressInfo 部位着装信息
           */

        }, {
          key: "getTextureRes",
          value: function getTextureRes(part, dressInfo) {
            var kind = dressInfo.kind,
                sub = dressInfo.sub;
            var sex = this.sex === Sex.FEMALE ? 'Female' : 'Male';
            return "characters/".concat(sex, "/textures/").concat(sex.toLowerCase(), "_").concat(part).concat(kind ? "-".concat(kind) : '').concat(sub ? "_".concat(sub) : '', "/texture");
          }
          /**
           * 动态加载贴图
           * @param res 资源地址
           */

        }, {
          key: "loadTexture2D",
          value: function loadTexture2D(res) {
            return new Promise(function (resolve, reject) {
              loader.loadRes(res, Texture2D, function (err, texture2D) {
                if (err) {
                  reject(err);
                } else {
                  resolve(texture2D);
                }
              });
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AvatarController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "female", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "male", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWxpL0RvY3VtZW50cy93b3JrL2NvY29zX2F2YXRhci9hc3NldHMvc2NyaXB0cy9BdmF0YXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwibG9hZGVyIiwiU2tpbm5pbmdNb2RlbENvbXBvbmVudCIsIlRleHR1cmUyRCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJWZWMzIiwibWF0aCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNleCIsIkF2YXRhckNvbnRyb2xsZXIiLCJ0eXBlIiwiaGFpckluZGV4IiwiZmFjZUluZGV4IiwiZXllc0luZGV4IiwidG9wSW5kZXgiLCJwYW50c0luZGV4Iiwic2hvZXNJbmRleCIsImluZm9zIiwia2luZCIsInN1YiIsImxlbmd0aCIsImluZGV4IiwiZHJlc3MiLCJzZXgiLCJnZXRBdmF0YXJTZXgiLCJhdmF0YXIiLCJGRU1BTEUiLCJnZXRBdmF0YXJGZW1hbGVJbmZvIiwiZ2V0QXZhdGFyTWFsZUluZm8iLCJ0YXJnZXQiLCJmZW1hbGUiLCJkcmVzc0FsbCIsInRoZW4iLCJhY3RpdmUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIk1PVVNFX01PVkUiLCJvbk1vdXNlTW92ZSIsImV2ZW50IiwibW92ZW1lbnRYIiwidXAiLCJyb3RhdGlvbngiLCJnZXRSb3RhdGlvbiIsIlF1YXQiLCJyb3RhdGVBcm91bmQiLCJzZXRSb3RhdGlvbiIsImdldERlbHRhIiwieCIsInBhcnNlSW50IiwiY2MiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaGFpciIsImZhY2UiLCJleWVzIiwidG9wIiwicGFudHMiLCJzaG9lcyIsInByb21pc2VzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhcnQiLCJQcm9taXNlIiwiYWxsIiwiZHJlc3NJbmZvIiwicHJlIiwiZ2V0UGFydCIsImN1cnJlbnQiLCJyZXMiLCJnZXRUZXh0dXJlUmVzIiwibG9hZFRleHR1cmUyRCIsInRleHR1cmUyRCIsIm1hdGVyaWFsIiwiZ2V0Q29tcG9uZW50IiwibWF0ZXJpYWxzIiwic2V0UHJvcGVydHkiLCJuYW1lIiwiY2hpbGRyZW4iLCJpIiwiY2hpbGQiLCJ0b0xvd2VyQ2FzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkUmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLHNCLE9BQUFBLHNCO0FBQXdCQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ2xJQyxNQUFBQSxPLEdBQXNCVixVLENBQXRCVSxPO0FBQVNDLE1BQUFBLFEsR0FBYVgsVSxDQUFiVyxROztpQkFHWkMsRztBQUFBQSxRQUFBQSxHLENBQUFBLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO1NBQUFBLEcsS0FBQUEsRzs7QUFHSjs7a0NBa0JZQyxnQixXQURaSCxPQUFPLENBQUMsa0JBQUQsQyxVQUtIQyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFWjtBQUFQLE9BQUQsQyxVQUdSUyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFWjtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFPRGEsUyxHQUFvQixDO2dCQUNwQkMsUyxHQUFvQixDO2dCQUNwQkMsUyxHQUFvQixDO2dCQUNwQkMsUSxHQUFtQixDO2dCQUNuQkMsVSxHQUFxQixDO2dCQUNyQkMsVSxHQUFxQixDOzs7Ozs7O0FBRTdCOzs7c0NBR21CO0FBQ2Ys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bkQsR0FEaUQ7QUFFOUQsZ0JBQU1JLEdBQUcsR0FBRyxLQUFLQSxHQUFMLEtBQWFmLEdBQUcsQ0FBQ2tCLE1BQWpCLEdBQTBCLFFBQTFCLEdBQXFDLE1BQWpEO0FBQ0Esd0NBQXFCSCxHQUFyQix1QkFBcUNBLEdBQUcsQ0FBQytELFdBQUosRUFBckMsY0FBMERuQixJQUExRCxTQUFpRWpELElBQUksY0FBS0EsSUFBTCxJQUFZLEVBQWpGLFNBQXNGQyxHQUFHLGNBQUtBLEdBQUwsSUFBVyxFQUFwRztBQUNIO0FBQ0Q7Ozs7Ozs7d0NBSXNCdUQsRyxFQUEwQjtBQUM1QyxtQkFBTyxJQUFJTixPQUFKLENBQVksVUFBQ21CLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ3pGLGNBQUFBLE1BQU0sQ0FBQzBGLE9BQVAsQ0FBZWYsR0FBZixFQUFvQnpFLFNBQXBCLEVBQStCLFVBQUN5RixHQUFELEVBQVdiLFNBQVgsRUFBb0M7QUFDL0Qsb0JBQUlhLEdBQUosRUFBUztBQUNMRixrQkFBQUEsTUFBTSxDQUFDRSxHQUFELENBQU47QUFDSCxpQkFGRCxNQUVPO0FBQ0hILGtCQUFBQSxPQUFPLENBQUNWLFNBQUQsQ0FBUDtBQUNIO0FBQ0osZUFORDtBQU9ILGFBUk0sQ0FBUDtBQVNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBeFBrQ2hGLFM7Ozs7O2lCQUtaLEk7Ozs7Ozs7aUJBR0YsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBTcHJpdGVGcmFtZSwgU2tpbm5pbmdNb2RlbENvbXBvbmVudCwgVGV4dHVyZTJELCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIEV2ZW50VG91Y2gsIFZlYzMsIG1hdGggfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cblxuZW51bSBTZXgge1xuICAgIE1BTEUgPSAxLFxuICAgIEZFTUFMRSA9IDIsXG59O1xuXG5pbnRlcmZhY2UgRHJlc3NJbmZvIHtcbiAgICBraW5kPzogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHN1Yj86IHN0cmluZyB8IG51bWJlclxufVxuXG5pbnRlcmZhY2UgQXZhdGFyIHtcbiAgICBbcGFydDogc3RyaW5nXTogRHJlc3NJbmZvLFxuICAgIC8vIGhhaXI6IERyZXNzSW5mbyxcbiAgICAvLyBmYWNlOiBEcmVzc0luZm8sXG4gICAgLy8gZXllczogRHJlc3NJbmZvLFxuICAgIC8vIHRvcDogRHJlc3NJbmZvLFxuICAgIC8vIHBhbnRzOiBEcmVzc0luZm8sXG4gICAgLy8gc2hvZXM6IERyZXNzSW5mb1xufVxuXG5AY2NjbGFzcyhcIkF2YXRhckNvbnRyb2xsZXJcIilcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgZmVtYWxlOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIG1hbGU6IE5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzZXg6IFNleDtcbiAgICBwcml2YXRlIGF2YXRhcjogQXZhdGFyO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBOb2RlO1xuXG4gICAgcHJpdmF0ZSBoYWlySW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBmYWNlSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBleWVzSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0b3BJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBhbnRzSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzaG9lc0luZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog5o2i5Y+R5Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzSGFpcigpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2Jyb3duJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjEsIHN1YjogJ3JlZCd9LHtraW5kOjEsIHN1YjogJ3llbGxvdyd9LHtraW5kOjIsIHN1YjogJ2N5YW4nfSx7a2luZDoyLCBzdWI6ICdkYXJrJ30se2tpbmQ6Miwgc3ViOiAncGluayd9XVxuICAgICAgICB0aGlzLmhhaXJJbmRleCA9ICh0aGlzLmhhaXJJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5oYWlySW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmhhaXJJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnaGFpcicsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouiEuOWei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0ZhY2UoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Mn0sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLmZhY2VJbmRleCA9ICh0aGlzLmZhY2VJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5mYWNlSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmZhY2VJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnZmFjZScsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouecvOedm1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0V5ZXMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7c3ViOiAnYnJvd24nfSx7c3ViOiAnYmx1ZSd9LHtzdWI6ICdncmVlbid9XVxuICAgICAgICB0aGlzLmV5ZXNJbmRleCA9ICh0aGlzLmV5ZXNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5leWVzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmV5ZXNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnZXllcycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouS4iuiho1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1RvcCgpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ3BpbmsnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAnb3JhbmdlJ30se2tpbmQ6Miwgc3ViOiAnZ3JlZW4nfSx7a2luZDoyLCBzdWI6ICdwdXJwbGUnfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMudG9wSW5kZXggPSAodGhpcy50b3BJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy50b3BJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMudG9wSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3RvcCcsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouijpOWtkFxuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1BhbnRzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MSwgc3ViOiAnYmx1ZSd9LHtraW5kOjEsIHN1YjogJ2dyZWVuJ30se2tpbmQ6MSwgc3ViOiAnZGFyayd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICdvcmFuZ2UnfSx7a2luZDoyLCBzdWI6ICdibHVlJ30se2tpbmQ6Miwgc3ViOiAnYmxhY2snfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMucGFudHNJbmRleCA9ICh0aGlzLnBhbnRzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMucGFudHNJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMucGFudHNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygncGFudHMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLpnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NTaG9lcygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ3llbGxvdyd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICd5ZWxsb3cnfSx7a2luZDoyLCBzdWI6ICdibHVlJ30se2tpbmQ6Miwgc3ViOiAncmVkJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnNob2VzSW5kZXggPSAodGhpcy5zaG9lc0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnNob2VzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnNob2VzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3Nob2VzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuc2V4ID0gdGhpcy5nZXRBdmF0YXJTZXgoKTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/IHRoaXMuZ2V0QXZhdGFyRmVtYWxlSW5mbygpIDogdGhpcy5nZXRBdmF0YXJNYWxlSW5mbygpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gdGhpcy5mZW1hbGUgOiB0aGlzLmZlbWFsZTtcbiAgICAgICAgdGhpcy5kcmVzc0FsbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX01PVkUsdGhpcy5vbk1vdXNlTW92ZSx0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6byg5qCH5ouW5Yqo5pON5o6n5Lq654mp5peL6L2sXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuWvueixoVxuICAgICAqL1xuICAgIG9uTW91c2VNb3ZlKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQubW92ZW1lbnRYIT0wKXtcbiAgICAgICAgICAgIGNvbnN0IHVwID1uZXcgVmVjMygwLDEsMCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIGV2ZW50Lm1vdmVtZW50WC81LyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOinpuaRuOaTjeaOp+S6uueJqeaXi+i9rFxuICAgICAqIEBwYXJhbSBldmVudCDkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBvblRvdWNoTW92ZShldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LmdldERlbHRhKCkueCAhPSAwKXtcbiAgICAgICAgICAgIGNvbnN0IHVwID1uZXcgVmVjMygwLDEsMCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIGV2ZW50LmdldERlbHRhKCkueC81LyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaAp+WIq1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJTZXggKCk6IFNleCB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19zZXgnKSkgfHwgU2V4LkZFTUFMRVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blpbPmgKfnnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyRmVtYWxlSW5mbyAoKTogQXZhdGFyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfZmVtYWxlX2luZm8nKSkgfHwge1xuICAgICAgICAgICAgaGFpcjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYnJvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleWVzOiB7XG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFudHM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvZXM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W55S35oCn552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhck1hbGVJbmZvICgpOiBBdmF0YXIge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19tYWxlX2luZm8nKSkgfHwge1xuICAgICAgICAgICAgaGFpcjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYnJvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnbm9ybWFsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV5ZXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYW50czoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG9lczoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlbTkvZPnnYDoo4VcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NBbGwgKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IE9iamVjdC5rZXlzKHRoaXMuYXZhdGFyKS5tYXAoKHBhcnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJlc3MocGFydCwgdGhpcy5hdmF0YXJbcGFydF0pO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpg6jkvY3nnYDoo4VcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IFByb21pc2U8Tm9kZT4ge1xuICAgICAgICBjb25zdCBwcmUgPSB0aGlzLmdldFBhcnQocGFydCwgdGhpcy5hdmF0YXJbcGFydF0pO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRQYXJ0KHBhcnQsIGRyZXNzSW5mbyk7XG4gICAgICAgIGNvbnN0IHJlczogc3RyaW5nID0gdGhpcy5nZXRUZXh0dXJlUmVzKHBhcnQsIGRyZXNzSW5mbyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRUZXh0dXJlMkQocmVzKS50aGVuKCh0ZXh0dXJlMkQ6IFRleHR1cmUyRCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBjdXJyZW50LmdldENvbXBvbmVudChTa2lubmluZ01vZGVsQ29tcG9uZW50KS5tYXRlcmlhbHNbMF07XG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnbWFpblRleHR1cmUnLCB0ZXh0dXJlMkQpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgIT09IHByZSkge1xuICAgICAgICAgICAgICAgIHByZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyW3BhcnRdID0gZHJlc3NJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluefpemBk+mDqOS9jeeahOWFg+e0oFxuICAgICAqIEBwYXJhbSBwYXJ0IOmDqOS9jVxuICAgICAqIEBwYXJhbSBkcmVzc0luZm8g6YOo5L2N552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldFBhcnQgKHBhcnQ6IHN0cmluZywgZHJlc3NJbmZvOiBEcmVzc0luZm8pOiBOb2RlIHtcbiAgICAgICAgY29uc3Qge2tpbmQsIHN1Yn0gPSBkcmVzc0luZm9cbiAgICAgICAgY29uc3QgbmFtZSA9IGAke3BhcnR9JHtraW5kP2AtJHtraW5kfWA6Jyd9YFxuICAgICAgICBjb25zdCBjaGlsZHJlbjogTm9kZVtdID0gdGhpcy50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bpg6jkvY3nm7jlupTnmoTotYTmupDlnLDlnYBcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUZXh0dXJlUmVzIChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qge2tpbmQsIHN1Yn0gPSBkcmVzc0luZm9cbiAgICAgICAgY29uc3Qgc2V4ID0gdGhpcy5zZXggPT09IFNleC5GRU1BTEUgPyAnRmVtYWxlJyA6ICdNYWxlJ1xuICAgICAgICByZXR1cm4gYGNoYXJhY3RlcnMvJHtzZXh9L3RleHR1cmVzLyR7c2V4LnRvTG93ZXJDYXNlKCl9XyR7cGFydH0ke2tpbmQ/YC0ke2tpbmR9YDonJ30ke3N1Yj9gXyR7c3VifWA6Jyd9L3RleHR1cmVgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKqOaAgeWKoOi9vei0tOWbvlxuICAgICAqIEBwYXJhbSByZXMg6LWE5rqQ5Zyw5Z2AXG4gICAgICovXG4gICAgcHVibGljIGxvYWRUZXh0dXJlMkQgKHJlcykgOiBQcm9taXNlPFRleHR1cmUyRD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMocmVzLCBUZXh0dXJlMkQgLChlcnI6IGFueSwgdGV4dHVyZTJEOiBUZXh0dXJlMkQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGV4dHVyZTJEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=