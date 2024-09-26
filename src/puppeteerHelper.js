import puppeteer from "puppeteer";

export const launchBrowser = async () => {
  return await puppeteer.launch({
    headless: false, // 显示浏览器界面
    userDataDir: "./user_data", // 指定用户数据目录，持久化数据
  });
};

export const clickCategoryItem = async (
  page,
  containerSelector,
  targetText
) => {
  console.log(`点击包含"${targetText}" 的 .vc-category-column__item`);
  return await page.evaluate(
    (containerSelector, targetText) => {
      const $targetContainer = $(containerSelector);

      if ($targetContainer.length === 0) {
        console.error(`${containerSelector} 未找到`);
        return false;
      }

      let found = false;
      $targetContainer.find(".vc-category-column__item").each(function () {
        const $itemName = $(this).find(".vc-category-column__name");
        if ($itemName.text().trim() === targetText) {
          $(this).click();
          found = true;
          return false; // 停止继续遍历
        }
      });

      return found;
    },
    containerSelector,
    targetText
  );
};

export const waitForAndClickCategory = async (page, category) => {
  await page.waitForSelector(category.containerSelector, { timeout: 10000 });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const clicked = await clickCategoryItem(
    page,
    category.containerSelector,
    category.targetText
  );
  if (clicked) {
    console.log(
      `已成功点击包含"${category.targetText}" 的 .vc-category-column__item`
    );
  } else {
    console.log(
      `未找到包含 "${category.targetText}" 的 .vc-category-column__item`
    );
  }
};

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
