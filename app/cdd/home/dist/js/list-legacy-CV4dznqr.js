;
(function () {
  System.register(['./public/index-legacy-D9Q-tWd5.js'], function (exports, module) {
    'use strict';

    var defineComponent, reactive, useMouse, useCounter, dayjs, ref, createElementBlock, createBaseVNode, createVNode, createTextVNode, toDisplayString, unref, withCtx, withModifiers, Fragment, Button, openBlock, _sfc_main$1, TextJ, __unplugin_components_2, createApp;
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
        Button = module.B;
        openBlock = module.o;
        _sfc_main$1 = module._;
        TextJ = module.T;
        __unplugin_components_2 = module.l;
        createApp = module.m;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        var _sfc_main = /* @__PURE__ */defineComponent({
          __name: "App",
          setup: function setup(__props) {
            reactive(useMouse());
            useMouse();
            var _useCounter = useCounter(),
              count = _useCounter.count,
              inc = _useCounter.inc,
              dec = _useCounter.dec;
            _.cloneDeep(count.value);
            dayjs();
            ref(1);
            var handlerBackHome = function handlerBackHome() {
              window.location.href = "home.html";
            };
            return function (_ctx, _cache) {
              var _component_text_hello = _sfc_main$1;
              var _component_text_j = TextJ;
              var _component_text_t = __unplugin_components_2;
              var _component_van_button = Button;
              return openBlock(), createElementBlock(Fragment, null, [_cache[3] || (_cache[3] = createBaseVNode("div", null, "home1", -1)), createVNode(_component_text_hello), createVNode(_component_text_j), createVNode(_component_text_t), createBaseVNode("h3", null, [createTextVNode(" Counter: " + toDisplayString(unref(count)) + " ", 1), createBaseVNode("a", {
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
                onClick: withModifiers(handlerBackHome, ["prevent"])
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
//# sourceMappingURL=list-legacy-CV4dznqr.js.map
