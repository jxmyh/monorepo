function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { d as defineComponent, c as createVNode, a as createTextVNode, o as openBlock, b as createElementBlock, e as createBaseVNode, u as unref, r as reactive, f as useMouse, g as add, h as useCounter, l as lodashExports, i as dayjs, j as ref, t as toDisplayString, w as withCtx, k as withModifiers, F as Fragment, B as Button, m as createApp } from "./public/lodash.BzrmGred.js";
const __unplugin_components_4 = /* @__PURE__ */ defineComponent({
  name: "TextT",
  setup(props) {
    return () => createVNode("div", null, [createTextVNode("vue Tsx")]);
  }
});
function TextJ$1() {
  return createVNode("div", null, [createTextVNode("Text jsx A")]);
}
function TextJ() {
  return createVNode("div", null, [createTextVNode("Text jsx")]);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, " dir Text B ");
}
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _imports_0$1 = "/img/banner@2x.CytXxbee.png";
const _hoisted_1 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TextHello",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createTextVNode(" text ")),
        createBaseVNode("img", {
          src: unref(_imports_0$1),
          alt: ""
        }, null, 8, _hoisted_1),
        _cache[1] || (_cache[1] = createBaseVNode("img", {
          src: _imports_0$1,
          alt: ""
        }, null, -1))
      ]);
    };
  }
});
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXdJREFUaEPt2TFOwzAUxvH3zA5iqYCVI3AJroGQbDJkZ0NIMHADOxykAxcB9QBwhgx5NAOoqgioyfueHdROnZz/r3alvppp5i+eeT/tAUM7GEK4JqIHERHn3H2MMSF2G7ID3vtzInojooOvaGa+TSk9aSMggBDCpYgst2MRCAjAe3/EzK8icoJGQAB9dFVVF13XvYjIMRIBA1ghoAALBByARpgAkAgzAAphCkAgzAHaiCwATUQ2gBYiK0ADkR0wFVEEYAqiGMBYRFGAMYjiAH8hiCg0TdN8T3raI57WekPzBDN/pJROZwtY78D7egfOigb8Ns055242/+Eo7juw6yhaFGDX+P4YFQMYE18MYGx8EYAp8dkBU+OzAjTiswG04rMANOPNAdrxpgBEvBkAFW8CQMbDAeh4KMAiHgao6/qwbduViCy2JzTtezLIr9H/cMk372vW/tiEEK5E5LF/75y7izE+aw38m+tAjhAidGjNPcDy0/7pWZ/3FrRA7cphvwAAAABJRU5ErkJggg==";
const _imports_1 = "/img/pic_3@2x.aSf0KT3U.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    var _a;
    reactive(useMouse());
    const obj = {
      a: {
        b: 1
      }
    };
    console.log(add(1, 3));
    useMouse();
    const { count, inc, dec } = useCounter();
    const a = lodashExports._.cloneDeep(count.value);
    console.log(a);
    const now = dayjs();
    console.log(now.format("DD/MM/YYYY"));
    console.log((_a = obj == null ? void 0 : obj.a) == null ? void 0 : _a.b);
    ref(1);
    const handlerToList = () => {
      window.location.href = "list.html";
    };
    return (_ctx, _cache) => {
      const _component_text_hello = _sfc_main$1;
      const _component_text_b = __unplugin_components_1;
      const _component_text_j = TextJ;
      const _component_text_a = TextJ$1;
      const _component_text_t = __unplugin_components_4;
      const _component_van_button = Button;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[3] || (_cache[3] = createBaseVNode("div", null, "home1", -1)),
        _cache[4] || (_cache[4] = createBaseVNode("img", {
          src: _imports_0,
          alt: ""
        }, null, -1)),
        _cache[5] || (_cache[5] = createBaseVNode("img", {
          src: _imports_1,
          alt: ""
        }, null, -1)),
        createVNode(_component_text_hello),
        createVNode(_component_text_b),
        createVNode(_component_text_j),
        createVNode(_component_text_a),
        createVNode(_component_text_t),
        createBaseVNode("h3", null, [
          createTextVNode(" Counter: " + toDisplayString(unref(count)) + " ", 1),
          createBaseVNode("a", {
            onClick: _cache[0] || (_cache[0] = ($event) => unref(inc)()),
            style: { "margin-right": "10px" }
          }, "+"),
          createBaseVNode("a", {
            onClick: _cache[1] || (_cache[1] = ($event) => unref(dec)())
          }, "-")
        ]),
        createVNode(_component_van_button, {
          type: "primary",
          onClick: withModifiers(handlerToList, ["prevent"])
        }, {
          default: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode("默认按钮")
          ])),
          _: 1
        })
      ], 64);
    };
  }
});
const app = createApp(_sfc_main);
app.mount("#app");
export {
  __vite_legacy_guard
};
