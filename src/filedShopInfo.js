import { taskData } from "./taskData.js";
const { stepTwo } = taskData;
import { setInputValue } from "./puppeteerHelper.js";
const { jqueryUrl } = taskData.staticData;
async function filedShopInfo(page) {
  await page.addScriptTag({ url: jqueryUrl });

  Object.keys(stepTwo).forEach(async (key) => {
    const { value, type, inputId } = stepTwo[key];
    if (type === "input") {
      setInputValue(page, inputId, value);
    }
  });
}
export { filedShopInfo };
