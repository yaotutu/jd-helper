export const taskData = {
  staticData: {
    targetPage:
      "https://ware-jdm.jd.com/productLauchNew/productLauchNew?source=1",
    jqueryUrl: "https://code.jquery.com/jquery-3.6.0.min.js",
  },
  stepOne: {
    firstCategory: {
      containerSelector:
        "#app > div.page-product-lauch-new > div:nth-child(1) > div.lauch-process-content-bgc.category-lauch-tabpane > div > div > div.lauch-process-content-inner.productlaunch-container > div > div.ware-components__wrap > div.vc-category-select > div > div > div > div:nth-child(1) > div:nth-child(1)",
      targetText: "家居饰品",
    },
    secondCategory: {
      containerSelector:
        "#app > div.page-product-lauch-new > div:nth-child(1) > div.lauch-process-content-bgc.category-lauch-tabpane > div > div > div.lauch-process-content-inner.productlaunch-container > div > div.ware-components__wrap > div.vc-category-select > div > div > div > div:nth-child(2)",
      targetText: "婚庆用品",
    },
    thirdCategory: {
      containerSelector:
        "#app > div.page-product-lauch-new > div:nth-child(1) > div.lauch-process-content-bgc.category-lauch-tabpane > div > div > div.lauch-process-content-inner.productlaunch-container > div > div.ware-components__wrap > div.vc-category-select > div > div > div > div:nth-child(3)",
      targetText: "彩带拉花",
    },
    nextStepButton: {
      containerSelector:
        "#app > div.page-product-lauch-new > div:nth-child(1) > div.lauch-process-content-bgc.category-lauch-tabpane > div > div > div.lauch-process-next-step > button",
      source: "下一步，完善其他商品信息",
    },
  },
  stepTwo: {
    productTitle: {
      type: "input",
      inputId: 95,
      value: "测试商品标题",
    },
  },
};
