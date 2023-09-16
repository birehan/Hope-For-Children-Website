import React from "react";
import { useFormContext } from "react-hook-form";

interface ProjectTitleInputProps {
  id: string;
}

const ProjectTitleInput: React.FC<ProjectTitleInputProps> = ({ id }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Project Title
      </label>
      <div className="mt-2">
        <input
          id={id}
          type="text"
          {...register("title", {
            required: true,
          })}
          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {errors.title?.type === "required" && (
          <p className="text-red-500" role="alert">
            Title is required
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectTitleInput;
