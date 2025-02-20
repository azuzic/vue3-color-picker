import { defineComponent as U, ref as L, createElementBlock as $, openBlock as v, createTextVNode as J, toDisplayString as Y, normalizeClass as O, createElementVNode as g, Fragment as Ue, withDirectives as K, createCommentVNode as V, createBlock as X, vShow as j, createStaticVNode as $e, inject as ue, watch as Se, unref as fe, computed as st, onBeforeMount as it, renderList as rt, normalizeStyle as ut, reactive as me, provide as re, onMounted as ct, createVNode as he } from "vue";
const dt = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "-12 -4 32 32",
  xmlns: "http://www.w3.org/2000/svg"
}, pt = /* @__PURE__ */ g("path", { d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" }, null, -1), gt = [
  pt
], mt = /* @__PURE__ */ U({
  __name: "ColorInputMenu",
  props: {
    iconClass: { default: "", type: String },
    inputType: { default: "RGB", type: String }
  },
  emits: ["onChangeInputName"],
  setup(n, { emit: p }) {
    const o = L(n.inputType), s = ["CMYK", "HSL", "HSV", "RGB"], r = p, f = () => {
      const y = s.findIndex((a) => a == o.value), w = s[y + 1] ? s[y + 1] : s[0];
      o.value = w, r("onChangeInputName", w);
    };
    return (y, w) => (v(), $("button", {
      type: "button",
      class: "cp-btn",
      onClick: f
    }, [
      J(Y(o.value) + " ", 1),
      n.iconClass ? (v(), $("i", {
        key: 0,
        class: O(n.iconClass)
      }, null, 2)) : (v(), $("svg", dt, gt))
    ]));
  }
}), ht = { class: "ck-cp-menu" }, vt = {
  class: "ck-cp-controller-bar",
  style: { display: "flex", "justify-content": "end", position: "relative", "flex-grow": "1" }
}, ft = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "-12 -4 32 32",
  xmlns: "http://www.w3.org/2000/svg"
}, bt = /* @__PURE__ */ g("path", { d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" }, null, -1), yt = [
  bt
], Ct = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "-12 -4 32 32",
  xmlns: "http://www.w3.org/2000/svg"
}, kt = /* @__PURE__ */ g("path", { d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" }, null, -1), wt = [
  kt
], xt = {
  key: 1,
  width: "15",
  height: "28",
  viewBox: "0 -3 36 36",
  xmlns: "http://www.w3.org/2000/svg"
}, $t = /* @__PURE__ */ $e('<path d="M29.333 9.667h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M8 9.667h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M13.333 14.333c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM13.333 5c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path><path d="M29.333 24.333h-5.333c-0.547 0-1-0.453-1-1s0.453-1 1-1h5.333c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M10.667 24.333h-8c-0.547 0-1-0.453-1-1s0.453-1 1-1h8c0.547 0 1 0.453 1 1s-0.453 1-1 1z"></path><path d="M18.667 29c-3.12 0-5.667-2.547-5.667-5.667s2.547-5.667 5.667-5.667c3.12 0 5.667 2.547 5.667 5.667s-2.547 5.667-5.667 5.667zM18.667 19.667c-2.027 0-3.667 1.64-3.667 3.667s1.64 3.667 3.667 3.667c2.027 0 3.667-1.64 3.667-3.667s-1.64-3.667-3.667-3.667z"></path>', 6), St = [
  $t
], It = {
  key: 0,
  class: "ck-cp-linear-angle-container"
}, Mt = {
  class: "ck-gradient-set-label",
  style: { "margin-top": "0" }
}, Vt = ["value"], Lt = {
  key: 1,
  class: "ck-cp-linear-angle-container"
}, Nt = {
  class: "ck-gradient-set-label",
  style: { "margin-top": "0" }
}, zt = ["value"], Yt = { class: "ck-gradient-set-label" }, Ht = ["value"], Xt = {
  class: "ck-cp-input-container",
  style: { "margin-left": "2px", "margin-right": "2px" }
}, Bt = { class: "ck-cp-input-content" }, Dt = /* @__PURE__ */ g("span", { class: "ck-cp-input-label" }, " Position X ", -1), Tt = ["value"], Rt = { class: "ck-cp-input-content" }, Et = /* @__PURE__ */ g("span", { class: "ck-cp-input-label" }, " Position Y ", -1), Pt = ["value"], Ot = { class: "ck-cp-checkbox-container" }, Ut = {
  class: "ck-cp-checkbox",
  for: "customSize"
}, Gt = {
  key: 0,
  class: "ck-cp-input-checkbox-checked"
}, qt = /* @__PURE__ */ g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ g("path", { d: "m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z" })
], -1), At = [
  qt
], Wt = {
  key: 1,
  class: "ck-cp-input-checkbox-unchecked"
}, Ft = { class: "ck-cp-checkbox-label" }, Zt = { key: 0 }, Kt = { class: "ck-gradient-set-label" }, jt = ["value"], Jt = { key: 1 }, Qt = { class: "ck-gradient-set-label" }, _t = ["value"], el = {
  key: 2,
  class: "ck-cp-input-container",
  style: { "margin-left": "2px", "margin-right": "2px" }
}, tl = { class: "ck-cp-input-content" }, ll = /* @__PURE__ */ g("span", { class: "ck-cp-input-label" }, " Size X ", -1), nl = ["value"], al = { class: "ck-cp-input-content" }, ol = /* @__PURE__ */ g("span", { class: "ck-cp-input-label" }, " Size Y ", -1), sl = ["value"], il = /* @__PURE__ */ U({
  __name: "PickerMenu",
  props: {
    mode: {
      default: "gradient",
      type: String
    },
    inputType: { default: "RGB", type: String },
    gradientType: { default: "linear", type: String },
    showInputMenu: { default: !0, type: Boolean },
    showPickerMode: { default: !0, type: Boolean },
    angle: { default: 90, type: Number },
    percentageX: { default: 50, type: Number },
    percentageY: { default: 50, type: Number },
    percentageSizeX: { default: 50, type: Number },
    percentageSizeY: { default: 50, type: Number },
    customSize: { default: !1, type: Boolean },
    local: {
      default: {},
      type: Object
    },
    iconClasses: {
      default: {
        ruler: "",
        eyeDroper: "",
        arrowDown: "",
        save: "",
        delete: ""
      },
      type: Object
    }
  },
  emits: ["onPickerChangeMode", "onChangeMode", "onChangeInputType", "onDeleteColor", "onClickEyeDropper", "update:angle", "update:percentageX", "update:percentageY", "update:percentageSizeX", "update:percentageSizeY", "update:customSize", "onInput"],
  setup(n, { emit: p }) {
    const i = n, o = L(!1), s = p, r = (a, c) => {
      switch (c) {
        case "angle":
          s("update:angle", parseInt(a.target.value)), s("onInput");
          break;
        case "percentageX":
          s("update:percentageX", parseInt(a.target.value)), s("onInput");
          break;
        case "percentageY":
          s("update:percentageY", parseInt(a.target.value)), s("onInput");
          break;
        case "percentageSizeX":
          s("update:percentageSizeX", parseInt(a.target.value)), s("onInput");
          break;
        case "percentageSizeY":
          s("update:percentageSizeY", parseInt(a.target.value)), s("onInput");
          break;
        case "customSize":
          s("update:customSize", a.target.checked), s("onInput");
          break;
      }
    }, f = (a) => {
      s("onChangeInputType", a);
    }, y = () => {
      s("onChangeMode", i.gradientType == "linear" ? "radial" : "linear");
    }, w = () => {
      s("onPickerChangeMode", i.mode == "gradient" ? "solid" : "gradient");
    };
    return (a, c) => (v(), $(Ue, null, [
      g("div", ht, [
        g("div", vt, [
          n.showPickerMode ? (v(), $("button", {
            key: 0,
            type: "button",
            class: "cp-btn",
            onClick: w,
            style: { "margin-bottom": "var(--margin-top)" }
          }, [
            K(g("span", null, Y(n.local.gradient ? n.local.gradient : "Gradient"), 513), [
              [j, n.mode == "gradient"]
            ]),
            K(g("span", null, Y(n.local.solid ? n.local.solid : "Solid"), 513), [
              [j, n.mode == "solid"]
            ]),
            n.iconClasses.arrowDown ? (v(), $("i", {
              key: 0,
              class: O(n.iconClasses.arrowDown)
            }, null, 2)) : (v(), $("svg", ft, yt))
          ])) : V("", !0),
          n.mode == "gradient" ? (v(), $("button", {
            key: 1,
            type: "button",
            class: "cp-btn",
            style: { "margin-bottom": "var(--margin-top)" },
            onClick: y
          }, [
            K(g("span", null, Y(n.local.linear ? n.local.linear : "Linear"), 513), [
              [j, n.gradientType == "linear"]
            ]),
            K(g("span", null, Y(n.local.radial ? n.local.radial : "Radial"), 513), [
              [j, n.gradientType == "radial"]
            ]),
            n.iconClasses.arrowDown ? (v(), $("i", {
              key: 0,
              class: O(n.iconClasses.arrowDown)
            }, null, 2)) : (v(), $("svg", Ct, wt))
          ])) : V("", !0),
          n.showInputMenu ? (v(), X(mt, {
            key: 2,
            style: { "margin-bottom": "var(--margin-top)" },
            iconClass: n.iconClasses.arrowDown,
            inputType: n.inputType,
            onOnChangeInputName: f
          }, null, 8, ["iconClass", "inputType"])) : V("", !0),
          n.mode == "gradient" ? (v(), $("button", {
            key: 3,
            type: "button",
            class: "cp-btn",
            style: { "margin-bottom": "var(--margin-top)" },
            onClick: c[0] || (c[0] = (h) => o.value = !o.value)
          }, [
            n.iconClasses.ruler ? (v(), $("i", {
              key: 0,
              class: O(n.iconClasses.ruler)
            }, null, 2)) : (v(), $("svg", xt, St))
          ])) : V("", !0)
        ])
      ]),
      n.mode == "gradient" ? K((v(), $("div", It, [
        g("div", null, [
          g("p", Mt, [
            J(Y(n.local.angle ? n.local.angle : "Angle") + " ", 1),
            g("span", null, Y(n.angle) + "°", 1)
          ]),
          g("input", {
            type: "range",
            min: "0",
            max: "360",
            value: n.angle,
            onInput: c[1] || (c[1] = (h) => r(h, "angle"))
          }, null, 40, Vt)
        ])
      ], 512)), [
        [j, n.gradientType == "linear" && o.value]
      ]) : V("", !0),
      n.mode == "gradient" && o.value ? K((v(), $("div", Lt, [
        g("div", null, [
          g("p", Nt, [
            J(Y(n.local.positionX ? n.local.positionX : "Position X") + " ", 1),
            g("span", null, Y(n.percentageX) + "%", 1)
          ]),
          g("input", {
            type: "range",
            min: "0",
            max: "100",
            value: n.percentageX,
            onInput: c[2] || (c[2] = (h) => r(h, "percentageX"))
          }, null, 40, zt)
        ]),
        g("div", null, [
          g("p", Yt, [
            J(Y(n.local.positionY ? n.local.positionY : "Position Y") + " ", 1),
            g("span", null, Y(n.percentageY) + "%", 1)
          ]),
          g("input", {
            type: "range",
            min: "0",
            max: "100",
            value: n.percentageY,
            onInput: c[3] || (c[3] = (h) => r(h, "percentageY"))
          }, null, 40, Ht)
        ]),
        g("div", Xt, [
          g("div", Bt, [
            Dt,
            g("input", {
              type: "number",
              value: n.percentageX,
              onInput: c[4] || (c[4] = (h) => r(h, "percentageX"))
            }, null, 40, Tt)
          ]),
          g("div", Rt, [
            Et,
            g("input", {
              type: "number",
              value: n.percentageY,
              onInput: c[5] || (c[5] = (h) => r(h, "percentageY"))
            }, null, 40, Pt)
          ])
        ]),
        g("div", Ot, [
          g("label", Ut, [
            n.customSize ? (v(), $("div", Gt, At)) : (v(), $("div", Wt)),
            g("input", {
              id: "customSize",
              type: "checkbox",
              onInput: c[6] || (c[6] = (h) => r(h, "customSize"))
            }, null, 32)
          ]),
          g("div", Ft, Y(n.customSize ? "Custom" : "Circle"), 1)
        ]),
        n.customSize ? (v(), $("div", Zt, [
          g("p", Kt, [
            J(Y(n.local.sizeX ? n.local.sizeX : "Size X") + " ", 1),
            g("span", null, Y(n.percentageSizeX) + "%", 1)
          ]),
          g("input", {
            type: "range",
            min: "0",
            max: "100",
            value: n.percentageSizeX,
            onInput: c[7] || (c[7] = (h) => r(h, "percentageSizeX"))
          }, null, 40, jt)
        ])) : V("", !0),
        n.customSize ? (v(), $("div", Jt, [
          g("p", Qt, [
            J(Y(n.local.sizeY ? n.local.sizeY : "Size Y") + " ", 1),
            g("span", null, Y(n.percentageSizeY) + "%", 1)
          ]),
          g("input", {
            type: "range",
            min: "0",
            max: "100",
            value: n.percentageSizeY,
            onInput: c[8] || (c[8] = (h) => r(h, "percentageSizeY"))
          }, null, 40, _t)
        ])) : V("", !0),
        n.customSize ? (v(), $("div", el, [
          g("div", tl, [
            ll,
            g("input", {
              type: "number",
              value: n.percentageSizeX,
              onInput: c[9] || (c[9] = (h) => r(h, "percentageSizeX"))
            }, null, 40, nl)
          ]),
          g("div", al, [
            ol,
            g("input", {
              type: "number",
              value: n.percentageSizeY,
              onInput: c[10] || (c[10] = (h) => r(h, "percentageSizeY"))
            }, null, 40, sl)
          ])
        ])) : V("", !0)
      ], 512)), [
        [j, n.gradientType == "radial"]
      ]) : V("", !0)
    ], 64));
  }
}), rl = /* @__PURE__ */ U({
  __name: "GradientBar",
  emits: ["onAddColor", "onMouseDown"],
  setup(n, { emit: p }) {
    const i = ue("gradientBar"), o = (s) => {
      s.preventDefault();
    };
    return (s, r) => (v(), $("div", {
      class: "gradient-bar",
      onMousedown: r[1] || (r[1] = (f) => s.$emit("onMouseDown", f)),
      onDragstart: o
    }, [
      g("div", {
        ref_key: "gradientBar",
        ref: i,
        class: "gradient-container",
        onDblclick: r[0] || (r[0] = (f) => s.$emit("onAddColor", f))
      }, null, 544)
    ], 32));
  }
}), ul = /* @__PURE__ */ g("div", { class: "colour-area-mask" }, null, -1), cl = /* @__PURE__ */ U({
  __name: "PickerWrap",
  emits: ["onMouseDown"],
  setup(n) {
    const p = ue("canvas"), i = ue("pickerWrap"), o = ue("pickerPointer"), s = (r) => {
      r.preventDefault();
    };
    return (r, f) => (v(), $("div", {
      ref_key: "pickerWrap",
      ref: i,
      class: "cp-picker-wrap",
      onMousedown: f[0] || (f[0] = (y) => r.$emit("onMouseDown", y)),
      onDragstart: s
    }, [
      g("canvas", {
        ref_key: "canvas",
        ref: p,
        class: "colour-area"
      }, null, 512),
      ul,
      g("div", {
        ref_key: "pickerPointer",
        ref: o,
        class: "colour-area-point-circle"
      }, null, 512)
    ], 544));
  }
}), dl = { class: "picker-hue" }, pl = ["value"], gl = /* @__PURE__ */ U({
  __name: "PickerHue",
  props: {
    modelValue: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "onInput", "onChange"],
  setup(n, { emit: p }) {
    const i = p, o = (s) => {
      i("update:modelValue", parseFloat(s.target.value)), i("onInput", s);
    };
    return (s, r) => (v(), $("div", dl, [
      g("input", {
        value: n.modelValue,
        class: "picker-hue-range-slider",
        type: "range",
        min: "0",
        max: "360",
        step: "0.1",
        onInput: o,
        onChange: r[0] || (r[0] = (f) => s.$emit("onChange", f))
      }, null, 40, pl)
    ]));
  }
}), ml = { class: "opacity-bar" }, hl = ["value"], vl = /* @__PURE__ */ U({
  __name: "OpacityBar",
  props: {
    modelValue: { default: 0, type: Number }
  },
  emits: ["update:modelValue", "onInput"],
  setup(n, { emit: p }) {
    const i = ue("opacitySlider"), o = p, s = (r) => {
      o(
        "update:modelValue",
        parseInt(r.target.value)
      ), o("onInput", r);
    };
    return (r, f) => (v(), $("div", ml, [
      g("input", {
        ref_key: "opacitySlider",
        ref: i,
        value: n.modelValue,
        class: "opacity_slider",
        type: "range",
        min: "0",
        max: "100",
        onInput: s
      }, null, 40, hl)
    ]));
  }
}), fl = { class: "ck-cp-input-content" }, bl = { class: "ck-cp-input-label" }, yl = ["min", "max", "value"], T = /* @__PURE__ */ U({
  __name: "InputNumber",
  props: {
    label: { default: "", type: String },
    modelValue: { default: 0, type: Number },
    min: { default: 0, type: Number },
    max: { default: 100, type: Number }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: p }) {
    const i = n, o = p, s = L(i.modelValue);
    Se(() => i.modelValue, (a, c) => {
      a !== c && (s.value = a);
    }, { immediate: !0 });
    const r = (a) => {
      const c = (I) => {
        s.value = I, o("update:modelValue", I);
      }, h = a.target.value;
      if (!h) return c(i.modelValue);
      if (parseInt(h) > i.max) return c(i.max);
      o("update:modelValue", parseInt(h));
    }, f = (a) => {
      s.value = a.target.value;
    }, y = (a) => {
      if (["KeyE", "Equal", "Equal", "Backslash", "Slash", "NumpadDecimal", "NumpadAdd"].includes(a.code)) return a.preventDefault();
      a.code === "Enter" && r(a);
    }, w = r;
    return (a, c) => (v(), $("div", fl, [
      g("span", bl, Y(n.label), 1),
      g("input", {
        type: "number",
        min: n.min,
        max: n.max,
        value: s.value,
        onInput: f,
        onKeydown: y,
        onFocusout: c[0] || (c[0] = //@ts-ignore
        (...h) => fe(w) && fe(w)(...h))
      }, null, 40, yl)
    ]));
  }
}), Cl = { class: "ck-cp-input-content color-hex" }, kl = /* @__PURE__ */ g("span", { class: "ck-cp-input-label" }, "HEX", -1), wl = ["value"], xl = /* @__PURE__ */ U({
  __name: "InputHex",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: p }) {
    const i = n, o = p, s = L(""), r = (a) => {
      const c = a.target.value;
      s.value = c, s.value = `#${c.replace(/#/g, "")}`;
    }, f = (a) => {
      const c = a.target.value;
      if (c === i.modelValue) return;
      if (!/^#[0-9a-fA-F]+$/.test(c)) {
        s.value = i.modelValue;
        return;
      }
      let h = c.replace(/#/g, "");
      switch (h.length) {
        case 0:
          h = i.modelValue.replace("#", "");
          break;
        case 1:
        case 2:
          h = h.repeat(3);
          break;
        case 4:
        case 5:
          h = h.slice(0, 3);
          break;
        case 3:
        case 6:
          break;
        default:
          h = h.slice(0, 6);
      }
      s.value = `#${h.toUpperCase()}`, o("update:modelValue", s.value);
    }, y = (a) => {
      a.code === "Enter" && f(a);
    }, w = f;
    return Se(() => i.modelValue, (a, c) => {
      a !== c && (s.value = a);
    }, { immediate: !0 }), (a, c) => (v(), $("div", Cl, [
      kl,
      g("input", {
        type: "text",
        value: s.value,
        onInput: r,
        onKeydown: y,
        onFocusout: c[0] || (c[0] = //@ts-ignore
        (...h) => fe(w) && fe(w)(...h))
      }, null, 40, wl)
    ]));
  }
}), $l = (n) => {
  const p = /^rgb\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)\)$/i;
  if (!p.test(n))
    return null;
  const i = p.exec(n);
  if (!i)
    return null;
  const o = parseInt(i[1].trim(), 10), s = parseInt(i[2].trim(), 10), r = parseInt(i[3].trim(), 10);
  return {
    r: o,
    g: s,
    b: r
  };
}, Sl = (n) => {
  const p = /^rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*),(\s*[\d.]+\s*)\)$/i;
  if (!p.test(n))
    return null;
  const i = p.exec(n);
  if (!i)
    return null;
  const o = parseInt(i[1].trim(), 10), s = parseInt(i[2].trim(), 10), r = parseInt(i[3].trim(), 10), f = parseFloat(i[4].trim());
  return {
    r: o,
    g: s,
    b: r,
    a: f
  };
}, Il = (n) => {
  const p = /^#?([a-f\d]{8})$/i;
  if (!p.test(n))
    return null;
  const i = p.exec(n);
  if (!i)
    return null;
  const o = i[1], s = o.substring(6, 8), r = parseInt(o.substring(0, 2), 16), f = parseInt(o.substring(2, 4), 16), y = parseInt(o.substring(4, 6), 16), w = parseInt(s, 16) / 255;
  return { r, g: f, b: y, a: w };
}, Ml = (n, p, i, o) => {
  function s(a) {
    const c = a.toString(16);
    return c.length === 1 ? "0" + c : c;
  }
  const r = s(Math.round(n)), f = s(Math.round(p)), y = s(Math.round(i)), w = s(Math.round(o * 255));
  return `#${r}${f}${y}${w}`;
}, ve = (n) => {
  var p;
  try {
    let i = (p = n.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      // @ts-ignore
      (f, y, w, a) => "#" + y + y + w + w + a + a
    ).substring(1).match(/.{2}/g)) == null ? void 0 : p.map((f) => parseInt(f, 16)), o = i == null ? void 0 : i[0], s = i == null ? void 0 : i[1], r = i == null ? void 0 : i[2];
    return Number.isNaN(o) || Number.isNaN(s) || Number.isNaN(r) || o === void 0 || s === void 0 || r === void 0 ? null : {
      r: o,
      g: s,
      b: r
    };
  } catch {
    return null;
  }
}, ee = (n, p, i) => {
  n = n / 255, p = p / 255, i = i / 255;
  const o = Math.max(n, p, i), s = Math.min(n, p, i);
  let r;
  return o === n ? r = (p - i) / (o - s) : o === p ? r = 2 + (i - n) / (o - s) : r = 4 + (n - p) / (o - s), r *= 60, r < 0 && (r += 360), Number.isNaN(r) && (r = 0), r;
}, Vl = (n, p, i) => {
  p = p / 100, i = i / 100;
  let o, s, r, f = [];
  return o = (1 - Math.abs(2 * i - 1)) * p, s = o * (1 - Math.abs(n / 60 % 2 - 1)), r = i - o / 2, n >= 0 && n < 60 && (f = [o, s, 0]), n >= 60 && n < 120 && (f = [s, o, 0]), n >= 120 && n < 180 && (f = [0, o, s]), n >= 180 && n < 240 && (f = [0, s, o]), n >= 240 && n < 300 && (f = [s, 0, o]), n >= 300 && n <= 360 && (f = [o, 0, s]), f.map((y) => Math.round(255 * (y + r)));
}, xe = (n, p, i) => "#" + (16777216 + (i | p << 8 | n << 16)).toString(16).slice(1), Ee = (n, p, i) => {
  let o = Vl(n, p, i);
  return { rgb: o, hexA: xe(o[0], o[1], o[2]) };
}, Pe = (n, p, i) => {
  let o, s, r, f, y, w, a = 0, c = [];
  for (c[0] = n / 255, c[1] = p / 255, c[2] = i / 255, o = c[0], s = c[0], w = 0, r = 0; r < c.length - 1; r++)
    c[r + 1] <= o && (o = c[r + 1]), c[r + 1] >= s && (s = c[r + 1], w = r + 1);
  return w === 0 && (a = (c[1] - c[2]) / (s - o)), w === 1 && (a = 2 + (c[2] - c[0]) / (s - o)), w === 2 && (a = 4 + (c[0] - c[1]) / (s - o)), isNaN(a) && (a = 0), a = a * 60, a < 0 && (a = a + 360), f = (o + s) / 2, o === s ? y = 0 : f < 0.5 ? y = (s - o) / (s + o) : y = (s - o) / (2 - s - o), y = y, { h: a, s: y, l: f };
}, Oe = (n, p, i) => {
  n = n % 360 / 360, p = Math.min(1, Math.max(0, p)), i = Math.min(1, Math.max(0, i));
  let o, s, r;
  if (p === 0)
    o = s = r = i;
  else {
    const f = (a, c, h) => (h < 0 && (h += 1), h > 1 && (h -= 1), h < 0.16666666666666666 ? a + (c - a) * 6 * h : h < 0.5 ? c : h < 0.6666666666666666 ? a + (c - a) * (0.6666666666666666 - h) * 6 : a), y = i < 0.5 ? i * (1 + p) : i + p - i * p, w = 2 * i - y;
    o = f(w, y, n + 1 / 3), s = f(w, y, n), r = f(w, y, n - 1 / 3);
  }
  return o = Math.round(o * 255), s = Math.round(s * 255), r = Math.round(r * 255), { r: o, g: s, b: r };
}, Ll = (n, p, i) => {
  let o = 0, s = 0, r = 0;
  const f = n / 60, y = i * p, w = y * (1 - Math.abs(f % 2 - 1)), a = i - y;
  switch (Math.floor(f) % 6) {
    case 0:
      o = y, s = w, r = 0;
      break;
    case 1:
      o = w, s = y, r = 0;
      break;
    case 2:
      o = 0, s = y, r = w;
      break;
    case 3:
      o = 0, s = w, r = y;
      break;
    case 4:
      o = w, s = 0, r = y;
      break;
    case 5:
      o = y, s = 0, r = w;
      break;
  }
  return {
    r: Math.round((o + a) * 255),
    g: Math.round((s + a) * 255),
    b: Math.round((r + a) * 255)
  };
}, Nl = (n, p, i) => {
  n /= 255, p /= 255, i /= 255;
  const o = Math.max(n, p, i), s = Math.min(n, p, i);
  let r, f, y = o;
  const w = o - s;
  if (o !== 0)
    f = w / o;
  else
    return { h: 0, s: 0, v: 0 };
  return w === 0 ? r = 0 : o === n ? r = 60 * ((p - i) / w % 6) : o === p ? r = 60 * ((i - n) / w + 2) : r = 60 * ((n - p) / w + 4), r < 0 && (r += 360), {
    h: Math.round(r),
    s: Math.round(f * 100) / 100,
    v: Math.round(y * 100) / 100
  };
}, zl = (n, p, i) => {
  const o = (2 - p) * i / 2, s = o && o < 1 ? p * i / (o < 0.5 ? o * 2 : 2 - o * 2) : p;
  return { h: n, s, l: o };
}, Yl = (n, p, i, o) => {
  const s = Math.round(255 * (1 - n) * (1 - o)), r = Math.round(255 * (1 - p) * (1 - o)), f = Math.round(255 * (1 - i) * (1 - o));
  return {
    r: Math.min(255, Math.max(0, s)),
    g: Math.min(255, Math.max(0, r)),
    b: Math.min(255, Math.max(0, f))
  };
}, Hl = (n, p, i) => {
  n = n / 255, p = p / 255, i = i / 255;
  const o = 1 - Math.max(n, p, i), s = (1 - n - o) / (1 - o), r = (1 - p - o) / (1 - o), f = (1 - i - o) / (1 - o);
  return {
    c: isNaN(s) ? 0 : s,
    m: isNaN(r) ? 0 : r,
    y: isNaN(f) ? 0 : f,
    k: isNaN(o) ? 0 : o
  };
}, Xl = { class: "ck-cp-local-color-conatiner" }, Bl = { class: "ck-cp-color-list-label" }, Dl = { style: { display: "flex", "align-items": "center" } }, Tl = {
  key: 1,
  width: "32",
  height: "14",
  viewBox: "5 -5 32 32",
  xmlns: "http://www.w3.org/2000/svg"
}, Rl = /* @__PURE__ */ g("path", { d: "M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" }, null, -1), El = [
  Rl
], Pl = {
  key: 1,
  width: "18",
  height: "18",
  viewBox: "-2 -2 30 30",
  xmlns: "http://www.w3.org/2000/svg"
}, Ol = /* @__PURE__ */ $e('<path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"></path><path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"></path><path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"></path><path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"></path><path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"></path>', 5), Ul = [
  Ol
], Gl = { class: "ck-cp-color-list" }, ql = ["onClick"], Al = {
  key: 1,
  width: "25",
  height: "25",
  viewBox: "2 2 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Wl = /* @__PURE__ */ g("path", { d: "M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" }, null, -1), Fl = /* @__PURE__ */ g("path", { d: "M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" }, null, -1), Zl = [
  Wl,
  Fl
], Kl = /* @__PURE__ */ U({
  __name: "HistoryColorList",
  props: {
    colorListCount: { default: 10, type: Number },
    hexVal: { default: "", type: String },
    title: { default: "", type: String },
    iconClasses: {
      default: {
        ruler: "",
        eyeDroper: "",
        arrowDown: "",
        save: "",
        delete: ""
      },
      type: Object
    }
  },
  emits: ["color-item-click"],
  setup(n, { emit: p }) {
    const i = n, o = p, s = L([]), r = st(
      () => s.value.some((a) => a.selected == !0)
    ), f = () => {
      if (!s.value.find(
        (c) => c.color === i.hexVal
      )) {
        const c = s.value.find(
          (h) => h.selected == !0
        );
        if (c)
          c.color = i.hexVal;
        else {
          s.value.length === i.colorListCount && s.value.pop();
          let h = i.hexVal;
          s.value.unshift({ color: h, selected: !1 });
        }
        localStorage.setItem(
          "ck-cp-local-color-list",
          JSON.stringify(
            s.value.map((h) => h.color)
          )
        );
      }
    }, y = () => {
      s.value = s.value.filter(
        (a) => a.selected == !1
      ), localStorage.setItem(
        "ck-cp-local-color-list",
        JSON.stringify(
          s.value.map((a) => a.color)
        )
      );
    }, w = (a) => {
      s.value.forEach((c) => {
        c.color === a ? c.selected = !c.selected : c.selected = !1;
      }), o("color-item-click", a);
    };
    return it(() => {
      let a = localStorage.getItem("ck-cp-local-color-list");
      if (a) {
        let c = JSON.parse(a);
        s.value = c.map((h) => ({
          color: h,
          selected: !1
        }));
      }
    }), (a, c) => (v(), $("div", Xl, [
      g("div", Bl, [
        g("div", Dl, [
          J(Y(n.title ? n.title : "Color Palette") + " ", 1),
          n.iconClasses.arrowDown ? (v(), $("i", {
            key: 0,
            class: O(n.iconClasses.arrowDown)
          }, null, 2)) : (v(), $("svg", Tl, El))
        ]),
        r.value ? (v(), $("button", {
          key: 0,
          type: "button",
          class: "cp-main-btn",
          onClick: y,
          style: { width: "17.33px", height: "17.33px" }
        }, [
          n.iconClasses.delete ? (v(), $("i", {
            key: 0,
            class: O(n.iconClasses.delete)
          }, null, 2)) : (v(), $("svg", Pl, Ul))
        ])) : V("", !0)
      ]),
      g("div", Gl, [
        (v(!0), $(Ue, null, rt(s.value, (h) => (v(), $("div", {
          key: `color-${h.color}`,
          class: O(["ck-cp-color-item", h.selected ? "ck-select" : ""]),
          style: ut({ backgroundColor: h.color }),
          onClick: (I) => w(h.color)
        }, null, 14, ql))), 128)),
        g("button", {
          type: "button",
          class: "cp-btn-save-color",
          onClick: f
        }, [
          n.iconClasses.save ? (v(), $("i", {
            key: 0,
            class: O(n.iconClasses.save)
          }, null, 2)) : (v(), $("svg", Al, Zl))
        ])
      ])
    ]));
  }
}), jl = ["cp-theme"], Jl = {
  key: 0,
  style: { display: "flex", "align-items": "center", gap: "8px", "margin-top": "calc(var(--margin-top) * 1.35)", padding: "var(--padding)" }
}, Ql = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, _l = /* @__PURE__ */ $e('<path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"></path><path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"></path><path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"></path><path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"></path><path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"></path>', 5), en = [
  _l
], tn = { style: { display: "flex", "align-items": "center", gap: "8px", "margin-top": "calc(var(--margin-top) * 1.35)", padding: "var(--padding)" } }, ln = /* @__PURE__ */ g("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "3 2 28 28"
}, [
  /* @__PURE__ */ g("path", { d: "M27.014 2.891l-0.058-0.058c-1.106-1.11-2.911-1.11-4.022 0l-2.515 2.515-0.072-0.072c-0.603-0.603-1.584-0.603-2.216 0.024-0.599 0.603-0.599 1.584 0 2.187l0.072 0.072-8.034 8.039c-1.135 1.13-1.878 2.617-2.1 4.2l-1.217 1.453c-0.483 0.483-0.483 1.265 0 1.743 0.241 0.246 0.565 0.367 0.883 0.367 0.304 0 0.608-0.111 0.826-0.338l1.487-1.241c1.584-0.227 3.071-0.97 4.205-2.1l8.034-8.039 0.072 0.072c0.299 0.299 0.69 0.449 1.086 0.449 0.401 0 0.811-0.159 1.13-0.478 0.29-0.29 0.449-0.676 0.449-1.091s-0.159-0.801-0.449-1.096l-0.072-0.068 2.515-2.515c1.106-1.11 1.106-2.916-0.005-4.027zM13.568 18.997c-1.014 1.014-2.356 1.671-3.78 1.844-0.092 0.014-0.179 0.048-0.251 0.111l-1.622 1.361c-0.106 0.106-0.275 0.106-0.381 0-0.101-0.106-0.101-0.275 0.029-0.41l1.337-1.593c0.058-0.072 0.097-0.159 0.106-0.251 0.174-1.424 0.83-2.766 1.844-3.78l8.039-8.034 2.718 2.718-8.039 8.034z" }),
  /* @__PURE__ */ g("path", { d: "M5.804 24.979c-0.275 0.328-1.651 2.023-1.651 2.998 0 1.115 0.908 2.023 2.018 2.023 1.115 0 2.023-0.908 2.023-2.023 0-0.975-1.376-2.67-1.651-2.998-0.183-0.222-0.555-0.222-0.739 0z" })
], -1), nn = { style: { "flex-grow": "1", display: "flex", "flex-direction": "column", gap: "calc(var(--margin-top) * 1.85)" } }, an = { id: "ck-cp-target-background" }, on = {
  key: 1,
  class: "ck-cp-input-container"
}, sn = {
  key: 3,
  class: "ck-cp-buttons"
}, un = /* @__PURE__ */ U({
  __name: "Vue3ColorPicker",
  props: {
    modelValue: { default: "", type: String },
    mode: {
      default: "gradient",
      type: String
    },
    type: { default: "HEX8", type: String },
    inputType: { default: "RGB", type: String },
    theme: { default: "light", type: String },
    colorListCount: { default: 15, type: Number },
    showColorList: { default: !0, type: Boolean },
    showEyeDrop: { default: !0, type: Boolean },
    showPickerMode: { default: !0, type: Boolean },
    showAlpha: { default: !0, type: Boolean },
    showInputMenu: { default: !0, type: Boolean },
    showInputSet: { default: !0, type: Boolean },
    disabled: { default: !1, type: Boolean },
    gradientMode: { default: "linear", type: String },
    local: {
      default: {
        angle: "",
        positionX: "",
        positionY: "",
        customSize: !1,
        sizeX: "",
        sizeY: "",
        solid: "",
        gradient: "",
        linear: "",
        radial: "",
        colorPalette: "",
        btnSaveLabel: "Save",
        btnCancelLabel: "Cancel"
      },
      type: Object
    },
    iconClasses: {
      default: {
        linear: "",
        radial: "",
        ruler: "",
        eyeDroper: "",
        inputMenu: "",
        save: "",
        delete: ""
      },
      type: Object
    },
    showButtons: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: p }) {
    const i = n, o = L(null), s = p, r = L(i.mode), f = L(i.modelValue), y = L(i.modelValue), w = (l) => {
      f.value = l, i.showButtons || (y.value = l, s("update:modelValue", l));
    }, a = L([
      { id: 1, r: 68, g: 71, b: 119, a: 100, percent: 0, hue: 0, select: !0 },
      { id: 2, r: 0, g: 0, b: 255, a: 100, percent: 100, hue: 0, select: !1 }
    ]), c = L(!1), h = L(i.gradientMode), I = me({
      angle: 90,
      percentageX: 50,
      percentageY: 50,
      customSize: !1,
      percentageSizeX: 50,
      percentageSizeY: 50
    }), A = L(""), N = L(i.inputType), te = L(!1), Ie = L(), ce = L(), Z = L(), G = L(), M = L(), B = me({
      h: 0,
      s: 0,
      l: 0
    }), H = me({
      h: 0,
      s: 0,
      v: 0
    }), z = me({
      c: 0,
      m: 0,
      y: 0,
      k: 0
    });
    re("gradientBar", ce), re("canvas", Z), re("pickerWrap", G), re("pickerPointer", M), re("opacitySlider", Ie);
    let le = 0, ne = 0, Me = 0, Ve = 0, ae = 0, oe = 0;
    const Ge = (l) => {
      !G.value || !M.value || (ae = G.value.offsetHeight - M.value.offsetHeight, oe = G.value.offsetWidth - M.value.offsetWidth, Me = l.clientX - l.target.getBoundingClientRect().left, Ve = l.clientY - l.target.getBoundingClientRect().top, le = Me - M.value.offsetWidth / 2, ne = Ve - M.value.offsetHeight / 2, M.value.style.left = `${le}px`, M.value.style.top = `${ne}px`, be(!1), _(), window.addEventListener("mousemove", Le), window.addEventListener("mouseup", Ne));
    }, Le = (l) => {
      l.preventDefault();
      const e = G.value.getBoundingClientRect(), t = l.clientX - e.left - M.value.offsetWidth / 2, u = l.clientY - e.top - M.value.offsetHeight / 2;
      t >= 0 && t <= oe ? (le = t, M.value.style.left = `${t}px`) : 0 > t ? (le = 0, M.value.style.left = "0px") : t > oe && (le = oe, M.value.style.left = `${oe}px`), u >= 0 && u <= ae ? (ne = u, M.value.style.top = `${u}px`) : 0 > u ? (ne = 0, M.value.style.top = "0px") : u > ae && (ne = ae, M.value.style.top = `${ae}px`), be(!1), _();
    }, Ne = () => {
      window.removeEventListener("mousemove", Le), window.removeEventListener("mouseup", Ne);
    }, be = (l) => {
      if (!l) {
        let e = qe();
        const t = Oe(W.value, e.s, e.l);
        if (t) {
          if (te.value) {
            let u = a.value.find((d) => d.select == !0);
            u && (u.r = t.r, u.g = t.g, u.b = t.b);
          }
          P(), D();
        }
      }
    }, W = L(0), ye = async (l) => {
      const { rgb: e } = Ee(W.value, 100, 50);
      De(e), setTimeout(() => {
        be(l), _();
      }, 0);
    }, qe = () => {
      let l = { s: 0, l: 0 }, e = G.value.offsetWidth - M.value.offsetWidth, t = G.value.offsetHeight - M.value.offsetHeight, u = parseInt(M.value.style.left), m = 1 - parseInt(M.value.style.top) / t, x = u / e;
      return l.l = m / 2 * (2 - x), l.s = m * x / (1 - Math.abs(2 * l.l - 1)), Number.isNaN(l.s) && (l.s = l.l), l.l = l.l > 1 ? 1 : l.l, l.s = l.s > 1 ? 1 : l.s, l;
    }, se = () => {
      const l = a.value.find((e) => e.select == !0);
      if (l) {
        const { l: e, s: t } = Pe(l.r, l.g, l.b);
        let u = e, d = t;
        Number.isNaN(d) && (d = u);
        let m = { x: 0, y: 0 }, x = G.value.offsetWidth - M.value.offsetWidth, S = G.value.offsetHeight - M.value.offsetHeight;
        const [k, b] = 2 * u - 1 < 0 ? [x * 2 * d / (1 + d), S * (1 - u * (1 + d))] : [
          -x * 2 * (u - 1) * d / (u + d - u * d),
          S * (u - 1) * (d - 1)
        ];
        return m.x = k, m.y = b, m;
      } else
        return null;
    }, Ae = () => {
      const l = a.value.find((e) => e.select == !0);
      l && (l.hue = W.value);
    }, Q = L(100), We = (l) => {
      if (i.showAlpha) {
        const e = l.target, t = a.value.find((u) => u.select == !0);
        t && (t.a = parseInt(e.value), D());
      }
    }, Fe = (l) => {
      var t, u, d, m;
      const e = (u = (t = o.value) == null ? void 0 : t.querySelector(".gradient-handle-content")) == null ? void 0 : u.getBoundingClientRect();
      return l === 0 ? "0px" : l === 100 && e ? `${(((d = ce.value) == null ? void 0 : d.offsetWidth) || 0) - (e.width || 0)}px` : `${(((m = ce.value) == null ? void 0 : m.offsetWidth) || 0) * (l / 100) - ((e == null ? void 0 : e.width) || 0) / 2}px`;
    };
    let R = null, E = null;
    const ze = (l) => {
      var u, d;
      const t = l.target.offsetParent;
      if ((u = t == null ? void 0 : t.id) != null && u.includes("clr-gb-")) {
        const m = t.id.replace("clr-gb-", "");
        E = t;
        const x = a.value.find((S) => S.select == !0);
        if (x && x.id != m) {
          const S = (d = o.value) == null ? void 0 : d.querySelector(".gradient-handle.select");
          S == null || S.classList.remove("select"), t.classList.add("select");
          const k = a.value.findIndex((b) => b.select == !0);
          for (let b = 0; b < a.value.length; b++) {
            const C = a.value[b];
            if (C.id == m) {
              k != -1 && (a.value[k].select = !1), a.value[b].select = !0, Q.value = C.a, F(C.r, C.g, C.b, C.hue, !0), P(), _();
              break;
            }
          }
        }
        window.addEventListener("mousemove", Ye), window.addEventListener("mouseup", Ze);
      }
    }, Ze = () => {
      window.removeEventListener("mousemove", Ye), window.removeEventListener("mouseup", ze);
    }, Ye = (l) => {
      var m, x;
      l.preventDefault();
      const e = (x = (m = o.value) == null ? void 0 : m.querySelector(".gradient-handle-content")) == null ? void 0 : x.getBoundingClientRect(), t = R == null ? void 0 : R.getBoundingClientRect(), u = (t == null ? void 0 : t.width) - (e == null ? void 0 : e.width);
      let d = l.clientX - ((t == null ? void 0 : t.left) || 0) - ((e == null ? void 0 : e.width) || 0) / 2;
      if (d < 0 ? d = 0 : d > u && (d = u), E) {
        E.style.left = `${d}px`;
        const S = parseFloat((d / ((t == null ? void 0 : t.width) - (e == null ? void 0 : e.width)) * 100).toFixed(0)), k = a.value.find((b) => b.id == (E == null ? void 0 : E.id.replace("clr-gb-", "")));
        k && (k.percent = S), D();
      }
    }, Ke = (l) => {
      var S, k;
      const e = R == null ? void 0 : R.getBoundingClientRect(), t = Math.round((l.clientX - ((e == null ? void 0 : e.left) || 0)) / ((e == null ? void 0 : e.width) || 1) * 100), u = a.value.findIndex((b) => b.select == !0), d = a.value[u], m = {
        id: Date.now(),
        r: d.r,
        g: d.g,
        b: d.b,
        a: d.a,
        percent: t,
        hue: d.hue,
        select: !0
      };
      a.value[u].select = !1;
      const x = (S = o.value) == null ? void 0 : S.querySelector(".gradient-handle.select");
      x == null || x.classList.remove("select"), a.value = [...a.value, m], Be(m), E = (k = o.value) == null ? void 0 : k.querySelector(`#clr-gb-${m.id}`), D();
    }, He = (l) => {
      if (l.r == 0 && l.g == 0 && l.b == 0)
        return !0;
      if (l.r == 255 && l.g == 255 && l.b == 255)
        return !0;
      {
        const e = Z.value.getContext("2d", { willReadFrequently: !0 }), t = Z.value.width, u = Z.value.height, d = e.getImageData(0, 0, t, u).data, m = l.r, x = l.g, S = l.b;
        for (let k = 0; k < u; k++)
          for (let b = 0; b < t; b++) {
            const C = (k * t + b) * 4, q = d[C], at = d[C + 1], ot = d[C + 2];
            if (q === m && at === x && ot === S)
              return !0;
          }
        return !1;
      }
    }, F = (l, e, t, u, d) => {
      setTimeout(() => {
        if (He({ r: l, g: e, b: t })) {
          let m = se();
          m && (M.value.style.left = `${m.x}px`, M.value.style.top = `${m.y}px`);
        } else {
          let m = se();
          m && (M.value.style.left = `${m.x}px`, M.value.style.top = `${m.y}px`), W.value = u, ye(d);
        }
      }, 0);
    }, Xe = () => {
      a.value.forEach((t) => Be(t)), je();
      const l = a.value[0];
      W.value = l.hue, ye(!0);
      let e = se();
      e && (M.value.style.left = `${e.x}px`, M.value.style.top = `${e.y}px`), P(), D();
    }, Be = (l) => {
      if (r.value == "gradient") {
        let e = document.createElement("div");
        e.id = `clr-gb-${l.id}`, e.classList.add("gradient-handle"), e.style.left = Fe(l.percent);
        let t = document.createElement("div");
        t.classList.add("gradient-handle-content"), l.select == !0 && e.classList.add("select"), e.appendChild(t), R && R.appendChild(e);
      }
    }, De = (l) => {
      const e = Z.value.getContext("2d", { willReadFrequently: !0 }), t = Z.value.width, u = Z.value.height;
      e.fillStyle = `rgb(${l[0]},${l[1]},${l[2]})`, e.fillRect(0, 0, t, u);
      let d = e.createLinearGradient(0, 0, t - 12, 0);
      d.addColorStop(0, "rgb(255,255,255)"), d.addColorStop(1, "rgba(255,255,255,0)"), e.fillStyle = d, e.fillRect(0, 0, t, u);
      let m = e.createLinearGradient(0, 0, 0, u);
      m.addColorStop(0, "rgba(0,0,0,0)"), m.addColorStop(1, "rgb(0,0,0)"), e.fillStyle = m, e.fillRect(0, 0, t, u);
    }, P = () => {
      if (i.showAlpha) {
        let l = a.value.find((e) => e.select == !0);
        l && (Ie.value.style.background = ` linear-gradient(90deg,rgba(255, 255, 255, 0) 0%, rgba(${l.r}, ${l.g}, ${l.b}, 100) 97%)`);
      }
    }, D = () => {
      var l;
      if (r.value == "gradient") {
        a.value.sort((d, m) => d.percent - m.percent);
        let e = "linear-gradient(90deg, ", t;
        if (h.value == "linear") {
          t = `linear-gradient(${I.angle}deg, `;
          for (let d = 0; d < a.value.length; d++) {
            const { r: m, g: x, b: S, a: k, percent: b } = a.value[d];
            a.value.length - 1 == d ? (e = e + `rgba(${m},${x},${S},${k / 100}) ${b}%)`, t = t + `rgba(${m},${x},${S},${k / 100}) ${b}%)`) : (e = e + `rgba(${m},${x},${S},${k / 100}) ${b}%, `, t = t + `rgba(${m},${x},${S},${k / 100}) ${b}%, `);
          }
        } else {
          I.customSize ? t = `radial-gradient(${I.percentageSizeX}% ${I.percentageSizeY}% at ${I.percentageX}% ${I.percentageY}%, ` : t = `radial-gradient(circle at ${I.percentageX}% ${I.percentageY}%, `;
          for (let d = 0; d < a.value.length; d++) {
            const { r: m, g: x, b: S, a: k, percent: b } = a.value[d];
            a.value.length - 1 == d ? (e = e + `rgba(${m},${x},${S},${k / 100}) ${b}%)`, t = t + `rgba(${m},${x},${S},${k / 100}) ${b}%)`) : (e = e + `rgba(${m},${x},${S},${k / 100}) ${b}%, `, t = t + `rgba(${m},${x},${S},${k / 100}) ${b}%, `);
          }
        }
        ce.value.style.backgroundImage = e;
        let u = (l = o.value) == null ? void 0 : l.querySelector("#ck-cp-target-background");
        u && (u.style.backgroundImage = t, te.value && w(u.style.backgroundImage));
      } else {
        const { r: e, g: t, b: u, a: d } = a.value[0];
        let m = "";
        switch (i.type) {
          case "HEX8":
            m = Ml(e, t, u, d / 100);
            break;
          case "RGBA":
            m = `rgba(${e},${t},${u},${d / 100})`;
            break;
          case "RGB":
            m = `rgb(${e},${t},${u})`;
            break;
          case "HEX":
            m = xe(e, t, u);
            break;
        }
        te.value && w(m);
      }
    }, je = () => {
      a.value.forEach((l) => {
        l.hue = ee(l.r, l.g, l.b);
      });
    }, Je = (l) => {
      h.value = l, D();
    }, Te = () => {
      var l, e;
      if (a.value.length > 2) {
        const t = a.value.findIndex((u) => u.select == !0);
        if (t !== -1) {
          const u = a.value[t].id;
          a.value.splice(t, 1);
          const d = (l = o.value) == null ? void 0 : l.querySelector(`#clr-gb-${u}`);
          d == null || d.remove();
          const m = a.value[0];
          m && (m.select = !0, E = (e = o.value) == null ? void 0 : e.querySelector(`#clr-gb-${m.id}`), E == null || E.classList.add("select"), F(m.r, m.g, m.b, m.hue, !1), _(), D());
        }
      }
    }, Ce = () => {
      var t;
      const l = (t = o.value) == null ? void 0 : t.querySelector("#cp-btn-eyedropper");
      l == null || l.classList.add("active"), new EyeDropper().open().then((u) => {
        const { sRGBHex: d } = u, m = a.value.find((S) => S.select == !0), x = ve(d);
        if (x) {
          const S = ee(x.r, x.g, x.b);
          if (m && (m.hue = S, m.r = x.r, m.g = x.g, m.b = x.b), He(x)) {
            const k = se();
            k && (M.value.style.left = `${k.x}px`, M.value.style.top = `${k.y}px`);
          } else {
            W.value = S;
            const { rgb: k } = Ee(S, 100, 50);
            De(k);
            const b = se();
            b && (M.value.style.left = `${b.x}px`, M.value.style.top = `${b.y}px`);
          }
          _(), P(), D(), l == null || l.classList.remove("active");
        }
      }).catch(() => {
        l == null || l.classList.remove("active");
      });
    }, de = (l, e) => {
      if (e != "a") {
        const t = a.value.find((u) => u.select == !0);
        if (t) {
          const u = ee(t.r, t.g, t.b);
          t.hue = u, F(t.r, t.g, t.b, t.hue, !0), D(), P();
        }
      } else
        Q.value = l, D(), P();
    }, ke = () => {
      const l = a.value.find((e) => e.select == !0);
      if (l && !Number.isNaN(B.h) && !Number.isNaN(B.s) && !Number.isNaN(B.l)) {
        const { r: e, g: t, b: u } = Oe(B.h, B.s / 100, B.l / 100);
        l.hue = B.h, l.r = e, l.g = t, l.b = u, F(l.r, l.g, l.b, l.hue, !0), D(), P();
      }
    }, we = () => {
      const l = a.value.find((e) => e.select == !0);
      if (l && !Number.isNaN(H.h) && !Number.isNaN(H.s) && !Number.isNaN(H.v)) {
        const { r: e, g: t, b: u } = Ll(H.h, H.s / 100, H.v / 100), { h: d } = zl(H.h, H.s / 100, H.v / 100);
        l.hue = d, l.r = e, l.g = t, l.b = u, F(l.r, l.g, l.b, l.hue, !0), D(), P();
      }
    }, pe = () => {
      const l = a.value.find((e) => e.select == !0);
      if (l && !Number.isNaN(z.c) && !Number.isNaN(z.m) && !Number.isNaN(z.y) && !Number.isNaN(z.k)) {
        const { r: e, g: t, b: u } = Yl(z.c / 100, z.m / 100, z.y / 100, z.k / 100), d = ee(e, t, u);
        l.hue = d, l.r = e, l.g = t, l.b = u, F(l.r, l.g, l.b, l.hue, !0), D(), P();
      }
    }, Qe = () => {
      if (A.value) {
        const l = ve(A.value);
        if (l) {
          const e = ee(l.r, l.g, l.b), t = a.value.find((u) => u.select == !0);
          t && (t.r = l.r, t.g = l.g, t.b = l.b, t.hue = e, F(l.r, l.g, l.b, t.hue, !0), D(), P(), ie(N.value));
        }
      }
    }, _ = () => {
      const l = a.value.find((e) => e.select == !0);
      l && (A.value = xe(l.r, l.g, l.b).toUpperCase()), ie(N.value);
    }, _e = (l) => {
      A.value = l;
      let e = ve(A.value);
      if (e) {
        const t = ee(e.r, e.g, e.b), u = a.value.find((d) => d.select == !0);
        u && (u.r = e.r, u.g = e.g, u.b = e.b, u.hue = t, F(e.r, e.g, e.b, u.hue, !0), D(), P());
      }
    };
    window.EyeDropper && (c.value = !0);
    const et = (l = "") => {
      if (r.value == "gradient") {
        let e = l ? l.includes("linear-gradient") ? "linear" : "radial" : i.gradientMode, t = [];
        if (h.value = e, e == "linear") {
          let u = /^linear-gradient\((.*)\)$/, d = l.replace(";", "").trim().match(u), m = /,\s*(?![^()]*\))/;
          if (d) {
            let x = d[1].split(m);
            for (let S = 0; S < x.length; S++) {
              const k = x[S];
              let b = {
                id: S,
                r: 0,
                g: 0,
                b: 0,
                a: 100,
                percent: 100,
                hue: 0,
                select: !1
              };
              if (k.includes("deg"))
                I.angle = parseInt(k.replace("deg", ""));
              else if (k.includes("rgba")) {
                let C = k.trim().replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                C = C.filter((q) => q.trim() !== ""), b.r = parseInt(C[0]), b.g = parseInt(C[1]), b.b = parseInt(C[2]), b.a = parseFloat(C[3]) * 100, b.percent = parseInt(C[4]), t.push(b);
              } else if (k.includes("rgb")) {
                let C = k.trim().replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                C = C.filter((q) => q.trim() !== ""), b.r = parseInt(C[0]), b.g = parseInt(C[1]), b.b = parseInt(C[2]), b.percent = parseInt(C[3]), t.push(b);
              }
            }
          }
        } else {
          let u = /^radial-gradient\((.*)\)$/, d = l.replace(";", "").trim().match(u), m = /,\s*(?![^()]*\))/;
          if (d) {
            let x = d[1].split(m);
            for (let S = 0; S < x.length; S++) {
              const k = x[S];
              let b = {
                id: S,
                r: 0,
                g: 0,
                b: 0,
                a: 100,
                percent: 100,
                hue: 0,
                select: !1
              };
              if (k.includes("circle at")) {
                console.log(k);
                let C = k.replace("circle at ", "").replace(" ", "").replace(/%/g, " ").trim().split(" ");
                I.percentageX = parseInt(C[0]), I.percentageY = parseInt(C[1]);
              } else if (k.includes("at")) {
                let C = k.replace(" at ", "").replace(/ /g, "").trim().split("%");
                I.percentageSizeX = parseInt(C[0]), I.percentageSizeY = parseInt(C[1]), I.percentageX = parseInt(C[2]), I.percentageY = parseInt(C[3]), I.customSize = !0;
              } else if (k.includes("rgba")) {
                let C = k.replace(/rgba|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                C = C.filter((q) => q.trim() !== ""), b.r = parseInt(C[0]), b.g = parseInt(C[1]), b.b = parseInt(C[2]), b.a = parseFloat(C[3]) * 100, b.percent = parseInt(C[4]), t.push(b);
              } else if (k.includes("rgb")) {
                let C = k.replace(/rgb|\(|\)|%/g, "").replace(/,/g, " ").split(" ");
                C = C.filter((q) => q.trim() !== ""), b.r = parseInt(C[0]), b.g = parseInt(C[1]), b.b = parseInt(C[2]), b.percent = parseInt(C[3]), t.push(b);
              }
            }
          }
        }
        t.length > 1 && (a.value = t, a.value[0].select = !0, Q.value = a.value[0].a);
      } else if (l) {
        let e = {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
        if (l.includes("#"))
          if (l.length >= 8)
            e = Il(l);
          else {
            let t = ve(l);
            t ? (e.a = 1, e.r = t.r, e.g = t.g, e.b = t.b) : e = null;
          }
        else if (l.includes("rgb"))
          if (l.includes("rgba"))
            e = Sl(l);
          else {
            let t = $l(l);
            t ? (e.a = 1, e.r = t.r, e.g = t.g, e.b = t.b) : e = null;
          }
        e && (a.value[0].r = e.r, a.value[0].b = e.b, a.value[0].g = e.g, a.value[0].a = parseInt((e.a * 100).toFixed(0)), Q.value = a.value[0].a, a.value[0].hue = 0);
      }
    }, ie = (l) => {
      const e = a.value.find((t) => t.select == !0);
      if (e) {
        switch (l) {
          case "RGB":
            break;
          case "HSL": {
            const { h: t, s: u, l: d } = Pe(e.r, e.g, e.b);
            B.h = Math.round(t), B.s = Math.round(u * 100), B.l = Math.round(d * 100);
            break;
          }
          case "HSV": {
            const { h: t, s: u, v: d } = Nl(e.r, e.g, e.b);
            H.h = Math.round(t), H.s = Math.round(u * 100), H.v = Math.round(d * 100);
            break;
          }
          case "CMYK":
            {
              const { c: t, m: u, y: d, k: m } = Hl(e.r, e.g, e.b);
              z.c = Math.round(t * 100), z.m = Math.round(u * 100), z.y = Math.round(d * 100), z.k = Math.round(m * 100);
            }
            break;
        }
        N.value = l;
      }
    }, tt = (l) => {
      r.value = l, setTimeout(() => {
        var e;
        r.value == "gradient" && (R = (e = o.value) == null ? void 0 : e.querySelector(".gradient-bar")), ge(i.modelValue), ie(N.value);
      }, 0);
    }, ge = (l) => {
      l && et(l), Xe();
    }, lt = () => {
      y.value = f.value, s("update:modelValue", y.value);
    }, Re = () => {
      a.value.forEach((l) => {
        const e = R == null ? void 0 : R.querySelector(`#clr-gb-${l.id}`);
        e == null || e.remove();
      });
    }, nt = () => {
      f.value = y.value, Re(), ge(f.value);
    };
    return Se(
      () => i.modelValue,
      (l, e) => {
        l !== e && l !== y.value && (Re(), ge(l));
      }
    ), ct(() => {
      var l;
      r.value == "gradient" && (R = (l = o.value) == null ? void 0 : l.querySelector(".gradient-bar")), ge(i.modelValue), ie(N.value), te.value = !0;
    }), (l, e) => (v(), $("div", {
      class: O(["ck-cp-container", n.disabled ? "ck-cp-disabled " : ""]),
      ref_key: "pickerTemplateRef",
      ref: o,
      "cp-theme": n.theme
    }, [
      he(il, {
        angle: I.angle,
        "onUpdate:angle": e[0] || (e[0] = (t) => I.angle = t),
        percentageX: I.percentageX,
        "onUpdate:percentageX": e[1] || (e[1] = (t) => I.percentageX = t),
        percentageY: I.percentageY,
        "onUpdate:percentageY": e[2] || (e[2] = (t) => I.percentageY = t),
        percentageSizeX: I.percentageSizeX,
        "onUpdate:percentageSizeX": e[3] || (e[3] = (t) => I.percentageSizeX = t),
        percentageSizeY: I.percentageSizeY,
        "onUpdate:percentageSizeY": e[4] || (e[4] = (t) => I.percentageSizeY = t),
        customSize: I.customSize,
        "onUpdate:customSize": e[5] || (e[5] = (t) => I.customSize = t),
        local: n.local,
        iconClasses: n.iconClasses,
        inputType: N.value,
        mode: r.value,
        showInputMenu: n.showInputMenu,
        gradientType: h.value,
        showPickerMode: n.showPickerMode,
        onOnChangeMode: Je,
        onOnInput: D,
        onOnClickEyeDropper: Ce,
        onOnDeleteColor: Te,
        onOnChangeInputType: ie,
        onOnPickerChangeMode: tt
      }, null, 8, ["angle", "percentageX", "percentageY", "percentageSizeX", "percentageSizeY", "customSize", "local", "iconClasses", "inputType", "mode", "showInputMenu", "gradientType", "showPickerMode"]),
      he(cl, { onOnMouseDown: Ge }),
      r.value == "gradient" ? (v(), $("div", Jl, [
        g("button", {
          type: "button",
          class: "cp-main-btn",
          onClick: Te
        }, [
          n.iconClasses.delete ? (v(), $("i", {
            key: 0,
            class: O(n.iconClasses.delete)
          }, null, 2)) : (v(), $("svg", Ql, en))
        ]),
        he(rl, {
          onOnAddColor: Ke,
          onOnMouseDown: ze
        })
      ])) : V("", !0),
      g("div", tn, [
        c.value && n.showEyeDrop ? (v(), $("button", {
          key: 0,
          type: "button",
          id: "cp-btn-eyedropper",
          class: "cp-main-btn",
          onClick: Ce
        }, [
          n.iconClasses.eyeDroper ? (v(), $("i", {
            key: 0,
            class: O(n.iconClasses.eyeDroper)
          }, null, 2)) : V("", !0),
          ln
        ])) : V("", !0),
        g("div", nn, [
          he(gl, {
            modelValue: W.value,
            "onUpdate:modelValue": e[6] || (e[6] = (t) => W.value = t),
            showEyeDrop: n.showEyeDrop,
            isEyeDropperUsing: c.value,
            onOnInput: e[7] || (e[7] = (t) => ye(!1)),
            onOnChange: Ae,
            onOnClickEyeDropper: Ce
          }, null, 8, ["modelValue", "showEyeDrop", "isEyeDropperUsing"]),
          n.showAlpha ? (v(), X(vl, {
            key: 0,
            modelValue: Q.value,
            "onUpdate:modelValue": e[8] || (e[8] = (t) => Q.value = t),
            onOnInput: We
          }, null, 8, ["modelValue"])) : V("", !0)
        ])
      ]),
      K(g("div", an, null, 512), [
        [j, !1]
      ]),
      te.value && n.showInputSet ? (v(), $("div", on, [
        N.value !== "CMYK" ? (v(), X(xl, {
          key: 0,
          modelValue: A.value,
          "onUpdate:modelValue": [
            e[9] || (e[9] = (t) => A.value = t),
            Qe
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "RGB" ? (v(), X(T, {
          key: 1,
          label: "R",
          min: 0,
          max: 255,
          modelValue: a.value.find((t) => t.select == !0).r,
          "onUpdate:modelValue": [
            e[10] || (e[10] = (t) => a.value.find((u) => u.select == !0).r = t),
            e[11] || (e[11] = (t) => de(t, "r"))
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "RGB" ? (v(), X(T, {
          key: 2,
          label: "G",
          min: 0,
          max: 255,
          modelValue: a.value.find((t) => t.select == !0).g,
          "onUpdate:modelValue": [
            e[12] || (e[12] = (t) => a.value.find((u) => u.select == !0).g = t),
            e[13] || (e[13] = (t) => de(t, "g"))
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "RGB" ? (v(), X(T, {
          key: 3,
          label: "B",
          min: 0,
          max: 255,
          modelValue: a.value.find((t) => t.select == !0).b,
          "onUpdate:modelValue": [
            e[14] || (e[14] = (t) => a.value.find((u) => u.select == !0).b = t),
            e[15] || (e[15] = (t) => de(t, "b"))
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "HSL" ? (v(), X(T, {
          key: 4,
          label: "H",
          min: 0,
          max: 360,
          modelValue: B.h,
          "onUpdate:modelValue": [
            e[16] || (e[16] = (t) => B.h = t),
            ke
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "HSL" ? (v(), X(T, {
          key: 5,
          label: "S",
          min: 0,
          max: 100,
          modelValue: B.s,
          "onUpdate:modelValue": [
            e[17] || (e[17] = (t) => B.s = t),
            ke
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "HSL" ? (v(), X(T, {
          key: 6,
          label: "L",
          min: 0,
          max: 100,
          modelValue: B.l,
          "onUpdate:modelValue": [
            e[18] || (e[18] = (t) => B.l = t),
            ke
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "HSV" ? (v(), X(T, {
          key: 7,
          label: "H",
          min: 0,
          max: 360,
          modelValue: H.h,
          "onUpdate:modelValue": [
            e[19] || (e[19] = (t) => H.h = t),
            we
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "HSV" ? (v(), X(T, {
          key: 8,
          label: "S",
          min: 0,
          max: 100,
          modelValue: H.s,
          "onUpdate:modelValue": [
            e[20] || (e[20] = (t) => H.s = t),
            we
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "HSV" ? (v(), X(T, {
          key: 9,
          label: "V",
          min: 0,
          max: 100,
          modelValue: H.v,
          "onUpdate:modelValue": [
            e[21] || (e[21] = (t) => H.v = t),
            we
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "CMYK" ? (v(), X(T, {
          key: 10,
          label: "C",
          min: 0,
          max: 100,
          modelValue: z.c,
          "onUpdate:modelValue": [
            e[22] || (e[22] = (t) => z.c = t),
            pe
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "CMYK" ? (v(), X(T, {
          key: 11,
          label: "M",
          min: 0,
          max: 100,
          modelValue: z.m,
          "onUpdate:modelValue": [
            e[23] || (e[23] = (t) => z.m = t),
            pe
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "CMYK" ? (v(), X(T, {
          key: 12,
          label: "Y",
          min: 0,
          max: 100,
          modelValue: z.y,
          "onUpdate:modelValue": [
            e[24] || (e[24] = (t) => z.y = t),
            pe
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        N.value == "CMYK" ? (v(), X(T, {
          key: 13,
          label: "K",
          min: 0,
          max: 100,
          modelValue: z.k,
          "onUpdate:modelValue": [
            e[25] || (e[25] = (t) => z.k = t),
            pe
          ]
        }, null, 8, ["modelValue"])) : V("", !0),
        n.showAlpha ? (v(), X(T, {
          key: 14,
          label: "A",
          min: 0,
          max: 100,
          style: { "margin-right": "2px" },
          modelValue: a.value.find((t) => t.select == !0).a,
          "onUpdate:modelValue": [
            e[26] || (e[26] = (t) => a.value.find((u) => u.select == !0).a = t),
            e[27] || (e[27] = (t) => de(t, "a"))
          ]
        }, null, 8, ["modelValue"])) : V("", !0)
      ])) : V("", !0),
      n.showColorList ? (v(), X(Kl, {
        key: 2,
        "color-list-count": n.colorListCount,
        "hex-val": A.value,
        onColorItemClick: _e,
        iconClasses: n.iconClasses,
        title: n.local.colorPalette
      }, null, 8, ["color-list-count", "hex-val", "iconClasses", "title"])) : V("", !0),
      n.showButtons ? (v(), $("div", sn, [
        g("button", {
          class: "ck-cp-buttons__button ck-cp-buttons__button--save",
          type: "button",
          onClick: lt
        }, Y(n.local.btnSaveLabel), 1),
        g("button", {
          class: "ck-cp-buttons__button ck-cp-buttons__button--cancel",
          type: "button",
          onClick: nt
        }, Y(n.local.btnCancelLabel), 1)
      ])) : V("", !0)
    ], 10, jl));
  }
});
export {
  un as Vue3ColorPicker
};
