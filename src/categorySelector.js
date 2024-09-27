import { taskData } from "./taskData.js";
import { clickButton } from "./puppeteerHelper.js";
const { stepOne } = taskData;

// 点击商品类目
const clickCategoryItem = async (page, containerSelector, targetText) => {
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

// 等待并点击商品类目
const waitForAndClickCategory = async (page, category) => {
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

export const selectCategoriesAndProceed = async (page) => {
  await waitForAndClickCategory(page, stepOne.firstCategory);
  await waitForAndClickCategory(page, stepOne.secondCategory);
  await waitForAndClickCategory(page, stepOne.thirdCategory);
  await clickButton(page, stepOne.nextStepButton);

  // 等待页面跳转完成
  await new Promise((resolve) => setTimeout(resolve, 9000));
  console.log("页面跳转完成");
};
