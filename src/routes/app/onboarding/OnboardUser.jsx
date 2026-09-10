import { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "../../auth/schema";

import UserDetails from "./forms/UserDetails";
import UserProfile from "./forms/UserProfile";
import UserPosition from "./forms/UserPosition";
import UserSkills from "./forms/UserSkills";
import UserEducation from "./forms/UserEducation";
import UserExperience from "./forms/UserExperience";

import {
  LuNetwork,
  LuContact,
  LuUser,
  LuWrench,
  LuGraduationCap,
  LuBriefcaseBusiness,
  LuBuilding2,
} from "react-icons/lu";

const OnboardUser = () => {
  // onboarding steps
  const [formStep, setFormStep] = useState(1);

  const steps = [
    { id: "details", title: "details", icon: <LuContact className="icon" /> },
    { id: "profile", title: "profile", icon: <LuUser className="icon" /> },
    { id: "role", title: "current role", icon: <LuNetwork className="icon" /> },
    {
      id: "experience",
      title: "experience",
      icon: <LuBuilding2 className="icon" />,
    },
    {
      id: "education",
      title: "education",
      icon: <LuGraduationCap className="icon" />,
    },
    { id: "skill", title: "skills", icon: <LuWrench className="icon" /> },
  ];
  const totalStep = 6;

  // Onboarding schema
  const onBoardingSchema = schema.pick({
    fullname: true,
    email: true,
    username: true,
    profession: true,
    location: true,
    about: true,
    terms: true,
    profileImage: true,
    currentPosition: true,
    experience: true,
    education: true,
    skills: true,
  });

  // Form default values
  const formDefaultValues = {
    fullname: "",
    email: "",
    username: "",
    profession: "",
    location: "",
    about: "",
    terms: false,
    profileImage: undefined,
    currentPosition: { title: "", company: "", startDate: "", location: "" },
    experience: [],
    education: [],
    skills: [],
  };

  // useform
  const methods = useForm({
    resolver: zodResolver(onBoardingSchema),
    defaultValues: formDefaultValues,
  });

  // Form navigation
  // Prev form
  const handlePrev = () => {
    if (formStep > 1) setFormStep((prev) => prev - 1);
  };
  // Next form
  const handleNext = async () => {
    // Validate current steps
    let fieldsToValidate = [];
    if (formStep === 1)
      fieldsToValidate = ["fullname", "email", "username", "terms"];
    if (formStep === 2)
      fieldsToValidate = ["profession", "location", "about", "profileImage"];
    if (formStep === 3)
      fieldsToValidate = [
        "currentPosition.title",
        "currentPosition.company",
        "currentPosition.startDate",
        "currentPosition.location",
      ];
    if (formStep === 4) fieldsToValidate = ["experience"];
    if (formStep === 5) fieldsToValidate = ["education"];
    if (formStep === totalStep) fieldsToValidate = ["skills"];
    // Validate before moving forward
    const isValid = await methods.trigger(fieldsToValidate);

    if (isValid && formStep < totalStep) setFormStep((prev) => prev + 1);
  };

  // form submission and error
  const onSubmit = (data) => console.log(data);
  const onError = (data) => console.log(data);

  return (
    <section>
      <div className="container">
        <div className="onboarding">
          <ol className="p-6 flex items-center w-full mb-3 capitalize">
            {steps.map((step, index) => {
              const isActive = index === formStep - 1;
              const isCompleted = index < formStep - 1;
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.id}
                  className={`flex items-center w-full ${
                    !isLast
                      ? `after:content-[''] after:w-full after:h-0.5 after:inline-block after:mx-2 after:rounded-full ${
                          isCompleted ? "after:bg-primary" : "after:bg-gray-200"
                        }`
                      : ""
                  }`}>
                  <div
                    className={`flex items-center justify-center rounded-full w-10 h-10 shrink-0 ${
                      isActive || isCompleted
                        ? "bg-primary text-white"
                        : "border border-gray-300 text-gray-400"
                    }`}>
                    {step.icon}
                  </div>
                </li>
              );
            })}
          </ol>
          <FormProvider {...methods}>
            <form
              action=""
              className="flex flex-col justify-center gap-6"
              onSubmit={methods.handleSubmit(onSubmit, onError)}>
              {/* Form Children */}
              <div className="p-12">
                {formStep === 1 && <UserDetails />}
                {formStep === 2 && <UserProfile />}
                {formStep === 3 && <UserPosition />}
                {formStep === 4 && <UserExperience />}
                {formStep === 5 && <UserEducation />}
                {formStep === totalStep && <UserSkills />}
              </div>
              {/* Form Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  className="prevBtn disabled:opacity-40"
                  disabled={formStep === 1}
                  onClick={handlePrev}
                  type="button">
                  Back
                </button>
                {formStep === totalStep ? (
                  <button type="submit" className="nextBtn">
                    Submit
                  </button>
                ) : (
                  <button
                    className="nextBtn"
                    type="button"
                    onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default OnboardUser;
