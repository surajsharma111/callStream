import { useForm } from "react-hook-form";
import { FaVideo } from "react-icons/fa6";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    isSubmitting,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className=" space-y-6 w-8/12 m-auto mt-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" w-1/2 m-auto">
          <h1 className="   flex flex-row items-center justify-center gap-2 font-bold text-blue text-2xl">
            CallStream <FaVideo />
          </h1>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className=" mt-2">
              <input
                id="email"
                {...register("email", { required: "Email is required" })}
                type="email"
                className="block w-full rounded-md border-1 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
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
                {...register("password", { required: "Password is required" })}
                type="password"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                className="block w-full rounded-md border-1 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className=" mt-4 flex flex-row justify-between">
            <input
              id="code"
              placeholder="Code"
              type="text"
              className="w-52 rounded-md border p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
            />
            {errors.code && (
              <span className="text-red-500 text-sm">
                {errors.code.message}
              </span>
            )}

            <button
              type="submit"
              className=" p-2 bg-indigo-600 text-white rounded-md"
              disabled={isSubmitting}
            >
              Send Code
            </button>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="block w-full  p-2 bg-indigo-600 text-white rounded-md"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
           
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
