import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  { settings: { react: { version: "detect" } } },
  {
    files: ["src/components/hero/**/*.tsx", "src/components/HeroVisual.tsx"],
    rules: {
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "attach",
            "args",
            "vertexShader",
            "fragmentShader",
            "transparent",
            "depthWrite",
            "blending",
            "geometry",
          ],
        },
      ],
    },
  },
]);
