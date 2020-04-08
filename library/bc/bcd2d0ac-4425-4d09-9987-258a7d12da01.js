System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, loader, SkinningModelComponent, Texture2D, systemEvent, SystemEvent, Vec3, math, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Sex, AvatarController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(AvatarController, _Component);

        var _super = _createSuper(AvatarController);

        function AvatarController() {
          var _this;

          _classCallCheck(this, AvatarController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

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
            window.t = this.target;
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
              var materials = current.getComponent(SkinningModelComponent).materials;

              for (var i = 0; i < materials.length; i++) {
                materials[i].setProperty('mainTexture', texture2D);
              }

              if (current !== pre) {
                pre.active = false; // [bug fix] 从A模型切换到B模型时，A模型的全局旋转信息未能更新到最新。

                _this4.target.setRotation(_this4.target.getRotation());
              }

              current.active = true;
              _this4.avatar[part] = dressInfo;
              return current;
            });
          }
          /**
           * 获取着装部位的元素
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiVmVjMyIsIm1hdGgiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTZXgiLCJBdmF0YXJDb250cm9sbGVyIiwidHlwZSIsImhhaXJJbmRleCIsImZhY2VJbmRleCIsImV5ZXNJbmRleCIsInRvcEluZGV4IiwicGFudHNJbmRleCIsInNob2VzSW5kZXgiLCJpbmZvcyIsImtpbmQiLCJzdWIiLCJsZW5ndGgiLCJpbmRleCIsImRyZXNzIiwic2V4IiwiZ2V0QXZhdGFyU2V4IiwiYXZhdGFyIiwiRkVNQUxFIiwiZ2V0QXZhdGFyRmVtYWxlSW5mbyIsImdldEF2YXRhck1hbGVJbmZvIiwidGFyZ2V0IiwiZmVtYWxlIiwid2luZG93IiwidCIsImRyZXNzQWxsIiwidGhlbiIsImFjdGl2ZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwiTU9VU0VfTU9WRSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJtb3ZlbWVudFgiLCJ1cCIsInJvdGF0aW9ueCIsImdldFJvdGF0aW9uIiwiUXVhdCIsInJvdGF0ZUFyb3VuZCIsInNldFJvdGF0aW9uIiwiZ2V0RGVsdGEiLCJ4IiwicGFyc2VJbnQiLCJjYyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYWlyIiwiZmFjZSIsImV5ZXMiLCJ0b3AiLCJwYW50cyIsInNob2VzIiwicHJvbWlzZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGFydCIsIlByb21pc2UiLCJhbGwiLCJkcmVzc0luZm8iLCJwcmUiLCJnZXRQYXJ0IiwiY3VycmVudCIsInJlcyIsImdldFRleHR1cmVSZXMiLCJsb2FkVGV4dHVyZTJEIiwidGV4dHVyZTJEIiwibWF0ZXJpYWxzIiwiZ2V0Q29tcG9uZW50IiwiaSIsInNldFByb3BlcnR5IiwibmFtZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJ0b0xvd2VyQ2FzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkUmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQXFCQyxNQUFBQSxzQixPQUFBQSxzQjtBQUF3QkMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBeUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUNsSUMsTUFBQUEsTyxHQUFzQlYsVSxDQUF0QlUsTztBQUFTQyxNQUFBQSxRLEdBQWFYLFUsQ0FBYlcsUTs7aUJBR1pDLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO0FBQUFBLFFBQUFBLEcsQ0FBQUEsRztTQUFBQSxHLEtBQUFBLEc7O0FBR0o7O2tDQWtCWUMsZ0IsV0FEWkgsT0FBTyxDQUFDLGtCQUFELEMsVUFLSEMsUUFBUSxDQUFDO0FBQUNHLFFBQUFBLElBQUksRUFBRVo7QUFBUCxPQUFELEMsVUFHUlMsUUFBUSxDQUFDO0FBQUNHLFFBQUFBLElBQUksRUFBRVo7QUFBUCxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU9EYSxTLEdBQW9CLEM7Z0JBQ3BCQyxTLEdBQW9CLEM7Z0JBQ3BCQyxTLEdBQW9CLEM7Z0JBQ3BCQyxRLEdBQW1CLEM7Z0JBQ25CQyxVLEdBQXFCLEM7Z0JBQ3JCQyxVLEdBQXFCLEM7Ozs7Ozs7QUFFN0I7Oztz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bXBvbmVudCwgTm9kZSwgbG9hZGVyLCBTcHJpdGVGcmFtZSwgU2tpbm5pbmdNb2RlbENvbXBvbmVudCwgVGV4dHVyZTJELCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIEV2ZW50VG91Y2gsIFZlYzMsIG1hdGggfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cblxuZW51bSBTZXgge1xuICAgIE1BTEUgPSAxLFxuICAgIEZFTUFMRSA9IDIsXG59O1xuXG5pbnRlcmZhY2UgRHJlc3NJbmZvIHtcbiAgICBraW5kPzogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHN1Yj86IHN0cmluZyB8IG51bWJlclxufVxuXG5pbnRlcmZhY2UgQXZhdGFyIHtcbiAgICBbcGFydDogc3RyaW5nXTogRHJlc3NJbmZvLFxuICAgIC8vIGhhaXI6IERyZXNzSW5mbyxcbiAgICAvLyBmYWNlOiBEcmVzc0luZm8sXG4gICAgLy8gZXllczogRHJlc3NJbmZvLFxuICAgIC8vIHRvcDogRHJlc3NJbmZvLFxuICAgIC8vIHBhbnRzOiBEcmVzc0luZm8sXG4gICAgLy8gc2hvZXM6IERyZXNzSW5mb1xufVxuXG5AY2NjbGFzcyhcIkF2YXRhckNvbnRyb2xsZXJcIilcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgZmVtYWxlOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIG1hbGU6IE5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzZXg6IFNleDtcbiAgICBwcml2YXRlIGF2YXRhcjogQXZhdGFyO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBOb2RlO1xuXG4gICAgcHJpdmF0ZSBoYWlySW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBmYWNlSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBleWVzSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0b3BJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBhbnRzSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzaG9lc0luZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog5o2i5Y+R5Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzSGFpcigpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2Jyb3duJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjEsIHN1YjogJ3JlZCd9LHtraW5kOjEsIHN1YjogJ3llbGxvdyd9LHtraW5kOjIsIHN1YjogJ2N5YW4nfSx7a2luZDoyLCBzdWI6ICdkYXJrJ30se2tpbmQ6Miwgc3ViOiAncGluayd9XVxuICAgICAgICB0aGlzLmhhaXJJbmRleCA9ICh0aGlzLmhhaXJJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5oYWlySW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmhhaXJJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnaGFpcicsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouiEuOWei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0ZhY2UoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Mn0sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLmZhY2VJbmRleCA9ICh0aGlzLmZhY2VJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5mYWNlSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmZhY2VJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnZmFjZScsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouecvOedm1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0V5ZXMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7c3ViOiAnYnJvd24nfSx7c3ViOiAnYmx1ZSd9LHtzdWI6ICdncmVlbid9XVxuICAgICAgICB0aGlzLmV5ZXNJbmRleCA9ICh0aGlzLmV5ZXNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5leWVzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmV5ZXNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnZXllcycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouS4iuiho1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1RvcCgpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ3BpbmsnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAnb3JhbmdlJ30se2tpbmQ6Miwgc3ViOiAnZ3JlZW4nfSx7a2luZDoyLCBzdWI6ICdwdXJwbGUnfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMudG9wSW5kZXggPSAodGhpcy50b3BJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy50b3BJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMudG9wSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3RvcCcsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouijpOWtkFxuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1BhbnRzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MSwgc3ViOiAnYmx1ZSd9LHtraW5kOjEsIHN1YjogJ2dyZWVuJ30se2tpbmQ6MSwgc3ViOiAnZGFyayd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICdvcmFuZ2UnfSx7a2luZDoyLCBzdWI6ICdibHVlJ30se2tpbmQ6Miwgc3ViOiAnYmxhY2snfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMucGFudHNJbmRleCA9ICh0aGlzLnBhbnRzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMucGFudHNJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMucGFudHNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygncGFudHMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLpnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NTaG9lcygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ3llbGxvdyd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICd5ZWxsb3cnfSx7a2luZDoyLCBzdWI6ICdibHVlJ30se2tpbmQ6Miwgc3ViOiAncmVkJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnNob2VzSW5kZXggPSAodGhpcy5zaG9lc0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnNob2VzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnNob2VzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3Nob2VzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuc2V4ID0gdGhpcy5nZXRBdmF0YXJTZXgoKTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/IHRoaXMuZ2V0QXZhdGFyRmVtYWxlSW5mbygpIDogdGhpcy5nZXRBdmF0YXJNYWxlSW5mbygpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gdGhpcy5mZW1hbGUgOiB0aGlzLmZlbWFsZTtcbiAgICAgICAgd2luZG93LnQgPSB0aGlzLnRhcmdldFxuICAgICAgICB0aGlzLmRyZXNzQWxsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfTU9WRSx0aGlzLm9uTW91c2VNb3ZlLHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpvKDmoIfmi5bliqjmk43mjqfkurrnianml4vovaxcbiAgICAgKiBAcGFyYW0gZXZlbnQg5LqL5Lu25a+56LGhXG4gICAgICovXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpe1xuICAgICAgICBpZihldmVudC5tb3ZlbWVudFghPTApe1xuICAgICAgICAgICAgY29uc3QgdXAgPW5ldyBWZWMzKDAsMSwwKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9ueCA9IHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBtYXRoLlF1YXQucm90YXRlQXJvdW5kKHJvdGF0aW9ueCwgcm90YXRpb254LCB1cCwgZXZlbnQubW92ZW1lbnRYLzUvIDM2MC4wICogMy4xNDE1OTI2NTM1KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHJvdGF0aW9ueCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6Kem5pG45pON5o6n5Lq654mp5peL6L2sXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuWvueixoVxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQuZ2V0RGVsdGEoKS54ICE9IDApe1xuICAgICAgICAgICAgY29uc3QgdXAgPW5ldyBWZWMzKDAsMSwwKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9ueCA9IHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBtYXRoLlF1YXQucm90YXRlQXJvdW5kKHJvdGF0aW9ueCwgcm90YXRpb254LCB1cCwgZXZlbnQuZ2V0RGVsdGEoKS54LzUvIDM2MC4wICogMy4xNDE1OTI2NTM1KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHJvdGF0aW9ueCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5oCn5YirXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhclNleCAoKTogU2V4IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyc3lzX3NleCcpKSB8fCBTZXguRkVNQUxFXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWls+aAp+edgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJGZW1hbGVJbmZvICgpOiBBdmF0YXIge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19mZW1hbGVfaW5mbycpKSB8fCB7XG4gICAgICAgICAgICBoYWlyOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdicm93bidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWNlOiB7XG4gICAgICAgICAgICAgICAga2luZDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV5ZXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYW50czoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG9lczoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnlLfmgKfnnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyTWFsZUluZm8gKCk6IEF2YXRhciB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyc3lzX21hbGVfaW5mbycpKSB8fCB7XG4gICAgICAgICAgICBoYWlyOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdicm93bidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWNlOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdub3JtYWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXllczoge1xuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhbnRzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob2VzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaVtOS9k+edgOijhVxuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0FsbCAoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gT2JqZWN0LmtleXModGhpcy5hdmF0YXIpLm1hcCgocGFydDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kcmVzcyhwYXJ0LCB0aGlzLmF2YXRhcltwYXJ0XSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmDqOS9jeedgOijhVxuICAgICAqIEBwYXJhbSBwYXJ0IOmDqOS9jVxuICAgICAqIEBwYXJhbSBkcmVzc0luZm8g6YOo5L2N552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzIChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogUHJvbWlzZTxOb2RlPiB7XG4gICAgICAgIGNvbnN0IHByZSA9IHRoaXMuZ2V0UGFydChwYXJ0LCB0aGlzLmF2YXRhcltwYXJ0XSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFBhcnQocGFydCwgZHJlc3NJbmZvKTtcbiAgICAgICAgY29uc3QgcmVzOiBzdHJpbmcgPSB0aGlzLmdldFRleHR1cmVSZXMocGFydCwgZHJlc3NJbmZvKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZFRleHR1cmUyRChyZXMpLnRoZW4oKHRleHR1cmUyRDogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBjdXJyZW50LmdldENvbXBvbmVudChTa2lubmluZ01vZGVsQ29tcG9uZW50KS5tYXRlcmlhbHM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1tpXS5zZXRQcm9wZXJ0eSgnbWFpblRleHR1cmUnLCB0ZXh0dXJlMkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgIT09IHByZSkge1xuICAgICAgICAgICAgICAgIHByZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBbYnVnIGZpeF0g5LuOQeaooeWei+WIh+aNouWIsELmqKHlnovml7bvvIxB5qih5Z6L55qE5YWo5bGA5peL6L2s5L+h5oGv5pyq6IO95pu05paw5Yiw5pyA5paw44CCXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24odGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmF2YXRhcltwYXJ0XSA9IGRyZXNzSW5mbztcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnnYDoo4Xpg6jkvY3nmoTlhYPntKBcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQYXJ0IChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogTm9kZSB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgJHtwYXJ0fSR7a2luZD9gLSR7a2luZH1gOicnfWBcbiAgICAgICAgY29uc3QgY2hpbGRyZW46IE5vZGVbXSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6YOo5L2N55u45bqU55qE6LWE5rqQ5Zyw5Z2AXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGV4dHVyZVJlcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IHNleCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gJ0ZlbWFsZScgOiAnTWFsZSdcbiAgICAgICAgcmV0dXJuIGBjaGFyYWN0ZXJzLyR7c2V4fS90ZXh0dXJlcy8ke3NleC50b0xvd2VyQ2FzZSgpfV8ke3BhcnR9JHtraW5kP2AtJHtraW5kfWA6Jyd9JHtzdWI/YF8ke3N1Yn1gOicnfS90ZXh0dXJlYFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqjmgIHliqDovb3otLTlm75cbiAgICAgKiBAcGFyYW0gcmVzIOi1hOa6kOWcsOWdgFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkVGV4dHVyZTJEIChyZXMpIDogUHJvbWlzZTxUZXh0dXJlMkQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKHJlcywgVGV4dHVyZTJEICwoZXJyOiBhbnksIHRleHR1cmUyRDogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRleHR1cmUyRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19