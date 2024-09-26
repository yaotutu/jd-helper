import puppeteer from "puppeteer";
import { taskData } from "./taskData.js";
console.log(taskData, "taskData");
const { targetPage, jqueryUrl } = taskData.staticData;
export const setupBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false, // 显示浏览器界面
    userDataDir: "./user_data", // 指定用户数据目录，持久化数据
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 768 });

  await page.goto(targetPage);
  await page.addScriptTag({ url: jqueryUrl });

  return { browser, page };
};
