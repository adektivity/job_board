import { Routes, Route } from "react-router-dom";

import { ProvideContext } from "./context/ProvideContext";
import Navbar from "./components/Navbar";
import Login from "./routes/auth/Login";
import SignUp from "./routes/auth/SignUp";
import FindJobs from "./routes/app/Job/FindJobs";
import FindTalents from "./routes/app/Talent/FindTalents";
import Feed from "./routes/app/feed/Feed";
import LandingPage from "./routes/LandingPage";
import OnboardUser from "./routes/app/onboarding/OnboardUser";
// import MultiStepForm from "./components/MultiStepForm";
import Profile from "./routes/app/profile/Profile";
import Overview from "./routes/app/profile/subroutes/Overview";
import Portfolio from "./routes/app/profile/subroutes/Portfolio";
import Services from "./routes/app/profile/subroutes/Services";
import Experience from "./routes/app/profile/subroutes/Experience";
import Education from "./routes/app/profile/subroutes/Education";
import Reviews from "./routes/app/profile/subroutes/Reviews";

const App = () => {
  return (
    <>
      <ProvideContext>
        <Navbar />
        <main className="mt-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/jobs" element={<FindJobs />} />
            <Route path="/talents" element={<FindTalents />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/onboarding" element={<OnboardUser />} />
            <Route path="/profile" element={<Profile />}>
              <Route index path="overview" element={<Overview />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="services" element={<Services />} />
              <Route path="experience" element={<Experience />} />
              <Route path="education" element={<Education />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
          {/* <MultiStepForm /> */}
        </main>
      </ProvideContext>
    </>
  );
};

export default App;
