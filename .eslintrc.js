module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        // "airbnb",
        // "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        // "prettier"
    ],
    "rules": {
      "no-extra-semi" : "warn"
    }
}
.eslintrc.js
