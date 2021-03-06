/**
 * The Function add scroll-button in a bottom of the gallery
 */
export default function arrowTop() {
  const arrowTopRef = document.querySelector("[data-index='arrowTop']");
  const markup = `<i class="material-icons">keyboard_arrow_up</i>`;
  arrowTopRef.insertAdjacentHTML('beforeend', markup);
  arrowTopRef.addEventListener('click', () => {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  });

  window.addEventListener('scroll', () => {
    pageYOffset < document.documentElement.clientHeight
      ? arrowTopRef.classList.remove('show')
      : arrowTopRef.classList.add('show');
  });
}
