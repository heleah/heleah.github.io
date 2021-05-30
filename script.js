import getInfo from './resources/lib/about';

document.getElementById('education').onclick = function () {
  getInfo('education');
};

document.getElementById('work').onclick = function () {
  getInfo('work');
};

document.getElementById('motivation').onclick = function () {
  getInfo('motivation');
};

document.getElementById('interests').onclick = function () {
  getInfo('interests');
};
