import { useState } from "react";
import { useFormContext } from "react-hook-form";

const UserSkills = () => {
  const [skillInput, setSkillInput] = useState("");
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const skills = watch("skills");

  const addSkill = () => {
    const value = skillInput.trim();
    if (!value || skills.includes(value)) {
      setSkillInput("");
      return;
    }
    setValue("skills", [...skills, value], { shouldValidate: true });
    setSkillInput("");
  };

  const removeSkill = (index) => {
    setValue(
      "skills",
      skills.filter((_, i) => i !== index),
      { shouldValidate: true },
    );
  };

  return (
    <div className="space-y-3">
      <h2 className="font-bold text-center text-xl">Skills</h2>
      <label htmlFor="skills">Skills</label>
      <div className="flex gap-3">
        <input
          type="text"
          className="inputClass"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
        />
        <button onClick={addSkill}>Add</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm">
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-500 text-xs">
              x
            </button>
          </span>
        ))}
      </div>
      {errors.skills && (
        <span className="text-red-600 text-sm">{errors.skills.message}</span>
      )}
    </div>
  );
};

export default UserSkills;
