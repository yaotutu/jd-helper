import { taskData } from "./taskData.js";
import { clickButton } from "./puppeteerHelper.js";
const { stepOne } = taskData;
const { jqueryUrl } = taskData.staticData;

// 自定义 waitForSelector 函数
const waitForSelector = async (page, selector, timeout = 10000) => {
  await page.waitForSelector(selector, { timeout });
};

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
  try {
    await waitForSelector(page, category.containerSelector);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 等待一段时间以确保页面稳定
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
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

// 主函数
export const selectCategoriesAndProceed = async (page) => {
  // 注入 jQuery
  await page.addScriptTag({ url: jqueryUrl });

  const categories = [
    stepOne.firstCategory,
    stepOne.secondCategory,
    stepOne.thirdCategory,
  ];

  for (const category of categories) {
    await waitForAndClickCategory(page, category);
  }

  // 点击下一步按钮
  try {
    await clickButton(page, stepOne.nextStepButton);
    console.log("已成功点击下一步按钮");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

  // 等待页面跳转完成
  await new Promise((resolve) => setTimeout(resolve, 9000));
};
