;
(function () {
  System.register(['./public/index-legacy-D9Q-tWd5.js'], function (exports, module) {
    'use strict';

    var defineComponent, reactive, useMouse, useCounter, dayjs, ref, createElementBlock, createBaseVNode, createVNode, createTextVNode, toDisplayString, unref, withCtx, withModifiers, Fragment, resolveComponent, Button, openBlock, _sfc_main$1, TextJ, __unplugin_components_2, createApp;
    return {
      setters: [function (module) {
        defineComponent = module.d;
        reactive = module.r;
        useMouse = module.u;
        useCounter = module.a;
        dayjs = module.b;
        ref = module.c;
        createElementBlock = module.e;
        createBaseVNode = module.f;
        createVNode = module.g;
        createTextVNode = module.h;
        toDisplayString = module.t;
        unref = module.i;
        withCtx = module.w;
        withModifiers = module.j;
        Fragment = module.F;
        resolveComponent = module.k;
        Button = module.B;
        openBlock = module.o;
        _sfc_main$1 = module._;
        TextJ = module.T;
        __unplugin_components_2 = module.l;
        createApp = module.m;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "* {\n  padding: 0;\n  margin: 0;\n}#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n  text-align: center;\n}\n\ndiv {\n  font-size: 0.14rem;\n}\n\nh3 {\n  font-size: 0.12rem;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXdJREFUaEPt2TFOwzAUxvH3zA5iqYCVI3AJroGQbDJkZ0NIMHADOxykAxcB9QBwhgx5NAOoqgioyfueHdROnZz/r3alvppp5i+eeT/tAUM7GEK4JqIHERHn3H2MMSF2G7ID3vtzInojooOvaGa+TSk9aSMggBDCpYgst2MRCAjAe3/EzK8icoJGQAB9dFVVF13XvYjIMRIBA1ghoAALBByARpgAkAgzAAphCkAgzAHaiCwATUQ2gBYiK0ADkR0wFVEEYAqiGMBYRFGAMYjiAH8hiCg0TdN8T3raI57WekPzBDN/pJROZwtY78D7egfOigb8Ns055242/+Eo7juw6yhaFGDX+P4YFQMYE18MYGx8EYAp8dkBU+OzAjTiswG04rMANOPNAdrxpgBEvBkAFW8CQMbDAeh4KMAiHgao6/qwbduViCy2JzTtezLIr9H/cMk372vW/tiEEK5E5LF/75y7izE+aw38m+tAjhAidGjNPcDy0/7pWZ/3FrRA7cphvwAAAABJRU5ErkJggg==";
        var _imports_1 = "/img/pic_3@2x-aSf0KT3U.png";
        var _sfc_main = /* @__PURE__ */defineComponent({
          __name: "App",
          setup: function setup(__props) {
            reactive(useMouse());
            useMouse();
            var _useCounter = useCounter(),
              count = _useCounter.count,
              inc = _useCounter.inc,
              dec = _useCounter.dec;
            dayjs();
            ref(1);
            var handlerToList = function handlerToList() {
              window.location.href = "list.html";
            };
            return function (_ctx, _cache) {
              var _component_text_hello = _sfc_main$1;
              var _component_text_b = resolveComponent("text-b");
              var _component_text_j = TextJ;
              var _component_text_a = resolveComponent("text-a");
              var _component_text_t = __unplugin_components_2;
              var _component_van_button = Button;
              return openBlock(), createElementBlock(Fragment, null, [_cache[3] || (_cache[3] = createBaseVNode("div", null, "home1", -1)), _cache[4] || (_cache[4] = createBaseVNode("img", {
                src: _imports_0,
                alt: ""
              }, null, -1)), _cache[5] || (_cache[5] = createBaseVNode("img", {
                src: _imports_1,
                alt: ""
              }, null, -1)), createVNode(_component_text_hello), createVNode(_component_text_b), createVNode(_component_text_j), createVNode(_component_text_a), createVNode(_component_text_t), createBaseVNode("h3", null, [createTextVNode(" Counter: " + toDisplayString(unref(count)) + " ", 1), createBaseVNode("a", {
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return unref(inc)();
                }),
                style: {
                  "margin-right": "10px"
                }
              }, "+"), createBaseVNode("a", {
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return unref(dec)();
                })
              }, "-")]), createVNode(_component_van_button, {
                type: "primary",
                onClick: withModifiers(handlerToList, ["prevent"])
              }, {
                default: withCtx(function () {
                  return _cache[2] || (_cache[2] = [createTextVNode("默认按钮")]);
                }),
                _: 1
              })], 64);
            };
          }
        });
        var app = createApp(_sfc_main);
        app.mount("#app");
      }
    };
  });
})();
//# sourceMappingURL=home-legacy-CL2_38FJ.js.map
