import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CreateUserAction } from "../../features/redux/user/userSlice";
import { authState } from "../../features/redux/auth/authSlice";
import { User } from "../../types/types";

export default function Register() {
  const user = useSelector((state: authState) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) =>
    dispatch(CreateUserAction(data));

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="/images/logo2.png"
            alt="Hope forchildren"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create user account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    type="text"
                    autoComplete="username"
                    {...register("username", {
                      required: true,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.username?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      user name is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      email is required
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-red-500" role="alert">
                      please enter valid email
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", { required: true, minLength: 4 })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500" role="alert">
                      password length must be greater than four
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <div className="mt-2">
                  <select
                    id="userRole"
                    {...register("userRole", { required: true })}
                    className="block cursor-pointer w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">-- select user role --</option>
                    <option value="superAdmin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                  {errors.userRole?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      user role is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
