'use strict';

function printReceipt(inputs) {
  let obj = objectConversionforMergeRepeat(inputs);
  console.log(createReceipt(obj));
}
//用于合并的对象转换
function objectConversionforMergeRepeat(inputs){
  let obj = {};
  inputs.forEach(item => {
    obj[item] = item in obj ? ++obj[item] : 1;
  });
  return obj;
}
function createReceipt(obj){
  let output = `***<没钱赚商店>收据***\n`;
  let items = loadAllItems();
  let total = 0;
  for (var pro in obj) {
    for (let i = 0; i < items.length; ++i) {
      if (items[i].barcode == pro) {
        total += obj[pro] * items[i].price;
        output += `名称：${items[i].name}，数量：${obj[pro]}${items[i].unit}，单价：${items[i].price.toFixed(2)}(元)，小计：${(obj[pro] * items[i].price).toFixed(2)}(元)\n`
        break;
      }
    }
  }
  output += `----------------------\n总计：${total.toFixed(2)}(元)\n**********************`
  return output;
}