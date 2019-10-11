// https://www.codewars.com/kata/count-ip-addresses/train/javascript

function ipsBetween(start, end){
  let ip1 = start.split('.').map(n => parseInt(n)).reduce((s, b) => (s << 8) + b, 0);
  let ip2 = end.split('.').map(n => parseInt(n)).reduce((s, b) => (s << 8) + b, 0);
  return ip2 - ip1;
}