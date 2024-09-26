import { taskData } from "./taskData.js";
import {
  launchBrowser,
  waitForAndClickCategory,
  clickNextStepButton,
} from "./puppeteerHelper.js";

const jqueryUrl = "https://code.jquery.com/jquery-3.6.0.min.js"; // jQuery CDN 地址
const targetPage =
  "https://ware-jdm.jd.com/productLauchNew/productLauchNew?source=1";

const run = async () => {
  const browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 768 });

  await page.goto(targetPage);
  await page.addScriptTag({ url: jqueryUrl });

  await waitForAndClickCategory(page, taskData.firstCategory);
  await waitForAndClickCategory(page, taskData.secondCategory);
  await waitForAndClickCategory(page, taskData.thirdCategory);
  await clickNextStepButton(page, taskData.nextStepButton);

  console.log("程序已暂停，然后按 Enter 继续...");
  await new Promise((resolve) => process.stdin.once("data", resolve));

  const content = await page.content();
  console.log(content);

  await browser.close();
};

run().catch(console.error);
