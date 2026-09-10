// Requires: react-hook-form, zod, @hookform/resolvers
//   npm install react-hook-form zod @hookform/resolvers

import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const schema = z.object({
  fullname: z.string().min(3, "Provide your fullname"),
  email: z.string().email("Provide a valid email"),
  password: z.string().min(8, "Password requires at least 8 characters"),
  terms: z.boolean().refine((data) => data === true, {
    message: "Agree to our terms and conditions",
  }),
  profession: z.string().min(1, "please provide your profession"),
  location: z.string().min(3, "Provide your location"),
  about: z
    .string()
    .min(8, "Tell us about yourself")
    .max(400, "You have hit the word limit"),
  profileImage: z
    .instanceof(File, { message: "Unsupported file type" })
    .refine((file) => file.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only .jpg, .png, and .webp files are supported",
    )
    .optional(),
  currentPosition: z.object({
    title: z.string().min(3, "Job title is required"),
    company: z.string().min(1, "Company is required"),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, "Must be YYYY-MM"),
    location: z.string().min(1, "Provide job location"),
  }),
  experience: z
    .array(
      z.object({
        title: z.string().min(1, "Provide job title"),
        company: z.string().min(1, "Provide name of employer"),
        startDate: z
          .string()
          .regex(/^\d{4}-\d{2}$/, "Please provide start date"),
        endDate: z.string().min(1, "End date or 'Present' is required"),
        description: z.string().optional(),
      }),
    )
    .default([]),
  education: z
    .array(
      z.object({
        school: z.string().min(1, "School is required"),
        degree: z.string().min(1, "Degree is required"),
        startYear: z.number().int().min(1900),
        endYear: z.number().int().max(2040),
      }),
    )
    .default([]),
  skills: z.array(z.string().min(1)).min(1, "At least one skill is required"),
});

const defaultValues = {
  fullname: "",
  email: "",
  password: "",
  terms: false,
  profession: "",
  location: "",
  about: "",
  profileImage: undefined,
  currentPosition: { title: "", company: "", startDate: "", location: "" },
  experience: [],
  education: [],
  skills: [],
};

const steps = [
  {
    id: "account",
    title: "Account",
    fields: ["fullname", "email", "password", "terms"],
  },
  {
    id: "profile",
    title: "Profile",
    fields: ["profession", "location", "about", "profileImage"],
  },
  {
    id: "position",
    title: "Current position",
    fields: [
      "currentPosition.title",
      "currentPosition.company",
      "currentPosition.startDate",
      "currentPosition.location",
    ],
  },
  { id: "experience", title: "Experience", fields: ["experience"] },
  { id: "education", title: "Education", fields: ["education"] },
  { id: "skills", title: "Skills", fields: ["skills"] },
];

const inputClasses =
  "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
const btnPrimary =
  "px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700";
