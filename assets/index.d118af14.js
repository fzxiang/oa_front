import { B as BasicTable } from "./TableImg.860610ae.js";
import "./BasicForm.2d3a56da.js";
import { u as useTable } from "./useTable.e30bfd2f.js";
import { getBasicColumns, getFormConfig } from "./tableData.b4a83901.js";
import { B as defineComponent, bM as Alert, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, J as createBaseVNode, K as toDisplayString, ac as Fragment, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  */import { d as demoListApi } from "./table.0dedf14f.js";
import { _ as _export_sfc } from "./index.bb57ad5a.js";
/* empty css                  *//* empty css                 */import "./useForm.b4c80bfe.js";
import "./index.5258464e.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./index.fe0d1d3b.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.e6ebc007.js";
/* empty css                 *//* empty css                  *//* empty css                  */import "./download.d03d7395.js";
import "./base64Conver.08b9f4ec.js";
import "./index.770ef330.js";
const _sfc_main = defineComponent({
  components: { BasicTable, AAlert: Alert },
  setup() {
    const checkedKeys = ref([]);
    const [registerTable, { getForm }] = useTable({
      title: "\u5F00\u542F\u641C\u7D22\u533A\u57DF",
      api: demoListApi,
      columns: getBasicColumns(),
      useSearchForm: true,
      formConfig: getFormConfig(),
      showTableSetting: true,
      tableSetting: { fullScreen: true },
      showIndexColumn: false,
      rowKey: "id"
    });
    function getFormValues() {
      console.log(getForm().getFieldsValue());
    }
    function onSelectChange(selectedRowKeys) {
      console.log(selectedRowKeys);
      checkedKeys.value = selectedRowKeys;
    }
    return {
      registerTable,
      getFormValues,
      checkedKeys,
      onSelectChange
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" custom-slot ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u6E05\u7A7A");
const _hoisted_3 = { key: 1 };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6\u8868\u5355\u6570\u636E");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_a_alert = resolveComponent("a-alert");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createBlock(_component_BasicTable, {
    onRegister: _ctx.registerTable,
    rowSelection: { type: "checkbox", selectedRowKeys: _ctx.checkedKeys, onChange: _ctx.onSelectChange }
  }, {
    "form-custom": withCtx(() => [
      _hoisted_1
    ]),
    headerTop: withCtx(() => [
      createVNode(_component_a_alert, {
        type: "info",
        "show-icon": ""
      }, {
        message: withCtx(() => [
          _ctx.checkedKeys.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("span", null, "\u5DF2\u9009\u4E2D" + toDisplayString(_ctx.checkedKeys.length) + "\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)", 1),
            createVNode(_component_a_button, {
              type: "link",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.checkedKeys = []),
              size: "small"
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            })
          ], 64)) : (openBlock(), createElementBlock("span", _hoisted_3, "\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))
        ]),
        _: 1
      })
    ]),
    toolbar: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.getFormValues
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  }, 8, ["onRegister", "rowSelection"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
