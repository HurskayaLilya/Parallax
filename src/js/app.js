let page = document.querySelector('.page');

window.addEventListener('scroll', function (event) {
  let s = window.scrollY; // прокрученные пиксили
  let w = window.innerWidth; // ширина окна 
  let h = page.querySelector('.content').clientHeight;//высота контентной части
  let h_b = page.querySelector('.parallax').clientHeight;//высота верхнего блока
  let p = s / h * 100; //  вычесляем в % высоту прокрученой части
  let p_b = s / h_b * 100; //  вычесляем в % высоту прокрученой верхней части
  let o = 1 - 1 / 100 * p_b;// вычесляем будущую непрозрачность

  let z_1 = 1 + (w / 10000 * p_b);
  page.querySelector('.parallax__fog').style.transform = 'scale(' + z_1 + ')';//приближение тумана
  page.querySelector('.parallax__fog').style.opacity = o;//прозрачность тумана

  let z_2 = 1 + (w / 5000000 * p);
  page.querySelector('.parallax__montain_1').style.transform = 'scale(' + z_2 + ')';//увеличение заднего фона гор

  let hr = w / 2000 * p_b;
  let z_3 = 1 + (w * 0.000005 * p_b);
  page.querySelector('.parallax__montain_2').style.transform = 'translate3d(' + hr + 'px, 0,0) scale(' + z_3 + ')';

  let hr_2 = w / 1500 * p_b;
  let z_4 = 1 + (w * 0.00001 * p_b);
  page.querySelector('.parallax__montain_3').style.transform = 'translate3d(' + hr_2 + 'px, 0,0) scale(' + z_4 + ')';

});