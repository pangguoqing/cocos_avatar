System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, loader, SkinningModelComponent, Texture2D, systemEvent, SystemEvent, Vec3, math, tween, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, Sex, AvatarController;

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
            console.log(slider.progress);
            window.t = this.target;
            console.log(this.target.children[0].children[10].children[0].children[0].children[0].children[0].children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiVmVjMyIsIm1hdGgiLCJ0d2VlbiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNleCIsIkF2YXRhckNvbnRyb2xsZXIiLCJ0eXBlIiwiaGFpckluZGV4IiwiZmFjZUluZGV4IiwiZXllc0luZGV4IiwidG9wSW5kZXgiLCJwYW50c0luZGV4Iiwic2hvZXNJbmRleCIsImluZm9zIiwia2luZCIsInN1YiIsImxlbmd0aCIsImluZGV4IiwiZHJlc3MiLCJ0YXJnZXQiLCJ0byIsInJvdGF0aW9uIiwiUXVhdCIsImVhc2luZyIsInN0YXJ0IiwiY2FtZXJhIiwic2V0UG9zaXRpb24iLCJyb3RhdGlvbkluTkRyZXNzIiwiZ2V0Um90YXRpb24iLCJuRmFjZVBhbmVsIiwiYWN0aXZlIiwibkRyZXNzUGFuZWwiLCJzbGlkZXIiLCJjb25zb2xlIiwibG9nIiwicHJvZ3Jlc3MiLCJ3aW5kb3ciLCJ0IiwiY2hpbGRyZW4iLCJzZXgiLCJnZXRBdmF0YXJTZXgiLCJhdmF0YXIiLCJGRU1BTEUiLCJnZXRBdmF0YXJGZW1hbGVJbmZvIiwiZ2V0QXZhdGFyTWFsZUluZm8iLCJmZW1hbGUiLCJkcmVzc0FsbCIsInRoZW4iLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZSIsIk1PVVNFX01PVkUiLCJvbk1vdXNlTW92ZSIsImV2ZW50IiwibW92ZW1lbnRYIiwidXAiLCJyb3RhdGlvbngiLCJyb3RhdGVBcm91bmQiLCJzZXRSb3RhdGlvbiIsImdldERlbHRhIiwieCIsInBhcnNlSW50IiwiY2MiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaGFpciIsImZhY2UiLCJleWVzIiwidG9wIiwicGFudHMiLCJzaG9lcyIsInByb21pc2VzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhcnQiLCJQcm9taXNlIiwiYWxsIiwiZHJlc3NJbmZvIiwicHJlIiwiZ2V0UGFydCIsImN1cnJlbnQiLCJyZXMiLCJnZXRUZXh0dXJlUmVzIiwibG9hZFRleHR1cmUyRCIsInRleHR1cmUyRCIsIm1hdGVyaWFscyIsImdldENvbXBvbmVudCIsImkiLCJzZXRQcm9wZXJ0eSIsIm5hbWUiLCJjaGlsZCIsInRvTG93ZXJDYXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRSZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLHNCLE9BQUFBLHNCO0FBQXdCQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7Ozs7OztBQUN4SUMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7aUJBR1pDLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO0FBQUFBLFFBQUFBLEcsQ0FBQUEsRztTQUFBQSxHLEtBQUFBLEc7O0FBR0o7O2tDQWtCWUMsZ0IsV0FEWkgsT0FBTyxDQUFDLGtCQUFELEMsVUFLSEMsUUFBUSxDQUFDO0FBQUNHLFFBQUFBLElBQUksRUFBRWI7QUFBUCxPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUNHLFFBQUFBLElBQUksRUFBRWI7QUFBUCxPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU9EYyxTLEdBQW9CLEM7Z0JBQ3BCQyxTLEdBQW9CLEM7Z0JBQ3BCQyxTLEdBQW9CLEM7Z0JBQ3BCQyxRLEdBQW1CLEM7Z0JBQ25CQyxVLEdBQXFCLEM7Z0JBQ3JCQyxVLEdBQXFCLEM7Ozs7Ozs7QUFJN0I7OztzQ0FHbUI7QUFDZixnQkFBTUMsS0FBa0IsR0FBRyxDQUFDO0FBQUNDLGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQUQsRUFBeUI7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBekIsRUFBaUQ7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBakQsRUFBc0U7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBdEUsRUFBOEY7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBOUYsRUFBb0g7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBcEgsRUFBMEk7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBMUksQ0FBM0I7QUFDQSxpQkFBS1IsU0FBTCxHQUFrQixLQUFLQSxTQUFMLElBQWtCTSxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFsQyxHQUF1QyxDQUFDLENBQXhDLEdBQTRDLEtBQUtULFNBQWxFO0FBQ0EsZ0JBQU1VLEtBQUssR0FBRyxFQUFFLEtBQUtWLFNBQXJCO0FBQ0EsaUJBQUtXLEtBQUwsQ0FBVyxNQUFYLEVBQW1CTCxLQUFLLENBQUNJLEtBQUQsQ0FBeEI7QUFDSDtBQUNEOzs7Ozs7c0NBR21CO0FBQ2YsZ0JBQU1KLEtBQWtCLEdBQUcsQ0FBQztBQUFDQyxjQUFBQSxJQUFJLEVBQUM7QUFBTixhQUFELEVBQVc7QUFBQ0EsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBWCxFQUFtQztBQUFDRCxjQUFBQSxJQUFJLEVBQUM7QUFBTixhQUFuQyxFQUE2QztBQUFDQSxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUE3QyxDQUEzQjtBQUNBLGlCQUFLUCxTQUFMLEdBQWtCLEtBQUtBLFNBQUwsSUFBa0JLLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQWxDLEdBQXVDLENBQUMsQ0FBeEMsR0FBNEMsS0FBS1IsU0FBbEU7QUFDQSxnQkFBTVMsS0FBSyxHQUFHLEVBQUUsS0FBS1QsU0FBckI7QUFDQSxpQkFBS1UsS0FBTCxDQUFXLE1BQVgsRUFBbUJMLEtBQUssQ0FBQ0ksS0FBRCxDQUF4QjtBQUNIO0FBQ0Q7Ozs7OztzQ0FHbUI7QUFDZixnQkFBTUosS0FBa0IsR0FBRyxDQUFDO0FBQUNFLGNBQUFBLEdBQUcsRUFBRTtBQUFOLGFBQUQsRUFBZ0I7QUFBQ0EsY0FBQUEsR0FBRyxFQUFFO0FBQU4sYUFBaEIsRUFBOEI7QUFBQ0EsY0FBQUEsR0FBRyxFQUFFO0FBQU4sYUFBOUIsQ0FBM0I7QUFDQSxpQkFBS04sU0FBTCxHQUFrQixLQUFLQSxTQUFMLElBQWtCSSxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFsQyxHQUF1QyxDQUFDLENBQXhDLEdBQTRDLEtBQUtQLFNBQWxFO0FBQ0EsZ0JBQU1RLEtBQUssR0FBRyxFQUFFLEtBQUtSLFNBQXJCO0FBQ0EsaUJBQUtTLEtBQUwsQ0FBVyxNQUFYLEVBQW1CTCxLQUFLLENBQUNJLEtBQUQsQ0FBeEI7QUFDSDtBQUNEOzs7Ozs7cUNBR2tCO0FBQ2QsZ0JBQU1KLEtBQWtCLEdBQUcsQ0FBQztBQUFDQyxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUFELEVBQXVCO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQXZCLEVBQThDO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQTlDLEVBQXFFO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQXJFLEVBQTZGO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQTdGLEVBQXFIO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQXJILEVBQTRJO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQTVJLEVBQXFLO0FBQUNELGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQXJLLENBQTNCO0FBQ0EsaUJBQUtMLFFBQUwsR0FBaUIsS0FBS0EsUUFBTCxJQUFpQkcsS0FBSyxDQUFDRyxNQUFOLEdBQWUsQ0FBakMsR0FBc0MsQ0FBQyxDQUF2QyxHQUEyQyxLQUFLTixRQUFoRTtBQUNBLGdCQUFNTyxLQUFLLEdBQUcsRUFBRSxLQUFLUCxRQUFyQjtBQUNBLGlCQUFLUSxLQUFMLENBQVcsS0FBWCxFQUFrQkwsS0FBSyxDQUFDSSxLQUFELENBQXZCO0FBQ0g7QUFDRDs7Ozs7O3VDQUdvQjtBQUNoQixnQkFBTUosS0FBa0IsR0FBRyxDQUFDO0FBQUNDLGNBQUFBLElBQUksRUFBQyxDQUFOO0FBQVNDLGNBQUFBLEdBQUcsRUFBRTtBQUFkLGFBQUQsRUFBdUI7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBdkIsRUFBOEM7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBOUMsRUFBcUU7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBckUsRUFBNkY7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBN0YsRUFBcUg7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBckgsRUFBMkk7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBM0ksRUFBbUs7QUFBQ0QsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBbkssQ0FBM0I7QUFDQSxpQkFBS0osVUFBTCxHQUFtQixLQUFLQSxVQUFMLElBQW1CRSxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFuQyxHQUF3QyxDQUFDLENBQXpDLEdBQTZDLEtBQUtMLFVBQXBFO0FBQ0EsZ0JBQU1NLEtBQUssR0FBRyxFQUFFLEtBQUtOLFVBQXJCO0FBQ0EsaUJBQUtPLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTCxLQUFLLENBQUNJLEtBQUQsQ0FBekI7QUFDSDtBQUNEOzs7Ozs7dUNBR29CO0FBQ2hCLGdCQUFNSixLQUFrQixHQUFHLENBQUM7QUFBQ0MsY0FBQUEsSUFBSSxFQUFDLENBQU47QUFBU0MsY0FBQUEsR0FBRyxFQUFFO0FBQWQsYUFBRCxFQUF1QjtBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUF2QixFQUE4QztBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUE5QyxFQUF1RTtBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUF2RSxFQUErRjtBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUEvRixFQUF1SDtBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUF2SCxFQUE2STtBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUE3SSxFQUFtSztBQUFDRCxjQUFBQSxJQUFJLEVBQUMsQ0FBTjtBQUFTQyxjQUFBQSxHQUFHLEVBQUU7QUFBZCxhQUFuSyxDQUEzQjtBQUNBLGlCQUFLSCxVQUFMLEdBQW1CLEtBQUtBLFVBQUwsSUFBbUJDLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQW5DLEdBQXdDLENBQUMsQ0FBekMsR0FBNkMsS0FBS0osVUFBcEU7QUFDQSxnQkFBTUssS0FBSyxHQUFHLEVBQUUsS0FBS0wsVUFBckI7QUFDQSxpQkFBS00sS0FBTCxDQUFXLE9BQVgsRUFBb0JMLEtBQUssQ0FBQ0ksS0FBRCxDQUF6QjtBQUNIO0FBQ0Q7Ozs7OzswQ0FHdUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0FoQixZQUFBQSxLQUFLLENBQUMsS0FBS2tCLE1BQU4sQ0FBTCxDQUNLQyxFQURMLENBQ1EsR0FEUixFQUNhO0FBQUVDLGNBQUFBLFFBQVEsRUFBRSxJQUFJckIsSUFBSSxDQUFDc0IsSUFBVCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFBWixhQURiLEVBQ3NEO0FBQUVDLGNBQUFBLE1BQU0sRUFBRTtBQUFWLGFBRHRELEVBRUtDLEtBRkw7QUFHQSxpQkFBS0MsTUFBTCxDQUFZQyxXQUFaLENBQXdCLElBQUkzQixJQUFKLENBQVMsQ0FBVCxFQUFZLEdBQVosRUFBaUIsQ0FBQyxHQUFsQixDQUF4QjtBQUNBLGlCQUFLNEIsZ0JBQUwsR0FBd0IsS0FBS1IsTUFBTCxDQUFZUyxXQUFaLEVBQXhCLENBUm1CLENBU25COztBQUNBLGlCQUFLQyxVQUFMLENBQWdCQyxNQUFoQixHQUF5QixJQUF6QjtBQUNBLGlCQUFLQyxXQUFMLENBQWlCRCxNQUFqQixHQUEwQixLQUExQjtBQUNIO0FBQ0Q7Ozs7OzsyQ0FHd0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E3QixZQUFBQSxLQUFLLENBQUMsS0FBS2tCLE1BQU4sQ0FBTCxDQUNLQyxFQURMLENBQ1EsR0FEUixFQUNhO0FBQUVDLGNBQUFBLFFBQVEsRUFBRSxLQUFLTTtBQUFqQixhQURiLEVBQ2tEO0FBQUVKLGNBQUFBLE1BQU0sRUFBRTtBQUFWLGFBRGxELEVBRUtDLEtBRkw7QUFHQSxpQkFBS0MsTUFBTCxDQUFZQyxXQUFaLENBQXdCLElBQUkzQixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLENBQXhCLEVBUG9CLENBUXBCOztBQUNBLGlCQUFLOEIsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUIsS0FBekI7QUFDQSxpQkFBS0MsV0FBTCxDQUFpQkQsTUFBakIsR0FBMEIsSUFBMUI7QUFDSDtBQUNEOzs7Ozs7OytCQUlZRSxNLEVBQXdCO0FBQ2hDQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDRyxRQUFuQjtBQUNBQyxZQUFBQSxNQUFNLENBQUNDLENBQVAsR0FBVyxLQUFLbEIsTUFBaEI7QUFDQWMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2YsTUFBTCxDQUFZbUIsUUFBWixDQUFxQixDQUFyQixFQUF3QkEsUUFBeEIsQ0FBaUMsRUFBakMsRUFBcUNBLFFBQXJDLENBQThDLENBQTlDLEVBQWlEQSxRQUFqRCxDQUEwRCxDQUExRCxFQUE2REEsUUFBN0QsQ0FBc0UsQ0FBdEUsRUFBeUVBLFFBQXpFLENBQWtGLENBQWxGLEVBQXFGQSxRQUFqRztBQUNIOzs7a0NBR1E7QUFBQTs7QUFDTCxpQkFBS0MsR0FBTCxHQUFXLEtBQUtDLFlBQUwsRUFBWDtBQUNBLGlCQUFLQyxNQUFMLEdBQWMsS0FBS0YsR0FBTCxLQUFhbkMsR0FBRyxDQUFDc0MsTUFBakIsR0FBMEIsS0FBS0MsbUJBQUwsRUFBMUIsR0FBdUQsS0FBS0MsaUJBQUwsRUFBckU7QUFDQSxpQkFBS3pCLE1BQUwsR0FBYyxLQUFLb0IsR0FBTCxLQUFhbkMsR0FBRyxDQUFDc0MsTUFBakIsR0FBMEIsS0FBS0csTUFBL0IsR0FBd0MsS0FBS0EsTUFBM0Q7QUFDQVQsWUFBQUEsTUFBTSxDQUFDWCxNQUFQLEdBQWdCLEtBQUtBLE1BQXJCO0FBQ0EsaUJBQUtxQixRQUFMLEdBQWdCQyxJQUFoQixDQUFxQixZQUFNO0FBQ3ZCLGNBQUEsTUFBSSxDQUFDNUIsTUFBTCxDQUFZVyxNQUFaLEdBQXFCLElBQXJCO0FBQ0gsYUFGRDtBQUdBakMsWUFBQUEsV0FBVyxDQUFDbUQsRUFBWixDQUFlbEQsV0FBVyxDQUFDbUQsU0FBWixDQUFzQkMsVUFBckMsRUFBaUQsS0FBS0MsV0FBdEQsRUFBbUUsSUFBbkU7QUFDQXRELFlBQUFBLFdBQVcsQ0FBQ21ELEVBQVosQ0FBZWxELFdBQVcsQ0FBQ21ELFNBQVosQ0FBc0JHLFVBQXJDLEVBQWdELEtBQUtDLFdBQXJELEVBQWlFLElBQWpFO0FBQ0g7QUFDRDs7Ozs7OztzQ0FJWUMsSyxFQUFNO0FBQ2QsZ0JBQUdBLEtBQUssQ0FBQ0MsU0FBTixJQUFpQixDQUFwQixFQUFzQjtBQUNsQixrQkFBTUMsRUFBRSxHQUFFLElBQUl6RCxJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQVY7QUFDQSxrQkFBTTBELFNBQVMsR0FBRyxLQUFLdEMsTUFBTCxDQUFZUyxXQUFaLEVBQWxCO0FBQ0E1QixjQUFBQSxJQUFJLENBQUNzQixJQUFMLENBQVVvQyxZQUFWLENBQXVCRCxTQUF2QixFQUFrQ0EsU0FBbEMsRUFBNkNELEVBQTdDLEVBQWlERixLQUFLLENBQUNDLFNBQU4sR0FBZ0IsQ0FBaEIsR0FBbUIsS0FBbkIsR0FBMkIsWUFBNUU7QUFDQSxtQkFBS3BDLE1BQUwsQ0FBWXdDLFdBQVosQ0FBd0JGLFNBQXhCO0FBQ0g7QUFDSjtBQUNEOzs7Ozs7O3NDQUlZSCxLLEVBQU07QUFDZCxnQkFBR0EsS0FBSyxDQUFDTSxRQUFOLEdBQWlCQyxDQUFqQixJQUFzQixDQUF6QixFQUEyQjtBQUN2QixrQkFBTUwsRUFBRSxHQUFFLElBQUl6RCxJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQVY7QUFDQSxrQkFBTTBELFNBQVMsR0FBRyxLQUFLdEMsTUFBTCxDQUFZUyxXQUFaLEVBQWxCO0FBQ0E1QixjQUFBQSxJQUFJLENBQUNzQixJQUFMLENBQVVvQyxZQUFWLENBQXVCRCxTQUF2QixFQUFrQ0EsU0FBbEMsRUFBNkNELEVBQTdDLEVBQWlERixLQUFLLENBQUNNLFFBQU4sR0FBaUJDLENBQWpCLEdBQW1CLENBQW5CLEdBQXNCLEtBQXRCLEdBQThCLFlBQS9FO0FBQ0EsbUJBQUsxQyxNQUFMLENBQVl3QyxXQUFaLENBQXdCRixTQUF4QjtBQUNIO0FBQ0o7QUFDRDs7Ozs7O3lDQUc0QjtBQUN4QixtQkFBT0ssUUFBUSxDQUFDQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsZUFBNUIsQ0FBRCxDQUFSLElBQTBEOUQsR0FBRyxDQUFDc0MsTUFBckU7QUFDSDtBQUNEOzs7Ozs7Z0RBR3NDO0FBQ2xDLG1CQUFPeUIsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0Qix1QkFBNUIsQ0FBWCxLQUFvRTtBQUN2RUcsY0FBQUEsSUFBSSxFQUFFO0FBQ0Z2RCxnQkFBQUEsSUFBSSxFQUFFLENBREo7QUFFRkMsZ0JBQUFBLEdBQUcsRUFBRTtBQUZILGVBRGlFO0FBS3ZFdUQsY0FBQUEsSUFBSSxFQUFFO0FBQ0Z4RCxnQkFBQUEsSUFBSSxFQUFFO0FBREosZUFMaUU7QUFRdkV5RCxjQUFBQSxJQUFJLEVBQUU7QUFDRnhELGdCQUFBQSxHQUFHLEVBQUU7QUFESCxlQVJpRTtBQVd2RXlELGNBQUFBLEdBQUcsRUFBRTtBQUNEMUQsZ0JBQUFBLElBQUksRUFBRSxDQURMO0FBRURDLGdCQUFBQSxHQUFHLEVBQUU7QUFGSixlQVhrRTtBQWV2RTBELGNBQUFBLEtBQUssRUFBRTtBQUNIM0QsZ0JBQUFBLElBQUksRUFBRSxDQURIO0FBRUhDLGdCQUFBQSxHQUFHLEVBQUU7QUFGRixlQWZnRTtBQW1CdkUyRCxjQUFBQSxLQUFLLEVBQUU7QUFDSDVELGdCQUFBQSxJQUFJLEVBQUUsQ0FESDtBQUVIQyxnQkFBQUEsR0FBRyxFQUFFO0FBRkY7QUFuQmdFLGFBQTNFO0FBd0JIO0FBQ0Q7Ozs7Ozs4Q0FHb0M7QUFDaEMsbUJBQU9vRCxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsRUFBRSxDQUFDQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLHFCQUE1QixDQUFYLEtBQWtFO0FBQ3JFRyxjQUFBQSxJQUFJLEVBQUU7QUFDRnZELGdCQUFBQSxJQUFJLEVBQUUsQ0FESjtBQUVGQyxnQkFBQUEsR0FBRyxFQUFFO0FBRkgsZUFEK0Q7QUFLckV1RCxjQUFBQSxJQUFJLEVBQUU7QUFDRnhELGdCQUFBQSxJQUFJLEVBQUUsQ0FESjtBQUVGQyxnQkFBQUEsR0FBRyxFQUFFO0FBRkgsZUFMK0Q7QUFTckV3RCxjQUFBQSxJQUFJLEVBQUU7QUFDRnhELGdCQUFBQSxHQUFHLEVBQUU7QUFESCxlQVQrRDtBQVlyRXlELGNBQUFBLEdBQUcsRUFBRTtBQUNEMUQsZ0JBQUFBLElBQUksRUFBRSxDQURMO0FBRURDLGdCQUFBQSxHQUFHLEVBQUU7QUFGSixlQVpnRTtBQWdCckUwRCxjQUFBQSxLQUFLLEVBQUU7QUFDSDNELGdCQUFBQSxJQUFJLEVBQUUsQ0FESDtBQUVIQyxnQkFBQUEsR0FBRyxFQUFFO0FBRkYsZUFoQjhEO0FBb0JyRTJELGNBQUFBLEtBQUssRUFBRTtBQUNINUQsZ0JBQUFBLElBQUksRUFBRSxDQURIO0FBRUhDLGdCQUFBQSxHQUFHLEVBQUU7QUFGRjtBQXBCOEQsYUFBekU7QUF5Qkg7QUFDRDs7Ozs7O3FDQUdtQjtBQUFBOztBQUNmLGdCQUFNNEQsUUFBUSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLcEMsTUFBakIsRUFBeUJxQyxHQUF6QixDQUE2QixVQUFDQyxJQUFELEVBQWtCO0FBQzVELHFCQUFPLE1BQUksQ0FBQzdELEtBQUwsQ0FBVzZELElBQVgsRUFBaUIsTUFBSSxDQUFDdEMsTUFBTCxDQUFZc0MsSUFBWixDQUFqQixDQUFQO0FBQ0gsYUFGZ0IsQ0FBakI7QUFHQSxtQkFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlOLFFBQVosQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7O2dDQUtjSSxJLEVBQWNHLFMsRUFBcUM7QUFBQTs7QUFDN0QsZ0JBQU1DLEdBQUcsR0FBRyxLQUFLQyxPQUFMLENBQWFMLElBQWIsRUFBbUIsS0FBS3RDLE1BQUwsQ0FBWXNDLElBQVosQ0FBbkIsQ0FBWjtBQUNBLGdCQUFNTSxPQUFPLEdBQUcsS0FBS0QsT0FBTCxDQUFhTCxJQUFiLEVBQW1CRyxTQUFuQixDQUFoQjtBQUNBLGdCQUFNSSxHQUFXLEdBQUcsS0FBS0MsYUFBTCxDQUFtQlIsSUFBbkIsRUFBeUJHLFNBQXpCLENBQXBCO0FBQ0EsbUJBQU8sS0FBS00sYUFBTCxDQUFtQkYsR0FBbkIsRUFBd0J2QyxJQUF4QixDQUE2QixVQUFDMEMsU0FBRCxFQUEwQjtBQUMxRCxrQkFBTUMsU0FBUyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBcUJoRyxzQkFBckIsRUFBNkMrRixTQUEvRDs7QUFDQSxtQkFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixTQUFTLENBQUMxRSxNQUE5QixFQUFzQzRFLENBQUMsRUFBdkMsRUFBMkM7QUFDdkNGLGdCQUFBQSxTQUFTLENBQUNFLENBQUQsQ0FBVCxDQUFhQyxXQUFiLENBQXlCLGFBQXpCLEVBQXdDSixTQUF4QztBQUNIOztBQUNELGtCQUFJSixPQUFPLEtBQUtGLEdBQWhCLEVBQXFCO0FBQ2pCQSxnQkFBQUEsR0FBRyxDQUFDckQsTUFBSixHQUFhLEtBQWIsQ0FEaUIsQ0FFakI7O0FBQ0EsZ0JBQUEsTUFBSSxDQUFDWCxNQUFMLENBQVl3QyxXQUFaLENBQXdCLE1BQUksQ0FBQ3hDLE1BQUwsQ0FBWVMsV0FBWixFQUF4QjtBQUNIOztBQUNEeUQsY0FBQUEsT0FBTyxDQUFDdkQsTUFBUixHQUFpQixJQUFqQjtBQUNBLGNBQUEsTUFBSSxDQUFDVyxNQUFMLENBQVlzQyxJQUFaLElBQW9CRyxTQUFwQjtBQUNBLHFCQUFPRyxPQUFQO0FBQ0gsYUFiTSxDQUFQO0FBY0g7QUFDRDs7Ozs7Ozs7a0NBS2dCTixJLEVBQWNHLFMsRUFBNEI7QUFBQSxnQkFDL0NwRSxJQUQrQyxHQUNsQ29FLFNBRGtDLENBQy9DcEUsSUFEK0M7QUFBQSxnQkFDekNDLEdBRHlDLEdBQ2xDbUUsU0FEa0MsQ0FDekNuRSxHQUR5QztBQUV0RCxnQkFBTStFLElBQUksYUFBTWYsSUFBTixTQUFhakUsSUFBSSxjQUFLQSxJQUFMLElBQVksRUFBN0IsQ0FBVjtBQUNBLGdCQUFNd0IsUUFBZ0IsR0FBRyxLQUFLbkIsTUFBTCxDQUFZbUIsUUFBWixDQUFxQixDQUFyQixFQUF3QkEsUUFBakQ7O0FBQ0EsaUJBQUssSUFBSXNELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd0RCxRQUFRLENBQUN0QixNQUE3QixFQUFxQzRFLENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsa0JBQU1HLEtBQUssR0FBR3pELFFBQVEsQ0FBQ3NELENBQUQsQ0FBdEI7O0FBQ0Esa0JBQUlHLEtBQUssQ0FBQ0QsSUFBTixLQUFlQSxJQUFuQixFQUF5QjtBQUNyQix1QkFBT0MsS0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNEOzs7Ozs7Ozt3Q0FLc0JoQixJLEVBQWNHLFMsRUFBOEI7QUFBQSxnQkFDdkRwRSxJQUR1RCxHQUMxQ29FLFNBRDBDLENBQ3ZEcEUsSUFEdUQ7QUFBQSxnQkFDakRDLEdBRGlELEdBQzFDbUUsU0FEMEMsQ0FDakRuRSxHQURpRDtBQUU5RCxnQkFBTXdCLEdBQUcsR0FBRyxLQUFLQSxHQUFMLEtBQWFuQyxHQUFHLENBQUNzQyxNQUFqQixHQUEwQixRQUExQixHQUFxQyxNQUFqRDtBQUNBLHdDQUFxQkgsR0FBckIsdUJBQXFDQSxHQUFHLENBQUN5RCxXQUFKLEVBQXJDLGNBQTBEakIsSUFBMUQsU0FBaUVqRSxJQUFJLGNBQUtBLElBQUwsSUFBWSxFQUFqRixTQUFzRkMsR0FBRyxjQUFLQSxHQUFMLElBQVcsRUFBcEc7QUFDSDtBQUNEOzs7Ozs7O3dDQUlzQnVFLEcsRUFBMEI7QUFDNUMsbUJBQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNpQixPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEN4RyxjQUFBQSxNQUFNLENBQUN5RyxPQUFQLENBQWViLEdBQWYsRUFBb0IxRixTQUFwQixFQUErQixVQUFDd0csR0FBRCxFQUFXWCxTQUFYLEVBQW9DO0FBQy9ELG9CQUFJVyxHQUFKLEVBQVM7QUFDTEYsa0JBQUFBLE1BQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0gsaUJBRkQsTUFFTztBQUNISCxrQkFBQUEsT0FBTyxDQUFDUixTQUFELENBQVA7QUFDSDtBQUNKLGVBTkQ7QUFPSCxhQVJNLENBQVA7QUFTSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQWpUa0NqRyxTOzs7OztpQkFLWixJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFHSSxJOzs7Ozs7O2lCQUdDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNraW5uaW5nTW9kZWxDb21wb25lbnQsIFRleHR1cmUyRCwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudFRvdWNoLCBWZWMzLCBtYXRoLCB0d2VlbiwgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5cbmVudW0gU2V4IHtcbiAgICBNQUxFID0gMSxcbiAgICBGRU1BTEUgPSAyLFxufTtcblxuaW50ZXJmYWNlIERyZXNzSW5mbyB7XG4gICAga2luZD86IHN0cmluZyB8IG51bWJlcixcbiAgICBzdWI/OiBzdHJpbmcgfCBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEF2YXRhciB7XG4gICAgW3BhcnQ6IHN0cmluZ106IERyZXNzSW5mbyxcbiAgICAvLyBoYWlyOiBEcmVzc0luZm8sXG4gICAgLy8gZmFjZTogRHJlc3NJbmZvLFxuICAgIC8vIGV5ZXM6IERyZXNzSW5mbyxcbiAgICAvLyB0b3A6IERyZXNzSW5mbyxcbiAgICAvLyBwYW50czogRHJlc3NJbmZvLFxuICAgIC8vIHNob2VzOiBEcmVzc0luZm9cbn1cblxuQGNjY2xhc3MoXCJBdmF0YXJDb250cm9sbGVyXCIpXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIGZlbWFsZTogTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBtYWxlOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBjYW1lcmE6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHJlYWRvbmx5IG5GYWNlUGFuZWw6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHJlYWRvbmx5IG5EcmVzc1BhbmVsOiBOb2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgc2V4OiBTZXg7XG4gICAgcHJpdmF0ZSBhdmF0YXI6IEF2YXRhcjtcbiAgICBwcml2YXRlIHRhcmdldDogTm9kZTtcblxuICAgIHByaXZhdGUgaGFpckluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZmFjZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZXllc0luZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdG9wSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYW50c0luZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc2hvZXNJbmRleDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgcm90YXRpb25Jbk5EcmVzczogbWF0aC5RdWF0O1xuXG4gICAgLyoqXG4gICAgICog5o2i5Y+R5Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzSGFpcigpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2Jyb3duJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjEsIHN1YjogJ3JlZCd9LHtraW5kOjEsIHN1YjogJ3llbGxvdyd9LHtraW5kOjIsIHN1YjogJ2N5YW4nfSx7a2luZDoyLCBzdWI6ICdkYXJrJ30se2tpbmQ6Miwgc3ViOiAncGluayd9XVxuICAgICAgICB0aGlzLmhhaXJJbmRleCA9ICh0aGlzLmhhaXJJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5oYWlySW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmhhaXJJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnaGFpcicsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouiEuOWei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0ZhY2UoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Mn0sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLmZhY2VJbmRleCA9ICh0aGlzLmZhY2VJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5mYWNlSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmZhY2VJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnZmFjZScsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouecvOedm1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0V5ZXMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7c3ViOiAnYnJvd24nfSx7c3ViOiAnYmx1ZSd9LHtzdWI6ICdncmVlbid9XVxuICAgICAgICB0aGlzLmV5ZXNJbmRleCA9ICh0aGlzLmV5ZXNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5leWVzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLmV5ZXNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygnZXllcycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouS4iuiho1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1RvcCgpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ3BpbmsnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAnb3JhbmdlJ30se2tpbmQ6Miwgc3ViOiAnZ3JlZW4nfSx7a2luZDoyLCBzdWI6ICdwdXJwbGUnfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMudG9wSW5kZXggPSAodGhpcy50b3BJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy50b3BJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMudG9wSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3RvcCcsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNouijpOWtkFxuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc1BhbnRzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MSwgc3ViOiAnYmx1ZSd9LHtraW5kOjEsIHN1YjogJ2dyZWVuJ30se2tpbmQ6MSwgc3ViOiAnZGFyayd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICdvcmFuZ2UnfSx7a2luZDoyLCBzdWI6ICdibHVlJ30se2tpbmQ6Miwgc3ViOiAnYmxhY2snfSwge2tpbmQ6Miwgc3ViOiAnbm9ybWFsJ31dXG4gICAgICAgIHRoaXMucGFudHNJbmRleCA9ICh0aGlzLnBhbnRzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMucGFudHNJbmRleDtcbiAgICAgICAgY29uc3QgaW5kZXggPSArK3RoaXMucGFudHNJbmRleDtcbiAgICAgICAgdGhpcy5kcmVzcygncGFudHMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLpnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NTaG9lcygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ3llbGxvdyd9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoyLCBzdWI6ICd5ZWxsb3cnfSx7a2luZDoyLCBzdWI6ICdibHVlJ30se2tpbmQ6Miwgc3ViOiAncmVkJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnNob2VzSW5kZXggPSAodGhpcy5zaG9lc0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnNob2VzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnNob2VzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3Nob2VzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5YiH5Yiw5o2P6IS4XG4gICAgICovXG4gICAgcHVibGljIHN3aXRjaFRvTkZhY2UoKSB7XG4gICAgICAgIC8vIHR3ZWVuKHRoaXMuY2FtZXJhKVxuICAgICAgICAvLyAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogbmV3IFZlYzMoMCwgMC42LCAtMS41KSB9LCB7IGVhc2luZzogJ3Ntb290aCcgfSlcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0aGlzLnRhcmdldClcbiAgICAgICAgICAgIC50bygwLjQsIHsgcm90YXRpb246IG5ldyBtYXRoLlF1YXQoMCwgMCwgMCwgMSkgfSwgeyBlYXNpbmc6ICdsaW5lYXInIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0UG9zaXRpb24obmV3IFZlYzMoMCwgMC42LCAtMS41KSk7XG4gICAgICAgIHRoaXMucm90YXRpb25Jbk5EcmVzcyA9IHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCk7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKG5ldyBtYXRoLlF1YXQoMCwgMCwgMCAsMSkpO1xuICAgICAgICB0aGlzLm5GYWNlUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uRHJlc3NQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5YiH5Yiw5o2i6KOFXG4gICAgICovXG4gICAgcHVibGljIHN3aXRjaFRvTkRyZXNzKCkge1xuICAgICAgICAvLyB0d2Vlbih0aGlzLmNhbWVyYSlcbiAgICAgICAgLy8gICAgIC50bygwLjQsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDAsIDApIH0sIHsgZWFzaW5nOiAnc21vb3RoJyB9KVxuICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHRoaXMudGFyZ2V0KVxuICAgICAgICAgICAgLnRvKDAuNCwgeyByb3RhdGlvbjogdGhpcy5yb3RhdGlvbkluTkRyZXNzIH0sIHsgZWFzaW5nOiAnbGluZWFyJyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBWZWMzKDAsIDAsIDApKTtcbiAgICAgICAgLy8gdGhpcy50YXJnZXQuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbkluTkRyZXNzKTtcbiAgICAgICAgdGhpcy5uRmFjZVBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5EcmVzc1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaNj+S4i+W3tFxuICAgICAqIEBwYXJhbSBzbGlkZXIg5ruR5p2GXG4gICAgICovXG4gICAgcHVibGljIG5KYXcoc2xpZGVyOiBTbGlkZXJDb21wb25lbnQpe1xuICAgICAgICBjb25zb2xlLmxvZyhzbGlkZXIucHJvZ3Jlc3MpXG4gICAgICAgIHdpbmRvdy50ID0gdGhpcy50YXJnZXRcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXJnZXQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMTBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuKVxuICAgIH1cblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNleCA9IHRoaXMuZ2V0QXZhdGFyU2V4KCk7XG4gICAgICAgIHRoaXMuYXZhdGFyID0gdGhpcy5zZXggPT09IFNleC5GRU1BTEUgPyB0aGlzLmdldEF2YXRhckZlbWFsZUluZm8oKSA6IHRoaXMuZ2V0QXZhdGFyTWFsZUluZm8oKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/IHRoaXMuZmVtYWxlIDogdGhpcy5mZW1hbGU7XG4gICAgICAgIHdpbmRvdy5jYW1lcmEgPSB0aGlzLmNhbWVyYVxuICAgICAgICB0aGlzLmRyZXNzQWxsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfTU9WRSx0aGlzLm9uTW91c2VNb3ZlLHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpvKDmoIfmi5bliqjmk43mjqfkurrnianml4vovaxcbiAgICAgKiBAcGFyYW0gZXZlbnQg5LqL5Lu25a+56LGhXG4gICAgICovXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpe1xuICAgICAgICBpZihldmVudC5tb3ZlbWVudFghPTApe1xuICAgICAgICAgICAgY29uc3QgdXAgPW5ldyBWZWMzKDAsMSwwKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9ueCA9IHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBtYXRoLlF1YXQucm90YXRlQXJvdW5kKHJvdGF0aW9ueCwgcm90YXRpb254LCB1cCwgZXZlbnQubW92ZW1lbnRYLzUvIDM2MC4wICogMy4xNDE1OTI2NTM1KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHJvdGF0aW9ueCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6Kem5pG45pON5o6n5Lq654mp5peL6L2sXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuWvueixoVxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQuZ2V0RGVsdGEoKS54ICE9IDApe1xuICAgICAgICAgICAgY29uc3QgdXAgPW5ldyBWZWMzKDAsMSwwKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9ueCA9IHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBtYXRoLlF1YXQucm90YXRlQXJvdW5kKHJvdGF0aW9ueCwgcm90YXRpb254LCB1cCwgZXZlbnQuZ2V0RGVsdGEoKS54LzUvIDM2MC4wICogMy4xNDE1OTI2NTM1KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHJvdGF0aW9ueCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5oCn5YirXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhclNleCAoKTogU2V4IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyc3lzX3NleCcpKSB8fCBTZXguRkVNQUxFXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWls+aAp+edgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJGZW1hbGVJbmZvICgpOiBBdmF0YXIge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19mZW1hbGVfaW5mbycpKSB8fCB7XG4gICAgICAgICAgICBoYWlyOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdicm93bidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWNlOiB7XG4gICAgICAgICAgICAgICAga2luZDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV5ZXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYW50czoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG9lczoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnlLfmgKfnnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyTWFsZUluZm8gKCk6IEF2YXRhciB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXZhdGFyc3lzX21hbGVfaW5mbycpKSB8fCB7XG4gICAgICAgICAgICBoYWlyOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdicm93bidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWNlOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdub3JtYWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXllczoge1xuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhbnRzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob2VzOiB7XG4gICAgICAgICAgICAgICAga2luZDogMSxcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaVtOS9k+edgOijhVxuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0FsbCAoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gT2JqZWN0LmtleXModGhpcy5hdmF0YXIpLm1hcCgocGFydDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kcmVzcyhwYXJ0LCB0aGlzLmF2YXRhcltwYXJ0XSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmDqOS9jeedgOijhVxuICAgICAqIEBwYXJhbSBwYXJ0IOmDqOS9jVxuICAgICAqIEBwYXJhbSBkcmVzc0luZm8g6YOo5L2N552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzIChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogUHJvbWlzZTxOb2RlPiB7XG4gICAgICAgIGNvbnN0IHByZSA9IHRoaXMuZ2V0UGFydChwYXJ0LCB0aGlzLmF2YXRhcltwYXJ0XSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFBhcnQocGFydCwgZHJlc3NJbmZvKTtcbiAgICAgICAgY29uc3QgcmVzOiBzdHJpbmcgPSB0aGlzLmdldFRleHR1cmVSZXMocGFydCwgZHJlc3NJbmZvKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZFRleHR1cmUyRChyZXMpLnRoZW4oKHRleHR1cmUyRDogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBjdXJyZW50LmdldENvbXBvbmVudChTa2lubmluZ01vZGVsQ29tcG9uZW50KS5tYXRlcmlhbHM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1tpXS5zZXRQcm9wZXJ0eSgnbWFpblRleHR1cmUnLCB0ZXh0dXJlMkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgIT09IHByZSkge1xuICAgICAgICAgICAgICAgIHByZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBbYnVnIGZpeF0g5LuOQeaooeWei+WIh+aNouWIsELmqKHlnovml7bvvIxB5qih5Z6L55qE5YWo5bGA5peL6L2s5L+h5oGv5pyq6IO95pu05paw5Yiw5pyA5paw44CCXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0Um90YXRpb24odGhpcy50YXJnZXQuZ2V0Um90YXRpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmF2YXRhcltwYXJ0XSA9IGRyZXNzSW5mbztcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnnYDoo4Xpg6jkvY3nmoTlhYPntKBcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQYXJ0IChwYXJ0OiBzdHJpbmcsIGRyZXNzSW5mbzogRHJlc3NJbmZvKTogTm9kZSB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgJHtwYXJ0fSR7a2luZD9gLSR7a2luZH1gOicnfWBcbiAgICAgICAgY29uc3QgY2hpbGRyZW46IE5vZGVbXSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuWzBdLmNoaWxkcmVuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6YOo5L2N55u45bqU55qE6LWE5rqQ5Zyw5Z2AXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGV4dHVyZVJlcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHtraW5kLCBzdWJ9ID0gZHJlc3NJbmZvXG4gICAgICAgIGNvbnN0IHNleCA9IHRoaXMuc2V4ID09PSBTZXguRkVNQUxFID8gJ0ZlbWFsZScgOiAnTWFsZSdcbiAgICAgICAgcmV0dXJuIGBjaGFyYWN0ZXJzLyR7c2V4fS90ZXh0dXJlcy8ke3NleC50b0xvd2VyQ2FzZSgpfV8ke3BhcnR9JHtraW5kP2AtJHtraW5kfWA6Jyd9JHtzdWI/YF8ke3N1Yn1gOicnfS90ZXh0dXJlYFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqjmgIHliqDovb3otLTlm75cbiAgICAgKiBAcGFyYW0gcmVzIOi1hOa6kOWcsOWdgFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkVGV4dHVyZTJEIChyZXMpIDogUHJvbWlzZTxUZXh0dXJlMkQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKHJlcywgVGV4dHVyZTJEICwoZXJyOiBhbnksIHRleHR1cmUyRDogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRleHR1cmUyRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19