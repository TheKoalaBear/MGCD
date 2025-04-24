import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import framer-motion
import HomePage from "./pages/HomePage"; // Import the HomePage component
import AboutPage from "./pages/AboutPage"; // Added import
import ResumePage from "./pages/ResumePage"; // Added import
import PortfolioPage from "./pages/PortfolioPage"; // Added import
import ContactsPage from "./pages/ContactsPage"; // Added import
import "./App.css";
import Navbar from "./components/Navbar"; // Added import

// Define Flicker Animation Variants
const glitchColor = "#f100e5"; // Magenta for potential flash

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98, // Start slightly scaled down
  },
  in: {
    opacity: 1,
    scale: 1, // Scale in cleanly
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  out: {
    // Opacity will flicker via keyframes
    // We can add other subtle effects here if desired
    scale: 0.98, // Optional: scale down slightly during flicker
    // filter: 'brightness(1.5)', // Optional: brief flash of brightness
    transition: {
      duration: 0.4, // Duration of the flicker effect
      ease: "easeInOut",
      // Keyframes for flickering opacity
      opacity: [1, 0.3, 0.9, 0.1, 0.7, 0.2, 0],
      // Optional: Flicker background color slightly
      backgroundColor: [
        `rgba(0,0,0,0)`,
        `rgba(241, 0, 229, 0.1)`,
        `rgba(0,0,0,0)`,
        `rgba(241, 0, 229, 0.05)`,
        `rgba(0,0,0,0)`,
      ],
      // Optional: Flicker scale subtly
      scale: [null, 1.01, 0.99, 1.02, 0.98, 1],
    },
  },
};

function AppContent() {
  const location = useLocation(); // Get location for AnimatePresence key

  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* Wait for exit animation before starting enter */}
      <Routes location={location} key={location.pathname}>
        {" "}
        {/* Pass location and key */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/resume"
          element={
            <PageWrapper>
              <ResumePage />
            </PageWrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              <PortfolioPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contacts"
          element={
            <PageWrapper>
              <ContactsPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Wrapper component to apply motion
const PageWrapper = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="in" exit="out">
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <Navbar />
      {/* Render AppContent which handles transitions */}
      <AppContent />
    </Router>
  );
}

export default App;
