import { B as defineComponent, ap as Input, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, af as createTextVNode, J as createBaseVNode } from "./vendor.7c0ada15.js";
import { _ as _export_sfc } from "./index.bb57ad5a.js";
const _sfc_main = defineComponent({ name: "Menu12Demo", components: { Input } });
const _hoisted_1 = { class: "p-5" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u591A\u5C42\u7EA7\u7F13\u5B58-\u9875\u97621-2 ");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Input = resolveComponent("Input");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    createVNode(_component_Input)
  ]);
}
var Menu12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Menu12 as default };
