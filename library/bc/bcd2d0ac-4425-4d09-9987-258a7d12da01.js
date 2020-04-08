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
              var materials = current.getComponent(SkinningModelComponent).materials; // console.log(current.getComponent(SkinningModelComponent).materials)

              for (var i = 0; i < materials.length; i++) {
                var material = materials[i];
                material.setProperty('mainTexture', texture2D);
              }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiVmVjMyIsIm1hdGgiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTZXgiLCJBdmF0YXJDb250cm9sbGVyIiwidHlwZSIsImhhaXJJbmRleCIsImZhY2VJbmRleCIsImV5ZXNJbmRleCIsInRvcEluZGV4IiwicGFudHNJbmRleCIsInNob2VzSW5kZXgiLCJpbmZvcyIsImtpbmQiLCJzdWIiLCJsZW5ndGgiLCJpbmRleCIsImRyZXNzIiwic2V4IiwiZ2V0QXZhdGFyU2V4IiwiYXZhdGFyIiwiRkVNQUxFIiwiZ2V0QXZhdGFyRmVtYWxlSW5mbyIsImdldEF2YXRhck1hbGVJbmZvIiwidGFyZ2V0IiwiZmVtYWxlIiwid2luZG93IiwidCIsImRyZXNzQWxsIiwidGhlbiIsImFjdGl2ZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwiTU9VU0VfTU9WRSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJtb3ZlbWVudFgiLCJ1cCIsInJvdGF0aW9ueCIsImdldFJvdGF0aW9uIiwiUXVhdCIsInJvdGF0ZUFyb3VuZCIsInNldFJvdGF0aW9uIiwiZ2V0RGVsdGEiLCJ4IiwicGFyc2VJbnQiLCJjYyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYWlyIiwiZmFjZSIsImV5ZXMiLCJ0b3AiLCJwYW50cyIsInNob2VzIiwicHJvbWlzZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGFydCIsIlByb21pc2UiLCJhbGwiLCJkcmVzc0luZm8iLCJwcmUiLCJnZXRQYXJ0IiwiY3VycmVudCIsInJlcyIsImdldFRleHR1cmVSZXMiLCJsb2FkVGV4dHVyZTJEIiwidGV4dHVyZTJEIiwibWF0ZXJpYWxzIiwiZ2V0Q29tcG9uZW50IiwiaSIsIm1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJuYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInRvTG93ZXJDYXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRSZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLHNCLE9BQUFBLHNCO0FBQXdCQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ2xJQyxNQUFBQSxPLEdBQXNCVixVLENBQXRCVSxPO0FBQVNDLE1BQUFBLFEsR0FBYVgsVSxDQUFiVyxROztpQkFHWkMsRztBQUFBQSxRQUFBQSxHLENBQUFBLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO1NBQUFBLEcsS0FBQUEsRzs7QUFHSjs7a0NBa0JZQyxnQixXQURaSCxPQUFPLENBQUMsa0JBQUQsQyxVQUtIQyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFWjtBQUFQLE9BQUQsQyxVQUdSUyxRQUFRLENBQUM7QUFBQ0csUUFBQUEsSUFBSSxFQUFFWjtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT0RhLFMsR0FBb0IsQztnQkFDcEJDLFMsR0FBb0IsQztnQkFDcEJDLFMsR0FBb0IsQztnQkFDcEJDLFEsR0FBbUIsQztnQkFDbkJDLFUsR0FBcUIsQztnQkFDckJDLFUsR0FBcUIsQzs7Ozs7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QUQsQ0FBdEI7O0FBQ0Esa0JBQUlLLEtBQUssQ0FBQ0YsSUFBTixLQUFlQSxJQUFuQixFQUF5QjtBQUNyQix1QkFBT0UsS0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNEOzs7Ozs7Ozt3Q0FLc0JsQixJLEVBQWNHLFMsRUFBOEI7QUFBQSxnQkFDdkR0RCxJQUR1RCxHQUMxQ3NELFNBRDBDLENBQ3ZEdEQsSUFEdUQ7QUFBQSxnQkFDakRDLEdBRGlELEdBQzFDcUQsU0FEMEMsQ0FDakRyRCxHQURpRDtBQUU5RCxnQkFBTUksR0FBRyxHQUFHLEtBQUtBLEdBQUwsS0FBYWYsR0FBRyxDQUFDa0IsTUFBakIsR0FBMEIsUUFBMUIsR0FBcUMsTUFBakQ7QUFDQSx3Q0FBcUJILEdBQXJCLHVCQUFxQ0EsR0FBRyxDQUFDaUUsV0FBSixFQUFyQyxjQUEwRG5CLElBQTFELFNBQWlFbkQsSUFBSSxjQUFLQSxJQUFMLElBQVksRUFBakYsU0FBc0ZDLEdBQUcsY0FBS0EsR0FBTCxJQUFXLEVBQXBHO0FBQ0g7QUFDRDs7Ozs7Ozt3Q0FJc0J5RCxHLEVBQTBCO0FBQzVDLG1CQUFPLElBQUlOLE9BQUosQ0FBWSxVQUFDbUIsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDM0YsY0FBQUEsTUFBTSxDQUFDNEYsT0FBUCxDQUFlZixHQUFmLEVBQW9CM0UsU0FBcEIsRUFBK0IsVUFBQzJGLEdBQUQsRUFBV2IsU0FBWCxFQUFvQztBQUMvRCxvQkFBSWEsR0FBSixFQUFTO0FBQ0xGLGtCQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILGlCQUZELE1BRU87QUFDSEgsa0JBQUFBLE9BQU8sQ0FBQ1YsU0FBRCxDQUFQO0FBQ0g7QUFDSixlQU5EO0FBT0gsYUFSTSxDQUFQO0FBU0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUE3UGtDbEYsUzs7Ozs7aUJBS1osSTs7Ozs7OztpQkFHRixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIsIFNwcml0ZUZyYW1lLCBTa2lubmluZ01vZGVsQ29tcG9uZW50LCBUZXh0dXJlMkQsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgRXZlbnRUb3VjaCwgVmVjMywgbWF0aCB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuXG5lbnVtIFNleCB7XG4gICAgTUFMRSA9IDEsXG4gICAgRkVNQUxFID0gMixcbn07XG5cbmludGVyZmFjZSBEcmVzc0luZm8ge1xuICAgIGtpbmQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgc3ViPzogc3RyaW5nIHwgbnVtYmVyXG59XG5cbmludGVyZmFjZSBBdmF0YXIge1xuICAgIFtwYXJ0OiBzdHJpbmddOiBEcmVzc0luZm8sXG4gICAgLy8gaGFpcjogRHJlc3NJbmZvLFxuICAgIC8vIGZhY2U6IERyZXNzSW5mbyxcbiAgICAvLyBleWVzOiBEcmVzc0luZm8sXG4gICAgLy8gdG9wOiBEcmVzc0luZm8sXG4gICAgLy8gcGFudHM6IERyZXNzSW5mbyxcbiAgICAvLyBzaG9lczogRHJlc3NJbmZvXG59XG5cbkBjY2NsYXNzKFwiQXZhdGFyQ29udHJvbGxlclwiKVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBmZW1hbGU6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgbWFsZTogTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNleDogU2V4O1xuICAgIHByaXZhdGUgYXZhdGFyOiBBdmF0YXI7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IE5vZGU7XG5cbiAgICBwcml2YXRlIGhhaXJJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZhY2VJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGV5ZXNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRvcEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFudHNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNob2VzSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiDmjaLlj5HlnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NIYWlyKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MSwgc3ViOiAnYnJvd24nfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6MSwgc3ViOiAncmVkJ30se2tpbmQ6MSwgc3ViOiAneWVsbG93J30se2tpbmQ6Miwgc3ViOiAnY3lhbid9LHtraW5kOjIsIHN1YjogJ2RhcmsnfSx7a2luZDoyLCBzdWI6ICdwaW5rJ31dXG4gICAgICAgIHRoaXMuaGFpckluZGV4ID0gKHRoaXMuaGFpckluZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLmhhaXJJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMuaGFpckluZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdoYWlyJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i6IS45Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzRmFjZSgpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjF9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMuZmFjZUluZGV4ID0gKHRoaXMuZmFjZUluZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLmZhY2VJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMuZmFjZUluZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdmYWNlJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i55y8552bXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzRXllcygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3tzdWI6ICdicm93bid9LHtzdWI6ICdibHVlJ30se3N1YjogJ2dyZWVuJ31dXG4gICAgICAgIHRoaXMuZXllc0luZGV4ID0gKHRoaXMuZXllc0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLmV5ZXNJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMuZXllc0luZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdleWVzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i5LiK6KGjXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzVG9wKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MSwgc3ViOiAnYmx1ZSd9LHtraW5kOjEsIHN1YjogJ2dyZWVuJ30se2tpbmQ6MSwgc3ViOiAncGluayd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICdvcmFuZ2UnfSx7a2luZDoyLCBzdWI6ICdncmVlbid9LHtraW5kOjIsIHN1YjogJ3B1cnBsZSd9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy50b3BJbmRleCA9ICh0aGlzLnRvcEluZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnRvcEluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy50b3BJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygndG9wJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i6KOk5a2QXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzUGFudHMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICdkYXJrJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjIsIHN1YjogJ29yYW5nZSd9LHtraW5kOjIsIHN1YjogJ2JsdWUnfSx7a2luZDoyLCBzdWI6ICdibGFjayd9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5wYW50c0luZGV4ID0gKHRoaXMucGFudHNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5wYW50c0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5wYW50c0luZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdwYW50cycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNoumei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1Nob2VzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MSwgc3ViOiAnYmx1ZSd9LHtraW5kOjEsIHN1YjogJ2dyZWVuJ30se2tpbmQ6MSwgc3ViOiAneWVsbG93J30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjIsIHN1YjogJ3llbGxvdyd9LHtraW5kOjIsIHN1YjogJ2JsdWUnfSx7a2luZDoyLCBzdWI6ICdyZWQnfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMuc2hvZXNJbmRleCA9ICh0aGlzLnNob2VzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuc2hvZXNJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMuc2hvZXNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnc2hvZXMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zZXggPSB0aGlzLmdldEF2YXRhclNleCgpO1xuICAgICAgICB0aGlzLmF2YXRhciA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gdGhpcy5nZXRBdmF0YXJGZW1hbGVJbmZvKCkgOiB0aGlzLmdldEF2YXRhck1hbGVJbmZvKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5zZXggPT09IFNleC5GRU1BTEUgPyB0aGlzLmZlbWFsZSA6IHRoaXMuZmVtYWxlO1xuICAgICAgICB3aW5kb3cudCA9IHRoaXMudGFyZ2V0XG4gICAgICAgIHRoaXMuZHJlc3NBbGwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9NT1ZFLHRoaXMub25Nb3VzZU1vdmUsdGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOm8oOagh+aLluWKqOaTjeaOp+S6uueJqeaXi+i9rFxuICAgICAqIEBwYXJhbSBldmVudCDkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZShldmVudCl7XG4gICAgICAgIGlmKGV2ZW50Lm1vdmVtZW50WCE9MCl7XG4gICAgICAgICAgICBjb25zdCB1cCA9bmV3IFZlYzMoMCwxLDApO1xuICAgICAgICAgICAgY29uc3Qgcm90YXRpb254ID0gdGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIG1hdGguUXVhdC5yb3RhdGVBcm91bmQocm90YXRpb254LCByb3RhdGlvbngsIHVwLCBldmVudC5tb3ZlbWVudFgvNS8gMzYwLjAgKiAzLjE0MTU5MjY1MzUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24ocm90YXRpb254KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDop6bmkbjmk43mjqfkurrnianml4vovaxcbiAgICAgKiBAcGFyYW0gZXZlbnQg5LqL5Lu25a+56LGhXG4gICAgICovXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpe1xuICAgICAgICBpZihldmVudC5nZXREZWx0YSgpLnggIT0gMCl7XG4gICAgICAgICAgICBjb25zdCB1cCA9bmV3IFZlYzMoMCwxLDApO1xuICAgICAgICAgICAgY29uc3Qgcm90YXRpb254ID0gdGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIG1hdGguUXVhdC5yb3RhdGVBcm91bmQocm90YXRpb254LCByb3RhdGlvbngsIHVwLCBldmVudC5nZXREZWx0YSgpLngvNS8gMzYwLjAgKiAzLjE0MTU5MjY1MzUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24ocm90YXRpb254KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmgKfliKtcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyU2V4ICgpOiBTZXgge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfc2V4JykpIHx8IFNleC5GRU1BTEVcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5aWz5oCn552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhckZlbWFsZUluZm8gKCk6IEF2YXRhciB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyc3lzX2ZlbWFsZV9pbmZvJykpIHx8IHtcbiAgICAgICAgICAgIGhhaXI6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2Jyb3duJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhY2U6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXllczoge1xuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhbnRzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob2VzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlueUt+aAp+edgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJNYWxlSW5mbyAoKTogQXZhdGFyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfbWFsZV9pbmZvJykpIHx8IHtcbiAgICAgICAgICAgIGhhaXI6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2Jyb3duJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhY2U6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ25vcm1hbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleWVzOiB7XG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFudHM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvZXM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5pW05L2T552A6KOFXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzQWxsICgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBPYmplY3Qua2V5cyh0aGlzLmF2YXRhcikubWFwKChwYXJ0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyZXNzKHBhcnQsIHRoaXMuYXZhdGFyW3BhcnRdKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6YOo5L2N552A6KOFXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3MgKHBhcnQ6IHN0cmluZywgZHJlc3NJbmZvOiBEcmVzc0luZm8pOiBQcm9taXNlPE5vZGU+IHtcbiAgICAgICAgY29uc3QgcHJlID0gdGhpcy5nZXRQYXJ0KHBhcnQsIHRoaXMuYXZhdGFyW3BhcnRdKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UGFydChwYXJ0LCBkcmVzc0luZm8pO1xuICAgICAgICBjb25zdCByZXM6IHN0cmluZyA9IHRoaXMuZ2V0VGV4dHVyZVJlcyhwYXJ0LCBkcmVzc0luZm8pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkVGV4dHVyZTJEKHJlcykudGhlbigodGV4dHVyZTJEOiBUZXh0dXJlMkQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGN1cnJlbnQuZ2V0Q29tcG9uZW50KFNraW5uaW5nTW9kZWxDb21wb25lbnQpLm1hdGVyaWFscztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnQuZ2V0Q29tcG9uZW50KFNraW5uaW5nTW9kZWxDb21wb25lbnQpLm1hdGVyaWFscylcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBtYXRlcmlhbHNbaV07XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21haW5UZXh0dXJlJywgdGV4dHVyZTJEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBwcmUpIHtcbiAgICAgICAgICAgICAgICBwcmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmF2YXRhcltwYXJ0XSA9IGRyZXNzSW5mbztcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnn6XpgZPpg6jkvY3nmoTlhYPntKBcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQYXJ0IChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogTm9kZSB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgJHtwYXJ0fSR7a2luZD9gLSR7a2luZH1gOicnfWBcbiAgICAgICAgY29uc3QgY2hpbGRyZW46IE5vZGVbXSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6YOo5L2N55u45bqU55qE6LWE5rqQ5Zyw5Z2AXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGV4dHVyZVJlcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IHNleCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gJ0ZlbWFsZScgOiAnTWFsZSdcbiAgICAgICAgcmV0dXJuIGBjaGFyYWN0ZXJzLyR7c2V4fS90ZXh0dXJlcy8ke3NleC50b0xvd2VyQ2FzZSgpfV8ke3BhcnR9JHtraW5kP2AtJHtraW5kfWA6Jyd9JHtzdWI/YF8ke3N1Yn1gOicnfS90ZXh0dXJlYFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqjmgIHliqDovb3otLTlm75cbiAgICAgKiBAcGFyYW0gcmVzIOi1hOa6kOWcsOWdgFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkVGV4dHVyZTJEIChyZXMpIDogUHJvbWlzZTxUZXh0dXJlMkQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKHJlcywgVGV4dHVyZTJEICwoZXJyOiBhbnksIHRleHR1cmUyRDogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRleHR1cmUyRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19