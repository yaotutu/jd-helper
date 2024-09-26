import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import run from "@rollup/plugin-run";

export default {
  input: "src/index.js", // 指定入口文件
  output: {
    file: "dist/bundle.mjs", // 输出到 dist 目录下的 bundle.mjs 文件
    format: "es", // ES模块格式
  },
  plugins: [
    resolve(),
    commonjs(),
    run({
      execArgv: [], // 传递给 Node.js 的额外参数
      args: [], // 传递给你的脚本的参数
      verbose: true, // 打印更多日志信息
      restartOnFailure: true, // 如果运行失败则重新启动
    }),
  ],
};
