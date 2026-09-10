import { useFormContext } from "react-hook-form";
import Field from "../../../../components/Field";

const UserPosition = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-1">
      <h2 className="font-bold text-center text-xl">Current Role</h2>
      <Field label="Job Title" error={errors.currentPosition?.title?.message}>
        <input
          {...register("currentPosition.title")}
          type="text"
          id="Job Title"
          className="inputClass"
        />
      </Field>

      <Field label="company" error={errors.currentPosition?.company?.message}>
        <input
          {...register("currentPosition.company")}
          type="text"
          id="company"
          className="inputClass"
        />
      </Field>

      <Field
        label="start date"
        error={errors.currentPosition?.startDate?.message}>
        <input
          {...register("currentPosition.startDate")}
          type="text"
          id="start date"
          className="inputClass"
          placeholder="2024-01"
        />
      </Field>

      <Field label="location" error={errors.currentPosition?.location?.message}>
        <input
          {...register("currentPosition.location")}
          type="text"
          id="location"
          className="inputClass"
        />
      </Field>
    </div>
  );
};

export default UserPosition;
