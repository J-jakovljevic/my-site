import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import ScrollProgress from "@components/ScrollProgress";
import { useScrollToTop } from "@hooks/useScrollToTop";

const Layout = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <>
      <ScrollProgress />

      <Nav />

      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
