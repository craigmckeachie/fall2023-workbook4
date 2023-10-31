//Dave
function parsePartCode(partCode) {
  return {
    supplierCode: getSupplierCode(partCode),
    productNumber: getProductNumber(partCode),
    size: getSize(partCode),
  };
}

//Kevin
function getSupplierCode(partCode) {
  const positionOfColon = partCode.indexOf(":");
  return partCode.substring(0, positionOfColon);
}

//Bob
function getProductNumber(partCode) {
  const positionOfColon = partCode.indexOf(":");
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfColon + 1, positionOfHyphen);
}

//Phil
function getSize(partCode) {
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfHyphen + 1);
}

let partCode1 = "XYZ:1234-L";
//Gru
let part1 = parsePartCode(partCode1);
console.log(part1);
console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);
