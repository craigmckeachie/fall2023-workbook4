//EXERCISE 3: pg. 52 or 2-16
// supplierCode:productNumber-size
// ACME:123-L the large (L) part 123 is supplied by ACME
// DI:12345-M the medium (M) part 12345 is supplied by DI
// ACE:1-12 the size 12 part 1 is supplied by ACE

function getSupplierCode(partCode) {
  const positionOfColon = partCode.indexOf(":");
  return partCode.substring(0, positionOfColon);
}

const partCode1 = "ACME:123-L";
const partCode2 = "DI:12345-M";
const partCode3 = "ACE:1-12";

console.log(getSupplierCode(partCode1));
console.log(getSupplierCode(partCode2));
console.log(getSupplierCode(partCode3));

function getProductNumber(partCode) {
  const positionOfColon = partCode.indexOf(":");
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfColon + 1, positionOfHyphen);
}

console.log(getProductNumber(partCode1));
console.log(getProductNumber(partCode2));
console.log(getProductNumber(partCode3));

function getSize(partCode) {
  const positionOfHyphen = partCode.indexOf("-");
  return partCode.substring(positionOfHyphen + 1);
}

console.log(getSize(partCode1));
console.log(getSize(partCode2));
console.log(getSize(partCode3));
