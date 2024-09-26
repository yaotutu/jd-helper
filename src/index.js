import { selectCategoriesAndProceed } from "./categorySelector.js";
import { setupBrowser } from "./browserSetup.js";

const run = async () => {
  const { browser, page } = await setupBrowser();

  await selectCategoriesAndProceed(page);

  //  等待页面跳转完成
  await new Promise((resolve) => setTimeout(resolve, 9000));

  console.log("页面跳转完成");
  console.log("程序已暂停，然后按 Enter 继续...");
  await new Promise((resolve) => process.stdin.once("data", resolve));

  await browser.close();
};

run().catch(console.error);
