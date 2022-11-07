const width = device.width;
const height = device.height;
const times = 200;
let id = 0;
let turn = 0;
let userCount = 0;
const userList = [
  '1982575556@qq.com',
  '2080520154@qq.com',
  '229417486@qq.com',
  'whm2112017@gmail.com',
];
var password = 'whm2112017';
const sleepAndCLick = (x, y, time) => {
  if (!time) time = 2;
  sleep(time * 1000);
  click(x, y);
};
const word2Number = () => sleepAndCLick(183, 1830);
const number2Word = () => sleepAndCLick(299, 1804);
const downKeyBoard = () => sleepAndCLick(994, 1148);
const keyEnum = {
  1: () => sleepAndCLick(309, 1318),
  2: () => sleepAndCLick(531, 1318),
  3: () => sleepAndCLick(780, 1318),

  4: () => sleepAndCLick(309, 1478),
  5: () => sleepAndCLick(531, 1478),
  6: () => sleepAndCLick(780, 1478),

  7: () => sleepAndCLick(309, 1632),
  8: () => sleepAndCLick(531, 1632),
  9: () => sleepAndCLick(780, 1632),

  0: () => sleepAndCLick(531, 1807),

  '@': () => sleepAndCLick(382, 1834),
  q: () => sleepAndCLick(65, 1324),
  w: () => sleepAndCLick(170, 1328),
  h: () => sleepAndCLick(648, 1479),
  '.': () => sleepAndCLick(690, 1834),
  c: () => sleepAndCLick(429, 1671),
  o: () => sleepAndCLick(908, 1320),
  m: () => sleepAndCLick(865, 1655),
};
const keyPassword = (numList, cur) => {
  const length = numList.length - 1;
  const curkey = numList[cur];
  if (cur === 3) word2Number();
  if (cur <= length) {
    keyEnum[curkey]();
    keyPassword(numList, cur + 1);
  } else {
    return;
  }
};
const emaliKeys = (numList, cur) => {
  const length = numList.length - 1;
  const curkey = numList[cur];
  if (curkey === '@') number2Word();
  if (cur <= length) {
    keyEnum[curkey]();
    emaliKeys(numList, cur + 1);
  } else {
    return;
  }
};
const down2up = () => {
  swipe(500, (height / 5) * 4, 500, (height / 5) * 1, 500);
};

const main = () => {
  down2up();
  id++;
  sleep(10 * 1000);
  if (times === id) {
    turn++;
    if (userCount === userList.length - 1) userCount = 0;
    id = 0;
    changeUser();
  } else main();
  console.log(turn);
};

const exitUser = () => {
  sleepAndCLick(949, 1840, 0);
  sleepAndCLick(992, 130, 5);
  sleepAndCLick(412, 1840);
  sleepAndCLick(511, 1380);
  sleepAndCLick(547, 1763, 5);
};
const login = () => {
  sleepAndCLick(774, 709, 0);
  sleepAndCLick(774, 709, 0);
  sleepAndCLick(774, 709, 0);
  sleepAndCLick(497, 966);
  word2Number();
  emaliKeys(userList[userCount].split(''), 0);
  userCount++;
  downKeyBoard();
  sleepAndCLick(335, 1171);
  keyPassword(password.split(''), 0);
  downKeyBoard();
  sleepAndCLick(331, 1721);
  sleepAndCLick(544, 1403);
};
const changeUser = () => {
  exitUser();
  sleep(5 * 1000);
  login();
  sleep(10 * 1000);
  main();
};
main();
// changeUser()
// login();
