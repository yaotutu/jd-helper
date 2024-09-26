import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const isDev = process.env.NODE_ENV === "development";

export default {
  input: "src/index.js", // 指定入口文件
  output: {
    file: "dist/bundle.mjs", // 输出文件，使用 .mjs 扩展名表示这是一个 ES 模块
    format: "es", // ESM 格式
  },
  plugins: [
    resolve(), // 使 Rollup 能够找到 node_modules 中的模块
    commonjs(), // 将 CommonJS 模块转换为 ES6 以便 Rollup 处理
  ],
  watch: {
    clearScreen: false, // 不清除控制台屏幕
  },
};