const btnSecondary =
  "px-4 py-2 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50";

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  const {
    register,
    control,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const experienceArray = useFieldArray({ control, name: "experience" });
  const educationArray = useFieldArray({ control, name: "education" });
  const skills = watch("skills");

  const isLastStep = currentStep === steps.length - 1;

  async function goNext() {
    const valid = await trigger(steps[currentStep].fields);
    if (valid) setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function goBack() {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  function addSkill() {
    const value = skillInput.trim();
    if (!value || skills.includes(value)) {
      setSkillInput("");
      return;
    }
    setValue("skills", [...skills, value], { shouldValidate: true });
    setSkillInput("");
  }

  function removeSkill(index) {
    setValue(
      "skills",
      skills.filter((_, i) => i !== index),
      { shouldValidate: true },
    );
  }

  function onSubmit(data) {
    console.log("Form data:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Profile submitted</h2>
        <p className="text-gray-600">
          Check the console for the parsed form data.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <ol className="flex  mb-8 text-sm">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={`flex-1 text-center pb-2 border-b-2 ${
              index === currentStep
                ? "border-blue-600 text-blue-600 font-medium"
                : index < currentStep
                  ? "border-blue-300 text-blue-400"
                  : "border-gray-200 text-gray-400"
            }`}
          >
            {step.title}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {currentStep === 0 && (
          <div className="space-y-4">
            <Field label="Full name" error={errors.fullname?.message}>
              <input {...register("fullname")} className={inputClasses} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                className={inputClasses}
              />
            </Field>
            <Field label="Password" error={errors.password?.message}>
              <input
                type="password"
                {...register("password")}
                className={inputClasses}
              />
            </Field>
            <div>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" {...register("terms")} />
                I agree to the terms and conditions
              </label>
              {errors.terms && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.terms.message}
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <Field label="Profession" error={errors.profession?.message}>
              <input {...register("profession")} className={inputClasses} />
            </Field>
            <Field label="Location" error={errors.location?.message}>
              <input {...register("location")} className={inputClasses} />
            </Field>
            <Field label="About" error={errors.about?.message}>
              <textarea
                rows={4}
                {...register("about")}
                className={inputClasses}
              />
            </Field>
            <Controller
              control={control}
              name="profileImage"
              render={({ field: { onChange, ref, name } }) => (
                <Field
                  label="Profile image"
                  error={errors.profileImage?.message}
                >
                  <input
                    type="file"
                    accept={ACCEPTED_FILE_TYPES.join(",")}
                    name={name}
                    ref={ref}
                    onChange={(e) => onChange(e.target.files?.[0])}
                    className={inputClasses}
                  />
                </Field>
              )}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <Field
              label="Job title"
              error={errors.currentPosition?.title?.message}
            >
              <input
                {...register("currentPosition.title")}
                className={inputClasses}
              />
            </Field>
            <Field
              label="Company"
              error={errors.currentPosition?.company?.message}
            >
              <input
                {...register("currentPosition.company")}
                className={inputClasses}
              />
            </Field>
            <Field
              label="Start date (YYYY-MM)"
              error={errors.currentPosition?.startDate?.message}
            >
              <input
                placeholder="2024-01"
                {...register("currentPosition.startDate")}
                className={inputClasses}
              />
            </Field>
            <Field
              label="Location"
              error={errors.currentPosition?.location?.message}
            >
              <input
                {...register("currentPosition.location")}
                className={inputClasses}
              />
            </Field>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            {experienceArray.fields.length === 0 && (
              <p className="text-sm text-gray-500">
                No previous experience added yet.
              </p>
            )}
            {experienceArray.fields.map((field, index) => (
              <div key={field.id} className="border rounded p-4 space-y-3">
                <Field
                  label="Job title"
                  error={errors.experience?.[index]?.title?.message}
                >
                  <input
                    {...register(`experience.${index}.title`)}
                    className={inputClasses}
                  />
                </Field>
                <Field
                  label="Company"
                  error={errors.experience?.[index]?.company?.message}
                >
                  <input
                    {...register(`experience.${index}.company`)}
                    className={inputClasses}
                  />
                </Field>
                <Field
                  label="Start date (YYYY-MM)"
                  error={errors.experience?.[index]?.startDate?.message}
                >
                  <input
                    placeholder="2020-01"
                    {...register(`experience.${index}.startDate`)}
                    className={inputClasses}
                  />
                </Field>
                <Field
                  label="End date"
                  error={errors.experience?.[index]?.endDate?.message}
                >
                  <input
                    placeholder="2022-06 or Present"
                    {...register(`experience.${index}.endDate`)}
                    className={inputClasses}
                  />
                </Field>
                <Field label="Description (optional)">
                  <textarea
                    rows={3}
                    {...register(`experience.${index}.description`)}
                    className={inputClasses}
                  />
                </Field>
                <button
                  type="button"
                  onClick={() => experienceArray.remove(index)}
                  className="text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                experienceArray.append({
                  title: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
              className={btnSecondary}
            >
              Add experience
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            {educationArray.fields.length === 0 && (
              <p className="text-sm text-gray-500">No education added yet.</p>
            )}
            {educationArray.fields.map((field, index) => (
              <div key={field.id} className="border rounded p-4 space-y-3">
                <Field
                  label="School"
                  error={errors.education?.[index]?.school?.message}
                >
                  <input
                    {...register(`education.${index}.school`)}
                    className={inputClasses}
                  />
                </Field>
                <Field
                  label="Degree"
                  error={errors.education?.[index]?.degree?.message}
                >
                  <input
                    {...register(`education.${index}.degree`)}
                    className={inputClasses}
                  />
                </Field>
                <Field
                  label="Start year"
                  error={errors.education?.[index]?.startYear?.message}
                >
                  <input
                    type="number"
                    {...register(`education.${index}.startYear`, {
                      valueAsNumber: true,
                    })}
                    className={inputClasses}
                  />
                </Field>
                <Field
                  label="End year"
                  error={errors.education?.[index]?.endYear?.message}
                >
                  <input
                    type="number"
                    {...register(`education.${index}.endYear`, {
                      valueAsNumber: true,
                    })}
                    className={inputClasses}
                  />
                </Field>
                <button
                  type="button"
                  onClick={() => educationArray.remove(index)}
                  className="text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                educationArray.append({
                  school: "",
                  degree: "",
                  startYear: new Date().getFullYear(),
                  endYear: new Date().getFullYear(),
                })
              }
              className={btnSecondary}
            >
              Add education
            </button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-3">
            <label className="block text-sm font-medium">Skills</label>
            <div className="flex gap-2">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                placeholder="e.g. React"
                className={`${inputClasses} flex-1`}
              />
              <button type="button" onClick={addSkill} className={btnSecondary}>
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="text-gray-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            {errors.skills && (
              <p className="text-red-600 text-sm">{errors.skills.message}</p>
            )}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={goBack}
            disabled={currentStep === 0}
            className={`${btnSecondary} disabled:opacity-40`}
          >
            Back
          </button>
          {isLastStep ? (
            <button type="submit" className={btnPrimary}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={goNext} className={btnPrimary}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
