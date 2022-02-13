import { B as defineComponent, aB as Menu, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, K as toDisplayString, aj as getCurrentInstance } from "./vendor.7c0ada15.js";
import { _ as _export_sfc, I as Icon, p as propTypes } from "./index.bb57ad5a.js";
const _sfc_main = defineComponent({
  name: "DropdownMenuItem",
  components: { MenuItem: Menu.Item, Icon },
  props: {
    key: propTypes.string,
    text: propTypes.string,
    icon: propTypes.string
  },
  setup(props) {
    const instance = getCurrentInstance();
    const itemKey = computed(() => {
      var _a, _b;
      return props.key || ((_b = (_a = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a.props) == null ? void 0 : _b.key);
    });
    return { itemKey };
  }
});
const _hoisted_1 = { class: "flex items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_MenuItem = resolveComponent("MenuItem");
  return openBlock(), createBlock(_component_MenuItem, { key: _ctx.itemKey }, {
    default: withCtx(() => [
      createBaseVNode("span", _hoisted_1, [
        createVNode(_component_Icon, {
          icon: _ctx.icon,
          class: "mr-1"
        }, null, 8, ["icon"]),
        createBaseVNode("span", null, toDisplayString(_ctx.text), 1)
      ])
    ]),
    _: 1
  });
}
var DropMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { DropMenuItem as default };
