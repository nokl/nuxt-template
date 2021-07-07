/** @type {import('@types/stylelint').Configuration} */
const config = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss'],
    // https://stylelint.io/user-guide/configuration
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
    },
};
module.exports = config;
