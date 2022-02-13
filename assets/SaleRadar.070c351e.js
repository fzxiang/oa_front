import { B as defineComponent, cb as Card, r as ref, T as watch, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, Y as normalizeStyle } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { u as useECharts } from "./useECharts.facab394.js";
import { _ as _export_sfc } from "./index.bb57ad5a.js";
const _sfc_main = defineComponent({
  components: { Card },
  props: {
    loading: Boolean,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "400px"
    }
  },
  setup(props) {
    const chartRef = ref(null);
    const { setOptions } = useECharts(chartRef);
    watch(() => props.loading, () => {
      if (props.loading) {
        return;
      }
      setOptions({
        legend: {
          bottom: 0,
          data: ["Visits", "Sales"]
        },
        tooltip: {},
        radar: {
          radius: "60%",
          splitNumber: 8,
          indicator: [
            {
              text: "2017",
              max: 100
            },
            {
              text: "2017",
              max: 100
            },
            {
              text: "2018",
              max: 100
            },
            {
              text: "2019",
              max: 100
            },
            {
              text: "2020",
              max: 100
            },
            {
              text: "2021",
              max: 100
            }
          ]
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              shadowBlur: 0,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            },
            data: [
              {
                value: [90, 50, 86, 40, 50, 20],
                name: "Visits",
                itemStyle: {
                  color: "#9f8ed7"
                }
              },
              {
                value: [70, 75, 70, 76, 20, 85],
                name: "Sales",
                itemStyle: {
                  color: "#1edec5"
                }
              }
            ]
          }
        ]
      });
    }, { immediate: true });
    return { chartRef };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  return openBlock(), createBlock(_component_Card, {
    title: "\u9500\u552E\u7EDF\u8BA1",
    loading: _ctx.loading
  }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        ref: "chartRef",
        style: normalizeStyle({ width: _ctx.width, height: _ctx.height })
      }, null, 4)
    ]),
    _: 1
  }, 8, ["loading"]);
}
var SaleRadar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { SaleRadar as default };
