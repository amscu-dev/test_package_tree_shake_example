import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

const packageJson = require("./package.json");

const external = [...Object.keys(packageJson.peerDependencies || {})];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.cjs",
      format: "cjs",
      exports: "named",
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      exports: "named",
    },
  ],
  plugins: [
    del({ targets: ["lib/*"] }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  onwarn: (warning, warn) => {
    if (warning.message.includes(`use client`)) {
      return;
    }
    warn(warning);
  },
  external,
};
