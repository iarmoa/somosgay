import React, { useState, useEffect} from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const ScrollToTop = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);
  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Link
        href="/"
        id="back-to-top"
        className={scrolled ? "show" : ""}
        title="Back to top"
        onClick={backToTop}
        passHref
      >
        &uarr;
      </Link>
      {children}
    </>
  );
};

export default ScrollToTop;
