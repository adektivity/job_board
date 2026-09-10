import { useFormContext } from "react-hook-form";
import Field from "../../../../components/Field";

const UserDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-1">
      <h2 className="font-bold text-center text-xl">Details</h2>
      <Field label="fullname" error={errors.fullname?.message}>
        <input
          {...register("fullname")}
          type="text"
          placeholder="John Doe"
          id="fullname"
          className="inputClass"
        />
      </Field>

      <Field label="email" error={errors.email?.message}>
        <input
          {...register("email")}
          type="text"
          placeholder="jd@mail.com"
          id="email"
          className="inputClass"
        />
      </Field>

      <Field label="username" error={errors.username?.message}>
        <input
          {...register("username")}
          type="text"
          placeholder="johndoe19"
          id="username"
          className="inputClass"
        />
      </Field>
      <div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("terms")} />I agree to the terms
          and conditions
        </label>
        {errors.terms && (
          <span className="errorText">{errors.terms.message}</span>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
