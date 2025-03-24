import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import schema from "../ValidationSchema/forgotPassword";
import { forgotPassword } from "../action/auth";
import { FaVideo } from "react-icons/fa6";

function ForgotPassword() {
  const [successModal, setSuccessModal] = useState(false);
  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver,
  });

  const onSubmit = async (data) => {
    const response = await forgotPassword(data);
    const { error, success } = await response.json();
    if (error?.messages) {
      setError("email", { message: error.messages[0] });
    }

    if (success) {
      setSuccessModal(true);
    }
  };
  return (
    <>
      <div className="bg-gray-50 h-svh flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="flex flex-row items-center justify-center gap-2 font-bold text-blue text-2xl">
            CallStream <FaVideo />
          </h1>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot your password?
          </h2>

          <p className="my-3 text-center">
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {successModal && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/90 flex flex-col  justify-center items-center text-center p-16">
                <IoIosCheckmarkCircleOutline
                  size={100}
                  className="mb-8 text-golden"
                />

                <h2 className="text-2xl font-bold ">
                  We’ve sent you a password reset link
                </h2>
                <p className="mt-6 text-lg max-w-xl leading-8 text-gray-600">
                  You should receive an email any minute with a link to reset
                  your password.
                </p>
                <Link
                  className="font-bold text-golden hover:underline mt-4"
                  to="/sign-in"
                >
                  Sign in to your account →
                </Link>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    {...register("email")}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-md bg-lightBlue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                  aria-live="polite"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Send Password Reset Link"
                  )}
                </button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Back to{" "}
            <Link
              to="/sign-in"
              className="font-semibold leading-6 text-golden hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
