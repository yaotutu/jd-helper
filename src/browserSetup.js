import puppeteer from "puppeteer";
import { taskData } from "./taskData.js";
const { targetPage } = taskData.staticData;
/**
 * 设置浏览器并返回浏览器和页面对象
 *
 * @async
 * @function setupBrowser
 * @returns {Promise<{browser: import('puppeteer').Browser, page: import('puppeteer').Page}>} 返回包含浏览器和页面对象的Promise
 *
 * @description
 * 该函数使用Puppeteer启动一个浏览器实例，并打开一个新的页面。浏览器界面是可见的，并且用户数据会被持久化到指定目录。
 * 页面视口被设置为1280x768，并导航到目标页面。最后，页面上会添加一个指定URL的jQuery脚本标签。
 */
export const setupBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false, // 显示浏览器界面
    userDataDir: "./user_data", // 指定用户数据目录，持久化数据
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 768 });
  await page.goto(targetPage);
  return { browser, page };
};
