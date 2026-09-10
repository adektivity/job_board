import { useFormContext, useFieldArray } from "react-hook-form";
import Field from "../../../../components/Field";

const UserEducation = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const educationArray = useFieldArray({ control, name: "education" });
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-center text-xl">Education</h2>
      {educationArray.fields.length === 0 && <p>No previous education added</p>}
      {educationArray.fields.map((field, index) => (
        <div key={field.id} className="space-y-4 border rounded p-4">
          <Field
            label="school"
            error={errors.education?.[index]?.school?.message}>
            <input
              {...register(`education.${index}.school`)}
              type="text"
              className="inputClass"
            />
          </Field>

          <Field
            label="degree"
            error={errors.education?.[index]?.degree?.message}>
            <input
              {...register(`education.${index}.degree`)}
              type="text"
              className="inputClass"
            />
          </Field>

          <Field
            label="start year"
            error={errors.education?.[index]?.startYear?.message}>
            <input
              {...register(`education.${index}.startYear`, {
                valueAsNumber: true,
              })}
              type="number"
              className="inputClass"
            />
          </Field>

          <Field
            label="end year"
            error={errors.education?.[index]?.endYear?.message}>
            <input
              {...register(`education.${index}.endYear`, {
                valueAsNumber: true,
              })}
              type="number"
              className="inputClass"
            />
          </Field>

          <button
            type="button"
            onClick={() => educationArray.remove(index)}
            className="text-sm text-red-500">
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
        className="nextBtn">
        Add Education
      </button>
    </div>
  );
};

export default UserEducation;
