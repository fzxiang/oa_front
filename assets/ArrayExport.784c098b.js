import { B as BasicTable } from "./TableImg.860610ae.js";
import "./BasicForm.2d3a56da.js";
import "./index.6dcc6406.js";
import { c as columns, d as data, a as aoaToSheetXlsx, b as arrData, e as arrHeader } from "./data.b40ddccb.js";
import { a as PageWrapper } from "./index.5258464e.js";
import { _ as _export_sfc } from "./index.bb57ad5a.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import "./useForm.b4c80bfe.js";
/* empty css                  *//* empty css                  *//* empty css                 */import "./uuid.2b29000c.js";
import "./useWindowSizeFn.07387e97.js";
import "./index.fe0d1d3b.js";
/* empty css                 */import "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  *//* empty css                *//* empty css                 */import "./index.e6ebc007.js";
/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                  */import "./download.d03d7395.js";
import "./base64Conver.08b9f4ec.js";
import "./index.770ef330.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.382d6f77.js";
const _sfc_main = defineComponent({
  components: { BasicTable, PageWrapper },
  setup() {
    function aoaToExcel() {
      aoaToSheetXlsx({
        data: arrData,
        header: arrHeader,
        filename: "\u4E8C\u7EF4\u6570\u7EC4\u65B9\u5F0F\u5BFC\u51FAexcel.xlsx"
      });
    }
    return {
      aoaToExcel,
      columns,
      data
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u5BFC\u51FA ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTable = resolveComponent("BasicTable");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5BFC\u51FA\u793A\u4F8B",
    content: "\u6839\u636E\u6570\u7EC4\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"
  }, {
    default: withCtx(() => [
      createVNode(_component_BasicTable, {
        title: "\u57FA\u7840\u8868\u683C",
        columns: _ctx.columns,
        dataSource: _ctx.data
      }, {
        toolbar: withCtx(() => [
          createVNode(_component_a_button, { onClick: _ctx.aoaToExcel }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["columns", "dataSource"])
    ]),
    _: 1
  });
}
var ArrayExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ArrayExport as default };
