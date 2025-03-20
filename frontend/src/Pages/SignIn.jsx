import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import { signIn } from "../action/auth.js";
function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm();

  const onSubmit = async(data) => {
    const response = await signIn(data)
    const message = await response.json()
    console.log(message)
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
                {...register("password", {
                  required: "Password is required",
                })}
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
          <div className="mt-4">
          <button
            type="submit"
            className="block w-full  p-2 bg-indigo-600 text-white rounded-md"
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </div>

        </div>

       

        <div className=" mt-4  w-full flex items-center justify-center">
          <div className="text-sm leading-6">
            <Link
              to="/admin/forgot-password"
              className="font-semibold text-golden hover:text-underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
