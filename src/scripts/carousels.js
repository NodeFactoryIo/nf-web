import Siema from 'siema';

export default () => {
  const carouselTestimonials = new Siema({
    loop: true,
    selector: '.siema-testimonials',
  });
  const prevT = document.querySelector('.testimonials .carousel-control.left');
  const nextT = document.querySelector('.testimonials .carousel-control.right');

  prevT.addEventListener('click', () => carouselTestimonials.prev(), { passive: true });
  nextT.addEventListener('click', () => carouselTestimonials.next(), { passive: true });
}
