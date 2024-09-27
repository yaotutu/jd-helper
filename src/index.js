import { selectCategoriesAndProceed as stepOne } from "./categorySelector.js";
import { setupBrowser as initBrowser } from "./browserSetup.js";

import { filedShopInfo as stepTwo } from "./filedShopInfo.js";

const run = async () => {
  // 初始化浏览器信息
  const { browser, page } = await initBrowser();
  // 执行第一步
  await stepOne(page);
  await stepTwo(page);
  //  等待页面跳转完成
  await new Promise((resolve) => setTimeout(resolve, 9000));

  console.log("页面跳转完成");
  await new Promise((resolve) => process.stdin.once("data", resolve));
  await browser.close();
};

run().catch(console.error);
