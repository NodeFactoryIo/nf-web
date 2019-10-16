import Siema from 'siema';

export default () => {
  const carouselProjects = new Siema({
    loop: true,
  });
  const prev = document.querySelector('.carousel-control.left');
  const next = document.querySelector('.carousel-control.right');

  prev.addEventListener('click', () => carouselProjects.prev(), { passive: true });
  next.addEventListener('click', () => carouselProjects.next(), { passive: true });


  const carouselTestimonials = new Siema({
    loop: true,
    selector: '.siema-testimonials',
  });
  const prevT = document.querySelector('.testimonials .carousel-control.left');
  const nextT = document.querySelector('.testimonials .carousel-control.right');

  prevT.addEventListener('click', () => carouselTestimonials.prev(), { passive: true });
  nextT.addEventListener('click', () => carouselTestimonials.next(), { passive: true });
}
