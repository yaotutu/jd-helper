import { taskData } from "./taskData.js";
const { stepTwo } = taskData;
import { setInputValue, setSelectValue } from "./puppeteerHelper.js";
const { jqueryUrl } = taskData.staticData;
async function filedShopInfo(page) {
  await page.addScriptTag({ url: jqueryUrl });

  Object.keys(stepTwo).forEach(async (key) => {
    const { type } = stepTwo[key];
    if (type === "input") {
      const { value, inputId } = stepTwo[key];
      await setInputValue(page, inputId, value);
    }
    if (type === "select") {
      const { dropdownContainerSelector, inputId, value } = stepTwo[key];

      await setSelectValue(page, inputId, dropdownContainerSelector, value);
    }
  });
}
export { filedShopInfo };
