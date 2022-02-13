import { B as BasicTable } from "./TableImg.860610ae.js";
import "./BasicForm.2d3a56da.js";
import { getBasicColumns, getBasicShortColumns } from "./tableData.3f3da3f1.js";
import { _ as _export_sfc, h as useMessage } from "./index.bb57ad5a.js";
import { d as demoListApi } from "./table.0dedf14f.js";
import { B as defineComponent, r as ref, a1 as resolveComponent, D as openBlock, F as createElementBlock, J as createBaseVNode, w as createVNode, a7 as withCtx, af as createTextVNode, u as unref } from "./vendor.7c0ada15.js";
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
    const tableRef = ref(null);
    const { createMessage } = useMessage();
    function getTableAction() {
      const tableAction = unref(tableRef);
      if (!tableAction) {
        throw new Error("tableAction is null");
      }
      return tableAction;
    }
    function changeLoading() {
      getTableAction().setLoading(true);
      setTimeout(() => {
        getTableAction().setLoading(false);
      }, 1e3);
    }
    function changeColumns() {
      getTableAction().setColumns(getBasicShortColumns());
    }
    function reloadTable() {
      getTableAction().setColumns(getBasicColumns());
      getTableAction().reload({
        page: 1
      });
    }
    function getColumn() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getTableAction().getColumns());
    }
    function getTableData() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getTableAction().getDataSource());
    }
    function getTableRawData() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getTableAction().getRawDataSource());
    }
    function getPagination() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getTableAction().getPaginationRef());
    }
    function setPaginationInfo() {
      getTableAction().setPagination({
        current: 2
      });
      getTableAction().reload();
    }
    function getSelectRowList() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getTableAction().getSelectRows());
    }
    function getSelectRowKeyList() {
      createMessage.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01");
      console.log(getTableAction().getSelectRowKeys());
    }
    function setSelectedRowKeyList() {
      getTableAction().setSelectedRowKeys(["0", "1", "2"]);
    }
    function clearSelect() {
      getTableAction().clearSelectedRowKeys();
    }
    return {
      tableRef,
      api: demoListApi,
      columns: getBasicColumns(),
      changeLoading,
      changeColumns,
      reloadTable,
      getColumn,
      getTableData,
      getTableRawData,
      getPagination,
      setPaginationInfo,
      getSelectRowList,
      getSelectRowKeyList,
      setSelectedRowKeyList,
      clearSelect
    };
  }
});
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = { class: "mb-4" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5F00\u542Floading ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u66F4\u6539Columns ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6Columns ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u8868\u683C\u6570\u636E ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ");
const _hoisted_10 = { class: "mb-4" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u9009\u4E2D\u884C ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u9009\u4E2D\u884CKey ");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6E\u9009\u4E2D\u884C ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u6E05\u7A7A\u9009\u4E2D\u884C ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.reloadTable
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.changeLoading
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.changeColumns
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getColumn
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getTableData
      }, {
        default: withCtx(() => [
          _hoisted_7
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getTableRawData
      }, {
        default: withCtx(() => [
          _hoisted_8
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.setPaginationInfo
      }, {
        default: withCtx(() => [
          _hoisted_9
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    createBaseVNode("div", _hoisted_10, [
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getSelectRowList
      }, {
        default: withCtx(() => [
          _hoisted_11
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getSelectRowKeyList
      }, {
        default: withCtx(() => [
          _hoisted_12
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.setSelectedRowKeyList
      }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.clearSelect
      }, {
        default: withCtx(() => [
          _hoisted_14
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_a_button, {
        class: "mr-2",
        onClick: _ctx.getPagination
      }, {
        default: withCtx(() => [
          _hoisted_15
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    createVNode(_component_BasicTable, {
      canResize: false,
      title: "RefTable\u793A\u4F8B",
      titleHelpMessage: "\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",
      ref: "tableRef",
      api: _ctx.api,
      columns: _ctx.columns,
      rowKey: "id",
      rowSelection: { type: "checkbox" }
    }, null, 8, ["api", "columns"])
  ]);
}
var RefTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { RefTable as default };
