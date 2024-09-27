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
      containerSelector:
        "#js-pageframe > div.shop-pageframe__container > div.ware-shop-new-publish-product.app-container > div.content-box > div.content > div > div.rcd-scrollbar__wrap.rcd-scrollbar__wrap--hidden-default > div > form > div > div.adv-header-container.anchor-point.anchor-point-b9e6fc56-ba56-4e50-855f-971e17f73121 > div.content.one-level > div.adv-header-container.anchor-point.anchor-point-1fa7cab9-aff7-4616-813f-822d7dce2f1d.level-two > div.content > div.shop-title__has-input-pre.shop-title.anchor-point.anchor-point-677769cc-1515-4d1a-823b-f5df96899b3c > div > div.rcd-form-item.is-required > div.rcd-form-item__content > div > div > div > div > div.rcd-input__wrapper",
      targetText: "商品标题",
    },
  },
};
