function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { d as defineComponent, r as reactive, f as useMouse, g as add, h as useCounter, l as lodashExports, i as dayjs, j as ref, b as createElementBlock, e as createBaseVNode, a as createTextVNode, t as toDisplayString, u as unref, c as createVNode, w as withCtx, k as withModifiers, F as Fragment, B as Button, o as openBlock, m as createApp } from "./public/lodash.BzrmGred.js";
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
    const handlerBackHome = () => {
      window.location.href = "home.html";
    };
    return (_ctx, _cache) => {
      const _component_van_button = Button;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[3] || (_cache[3] = createBaseVNode("div", null, "list", -1)),
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
