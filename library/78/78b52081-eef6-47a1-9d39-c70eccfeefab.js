System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, loader, Prefab, instantiate, Quat, _dec, _class, _crd, ccclass, property, PlayerController;

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

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        _inherits(PlayerController, _Component);

        function PlayerController() {
          _classCallCheck(this, PlayerController);

          return _possibleConstructorReturn(this, _getPrototypeOf(PlayerController).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYWxpL0RvY3VtZW50cy93b3JrL2NvY29zX2F2YXRhci9hc3NldHMvc2NyaXB0cy9QbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJsb2FkZXIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlF1YXQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQbGF5ZXJDb250cm9sbGVyIiwibG9hZEJvZHkiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwiY29uc29sZSIsImxvZyIsIm5ld05vZGUiLCJjb3B5IiwiZ2V0Um90YXRpb24iLCJzZXRSb3RhdGlvbiIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiY2hpbGRyZW4iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBMkJDLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3pFQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROztrQ0FHSkMsZ0IsV0FEWkYsT0FBTyxDQUFDLGtCQUFELEM7Ozs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBRVM7QUFDTDtBQUNBLGlCQUFLRyxRQUFMO0FBQ0g7OztxQ0FFVztBQUNSUCxZQUFBQSxNQUFNLENBQUNRLE9BQVAsQ0FBZSxhQUFmLEVBQThCUCxNQUE5QixFQUF1QyxVQUFDUSxHQUFELEVBQVdDLE1BQVgsRUFBOEI7QUFDakVDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJGLE1BQWpCO0FBQ0Esa0JBQU1HLE9BQU8sR0FBR1gsV0FBVyxDQUFDUSxNQUFELENBQTNCO0FBQ0FHLGNBQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCQyxPQUFqQixFQUppRSxDQUtqRTtBQUNBOztBQUNBRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCQyxPQUFPLENBQUNFLFdBQVIsRUFBakI7QUFDQUYsY0FBQUEsT0FBTyxDQUFDRyxXQUFSLENBQW9CLElBQUliLElBQUosQ0FBUyxDQUFULEVBQVksR0FBWixFQUFpQixDQUFqQixDQUFwQjtBQUNBUSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDSSx1QkFBUixDQUFnQyxRQUFoQyxDQUFaO0FBQ0FOLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNLLFFBQXBCO0FBQ0FMLGNBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQixDQUFqQixFQUFvQkMsTUFBcEIsR0FBNkIsSUFBN0IsQ0FYaUUsQ0FZakU7QUFDSCxhQWJEO0FBY0g7OztrQ0FFUSxDQUlSLEMsQ0FIRztBQUNBO0FBQ0E7QUFHSjtBQUNBO0FBQ0E7Ozs7O1FBdENrQ3BCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgZGlyZWN0b3IsIHYzLCBRdWF0IH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIlBsYXllckNvbnRyb2xsZXJcIilcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMubG9hZEJvZHkoKTtcbiAgICB9XG5cbiAgICBsb2FkQm9keSAoKSB7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzKFwiY29jb3MvQ29jb3NcIiwgUHJlZmFiICwgKGVycjogYW55LCBwcmVmYWI6IFByZWZhYikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coMTExLCBwcmVmYWIpXG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIG5ld05vZGUuY29weVxuICAgICAgICAgICAgY29uc29sZS5sb2coMjIyLCBuZXdOb2RlKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coMzMzLCBuZXdOb2RlLmdldFBvc2l0aW9uKCkpXG4gICAgICAgICAgICAvLyBuZXdOb2RlLnNldFBvc2l0aW9uKHYzKDAsIDIsIDApKVxuICAgICAgICAgICAgY29uc29sZS5sb2coNDQ0LCBuZXdOb2RlLmdldFJvdGF0aW9uKCkpXG4gICAgICAgICAgICBuZXdOb2RlLnNldFJvdGF0aW9uKG5ldyBRdWF0KDAsIDAuMSwgMCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKCdIZWxtZXQnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUuY2hpbGRyZW4pXG4gICAgICAgICAgICBuZXdOb2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBkaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5ld05vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9uZSAoKSB7XG4gICAgICAgIC8vIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIC8vIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGFyZ2V0Tm9kZSk7XG4gICAgICAgIC8vIG5vZGUucGFyZW50ID0gc2NlbmU7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19