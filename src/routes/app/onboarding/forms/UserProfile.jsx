import { useFormContext } from "react-hook-form";
import Field from "../../../../components/Field";

const UserProfile = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-1">
      <h2 className="font-bold text-center text-xl">Profile</h2>
      <Field label="profession" error={errors.profession?.message}>
        <input
          {...register("profession")}
          type="text"
          placeholder="e.g web dev"
          id="profession"
          className="inputClass"
        />
      </Field>

      <Field label="location" error={errors.location?.message}>
        <input
          {...register("location")}
          type="text"
          placeholder="Lagos,NG"
          id="location"
          className="inputClass"
        />
      </Field>

      <Field label="about" error={errors.about?.message}>
        <textarea
          {...register("about")}
          id="about"
          rows={5}
          placeholder="To the moon..."
          className="inputClass"></textarea>
      </Field>

      <Field label="avatar" error={errors.profileImage?.message}>
        <input
          type="file"
          id="avatar"
          {...register("profileImage")}
          className="inputClass"
        />
      </Field>
    </div>
  );
};

export default UserProfile;
