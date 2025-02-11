function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { d as defineComponent, r as reactive, u as useMouse, a as useCounter, b as dayjs, c as ref, e as createElementBlock, f as createBaseVNode, g as createVNode, h as createTextVNode, t as toDisplayString, i as unref, w as withCtx, j as withModifiers, F as Fragment, B as Button, o as openBlock, _ as _sfc_main$1, T as TextJ, l as __unplugin_components_2, m as createApp } from "./public/index-C8y7w2kA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    reactive(useMouse());
    useMouse();
    const { count, inc, dec } = useCounter();
    _.cloneDeep(count.value);
    dayjs();
    ref(1);
    const handlerBackHome = () => {
      window.location.href = "home.html";
    };
    return (_ctx, _cache) => {
      const _component_text_hello = _sfc_main$1;
      const _component_text_j = TextJ;
      const _component_text_t = __unplugin_components_2;
      const _component_van_button = Button;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[3] || (_cache[3] = createBaseVNode("div", null, "home1", -1)),
        createVNode(_component_text_hello),
        createVNode(_component_text_j),
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
          onClick: withModifiers(handlerBackHome, ["prevent"])
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
//# sourceMappingURL=list-Dhb3y8Wm.js.map
