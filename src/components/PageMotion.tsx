import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observed = new Set<Element>();
    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          intersection.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    const observeContent = () => {
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add('reveal-ready');
        intersection.observe(element);
      });
    };

    observeContent();
    const mutations = new MutationObserver(observeContent);
    const content = document.getElementById('main-content');
    if (content) mutations.observe(content, { childList: true, subtree: true });

    return () => {
      intersection.disconnect();
      mutations.disconnect();
      observed.forEach((element) => element.classList.remove('reveal-ready'));
    };
  }, [pathname]);

  return null;
}
