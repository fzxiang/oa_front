import { a as PageWrapper } from "./index.5258464e.js";
import _sfc_main$1 from "./WorkbenchHeader.7797f687.js";
import ShopsCard from "./ShopsCard.b63c878f.js";
import { B as defineComponent, r as ref, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, u as unref } from "./vendor.7c0ada15.js";
import "./index.bb57ad5a.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
import "./header.d801b988.js";
/* empty css                  *//* empty css                 *//* empty css                 */import "./data.8ddc77c3.js";
const _hoisted_1 = { class: "lg:flex" };
const _hoisted_2 = { class: "lg:w-10/10 w-full !mr-4 enter-y" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PageWrapper), null, {
        headerContent: withCtx(() => [
          createVNode(_sfc_main$1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(ShopsCard, {
                loading: loading.value,
                class: "enter-y"
              }, null, 8, ["loading"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
