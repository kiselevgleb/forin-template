// TODO: write your code here
import sum from './basic';

export default function sort(params, m) {
  let tempMas = params;
  let masFirst = [];
  let mas = [];
  let coin = 0;
  m.forEach(e => {
    for (const key in tempMas) {
      const element = tempMas[key];
      if (tempMas.hasOwnProperty(key)) {
        if (e == key) {
          masFirst.push({
            key: key,
            value: element
          });
          delete tempMas[key];
        } else if (coin == 1) {
          mas.push({
            key: key,
            value: element
          });
          delete tempMas[key];
        }
      }
    }
    coin++;
  });
  mas.sort(function (a, b) {
    var akey = a.key.toLowerCase(),
      bkey = b.key.toLowerCase();
    if (akey < bkey) return -1;
    if (akey > bkey) return 1;
  });
  const merged = masFirst.concat(mas);
  return merged;
}
