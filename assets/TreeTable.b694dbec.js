import { B as BasicTable } from "./TableImg.860610ae.js";
import "./BasicForm.2d3a56da.js";
import { u as useTable } from "./useTable.e30bfd2f.js";
import { getBasicColumns, getTreeTableData } from "./tableData.3f3da3f1.js";
import { _ as _export_sfc } from "./index.bb57ad5a.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.b4c80bfe.js";
import "./index.5258464e.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.fe0d1d3b.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.e6ebc007.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.d03d7395.js";
import "./base64Conver.08b9f4ec.js";
import "./index.770ef330.js";
const _sfc_main = defineComponent({
  components: { BasicTable },
  setup() {
    const [register, { expandAll, collapseAll }] = useTable({
      title: "\u6811\u5F62\u8868\u683C",
      isTreeTable: true,
      rowSelection: {
        type: "checkbox",
        getCheckboxProps(record) {
          if (record.id === "0") {
            return { disabled: true };
          } else {
            return { disabled: false };
          }
        }
      },
      titleHelpMessage: "\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",
      columns: getBasicColumns(),
      dataSource: getTreeTableData(),
      rowKey: "id"
    });
    return { register, expandAll, collapseAll };
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u5C55\u5F00\u5168\u90E8");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6298\u53E0\u5168\u90E8");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_BasicTable, { onRegister: _ctx.register }, {
      toolbar: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.expandAll
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.collapseAll
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }, 8, ["onRegister"])
  ]);
}
var TreeTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { TreeTable as default };
