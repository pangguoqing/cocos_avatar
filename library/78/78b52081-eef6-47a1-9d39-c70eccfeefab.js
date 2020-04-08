System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, loader, Prefab, instantiate, Quat, _dec, _class, _crd, ccclass, property, PlayerController;

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
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "78b52CB7vZHoZ05xw7M/u+r", "PlayerController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(PlayerController, _Component);

        var _super = _createSuper(PlayerController);

        function PlayerController() {
          _classCallCheck(this, PlayerController);

          return _super.apply(this, arguments);
        }

        _createClass(PlayerController, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.loadBody();
          }
        }, {
          key: "loadBody",
          value: function loadBody() {
            loader.loadRes("cocos/Cocos", Prefab, function (err, prefab) {
              console.log(111, prefab);
              var newNode = instantiate(prefab);
              newNode.copy;
              console.log(222, newNode); // console.log(333, newNode.getPosition())
              // newNode.setPosition(v3(0, 2, 0))

              console.log(444, newNode.getRotation());
              newNode.setRotation(new Quat(0, 0.1, 0));
              console.log(newNode.getComponentsInChildren('Helmet'));
              console.log(newNode.children);
              newNode.children[0].active = true; // director.getScene().addChild(newNode);
            });
          }
        }, {
          key: "clone",
          value: function clone() {} // var scene = cc.director.getScene();
          // var node = cc.instantiate(targetNode);
          // node.parent = scene;
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return PlayerController;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbmFsaS9Eb2N1bWVudHMvd29yay9jb2Nvc19hdmF0YXIvYXNzZXRzL3NjcmlwdHMvUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibG9hZGVyIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJRdWF0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUGxheWVyQ29udHJvbGxlciIsImxvYWRCb2R5IiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsImNvbnNvbGUiLCJsb2ciLCJuZXdOb2RlIiwiY29weSIsImdldFJvdGF0aW9uIiwic2V0Um90YXRpb24iLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsImNoaWxkcmVuIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUEyQkMsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDekVDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7Ozs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0EsaUJBQUtHLFFBQUw7QUFDSDs7O3FDQUVXO0FBQ1JQLFlBQUFBLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlLGFBQWYsRUFBOEJQLE1BQTlCLEVBQXVDLFVBQUNRLEdBQUQsRUFBV0MsTUFBWCxFQUE4QjtBQUNqRUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQkYsTUFBakI7QUFDQSxrQkFBTUcsT0FBTyxHQUFHWCxXQUFXLENBQUNRLE1BQUQsQ0FBM0I7QUFDQUcsY0FBQUEsT0FBTyxDQUFDQyxJQUFSO0FBQ0FILGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJDLE9BQWpCLEVBSmlFLENBS2pFO0FBQ0E7O0FBQ0FGLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJDLE9BQU8sQ0FBQ0UsV0FBUixFQUFqQjtBQUNBRixjQUFBQSxPQUFPLENBQUNHLFdBQVIsQ0FBb0IsSUFBSWIsSUFBSixDQUFTLENBQVQsRUFBWSxHQUFaLEVBQWlCLENBQWpCLENBQXBCO0FBQ0FRLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNJLHVCQUFSLENBQWdDLFFBQWhDLENBQVo7QUFDQU4sY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQU8sQ0FBQ0ssUUFBcEI7QUFDQUwsY0FBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCLENBQWpCLEVBQW9CQyxNQUFwQixHQUE2QixJQUE3QixDQVhpRSxDQVlqRTtBQUNILGFBYkQ7QUFjSDs7O2tDQUVRLENBSVIsQyxDQUhHO0FBQ0E7QUFDQTtBQUdKO0FBQ0E7QUFDQTs7Ozs7UUF0Q2tDcEIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBkaXJlY3RvciwgdjMsIFF1YXQgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiUGxheWVyQ29udHJvbGxlclwiKVxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5sb2FkQm9keSgpO1xuICAgIH1cblxuICAgIGxvYWRCb2R5ICgpIHtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXMoXCJjb2Nvcy9Db2Nvc1wiLCBQcmVmYWIgLCAoZXJyOiBhbnksIHByZWZhYjogUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygxMTEsIHByZWZhYilcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgbmV3Tm9kZS5jb3B5XG4gICAgICAgICAgICBjb25zb2xlLmxvZygyMjIsIG5ld05vZGUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygzMzMsIG5ld05vZGUuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgICAgIC8vIG5ld05vZGUuc2V0UG9zaXRpb24odjMoMCwgMiwgMCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyg0NDQsIG5ld05vZGUuZ2V0Um90YXRpb24oKSlcbiAgICAgICAgICAgIG5ld05vZGUuc2V0Um90YXRpb24obmV3IFF1YXQoMCwgMC4xLCAwKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oJ0hlbG1ldCcpKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZS5jaGlsZHJlbilcbiAgICAgICAgICAgIG5ld05vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobmV3Tm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb25lICgpIHtcbiAgICAgICAgLy8gdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgLy8gdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0YXJnZXROb2RlKTtcbiAgICAgICAgLy8gbm9kZS5wYXJlbnQgPSBzY2VuZTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=