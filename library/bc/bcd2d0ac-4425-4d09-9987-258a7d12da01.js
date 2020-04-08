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
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.sex = this.getAvatarSex();
            this.avatar = this.sex === Sex.FEMALE ? this.getAvatarFemaleInfo() : this.getAvatarMaleInfo();
            this.target = this.sex === Sex.FEMALE ? this.female : this.female;
            console.log(this.target.getRotation()); // window.t = director.getScene()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvQXZhdGFyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiVmVjMyIsIm1hdGgiLCJ0d2VlbiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNleCIsIkF2YXRhckNvbnRyb2xsZXIiLCJ0eXBlIiwiaGFpckluZGV4IiwiZmFjZUluZGV4IiwiZXllc0luZGV4IiwidG9wSW5kZXgiLCJwYW50c0luZGV4Iiwic2hvZXNJbmRleCIsImluZm9zIiwia2luZCIsInN1YiIsImxlbmd0aCIsImluZGV4IiwiZHJlc3MiLCJ0YXJnZXQiLCJ0byIsInJvdGF0aW9uIiwiUXVhdCIsImVhc2luZyIsInN0YXJ0IiwiY2FtZXJhIiwic2V0UG9zaXRpb24iLCJyb3RhdGlvbkluTkRyZXNzIiwiZ2V0Um90YXRpb24iLCJuRmFjZVBhbmVsIiwiYWN0aXZlIiwibkRyZXNzUGFuZWwiLCJzZXgiLCJnZXRBdmF0YXJTZXgiLCJhdmF0YXIiLCJGRU1BTEUiLCJnZXRBdmF0YXJGZW1hbGVJbmZvIiwiZ2V0QXZhdGFyTWFsZUluZm8iLCJmZW1hbGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZHJlc3NBbGwiLCJ0aGVuIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJNT1VTRV9NT1ZFIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm1vdmVtZW50WCIsInVwIiwicm90YXRpb254Iiwicm90YXRlQXJvdW5kIiwic2V0Um90YXRpb24iLCJnZXREZWx0YSIsIngiLCJwYXJzZUludCIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImhhaXIiLCJmYWNlIiwiZXllcyIsInRvcCIsInBhbnRzIiwic2hvZXMiLCJwcm9taXNlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJwYXJ0IiwiUHJvbWlzZSIsImFsbCIsImRyZXNzSW5mbyIsInByZSIsImdldFBhcnQiLCJjdXJyZW50IiwicmVzIiwiZ2V0VGV4dHVyZVJlcyIsImxvYWRUZXh0dXJlMkQiLCJ0ZXh0dXJlMkQiLCJtYXRlcmlhbHMiLCJnZXRDb21wb25lbnQiLCJpIiwic2V0UHJvcGVydHkiLCJuYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInRvTG93ZXJDYXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRSZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLHNCLE9BQUFBLHNCO0FBQXdCQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUF5QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7Ozs7OztBQUN4SUMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7aUJBR1pDLEc7QUFBQUEsUUFBQUEsRyxDQUFBQSxHO0FBQUFBLFFBQUFBLEcsQ0FBQUEsRztTQUFBQSxHLEtBQUFBLEc7O0FBR0o7O2tDQWtCWUMsZ0IsV0FEWkgsT0FBTyxDQUFDLGtCQUFELEMsVUFLSEMsUUFBUSxDQUFDO0FBQUNHLFFBQUFBLElBQUksRUFBRWI7QUFBUCxPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUNHLFFBQUFBLElBQUksRUFBRWI7QUFB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QixPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENyRyxjQUFBQSxNQUFNLENBQUNzRyxPQUFQLENBQWVkLEdBQWYsRUFBb0J0RixTQUFwQixFQUErQixVQUFDcUcsR0FBRCxFQUFXWixTQUFYLEVBQW9DO0FBQy9ELG9CQUFJWSxHQUFKLEVBQVM7QUFDTEYsa0JBQUFBLE1BQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0gsaUJBRkQsTUFFTztBQUNISCxrQkFBQUEsT0FBTyxDQUFDVCxTQUFELENBQVA7QUFDSDtBQUNKLGVBTkQ7QUFPSCxhQVJNLENBQVA7QUFTSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQTFTa0M3RixTOzs7OztpQkFLWixJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0ksSTs7Ozs7OztpQkFHSSxJOzs7Ozs7O2lCQUdDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNraW5uaW5nTW9kZWxDb21wb25lbnQsIFRleHR1cmUyRCwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudFRvdWNoLCBWZWMzLCBtYXRoLCB0d2VlbiB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuXG5lbnVtIFNleCB7XG4gICAgTUFMRSA9IDEsXG4gICAgRkVNQUxFID0gMixcbn07XG5cbmludGVyZmFjZSBEcmVzc0luZm8ge1xuICAgIGtpbmQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgc3ViPzogc3RyaW5nIHwgbnVtYmVyXG59XG5cbmludGVyZmFjZSBBdmF0YXIge1xuICAgIFtwYXJ0OiBzdHJpbmddOiBEcmVzc0luZm8sXG4gICAgLy8gaGFpcjogRHJlc3NJbmZvLFxuICAgIC8vIGZhY2U6IERyZXNzSW5mbyxcbiAgICAvLyBleWVzOiBEcmVzc0luZm8sXG4gICAgLy8gdG9wOiBEcmVzc0luZm8sXG4gICAgLy8gcGFudHM6IERyZXNzSW5mbyxcbiAgICAvLyBzaG9lczogRHJlc3NJbmZvXG59XG5cbkBjY2NsYXNzKFwiQXZhdGFyQ29udHJvbGxlclwiKVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBmZW1hbGU6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgbWFsZTogTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXG4gICAgcmVhZG9ubHkgY2FtZXJhOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBuRmFjZVBhbmVsOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICByZWFkb25seSBuRHJlc3NQYW5lbDogTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHNleDogU2V4O1xuICAgIHByaXZhdGUgYXZhdGFyOiBBdmF0YXI7XG4gICAgcHJpdmF0ZSB0YXJnZXQ6IE5vZGU7XG5cbiAgICBwcml2YXRlIGhhaXJJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZhY2VJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGV5ZXNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRvcEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFudHNJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNob2VzSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHJvdGF0aW9uSW5ORHJlc3M6IG1hdGguUXVhdDtcblxuICAgIC8qKlxuICAgICAqIOaNouWPkeWei1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzc0hhaXIoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdicm93bid9LCB7a2luZDoxLCBzdWI6ICdub3JtYWwnfSx7a2luZDoxLCBzdWI6ICdyZWQnfSx7a2luZDoxLCBzdWI6ICd5ZWxsb3cnfSx7a2luZDoyLCBzdWI6ICdjeWFuJ30se2tpbmQ6Miwgc3ViOiAnZGFyayd9LHtraW5kOjIsIHN1YjogJ3BpbmsnfV1cbiAgICAgICAgdGhpcy5oYWlySW5kZXggPSAodGhpcy5oYWlySW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuaGFpckluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5oYWlySW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2hhaXInLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLohLjlnotcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NGYWNlKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe2tpbmQ6MX0sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjJ9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5mYWNlSW5kZXggPSAodGhpcy5mYWNlSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuZmFjZUluZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5mYWNlSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2ZhY2UnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLnnLznnZtcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NFeWVzKCkge1xuICAgICAgICBjb25zdCBpbmZvczogRHJlc3NJbmZvW10gPSBbe3N1YjogJ2Jyb3duJ30se3N1YjogJ2JsdWUnfSx7c3ViOiAnZ3JlZW4nfV1cbiAgICAgICAgdGhpcy5leWVzSW5kZXggPSAodGhpcy5leWVzSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMuZXllc0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5leWVzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ2V5ZXMnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLkuIrooaNcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NUb3AoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICdwaW5rJ30sIHtraW5kOjEsIHN1YjogJ25vcm1hbCd9LHtraW5kOjIsIHN1YjogJ29yYW5nZSd9LHtraW5kOjIsIHN1YjogJ2dyZWVuJ30se2tpbmQ6Miwgc3ViOiAncHVycGxlJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnRvcEluZGV4ID0gKHRoaXMudG9wSW5kZXggPj0gaW5mb3MubGVuZ3RoIC0gMSkgPyAtMSA6IHRoaXMudG9wSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnRvcEluZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCd0b3AnLCBpbmZvc1tpbmRleF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmjaLoo6TlrZBcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NQYW50cygpIHtcbiAgICAgICAgY29uc3QgaW5mb3M6IERyZXNzSW5mb1tdID0gW3traW5kOjEsIHN1YjogJ2JsdWUnfSx7a2luZDoxLCBzdWI6ICdncmVlbid9LHtraW5kOjEsIHN1YjogJ2RhcmsnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAnb3JhbmdlJ30se2tpbmQ6Miwgc3ViOiAnYmx1ZSd9LHtraW5kOjIsIHN1YjogJ2JsYWNrJ30sIHtraW5kOjIsIHN1YjogJ25vcm1hbCd9XVxuICAgICAgICB0aGlzLnBhbnRzSW5kZXggPSAodGhpcy5wYW50c0luZGV4ID49IGluZm9zLmxlbmd0aCAtIDEpID8gLTEgOiB0aGlzLnBhbnRzSW5kZXg7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKyt0aGlzLnBhbnRzSW5kZXg7XG4gICAgICAgIHRoaXMuZHJlc3MoJ3BhbnRzJywgaW5mb3NbaW5kZXhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o2i6Z6LXG4gICAgICovXG4gICAgcHVibGljIGRyZXNzU2hvZXMoKSB7XG4gICAgICAgIGNvbnN0IGluZm9zOiBEcmVzc0luZm9bXSA9IFt7a2luZDoxLCBzdWI6ICdibHVlJ30se2tpbmQ6MSwgc3ViOiAnZ3JlZW4nfSx7a2luZDoxLCBzdWI6ICd5ZWxsb3cnfSwge2tpbmQ6MSwgc3ViOiAnbm9ybWFsJ30se2tpbmQ6Miwgc3ViOiAneWVsbG93J30se2tpbmQ6Miwgc3ViOiAnYmx1ZSd9LHtraW5kOjIsIHN1YjogJ3JlZCd9LCB7a2luZDoyLCBzdWI6ICdub3JtYWwnfV1cbiAgICAgICAgdGhpcy5zaG9lc0luZGV4ID0gKHRoaXMuc2hvZXNJbmRleCA+PSBpbmZvcy5sZW5ndGggLSAxKSA/IC0xIDogdGhpcy5zaG9lc0luZGV4O1xuICAgICAgICBjb25zdCBpbmRleCA9ICsrdGhpcy5zaG9lc0luZGV4O1xuICAgICAgICB0aGlzLmRyZXNzKCdzaG9lcycsIGluZm9zW2luZGV4XSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+WIsOaNj+iEuFxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hUb05GYWNlKCkge1xuICAgICAgICAvLyB0d2Vlbih0aGlzLmNhbWVyYSlcbiAgICAgICAgLy8gICAgIC50bygwLjQsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDAuNiwgLTEuNSkgfSwgeyBlYXNpbmc6ICdzbW9vdGgnIH0pXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odGhpcy50YXJnZXQpXG4gICAgICAgICAgICAudG8oMC40LCB7IHJvdGF0aW9uOiBuZXcgbWF0aC5RdWF0KDAsIDAsIDAsIDEpIH0sIHsgZWFzaW5nOiAnbGluZWFyJyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKG5ldyBWZWMzKDAsIDAuNiwgLTEuNSkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uSW5ORHJlc3MgPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAvLyB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihuZXcgbWF0aC5RdWF0KDAsIDAsIDAgLDEpKTtcbiAgICAgICAgdGhpcy5uRmFjZVBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubkRyZXNzUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+WIsOaNouijhVxuICAgICAqL1xuICAgIHB1YmxpYyBzd2l0Y2hUb05EcmVzcygpIHtcbiAgICAgICAgLy8gdHdlZW4odGhpcy5jYW1lcmEpXG4gICAgICAgIC8vICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBuZXcgVmVjMygwLCAwLCAwKSB9LCB7IGVhc2luZzogJ3Ntb290aCcgfSlcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xuICAgICAgICB0d2Vlbih0aGlzLnRhcmdldClcbiAgICAgICAgICAgIC50bygwLjQsIHsgcm90YXRpb246IHRoaXMucm90YXRpb25Jbk5EcmVzcyB9LCB7IGVhc2luZzogJ2xpbmVhcicgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0aGlzLmNhbWVyYS5zZXRQb3NpdGlvbihuZXcgVmVjMygwLCAwLCAwKSk7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHRoaXMucm90YXRpb25Jbk5EcmVzcyk7XG4gICAgICAgIHRoaXMubkZhY2VQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uRHJlc3NQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNleCA9IHRoaXMuZ2V0QXZhdGFyU2V4KCk7XG4gICAgICAgIHRoaXMuYXZhdGFyID0gdGhpcy5zZXggPT09IFNleC5GRU1BTEUgPyB0aGlzLmdldEF2YXRhckZlbWFsZUluZm8oKSA6IHRoaXMuZ2V0QXZhdGFyTWFsZUluZm8oKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/IHRoaXMuZmVtYWxlIDogdGhpcy5mZW1hbGU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCkpXG4gICAgICAgIC8vIHdpbmRvdy50ID0gZGlyZWN0b3IuZ2V0U2NlbmUoKVxuICAgICAgICB3aW5kb3cuY2FtZXJhID0gdGhpcy5jYW1lcmFcbiAgICAgICAgdGhpcy5kcmVzc0FsbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX01PVkUsdGhpcy5vbk1vdXNlTW92ZSx0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6byg5qCH5ouW5Yqo5pON5o6n5Lq654mp5peL6L2sXG4gICAgICogQHBhcmFtIGV2ZW50IOS6i+S7tuWvueixoVxuICAgICAqL1xuICAgIG9uTW91c2VNb3ZlKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQubW92ZW1lbnRYIT0wKXtcbiAgICAgICAgICAgIGNvbnN0IHVwID1uZXcgVmVjMygwLDEsMCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIGV2ZW50Lm1vdmVtZW50WC81LyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOinpuaRuOaTjeaOp+S6uueJqeaXi+i9rFxuICAgICAqIEBwYXJhbSBldmVudCDkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBvblRvdWNoTW92ZShldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LmdldERlbHRhKCkueCAhPSAwKXtcbiAgICAgICAgICAgIGNvbnN0IHVwID1uZXcgVmVjMygwLDEsMCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbnggPSB0aGlzLnRhcmdldC5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgbWF0aC5RdWF0LnJvdGF0ZUFyb3VuZChyb3RhdGlvbngsIHJvdGF0aW9ueCwgdXAsIGV2ZW50LmdldERlbHRhKCkueC81LyAzNjAuMCAqIDMuMTQxNTkyNjUzNSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZXRSb3RhdGlvbihyb3RhdGlvbngpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaAp+WIq1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmF0YXJTZXggKCk6IFNleCB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19zZXgnKSkgfHwgU2V4LkZFTUFMRVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blpbPmgKfnnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhdGFyRmVtYWxlSW5mbyAoKTogQXZhdGFyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdmF0YXJzeXNfZmVtYWxlX2luZm8nKSkgfHwge1xuICAgICAgICAgICAgaGFpcjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYnJvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleWVzOiB7XG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFudHM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvZXM6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAxLFxuICAgICAgICAgICAgICAgIHN1YjogJ2JsdWUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W55S35oCn552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldEF2YXRhck1hbGVJbmZvICgpOiBBdmF0YXIge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F2YXRhcnN5c19tYWxlX2luZm8nKSkgfHwge1xuICAgICAgICAgICAgaGFpcjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYnJvd24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnbm9ybWFsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV5ZXM6IHtcbiAgICAgICAgICAgICAgICBzdWI6ICdibHVlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYW50czoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG9lczoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IDEsXG4gICAgICAgICAgICAgICAgc3ViOiAnYmx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlbTkvZPnnYDoo4VcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJlc3NBbGwgKCkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IE9iamVjdC5rZXlzKHRoaXMuYXZhdGFyKS5tYXAoKHBhcnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJlc3MocGFydCwgdGhpcy5hdmF0YXJbcGFydF0pO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpg6jkvY3nnYDoo4VcbiAgICAgKiBAcGFyYW0gcGFydCDpg6jkvY1cbiAgICAgKiBAcGFyYW0gZHJlc3NJbmZvIOmDqOS9jeedgOijheS/oeaBr1xuICAgICAqL1xuICAgIHB1YmxpYyBkcmVzcyAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IFByb21pc2U8Tm9kZT4ge1xuICAgICAgICBjb25zdCBwcmUgPSB0aGlzLmdldFBhcnQocGFydCwgdGhpcy5hdmF0YXJbcGFydF0pO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRQYXJ0KHBhcnQsIGRyZXNzSW5mbyk7XG4gICAgICAgIGNvbnN0IHJlczogc3RyaW5nID0gdGhpcy5nZXRUZXh0dXJlUmVzKHBhcnQsIGRyZXNzSW5mbyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRUZXh0dXJlMkQocmVzKS50aGVuKCh0ZXh0dXJlMkQ6IFRleHR1cmUyRCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gY3VycmVudC5nZXRDb21wb25lbnQoU2tpbm5pbmdNb2RlbENvbXBvbmVudCkubWF0ZXJpYWxzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNbaV0uc2V0UHJvcGVydHkoJ21haW5UZXh0dXJlJywgdGV4dHVyZTJEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBwcmUpIHtcbiAgICAgICAgICAgICAgICBwcmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gW2J1ZyBmaXhdIOS7jkHmqKHlnovliIfmjaLliLBC5qih5Z6L5pe277yMQeaooeWei+eahOWFqOWxgOaXi+i9rOS/oeaBr+acquiDveabtOaWsOWIsOacgOaWsOOAglxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldFJvdGF0aW9uKHRoaXMudGFyZ2V0LmdldFJvdGF0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hdmF0YXJbcGFydF0gPSBkcmVzc0luZm87XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W552A6KOF6YOo5L2N55qE5YWD57SgXG4gICAgICogQHBhcmFtIHBhcnQg6YOo5L2NXG4gICAgICogQHBhcmFtIGRyZXNzSW5mbyDpg6jkvY3nnYDoo4Xkv6Hmga9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGFydCAocGFydDogc3RyaW5nLCBkcmVzc0luZm86IERyZXNzSW5mbyk6IE5vZGUge1xuICAgICAgICBjb25zdCB7a2luZCwgc3VifSA9IGRyZXNzSW5mb1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7cGFydH0ke2tpbmQ/YC0ke2tpbmR9YDonJ31gXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuOiBOb2RlW10gPSB0aGlzLnRhcmdldC5jaGlsZHJlblswXS5jaGlsZHJlblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlumDqOS9jeebuOW6lOeahOi1hOa6kOWcsOWdgFxuICAgICAqIEBwYXJhbSBwYXJ0IOmDqOS9jVxuICAgICAqIEBwYXJhbSBkcmVzc0luZm8g6YOo5L2N552A6KOF5L+h5oGvXG4gICAgICovXG4gICAgcHVibGljIGdldFRleHR1cmVSZXMgKHBhcnQ6IHN0cmluZywgZHJlc3NJbmZvOiBEcmVzc0luZm8pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB7a2luZCwgc3VifSA9IGRyZXNzSW5mb1xuICAgICAgICBjb25zdCBzZXggPSB0aGlzLnNleCA9PT0gU2V4LkZFTUFMRSA/ICdGZW1hbGUnIDogJ01hbGUnXG4gICAgICAgIHJldHVybiBgY2hhcmFjdGVycy8ke3NleH0vdGV4dHVyZXMvJHtzZXgudG9Mb3dlckNhc2UoKX1fJHtwYXJ0fSR7a2luZD9gLSR7a2luZH1gOicnfSR7c3ViP2BfJHtzdWJ9YDonJ30vdGV4dHVyZWBcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yqo5oCB5Yqg6L296LS05Zu+XG4gICAgICogQHBhcmFtIHJlcyDotYTmupDlnLDlnYBcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFRleHR1cmUyRCAocmVzKSA6IFByb21pc2U8VGV4dHVyZTJEPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhyZXMsIFRleHR1cmUyRCAsKGVycjogYW55LCB0ZXh0dXJlMkQ6IFRleHR1cmUyRCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZXh0dXJlMkQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==