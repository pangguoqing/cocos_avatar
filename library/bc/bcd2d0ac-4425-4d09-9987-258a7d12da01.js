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
          key: "nCheck",
          value: function nCheck(slider) {
            var cheekRight = this.target.children[0].children[10].children[0].children[0].children[0].children[0].children[2];
            var cheekLeft = this.target.children[0].children[10].children[0].children[0].children[0].children[0].children[8];
            cheekRight.setPosition(_objectSpread({}, cheekRight.position, {
              x: 0.00104265206027776 + 0.0002 * (slider.progress - 0.7) * 2
            }));
            cheekLeft.setPosition(_objectSpread({}, cheekLeft.position, {
              x: 0.0010417031589895487 + 0.0002 * (slider.progress - 0.7) * 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiVmVjMyIsIm1hdGgiLCJ0d2VlbiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNleCIsIkF2YXRhckNvbnRyb2xsZXIiLCJ0eXBlIiwiaGFpckluZGV4IiwiZmFjZUluZGV4IiwiZXllc0luZGV4IiwidG9wSW5kZXgiLCJwYW50c0luZGV4Iiwic2hvZXNJbmRleCIsImluZm9zIiwia2luZCIsInN1YiIsImxlbmd0aCIsImluZGV4IiwiZHJlc3MiLCJ0YXJnZXQiLCJ0byIsInJvdGF0aW9uIiwiUXVhdCIsImVhc2luZyIsInN0YXJ0IiwiY2FtZXJhIiwic2V0UG9zaXRpb24iLCJyb3RhdGlvbkluTkRyZXNzIiwiZ2V0Um90YXRpb24iLCJuRmFjZVBhbmVsIiwiYWN0aXZlIiwibkRyZXNzUGFuZWwiLCJzbGlkZXIiLCJqYXciLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwieCIsInByb2dyZXNzIiwiY2hlZWtSaWdodCIsImNoZWVrTGVmdCIsInBhcnRzIiwiaSIsInBhcnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29tcG9uZW50IiwibWF0ZXJpYWwiLCJtYXRlcmlhbHMiLCJnZXRQcm9wZXJ0eSIsInNleCIsImdldEF2YXRhclNleCIsImF2YXRhciIsIkZFTUFMRSIsImdldEF2YXRhckZlbWFsZUluZm8iLCJnZXRBdmF0YXJNYWxlSW5mbyIsImZlbWFsZSIsIndpbmRvdyIsImRyZXNzQWxsIiwidGhlbiIsInNldFRpbWVvdXQiLCJoaWRlVW51c2VkUGFydHMiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIk1PVVNFX01PVkUiLCJvbk1vdXNlTW92ZSIsImV2ZW50IiwibW92ZW1lbnRYIiwidXAiLCJyb3RhdGlvbngiLCJyb3RhdGVBcm91bmQiLCJzZXRSb3RhdGlvbiIsImdldERlbHRhIiwicGFyc2VJbnQiLCJjYyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYWlyIiwiZmFjZSIsImV5ZXMiLCJ0b3AiLCJwYW50cyIsInNob2VzIiwicHJvbWlzZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiUHJvbWlzZSIsImFsbCIsImRyZXNzSW5mbyIsInByZSIsImdldFBhcnQiLCJjdXJyZW50IiwicmVzIiwiZ2V0VGV4dHVyZVJlcyIsImxvYWRUZXh0dXJlMkQiLCJ0ZXh0dXJlMkQiLCJzZXRQcm9wZXJ0eSIsIm5hbWUiLCJjaGlsZCIsInRvTG93ZXJDYXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRSZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLHNCLE9BQUFBLHNCO0FBQXdCQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7Ozs7OztBQUN4SUMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7aUJBR1pDLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO0FBQUFBLFFBQUFBLEcsQ0FBQUEsRztTQUFBQSxHLEtBQUFBLEc7O0FB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RyxFQUEwQjtBQUM1QyxtQkFBTyxJQUFJTixPQUFKLENBQVksVUFBQ2MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDaEgsY0FBQUEsTUFBTSxDQUFDaUgsT0FBUCxDQUFlVixHQUFmLEVBQW9CckcsU0FBcEIsRUFBK0IsVUFBQ2dILEdBQUQsRUFBV1IsU0FBWCxFQUFvQztBQUMvRCxvQkFBSVEsR0FBSixFQUFTO0FBQ0xGLGtCQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILGlCQUZELE1BRU87QUFDSEgsa0JBQUFBLE9BQU8sQ0FBQ0wsU0FBRCxDQUFQO0FBQ0g7QUFDSixlQU5EO0FBT0gsYUFSTSxDQUFQO0FBU0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUExVWtDNUcsUzs7Ozs7aUJBS1osSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdJLEk7Ozs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFHQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIsIFNwcml0ZUZyYW1lLCBTa2lubmluZ01vZGVsQ29tcG9uZW50LCBUZXh0dXJlMkQsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgRXZlbnRUb3VjaCwgVmVjMywgbWF0aCwgdHdlZW4sIFNsaWRlckNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuXG5lbnVtIFNleCB7XG4gICAgTUFMRSA9IDEsXG4gICAgRkVNQUxFID0gMixcbn07XG5cbmludGVyZmFjZSBEcmVzc0luZm8ge1xuICAgIGtpbmQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgc3ViPzogc3RyaW5nIHwgbnVtYmVyXG59XG5cbmludGVyZmFjZSBBdmF0YXIge1xuICAgIFtwYXJ0OiBzdHJpbmddOiBEcmVzc0luZm8sXG4gICAgLy8gaGFpcjogRHJlc3NJbmZvLFxuICAgIC8vIGZhY2U6IERyZXNzSW5mbyxcbiAgICAvLyBleWVzOiBEcmVzc0luZm8sXG4gICAgLy8gdG9wOiBEcmVzc0luZm8sXG4gICAgLy8gcGFudHM6IERyZXNzSW5mbyxcbiAgICAvLyBzaG9lczogRHJlc3NJbmZvXG59XG5cbkBjY2NsYXNzKFwiQXZhdGFyQ29udHJvbGxlclwiKVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBmZW1hbGU6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgbWFsZTogTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXG4gICAgcmVhZG9ubHkgY2FtZXJhOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBuRmFjZVBhbmVsOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBuRHJlc3NQYW5lbDogTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNleDogU2V4O1xuICAgIHByaXZhdGUgYXZhdGFyOiBBdmF0YXI7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IE5vZGU7XG5cbiAgICBwcml2YXRlIGhhaXJJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZhY2VJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGV5ZXNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRvcEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFudHNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNob2VzSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHJvdGF0aW9uSW5ORHJlc3M6IG1hdGguUXVhdDtcblxuICAgIC8qKlxuICAgICAqIOaNouWPkeWei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0hhaXIoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdicm93bid9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoxLCBzdWI6ICdyZWQnfSx7a2luZDoxLCBzdWI6ICd5ZWxsb3cnfSx7a2luZDoyLCBzdWI6ICdjeWFuJ30se2tpbmQ6Miwgc3ViOiAnZGFyayd9LHtraW5kOjIsIHN1YjogJ3BpbmsnfV1cbiAgICAgICAgdGhpcy5oYWlySW5kZXggPSAodGhpcy5oYWlySW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuaGFpckluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5oYWlySW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2hhaXInLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLohLjlnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NGYWNlKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MX0sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjJ9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5mYWNlSW5kZXggPSAodGhpcy5mYWNlSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuZmFjZUluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5mYWNlSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2ZhY2UnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLnnLznnZtcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NFeWVzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe3N1YjogJ2Jyb3duJ30se3N1YjogJ2JsdWUnfSx7c3ViOiAnZ3JlZW4nfV1cbiAgICAgICAgdGhpcy5leWVzSW5kZXggPSAodGhpcy5leWVzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuZXllc0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5leWVzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2V5ZXMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLkuIrooaNcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NUb3AoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICdwaW5rJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjIsIHN1YjogJ29yYW5nZSd9LHtraW5kOjIsIHN1YjogJ2dyZWVuJ30se2tpbmQ6Miwgc3ViOiAncHVycGxlJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnRvcEluZGV4ID0gKHRoaXMudG9wSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMudG9wSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnRvcEluZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCd0b3AnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLoo6TlrZBcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NQYW50cygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ2RhcmsnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAnb3JhbmdlJ30se2tpbmQ6Miwgc3ViOiAnYmx1ZSd9LHtraW5kOjIsIHN1YjogJ2JsYWNrJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnBhbnRzSW5kZXggPSAodGhpcy5wYW50c0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnBhbnRzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnBhbnRzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3BhbnRzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i6Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzU2hvZXMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICd5ZWxsb3cnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAneWVsbG93J30se2tpbmQ6Miwgc3ViOiAnYmx1ZSd9LHtraW5kOjIsIHN1YjogJ3JlZCd9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5zaG9lc0luZGV4ID0gKHRoaXMuc2hvZXNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5zaG9lc0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5zaG9lc0luZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdzaG9lcycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+WIsOaNj+iEuFxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hUb05GYWNlKCkge1xuICAgICAgICAvLyB0d2Vlbih0aGlzLmNhbWVyYSlcbiAgICAgICAgLy8gICAgIC50bygwLjQsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDAuNiwgLTEuNSkgfSwgeyBlYXNpbmc6ICdzbW9vdGgnIH0pXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy50YXJnZXQpXG4gICAgICAgICAgICAudG8oMC40LCB7IHJvdGF0aW9uOiBuZXcgbWF0aC5RdWF0KDAsIDAsIDAsIDEpIH0sIHsgZWFzaW5nOiAnbGluZWFyJyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBWZWMzKDAsIDAuNiwgLTEuNSkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uSW5ORHJlc3MgPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAvLyB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihuZXcgbWF0aC5RdWF0KDAsIDAsIDAgLDEpKTtcbiAgICAgICAgdGhpcy5uRmFjZVBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubkRyZXNzUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+WIsOaNouijhVxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hUb05EcmVzcygpIHtcbiAgICAgICAgLy8gdHdlZW4odGhpcy5jYW1lcmEpXG4gICAgICAgIC8vICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBuZXcgVmVjMygwLCAwLCAwKSB9LCB7IGVhc2luZzogJ3Ntb290aCcgfSlcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0aGlzLnRhcmdldClcbiAgICAgICAgICAgIC50bygwLjQsIHsgcm90YXRpb246IHRoaXMucm90YXRpb25Jbk5EcmVzcyB9LCB7IGVhc2luZzogJ2xpbmVhcicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0aGlzLmNhbWVyYS5zZXRQb3NpdGlvbihuZXcgVmVjMygwLCAwLCAwKSk7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHRoaXMucm90YXRpb25Jbk5EcmVzcyk7XG4gICAgICAgIHRoaXMubkZhY2VQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uRHJlc3NQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjY/kuIvlt7RcbiAgICAgKiBAcGFyYW0gc2xpZGVyIOa7keadhlxuICAgICAqL1xuICAgIHB1YmxpYyBuSmF3KHNsaWRlcjogU2xpZGVyQ29tcG9uZW50KXtcbiAgICAgICAgY29uc3QgamF3ID0gdGhpcy50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMTBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzddO1xuICAgICAgICBqYXcuc2V0UG9zaXRpb24oey4uLmphdy5wb3NpdGlvbiwgeDogMC4wMDA2NDE1NTMzNzE2NzkwMzc4ICsgMC4wMDAwOCAqIChzbGlkZXIucHJvZ3Jlc3MgLSAwLjcpICogMn0pXG4gICAgfVxuXG4gICAgcHVibGljIG5DaGVjayhzbGlkZXI6IFNsaWRlckNvbXBvbmVudCl7XG4gICAgICAgIGNvbnN0IGNoZWVrUmlnaHQgPSB0aGlzLnRhcmdldC5jaGlsZHJlblswXS5jaGlsZHJlblsxMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl07XG4gICAgICAgIGNvbnN0IGNoZWVrTGVmdCA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzEwXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlbls4XTtcbiAgICAgICAgY2hlZWtSaWdodC5zZXRQb3NpdGlvbih7Li4uY2hlZWtSaWdodC5wb3NpdGlvbiwgeDogMC4wMDEwNDI2NTIwNjAyNzc3NiArIDAuMDAwMiAqIChzbGlkZXIucHJvZ3Jlc3MgLSAwLjcpICogMn0pXG4gICAgICAgIGNoZWVrTGVmdC5zZXRQb3NpdGlvbih7Li4uY2hlZWtMZWZ0LnBvc2l0aW9uLCB4OiAwLjAwMTA0MTcwMzE1ODk4OTU0ODcgKyAwLjAwMDIgKiAoc2xpZGVyLnByb2dyZXNzIC0gMC43KSAqIDJ9KVxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZVVudXNlZFBhcnRzKCkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJ0KVxuICAgICAgICAgICAgaWYgKCFwYXJ0LmdldENvbXBvbmVudChTa2lubmluZ01vZGVsQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBwYXJ0LmdldENvbXBvbmVudChTa2lubmluZ01vZGVsQ29tcG9uZW50KS5tYXRlcmlhbHNbMF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXRlcmlhbC5nZXRQcm9wZXJ0eSgnbWFpblRleHR1cmUnKSlcbiAgICAgICAgICAgIGlmICghbWF0ZXJpYWwuZ2V0UHJvcGVydHkoJ21haW5UZXh0dXJlJykpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNleCA9IHRoaXMuZ2V0QXZhdGFyU2V4KCk7XG4gICAgICAgIHRoaXMuYXZhdGFyID0gdGhpcy5zZXggPT09IFNleC5GRU1BTEUgPyB0aGlzLmdldEF2YXRhckZlbWFsZUluZm8oKSA6IHRoaXMuZ2V0QXZhdGFyTWFsZUluZm8oKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/IHRoaXMuZmVtYWxlIDogdGhpcy5mZW1hbGU7XG4gICAgICAgIHdpbmRvdy5jYW1lcmEgPSB0aGlzLmNhbWVyYVxuICAgICAgICB0aGlzLmRyZXNzQWxsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gW2J1ZyBmaXhlZF0g5YWz6ZetdXNlQmFrZWRBbmltYXRpb27kuYvlkI4s5LuO5qih5Z6LQeWIh+aNouWIsOaooeWei0Lml7bvvIzmqKHlnotC5Yqo55S75Lya5Y2h5L2P44CC6L+Z6YeM5aSE55CG55qE5pa55rOV5piv5Zyo5Yqg6L295Lq654mp5pe26buY6K6k5omA5pyJ55qE5qih5Z6L6YO95pivYWN0aXZl54q25oCB77yM562J5Yqg6L295a6M5q+V5pe25YaN6K6y5LiN6ZyA6KaB5bGV56S655qE5qih5Z6L6ZqQ6JeP44CC6ZqQ6JeP6ZyA6KaB5byC5q2l6L+b6KGM77yM5ZCm5YiZ5LuN54S25Lya5Y2h44CCXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVW51c2VkUGFydHMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9NT1ZFLHRoaXMub25Nb3VzZU1vdmUsdGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOm8oOagh+aLluWKqOaTjeaOp+S6uueJqeaXi+i9rFxuICAgICAqIEBwYXJhbSBldmVudCDkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZShldmVudCl7XG4gICAgICAgIGlmKGV2ZW50Lm1vdmVtZW50WCE9MCl7XG4gICAgICAgICAgICBjb25zdCB1cCA9bmV3IFZlYzMoMCwxLDApO1xuICAgICAgICAgICAgY29uc3Qgcm90YXRpb254ID0gdGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIG1hdGguUXVhdC5yb3RhdGVBcm91bmQocm90YXRpb254LCByb3RhdGlvbngsIHVwLCBldmVudC5tb3ZlbWVudFgvNS8gMzYwLjAgKiAzLjE0MTU5MjY1MzUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24ocm90YXRpb254KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDop6bmkbjmk43mjqfkurrnianml4vovaxcbiAgICAgKiBAcGFyYW0gZXZlbnQg5LqL5Lu25a+56LGhXG4gICAgICovXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpe1xuICAgICAgICBpZihldmVudC5nZXREZWx0YSgpLnggIT0gMCl7XG4gICAgICAgICAgICBjb25zdCB1cCA9bmV3IFZlYzMoMCwxLDApO1xuICAgICAgICAgICAgY29uc3Qgcm90YXRpb254ID0gdGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIG1hdGguUXVhdC5yb3RhdGVBcm91bmQocm90YXRpb254LCByb3RhdGlvbngsIHVwLCBldmVudC5nZXREZWx0YSgpLngvNS8gMzYwLjAgKiAzLjE0MTU5MjY1MzUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24ocm90YXRpb254KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmgKfliKtcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyU2V4ICgpOiBTZXgge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfc2V4JykpIHx8IFNleC5GRU1BTEVcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5aWz5oCn552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhckZlbWFsZUluZm8gKCk6IEF2YXRhciB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyc3lzX2ZlbWFsZV9pbmZvJykpIHx8IHtcbiAgICAgICAgICAgIGhhaXI6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2Jyb3duJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhY2U6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXllczoge1xuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhbnRzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob2VzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlueUt+aAp+edgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJNYWxlSW5mbyAoKTogQXZhdGFyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfbWFsZV9pbmZvJykpIHx8IHtcbiAgICAgICAgICAgIGhhaXI6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2Jyb3duJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhY2U6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ25vcm1hbCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleWVzOiB7XG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFudHM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvZXM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5pW05L2T552A6KOFXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzQWxsICgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBPYmplY3Qua2V5cyh0aGlzLmF2YXRhcikubWFwKChwYXJ0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyZXNzKHBhcnQsIHRoaXMuYXZhdGFyW3BhcnRdKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6YOo5L2N552A6KOFXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3MgKHBhcnQ6IHN0cmluZywgZHJlc3NJbmZvOiBEcmVzc0luZm8pOiBQcm9taXNlPE5vZGU+IHtcbiAgICAgICAgY29uc3QgcHJlID0gdGhpcy5nZXRQYXJ0KHBhcnQsIHRoaXMuYXZhdGFyW3BhcnRdKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0UGFydChwYXJ0LCBkcmVzc0luZm8pO1xuICAgICAgICBjb25zdCByZXM6IHN0cmluZyA9IHRoaXMuZ2V0VGV4dHVyZVJlcyhwYXJ0LCBkcmVzc0luZm8pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkVGV4dHVyZTJEKHJlcykudGhlbigodGV4dHVyZTJEOiBUZXh0dXJlMkQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IGN1cnJlbnQuZ2V0Q29tcG9uZW50KFNraW5uaW5nTW9kZWxDb21wb25lbnQpLm1hdGVyaWFscztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzW2ldLnNldFByb3BlcnR5KCdtYWluVGV4dHVyZScsIHRleHR1cmUyRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudCAhPT0gcHJlKSB7XG4gICAgICAgICAgICAgICAgcHJlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIFtidWcgZml4ZWRdIOS7jkHmqKHlnovliIfmjaLliLBC5qih5Z6L5pe277yMQeaooeWei+eahOWFqOWxgOaXi+i9rOS/oeaBr+acquiDveabtOaWsOWIsOacgOaWsOOAglxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hdmF0YXJbcGFydF0gPSBkcmVzc0luZm87XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W552A6KOF6YOo5L2N55qE5YWD57SgXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGFydCAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IE5vZGUge1xuICAgICAgICBjb25zdCB7a2luZCwgc3VifSA9IGRyZXNzSW5mb1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7cGFydH0ke2tpbmQ/YC0ke2tpbmR9YDonJ31gXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuOiBOb2RlW10gPSB0aGlzLnRhcmdldC5jaGlsZHJlblswXS5jaGlsZHJlblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlumDqOS9jeebuOW6lOeahOi1hOa6kOWcsOWdgFxuICAgICAqIEBwYXJhbSBwYXJ0IOmDqOS9jVxuICAgICAqIEBwYXJhbSBkcmVzc0luZm8g6YOo5L2N552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldFRleHR1cmVSZXMgKHBhcnQ6IHN0cmluZywgZHJlc3NJbmZvOiBEcmVzc0luZm8pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB7a2luZCwgc3VifSA9IGRyZXNzSW5mb1xuICAgICAgICBjb25zdCBzZXggPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/ICdGZW1hbGUnIDogJ01hbGUnXG4gICAgICAgIHJldHVybiBgY2hhcmFjdGVycy8ke3NleH0vdGV4dHVyZXMvJHtzZXgudG9Mb3dlckNhc2UoKX1fJHtwYXJ0fSR7a2luZD9gLSR7a2luZH1gOicnfSR7c3ViP2BfJHtzdWJ9YDonJ30vdGV4dHVyZWBcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yqo5oCB5Yqg6L296LS05Zu+XG4gICAgICogQHBhcmFtIHJlcyDotYTmupDlnLDlnYBcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFRleHR1cmUyRCAocmVzKSA6IFByb21pc2U8VGV4dHVyZTJEPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhyZXMsIFRleHR1cmUyRCAsKGVycjogYW55LCB0ZXh0dXJlMkQ6IFRleHR1cmUyRCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZXh0dXJlMkQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==