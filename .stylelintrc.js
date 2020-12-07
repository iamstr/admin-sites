module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": null,
    indentation: 2,
    "color-no-invalid-hex": true,
    "declaration-block-semicolon-newline-after": "always",

    // any other rules you'd want to change e.g.
    // "scss/dollar-variable-pattern": "/foo-.+/",
    "scss/selector-no-redundant-nesting-selector": true
  }
};
