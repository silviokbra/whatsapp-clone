import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "google"), {
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2018,
        sourceType: "commonjs",
    },

    rules: {
        "no-restricted-globals": ["error", "name", "length"],
        "prefer-arrow-callback": "error",

        quotes: ["error", "double", {
            allowTemplateLiterals: true,
        }],
    },
}, {
    files: ["**/*.spec.*"],

    languageOptions: {
        globals: {
            ...globals.mocha,
        },
    },

    rules: {},
}];