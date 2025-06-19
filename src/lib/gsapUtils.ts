import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const setupGsapSectionAnimation = (el: Element, trigger: Element) => {
  gsap.fromTo(
    el,
    { y: 100, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      scrollTrigger: {
        trigger,
        start: 'top center',
        markers: true,
        toggleActions: 'play none none reverse',
      },
    }
  );
};