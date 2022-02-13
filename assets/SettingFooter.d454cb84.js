import { _ as _export_sfc, J as usePermissionStore, a as useDesign, $ as useMultipleTabStore, f as useUserStore, V as useAppStore, b as useI18n, aT as useCopyToClipboard, a8 as setting, bo as updateColorWeak, bp as updateGrayMode, h as useMessage } from "./index.bb57ad5a.js";
import { B as defineComponent, c9 as CopyOutlined, bj as RedoOutlined, a1 as resolveComponent, D as openBlock, F as createElementBlock, w as createVNode, a7 as withCtx, af as createTextVNode, K as toDisplayString, L as normalizeClass, u as unref } from "./vendor.7c0ada15.js";
var SettingFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "SettingFooter",
  components: { CopyOutlined, RedoOutlined },
  setup() {
    const permissionStore = usePermissionStore();
    const { prefixCls } = useDesign("setting-footer");
    const { t } = useI18n();
    const { createSuccessModal, createMessage } = useMessage();
    const tabStore = useMultipleTabStore();
    const userStore = useUserStore();
    const appStore = useAppStore();
    function handleCopy() {
      const { isSuccessRef } = useCopyToClipboard(JSON.stringify(unref(appStore.getProjectConfig), null, 2));
      unref(isSuccessRef) && createSuccessModal({
        title: t("layout.setting.operatingTitle"),
        content: t("layout.setting.operatingContent")
      });
    }
    function handleResetSetting() {
      try {
        appStore.setProjectConfig(setting);
        const { colorWeak, grayMode } = setting;
        updateColorWeak(colorWeak);
        updateGrayMode(grayMode);
        createMessage.success(t("layout.setting.resetSuccess"));
      } catch (error) {
        createMessage.error(error);
      }
    }
    function handleClearAndRedo() {
      localStorage.clear();
      appStore.resetAllState();
      permissionStore.resetState();
      tabStore.resetState();
      userStore.resetState();
      location.reload();
    }
    return {
      prefixCls,
      t,
      handleCopy,
      handleResetSetting,
      handleClearAndRedo
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CopyOutlined = resolveComponent("CopyOutlined");
  const _component_a_button = resolveComponent("a-button");
  const _component_RedoOutlined = resolveComponent("RedoOutlined");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_a_button, {
      type: "primary",
      block: "",
      onClick: _ctx.handleCopy
    }, {
      default: withCtx(() => [
        createVNode(_component_CopyOutlined, { class: "mr-2" }),
        createTextVNode(" " + toDisplayString(_ctx.t("layout.setting.copyBtn")), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_a_button, {
      color: "warning",
      block: "",
      onClick: _ctx.handleResetSetting,
      class: "my-3"
    }, {
      default: withCtx(() => [
        createVNode(_component_RedoOutlined, { class: "mr-2" }),
        createTextVNode(" " + toDisplayString(_ctx.t("common.resetText")), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_a_button, {
      color: "error",
      block: "",
      onClick: _ctx.handleClearAndRedo
    }, {
      default: withCtx(() => [
        createVNode(_component_RedoOutlined, { class: "mr-2" }),
        createTextVNode(" " + toDisplayString(_ctx.t("layout.setting.clearBtn")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ], 2);
}
var SettingFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d4de409"]]);
export { SettingFooter as default };
