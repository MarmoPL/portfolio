'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { href: '#hero', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we're on the home page
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Get home link with locale
  const homeLink = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      return; // Let the Link handle navigation
    }
    
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const getNavHref = (hash: string) => {
    if (isHomePage) {
      return hash;
    }
    // If on subpage, link to home page with hash
    return `/${locale}/${hash}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={homeLink}>
            <motion.span
              className="text-xl font-bold gradient-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Marmo
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted hover:text-foreground transition-colors relative group cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {t(link.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ) : (
                <Link key={link.key} href={getNavHref(link.href)}>
                  <motion.span
                    className="text-sm text-muted hover:text-foreground transition-colors relative group cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {t(link.key)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.span>
                </Link>
              )
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                isHomePage ? (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-2 text-muted hover:text-foreground transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {t(link.key)}
                  </motion.a>
                ) : (
                  <Link key={link.key} href={getNavHref(link.href)} onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.span
                      className="block py-2 text-muted hover:text-foreground transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      {t(link.key)}
                    </motion.span>
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
