import { Link } from "react-router-dom";
import HeadingImage from "../assets/hero/hero.png";

import Airbnb from "../assets/icons/airbnb.svg?react";
import Grammarly from "../assets/icons/grammarly.svg?react";
import Cloudflare from "../assets/icons/cloudflare.svg?react";
import Microsoft from "../assets/icons/microsoft.svg?react";
import { AiFillOpenAI } from "react-icons/ai";
import { RiPenNibFill } from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoMdCloudOutline } from "react-icons/io";
import {
  LuLandmark,
  LuHandshake,
  LuPalette,
  LuUserCog,
  LuScale,
} from "react-icons/lu";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <PartnerSection />
    </>
  );
};

export default LandingPage;

const HeroSection = () => {
  return (
    <section className="bg-linear-to-r from-[#000000] to-[#322F10]">
      <div className="container flex items-center gap-10">
        <div className="flex-none">
          <img src={HeadingImage} alt="hero image" />
        </div>
        <div className="grow-0 text-white capitalize flex flex-col justify-center gap-3 px-2 py-5">
          <div className="mb-2">
            <h1 className="text-[#297472] font-extrabold">
              Discover <span className="text-ui-accent">talent</span>. Find
              opportunities. <br /> build
              <span className="text-ui-accent"> careers</span>.
            </h1>
            <p className="mt-2 text-xl">
              Connect employers with skilled professionals. showcase your
              portfolio, get discovered, and land your next opportunity.
            </p>
          </div>
          <div className="flex gap-4 text-xl">
            <div>
              <p className="mb-2 font-extrabold">Employers</p>
              <Link
                to="/talents"
                className="py-1 px-3 bg-primary border-2 border-black rounded-lg">
                Hire Talent
              </Link>
            </div>
            <div>
              <p className="mb-2 font-extrabold">Talents</p>
              <Link
                to="/signup"
                className="py-1 px-3 bg-ui-accent text-black border-2 border-black rounded-lg">
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => (
  <section>
    <div className="container">
      {/* Trusted By */}
      <div className="bg-[#000000B2] px-20 py-5 rounded-[20px]">
        <div className="bg-secondary rounded-[10px]">
          <p className="mb-3 font-semibold text-black/50 text-center text-xl uppercase">
            Trusted by 800,000 clients
          </p>
          <div className="flex items-center justify-between p-2">
            <Airbnb />
            <Grammarly />
            <Cloudflare />
            <Microsoft />
          </div>
        </div>
      </div>
      {/* Find Talents */}
      <div className="mt-3">
        <h2 className="mb-8 capitalize font-semibold">Find talents for every type of work</h2>
        {/* Grid of Jobs */}
        <div className="grid grid-cols-5 gap-4 capitalize font-semibold text-xl">
          <div className="px-4 py-8 border rounded-[20px]">
            <LuLandmark className="icon mb-4" />
            <p>finance & accounting</p>
          </div>

          <div className="px-4 py-8 border rounded-[20px]">
            <AiFillOpenAI className="icon mb-4 text-black" />
            <p>AI services</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <LuPalette className="icon mb-4" />
            <p>design & creative</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <LuHandshake className="icon mb-4" />
            <p>sales & marketing</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <IoMdCloudOutline className="icon mb-4" />
            <p>cloud engineering</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <LuUserCog className="icon mb-4" />
            <p>admin & support</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <LuScale className="icon mb-4" />
            <p>legal</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <RiPenNibFill className="icon mb-4" />
            <p>writing</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <MdPeople className="icon mb-4" />
            <p>HR training</p>
          </div>
          <div className="px-4 py-8 border rounded-[20px]">
            <HiWrenchScrewdriver className="icon mb-4" />
            <p>engineering & architecture</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
