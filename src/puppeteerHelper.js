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

export const setSelectValue = async (
  page,
  inputId,
  dropdownContainerSelector,
  value = "无品牌"
) => {
  // 等待2秒，确保页面加载完成或其他必要的操作
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return await page.evaluate(
    (inputId, dropdownContainerSelector, value) => {
      const containerSelector = `[id^='rc-id-'][id$='-${inputId}']`;
      const $inputElement = $(containerSelector);

      if ($inputElement.length === 0) {
        console.error(`${inputId} 未找到`);
        return false;
      }

      // 触发点击事件，打开下拉菜单
      $inputElement.click();

      // 使用动态的选择器
      const dynamicDropdownContainerSelector =
        dropdownContainerSelector.replace(
          /#rc-popper-container-\d+/g,
          '[id^="rc-popper-container-"]'
        );
      const $dropdownContainer = $(dynamicDropdownContainerSelector);
      console.log(
        dynamicDropdownContainerSelector,
        "dynamicDropdownContainerSelector"
      );

      // 等待两秒, 等待下拉菜单加载完成
      return new Promise((resolve) => {
        setTimeout(() => {
          // 选择特定值的 li 元素
          if (value) {
            const $targetLi = $dropdownContainer.find("li").filter(function () {
              const spans = $(this).find("span");
              console.log(spans, "spans");
              for (let i = 0; i < spans.length; i++) {
                console.log($(spans[i]).text().trim(), "spans[i]");
                if ($(spans[i]).text().trim().includes(value)) {
                  return true;
                }
              }
              return false;
            });
            console.log($targetLi, "$targetLi");
            if ($targetLi.length > 0) {
              // 选择找到的 li 元素
              $targetLi.first().click();
            } else {
              console.error(`${value} 未找到, 选择第一个`);
              $dropdownContainer.find("li").first().click();
            }
          } else {
            // 如果没有指定值，选择第一个选项
            $dropdownContainer.find("li").first().click();
          }

          resolve(true); // 在选择完选项后解析 Promise
        }, 2000);
      });
    },
    inputId,
    dropdownContainerSelector,
    value
  );
};
