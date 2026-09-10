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
import MultiStepForm from "./components/MultiStepForm";
import Profile from "./routes/app/profile/Profile";

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
            <Route path="/profile" element={<Profile />} />
          </Routes>
          {/* <MultiStepForm /> */}
        </main>
      </ProvideContext>
    </>
  );
};

export default App;
