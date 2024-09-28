// 点击下一步按钮
export const clickButton = async (page, button, source = "") => {
  const { containerSelector } = button;
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

// 设置输入框的值
export const setInputValue = async (page, inputId, value) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await page.evaluate(
    (inputId, value) => {
      const containerSelector = `[id^='rc-id-'][id$='-${inputId}']`;
      const $inputElement = $(containerSelector);

      if ($inputElement.length === 0) {
        console.error(`${inputId} 未找到`);
        return false;
      }
      // 设置输入框的值并触发输入事件
      $inputElement.val(value).trigger("input");
      return true;
    },
    inputId,
    value
  );
};
