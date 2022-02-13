import { R as RoleEnum } from "./roleEnum.e1f286eb.js";
import { _ as _export_sfc, ag as usePermission, f as useUserStore, V as useAppStore, aU as PermissionModeEnum } from "./index.bb57ad5a.js";
import { a as PageWrapper } from "./index.5258464e.js";
import { B as defineComponent, bn as Space, bM as Alert, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import CurrentPermissionMode from "./CurrentPermissionMode.3b071078.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.382d6f77.js";
/* empty css                 */var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { Space, Alert, CurrentPermissionMode, PageWrapper },
  setup() {
    const { refreshMenu } = usePermission();
    const userStore = useUserStore();
    const appStore = useAppStore();
    const isBackPremissionMode = computed(() => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK);
    async function switchToken(userId) {
      const token = "fakeToken" + userId;
      userStore.setToken(token);
      userStore.getUserInfoAction();
      refreshMenu();
    }
    return {
      RoleEnum,
      refreshMenu,
      switchToken,
      isBackPremissionMode
    };
  }
});
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u540E\u53F0\u6743\u9650\u6A21\u5F0F): ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u7528\u6237id\u4E3A1\u7684\u83DC\u5355 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u7528\u6237id\u4E3A2\u7684\u83DC\u5355 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CurrentPermissionMode = resolveComponent("CurrentPermissionMode");
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_Space = resolveComponent("Space");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u540E\u53F0\u6743\u9650\u793A\u4F8B",
    contentBackground: "",
    contentClass: "p-4",
    content: "\u76EE\u524Dmock\u4E86\u4E24\u7EC4\u6570\u636E\uFF0C id\u4E3A1 \u548C 2 \u5177\u4F53\u8FD4\u56DE\u7684\u83DC\u5355\u53EF\u4EE5\u5728mock/sys/menu.ts\u5185\u67E5\u770B"
  }, {
    default: withCtx(() => [
      createVNode(_component_CurrentPermissionMode),
      createVNode(_component_Alert, {
        class: "mt-4",
        type: "info",
        message: "\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316",
        "show-icon": ""
      }),
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_Space, null, {
          default: withCtx(() => [
            createVNode(_component_a_button, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.switchToken(1)),
              disabled: !_ctx.isBackPremissionMode
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_a_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.switchToken(2)),
              disabled: !_ctx.isBackPremissionMode
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f0f463dc"]]);
export { index as default };
