import puppeteer from "puppeteer";

export const launchBrowser = async () => {
  return await puppeteer.launch({
    headless: false, // 显示浏览器界面
    userDataDir: "./user_data", // 指定用户数据目录，持久化数据
  });
};

// 点击下一步按钮
export const clickNextStepButton = async (
  page,
  nextStepButton,
  source = ""
) => {
  const { containerSelector } = nextStepButton;
  await page.waitForSelector(containerSelector, { timeout: 10000 });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await page.evaluate((containerSelector) => {
    const button = document.querySelector(containerSelector);
    if (!button) {
      console.error(`${buttonSelector} 未找到-${source}`);
      return false;
    }
    button.click();
    return true;
  }, containerSelector);
};

export const setInputValue = async (page, inputSelector, value) => {
  console.log(`设置输入框"${inputSelector}"的值为"${value}"`);
  await page.waitForSelector(containerSelector, { timeout: 10000 });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await page.evaluate(
    (inputSelector, value) => {
      const $inputElement = $(inputSelector);

      if ($inputElement.length === 0) {
        console.error(`${inputSelector} 未找到`);
        return false;
      }

      // 设置输入框的值并触发输入事件
      $inputElement.val(value).trigger("input");
      return true;
    },
    inputSelector,
    value
  );
};
