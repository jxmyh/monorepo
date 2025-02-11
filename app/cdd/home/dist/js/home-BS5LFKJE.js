function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { d as defineComponent, r as reactive, u as useMouse, a as useCounter, b as dayjs, c as ref, e as createElementBlock, f as createBaseVNode, g as createVNode, h as createTextVNode, t as toDisplayString, i as unref, w as withCtx, j as withModifiers, F as Fragment, k as resolveComponent, B as Button, o as openBlock, _ as _sfc_main$1, T as TextJ, l as __unplugin_components_2, m as createApp } from "./public/index-C8y7w2kA.js";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXdJREFUaEPt2TFOwzAUxvH3zA5iqYCVI3AJroGQbDJkZ0NIMHADOxykAxcB9QBwhgx5NAOoqgioyfueHdROnZz/r3alvppp5i+eeT/tAUM7GEK4JqIHERHn3H2MMSF2G7ID3vtzInojooOvaGa+TSk9aSMggBDCpYgst2MRCAjAe3/EzK8icoJGQAB9dFVVF13XvYjIMRIBA1ghoAALBByARpgAkAgzAAphCkAgzAHaiCwATUQ2gBYiK0ADkR0wFVEEYAqiGMBYRFGAMYjiAH8hiCg0TdN8T3raI57WekPzBDN/pJROZwtY78D7egfOigb8Ns055242/+Eo7juw6yhaFGDX+P4YFQMYE18MYGx8EYAp8dkBU+OzAjTiswG04rMANOPNAdrxpgBEvBkAFW8CQMbDAeh4KMAiHgao6/qwbduViCy2JzTtezLIr9H/cMk372vW/tiEEK5E5LF/75y7izE+aw38m+tAjhAidGjNPcDy0/7pWZ/3FrRA7cphvwAAAABJRU5ErkJggg==";
const _imports_1 = "/img/pic_3@2x-aSf0KT3U.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    reactive(useMouse());
    useMouse();
    const { count, inc, dec } = useCounter();
    dayjs();
    ref(1);
    const handlerToList = () => {
      window.location.href = "list.html";
    };
    return (_ctx, _cache) => {
      const _component_text_hello = _sfc_main$1;
      const _component_text_b = resolveComponent("text-b");
      const _component_text_j = TextJ;
      const _component_text_a = resolveComponent("text-a");
      const _component_text_t = __unplugin_components_2;
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
//# sourceMappingURL=home-BS5LFKJE.js.map
