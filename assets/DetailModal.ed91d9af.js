import { B as BasicModal } from "./index.fe0d1d3b.js";
import { D as Description } from "./index.2022a9e0.js";
import { b as useI18n } from "./index.bb57ad5a.js";
import { getDescSchema } from "./data.6a8dd7f1.js";
import { u as useDescription } from "./useDescription.2a078bed.js";
import { B as defineComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, u as unref, a5 as mergeProps } from "./vendor.7c0ada15.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                 */const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    info: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const [register] = useDescription({
      column: 2,
      schema: getDescSchema()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps({
        width: 800,
        title: unref(t)("sys.errorLog.tableActionDesc")
      }, _ctx.$attrs), {
        default: withCtx(() => [
          createVNode(unref(Description), {
            data: __props.info,
            onRegister: unref(register)
          }, null, 8, ["data", "onRegister"])
        ]),
        _: 1
      }, 16, ["title"]);
    };
  }
});
export { _sfc_main as default };
