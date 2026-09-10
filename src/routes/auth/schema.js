import z from "zod";

// MAX FILE SIZE = 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "image/webp"];

export const schema = z.object({
  fullname: z.string().min(3, "Provide your fullname"),
  email: z.string().email("Provide a valid email"),
  password: z.string().min(8, "Password requires at least 8 characters"),
  username: z
    .string()
    .min(2, "Username has to be more than two chars")
    .optional(),
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
    .instanceof(FileList)
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
      "Max image size is 5MB",
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ACCEPTED_FILE_TYPES.includes(files[0].type),
      "Only .jpg, .png, and .webp files are supported",
    ),
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
