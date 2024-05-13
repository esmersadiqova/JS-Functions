function revereStr() {
  let str = "hello";
  let arrSplit = str.split("");
  let reverse = arrSplit.reverse();

  return reverse.join("");
}
console.log(revereStr());

