import { useFormContext, useFieldArray } from "react-hook-form";
import Field from "../../../../components/Field";

const UserExperience = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const experienceArray = useFieldArray({ control, name: "experience" });
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-center text-xl">Experience</h2>
      {experienceArray.fields.length === 0 && (
        <p>No previous experience added</p>
      )}
      {experienceArray.fields.map((field, index) => (
        <div key={field.id} className="space-y-4 border rounded p-4">
          <Field
            label="job title"
            error={errors.experience?.[index]?.title?.message}>
            <input
              {...register(`experience.${index}.title`)}
              type="text"
              className="inputClass"
            />
          </Field>

          <Field
            label="company"
            error={errors.experience?.[index]?.company?.message}>
            <input
              {...register(`experience.${index}.company`)}
              type="text"
              className="inputClass"
            />
          </Field>

          <Field
            label="start date"
            error={errors.experience?.[index]?.startDate?.message}>
            <input
              {...register(`experience.${index}.startDate`)}
              placeholder="YYYY-MM"
              className="inputClass"
            />
          </Field>

          <Field
            label="end date"
            error={errors.experience?.[index]?.endDate?.message}>
            <input
              {...register(`experience.${index}.endDate`)}
              placeholder="2020-04 or Present"
              className="inputClass"
            />
          </Field>

          <Field
            label="description(optional)"
            error={errors.experience?.[index]?.description?.message}>
            <textarea
              {...register(`experience.${index}.description`)}
              type="text"
              rows={3}
              className="inputClass"
            />
          </Field>
          <button
            type="button"
            onClick={() => experienceArray.remove(index)}
            className="text-sm text-red-500">
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
        className="nextBtn">
        Add Experience
      </button>
    </div>
  );
};

export default UserExperience;
