import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { path: '/', label: 'Overview' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isHome = pathname === '/';

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
        setScrolled((current) => {
          const next = window.scrollY > 12;
          return current === next ? current : next;
        });
        progressRef.current?.style.setProperty('transform', `scaleX(${progress})`);
        frame = 0;
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    let focusFrame = 0;
    let focusAttempts = 0;
    const focusFirstLink = () => {
      const firstLink = document.querySelector<HTMLAnchorElement>('#mobile-navigation a');
      if (!firstLink) return;
      if (window.getComputedStyle(firstLink).visibility === 'visible') {
        firstLink.focus();
      } else if (focusAttempts < 15) {
        focusAttempts += 1;
        focusFrame = window.requestAnimationFrame(focusFirstLink);
      }
    };
    focusFrame = window.requestAnimationFrame(focusFirstLink);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className={`site-header ${isHome ? 'site-header--home' : ''} ${scrolled || !isHome || menuOpen ? 'site-header--solid' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}>
      <span ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <nav className="page-shell nav-bar" aria-label="Primary navigation">
        <NavLink to="/" className="wordmark" aria-label="Saisrujan Mishra home" onClick={closeMenu}>
          Saisrujan Mishra
        </NavLink>

        <div id="mobile-navigation" className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <a className="nav-cta" href="mailto:saisrujanmishra@gmail.com" onClick={closeMenu}>Email me</a>
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <button
            ref={menuButtonRef}
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
