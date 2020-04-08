System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, loader, SkinningModelComponent, Texture2D, systemEvent, SystemEvent, Vec3, math, tween, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, Sex, AvatarController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
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
      tween = _cc.tween;
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
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
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

          _initializerDefineProperty(_this, "camera", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nFacePanel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nDressPanel", _descriptor5, _assertThisInitialized(_this));

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
          /**
           * 切到捏脸
           */

        }, {
          key: "switchToNFace",
          value: function switchToNFace() {
            // tween(this.camera)
            //     .to(0.4, { position: new Vec3(0, 0.6, -1.5) }, { easing: 'smooth' })
            //     .start();
            tween(this.target).to(0.4, {
              rotation: new math.Quat(0, 0, 0, 1)
            }, {
              easing: 'linear'
            }).start();
            this.camera.setPosition(new Vec3(0, 0.6, -1.5));
            this.rotationInNDress = this.target.getRotation(); // this.target.setRotation(new math.Quat(0, 0, 0 ,1));

            this.nFacePanel.active = true;
            this.nDressPanel.active = false;
          }
          /**
           * 切到换装
           */

        }, {
          key: "switchToNDress",
          value: function switchToNDress() {
            // tween(this.camera)
            //     .to(0.4, { position: new Vec3(0, 0, 0) }, { easing: 'smooth' })
            //     .start();
            tween(this.target).to(0.4, {
              rotation: this.rotationInNDress
            }, {
              easing: 'linear'
            }).start();
            this.camera.setPosition(new Vec3(0, 0, 0)); // this.target.setRotation(this.rotationInNDress);

            this.nFacePanel.active = false;
            this.nDressPanel.active = true;
          }
          /**
           * 捏下巴
           * @param slider 滑杆
           */

        }, {
          key: "nJaw",
          value: function nJaw(slider) {
            var jaw = this.target.children[0].children[10].children[0].children[0].children[0].children[0].children[7];
            jaw.setPosition(_objectSpread({}, jaw.position, {
              x: 0.0006415533716790378 + 0.00008 * (slider.progress - 0.7) * 2
            }));
          }
        }, {
          key: "hideUnusedParts",
          value: function hideUnusedParts() {
            var parts = this.target.children[0].children;

            for (var i = 0; i < parts.length; i++) {
              var _part = parts[i];
              console.log(_part);

              if (!_part.getComponent(SkinningModelComponent)) {
                continue;
              }

              var material = _part.getComponent(SkinningModelComponent).materials[0];

              console.log(material.getProperty('mainTexture'));

              if (!material.getProperty('mainTexture')) {
                _part.active = false;
              }
            }
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.sex = this.getAvatarSex();
            this.avatar = this.sex === Sex.FEMALE ? this.getAvatarFemaleInfo() : this.getAvatarMaleInfo();
            this.target = this.sex === Sex.FEMALE ? this.female : this.female;
            window.camera = this.camera;
            this.dressAll().then(function () {
              _this2.target.active = true; // [bug fixed] 关闭useBakedAnimation之后,从模型A切换到模型B时，模型B动画会卡住。这里处理的方法是在加载人物时默认所有的模型都是active状态，等加载完毕时再讲不需要展示的模型隐藏。隐藏需要异步进行，否则仍然会卡。

              setTimeout(function () {
                _this2.hideUnusedParts();
              });
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
                pre.active = false; // [bug fixed] 从A模型切换到B模型时，A模型的全局旋转信息未能更新到最新。

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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nFacePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nDressPanel", [_dec6], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiVmVjMyIsIm1hdGgiLCJ0d2VlbiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNleCIsIkF2YXRhckNvbnRyb2xsZXIiLCJ0eXBlIiwiaGFpckluZGV4IiwiZmFjZUluZGV4IiwiZXllc0luZGV4IiwidG9wSW5kZXgiLCJwYW50c0luZGV4Iiwic2hvZXNJbmRleCIsImluZm9zIiwia2luZCIsInN1YiIsImxlbmd0aCIsImluZGV4IiwiZHJlc3MiLCJ0YXJnZXQiLCJ0byIsInJvdGF0aW9uIiwiUXVhdCIsImVhc2luZyIsInN0YXJ0IiwiY2FtZXJhIiwic2V0UG9zaXRpb24iLCJyb3RhdGlvbkluTkRyZXNzIiwiZ2V0Um90YXRpb24iLCJuRmFjZVBhbmVsIiwiYWN0aXZlIiwibkRyZXNzUGFuZWwiLCJzbGlkZXIiLCJqYXciLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwieCIsInByb2dyZXNzIiwicGFydHMiLCJpIiwicGFydCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21wb25lbnQiLCJtYXRlcmlhbCIsIm1hdGVyaWFscyIsImdldFByb3BlcnR5Iiwic2V4IiwiZ2V0QXZhdGFyU2V4IiwiYXZhdGFyIiwiRkVNQUxFIiwiZ2V0QXZhdGFyRmVtYWxlSW5mbyIsImdldEF2YXRhck1hbGVJbmZvIiwiZmVtYWxlIiwid2luZG93IiwiZHJlc3NBbGwiLCJ0aGVuIiwic2V0VGltZW91dCIsImhpZGVVbnVzZWRQYXJ0cyIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwiTU9VU0VfTU9WRSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJtb3ZlbWVudFgiLCJ1cCIsInJvdGF0aW9ueCIsInJvdGF0ZUFyb3VuZCIsInNldFJvdGF0aW9uIiwiZ2V0RGVsdGEiLCJwYXJzZUludCIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImhhaXIiLCJmYWNlIiwiZXllcyIsInRvcCIsInBhbnRzIiwic2hvZXMiLCJwcm9taXNlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJQcm9taXNlIiwiYWxsIiwiZHJlc3NJbmZvIiwicHJlIiwiZ2V0UGFydCIsImN1cnJlbnQiLCJyZXMiLCJnZXRUZXh0dXJlUmVzIiwibG9hZFRleHR1cmUyRCIsInRleHR1cmUyRCIsInNldFByb3BlcnR5IiwibmFtZSIsImNoaWxkIiwidG9Mb3dlckNhc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFxQkMsTUFBQUEsc0IsT0FBQUEsc0I7QUFBd0JDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSzs7Ozs7O0FBQ3hJQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxROztpQkFHWkMsRztBQUFBQSxRQUFBQSxHLENBQUFBLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO1NBQUFBLEcsS0FBQUEsRzs7QUFHSjs7a0NBa0JZQyxnQixXQURaSCxPQUFP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QXFDLE1BQWpEO0FBQ0Esd0NBQXFCSCxHQUFyQix1QkFBcUNBLEdBQUcsQ0FBQ3VELFdBQUosRUFBckMsY0FBMEQ5RCxJQUExRCxTQUFpRTFCLElBQUksY0FBS0EsSUFBTCxJQUFZLEVBQWpGLFNBQXNGQyxHQUFHLGNBQUtBLEdBQUwsSUFBVyxFQUFwRztBQUNIO0FBQ0Q7Ozs7Ozs7d0NBSXNCZ0YsRyxFQUEwQjtBQUM1QyxtQkFBTyxJQUFJTixPQUFKLENBQVksVUFBQ2MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDOUcsY0FBQUEsTUFBTSxDQUFDK0csT0FBUCxDQUFlVixHQUFmLEVBQW9CbkcsU0FBcEIsRUFBK0IsVUFBQzhHLEdBQUQsRUFBV1IsU0FBWCxFQUFvQztBQUMvRCxvQkFBSVEsR0FBSixFQUFTO0FBQ0xGLGtCQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILGlCQUZELE1BRU87QUFDSEgsa0JBQUFBLE9BQU8sQ0FBQ0wsU0FBRCxDQUFQO0FBQ0g7QUFDSixlQU5EO0FBT0gsYUFSTSxDQUFQO0FBU0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUFuVWtDMUcsUzs7Ozs7aUJBS1osSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdJLEk7Ozs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFHQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIsIFNwcml0ZUZyYW1lLCBTa2lubmluZ01vZGVsQ29tcG9uZW50LCBUZXh0dXJlMkQsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgRXZlbnRUb3VjaCwgVmVjMywgbWF0aCwgdHdlZW4sIFNsaWRlckNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuXG5lbnVtIFNleCB7XG4gICAgTUFMRSA9IDEsXG4gICAgRkVNQUxFID0gMixcbn07XG5cbmludGVyZmFjZSBEcmVzc0luZm8ge1xuICAgIGtpbmQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgc3ViPzogc3RyaW5nIHwgbnVtYmVyXG59XG5cbmludGVyZmFjZSBBdmF0YXIge1xuICAgIFtwYXJ0OiBzdHJpbmddOiBEcmVzc0luZm8sXG4gICAgLy8gaGFpcjogRHJlc3NJbmZvLFxuICAgIC8vIGZhY2U6IERyZXNzSW5mbyxcbiAgICAvLyBleWVzOiBEcmVzc0luZm8sXG4gICAgLy8gdG9wOiBEcmVzc0luZm8sXG4gICAgLy8gcGFudHM6IERyZXNzSW5mbyxcbiAgICAvLyBzaG9lczogRHJlc3NJbmZvXG59XG5cbkBjY2NsYXNzKFwiQXZhdGFyQ29udHJvbGxlclwiKVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBmZW1hbGU6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgbWFsZTogTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXG4gICAgcmVhZG9ubHkgY2FtZXJhOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBuRmFjZVBhbmVsOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBuRHJlc3NQYW5lbDogTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNleDogU2V4O1xuICAgIHByaXZhdGUgYXZhdGFyOiBBdmF0YXI7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IE5vZGU7XG5cbiAgICBwcml2YXRlIGhhaXJJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZhY2VJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGV5ZXNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRvcEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFudHNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNob2VzSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHJvdGF0aW9uSW5ORHJlc3M6IG1hdGguUXVhdDtcblxuICAgIC8qKlxuICAgICAqIOaNouWPkeWei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0hhaXIoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdicm93bid9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoxLCBzdWI6ICdyZWQnfSx7a2luZDoxLCBzdWI6ICd5ZWxsb3cnfSx7a2luZDoyLCBzdWI6ICdjeWFuJ30se2tpbmQ6Miwgc3ViOiAnZGFyayd9LHtraW5kOjIsIHN1YjogJ3BpbmsnfV1cbiAgICAgICAgdGhpcy5oYWlySW5kZXggPSAodGhpcy5oYWlySW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuaGFpckluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5oYWlySW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2hhaXInLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLohLjlnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NGYWNlKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MX0sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjJ9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5mYWNlSW5kZXggPSAodGhpcy5mYWNlSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuZmFjZUluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5mYWNlSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2ZhY2UnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLnnLznnZtcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NFeWVzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe3N1YjogJ2Jyb3duJ30se3N1YjogJ2JsdWUnfSx7c3ViOiAnZ3JlZW4nfV1cbiAgICAgICAgdGhpcy5leWVzSW5kZXggPSAodGhpcy5leWVzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuZXllc0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5leWVzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2V5ZXMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLkuIrooaNcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NUb3AoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICdwaW5rJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjIsIHN1YjogJ29yYW5nZSd9LHtraW5kOjIsIHN1YjogJ2dyZWVuJ30se2tpbmQ6Miwgc3ViOiAncHVycGxlJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnRvcEluZGV4ID0gKHRoaXMudG9wSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMudG9wSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnRvcEluZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCd0b3AnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLoo6TlrZBcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NQYW50cygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ2RhcmsnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAnb3JhbmdlJ30se2tpbmQ6Miwgc3ViOiAnYmx1ZSd9LHtraW5kOjIsIHN1YjogJ2JsYWNrJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnBhbnRzSW5kZXggPSAodGhpcy5wYW50c0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnBhbnRzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnBhbnRzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3BhbnRzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i6Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzU2hvZXMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICd5ZWxsb3cnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAneWVsbG93J30se2tpbmQ6Miwgc3ViOiAnYmx1ZSd9LHtraW5kOjIsIHN1YjogJ3JlZCd9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5zaG9lc0luZGV4ID0gKHRoaXMuc2hvZXNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5zaG9lc0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5zaG9lc0luZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdzaG9lcycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+WIsOaNj+iEuFxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hUb05GYWNlKCkge1xuICAgICAgICAvLyB0d2Vlbih0aGlzLmNhbWVyYSlcbiAgICAgICAgLy8gICAgIC50bygwLjQsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDAuNiwgLTEuNSkgfSwgeyBlYXNpbmc6ICdzbW9vdGgnIH0pXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy50YXJnZXQpXG4gICAgICAgICAgICAudG8oMC40LCB7IHJvdGF0aW9uOiBuZXcgbWF0aC5RdWF0KDAsIDAsIDAsIDEpIH0sIHsgZWFzaW5nOiAnbGluZWFyJyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBWZWMzKDAsIDAuNiwgLTEuNSkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uSW5ORHJlc3MgPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAvLyB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihuZXcgbWF0aC5RdWF0KDAsIDAsIDAgLDEpKTtcbiAgICAgICAgdGhpcy5uRmFjZVBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubkRyZXNzUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+WIsOaNouijhVxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hUb05EcmVzcygpIHtcbiAgICAgICAgLy8gdHdlZW4odGhpcy5jYW1lcmEpXG4gICAgICAgIC8vICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBuZXcgVmVjMygwLCAwLCAwKSB9LCB7IGVhc2luZzogJ3Ntb290aCcgfSlcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0aGlzLnRhcmdldClcbiAgICAgICAgICAgIC50bygwLjQsIHsgcm90YXRpb246IHRoaXMucm90YXRpb25Jbk5EcmVzcyB9LCB7IGVhc2luZzogJ2xpbmVhcicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0aGlzLmNhbWVyYS5zZXRQb3NpdGlvbihuZXcgVmVjMygwLCAwLCAwKSk7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHRoaXMucm90YXRpb25Jbk5EcmVzcyk7XG4gICAgICAgIHRoaXMubkZhY2VQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uRHJlc3NQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjY/kuIvlt7RcbiAgICAgKiBAcGFyYW0gc2xpZGVyIOa7keadhlxuICAgICAqL1xuICAgIHB1YmxpYyBuSmF3KHNsaWRlcjogU2xpZGVyQ29tcG9uZW50KXtcbiAgICAgICAgY29uc3QgamF3ID0gdGhpcy50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMTBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzddO1xuICAgICAgICBqYXcuc2V0UG9zaXRpb24oey4uLmphdy5wb3NpdGlvbiwgeDogMC4wMDA2NDE1NTMzNzE2NzkwMzc4ICsgMC4wMDAwOCAqIChzbGlkZXIucHJvZ3Jlc3MgLSAwLjcpICogMn0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlVW51c2VkUGFydHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnQpXG4gICAgICAgICAgICBpZiAoIXBhcnQuZ2V0Q29tcG9uZW50KFNraW5uaW5nTW9kZWxDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHBhcnQuZ2V0Q29tcG9uZW50KFNraW5uaW5nTW9kZWxDb21wb25lbnQpLm1hdGVyaWFsc1swXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hdGVyaWFsLmdldFByb3BlcnR5KCdtYWluVGV4dHVyZScpKVxuICAgICAgICAgICAgaWYgKCFtYXRlcmlhbC5nZXRQcm9wZXJ0eSgnbWFpblRleHR1cmUnKSkge1xuICAgICAgICAgICAgICAgIHBhcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuc2V4ID0gdGhpcy5nZXRBdmF0YXJTZXgoKTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/IHRoaXMuZ2V0QXZhdGFyRmVtYWxlSW5mbygpIDogdGhpcy5nZXRBdmF0YXJNYWxlSW5mbygpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gdGhpcy5mZW1hbGUgOiB0aGlzLmZlbWFsZTtcbiAgICAgICAgd2luZG93LmNhbWVyYSA9IHRoaXMuY2FtZXJhXG4gICAgICAgIHRoaXMuZHJlc3NBbGwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBbYnVnIGZpeGVkXSDlhbPpl611c2VCYWtlZEFuaW1hdGlvbuS5i+WQjizku47mqKHlnotB5YiH5o2i5Yiw5qih5Z6LQuaXtu+8jOaooeWei0LliqjnlLvkvJrljaHkvY/jgILov5nph4zlpITnkIbnmoTmlrnms5XmmK/lnKjliqDovb3kurrnianml7bpu5jorqTmiYDmnInnmoTmqKHlnovpg73mmK9hY3RpdmXnirbmgIHvvIznrYnliqDovb3lrozmr5Xml7blho3orrLkuI3pnIDopoHlsZXnpLrnmoTmqKHlnovpmpDol4/jgILpmpDol4/pnIDopoHlvILmraXov5vooYzvvIzlkKbliJnku43nhLbkvJrljaHjgIJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVVbnVzZWRQYXJ0cygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX01PVkUsdGhpcy5vbk1vdXNlTW92ZSx0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6byg5qCH5ouW5Yqo5pON5o6n5Lq654mp5peL6L2sXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuWvueixoVxuICAgICAqL1xuICAgIG9uTW91c2VNb3ZlKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQubW92ZW1lbnRYIT0wKXtcbiAgICAgICAgICAgIGNvbnN0IHVwID1uZXcgVmVjMygwLDEsMCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIGV2ZW50Lm1vdmVtZW50WC81LyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOinpuaRuOaTjeaOp+S6uueJqeaXi+i9rFxuICAgICAqIEBwYXJhbSBldmVudCDkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBvblRvdWNoTW92ZShldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LmdldERlbHRhKCkueCAhPSAwKXtcbiAgICAgICAgICAgIGNvbnN0IHVwID1uZXcgVmVjMygwLDEsMCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIGV2ZW50LmdldERlbHRhKCkueC81LyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaAp+WIq1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJTZXggKCk6IFNleCB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19zZXgnKSkgfHwgU2V4LkZFTUFMRVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blpbPmgKfnnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyRmVtYWxlSW5mbyAoKTogQXZhdGFyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfZmVtYWxlX2luZm8nKSkgfHwge1xuICAgICAgICAgICAgaGFpcjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYnJvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleWVzOiB7XG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFudHM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvZXM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W55S35oCn552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhck1hbGVJbmZvICgpOiBBdmF0YXIge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19tYWxlX2luZm8nKSkgfHwge1xuICAgICAgICAgICAgaGFpcjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYnJvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnbm9ybWFsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV5ZXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYW50czoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG9lczoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlbTkvZPnnYDoo4VcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NBbGwgKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IE9iamVjdC5rZXlzKHRoaXMuYXZhdGFyKS5tYXAoKHBhcnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJlc3MocGFydCwgdGhpcy5hdmF0YXJbcGFydF0pO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpg6jkvY3nnYDoo4VcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IFByb21pc2U8Tm9kZT4ge1xuICAgICAgICBjb25zdCBwcmUgPSB0aGlzLmdldFBhcnQocGFydCwgdGhpcy5hdmF0YXJbcGFydF0pO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRQYXJ0KHBhcnQsIGRyZXNzSW5mbyk7XG4gICAgICAgIGNvbnN0IHJlczogc3RyaW5nID0gdGhpcy5nZXRUZXh0dXJlUmVzKHBhcnQsIGRyZXNzSW5mbyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRUZXh0dXJlMkQocmVzKS50aGVuKCh0ZXh0dXJlMkQ6IFRleHR1cmUyRCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gY3VycmVudC5nZXRDb21wb25lbnQoU2tpbm5pbmdNb2RlbENvbXBvbmVudCkubWF0ZXJpYWxzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbaV0uc2V0UHJvcGVydHkoJ21haW5UZXh0dXJlJywgdGV4dHVyZTJEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBwcmUpIHtcbiAgICAgICAgICAgICAgICBwcmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gW2J1ZyBmaXhlZF0g5LuOQeaooeWei+WIh+aNouWIsELmqKHlnovml7bvvIxB5qih5Z6L55qE5YWo5bGA5peL6L2s5L+h5oGv5pyq6IO95pu05paw5Yiw5pyA5paw44CCXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24odGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmF2YXRhcltwYXJ0XSA9IGRyZXNzSW5mbztcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnnYDoo4Xpg6jkvY3nmoTlhYPntKBcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQYXJ0IChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogTm9kZSB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgJHtwYXJ0fSR7a2luZD9gLSR7a2luZH1gOicnfWBcbiAgICAgICAgY29uc3QgY2hpbGRyZW46IE5vZGVbXSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6YOo5L2N55u45bqU55qE6LWE5rqQ5Zyw5Z2AXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGV4dHVyZVJlcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IHNleCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gJ0ZlbWFsZScgOiAnTWFsZSdcbiAgICAgICAgcmV0dXJuIGBjaGFyYWN0ZXJzLyR7c2V4fS90ZXh0dXJlcy8ke3NleC50b0xvd2VyQ2FzZSgpfV8ke3BhcnR9JHtraW5kP2AtJHtraW5kfWA6Jyd9JHtzdWI/YF8ke3N1Yn1gOicnfS90ZXh0dXJlYFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqjmgIHliqDovb3otLTlm75cbiAgICAgKiBAcGFyYW0gcmVzIOi1hOa6kOWcsOWdgFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkVGV4dHVyZTJEIChyZXMpIDogUHJvbWlzZTxUZXh0dXJlMkQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKHJlcywgVGV4dHVyZTJEICwoZXJyOiBhbnksIHRleHR1cmUyRDogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRleHR1cmUyRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19