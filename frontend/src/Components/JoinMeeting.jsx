import { FaVideo } from "react-icons/fa6";
import { useForm } from "react-hook-form";

function JoinMeeting(){
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return(
    <div>
      <form className=" space-y-6 w-8/12 m-auto mt-12"
        onSubmit={handleSubmit(onSubmit)}>

      <div className=" w-1/2 m-auto">
          <h1 className="   flex flex-row items-center justify-center gap-2 font-bold text-blue text-2xl">
            CallStream <FaVideo />
          </h1>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
             Enter a Meeting Id
            </label>
            <div className=" mt-2">
              <input
                id="id"
                {...register("id", { required: "Id is required" })}
                type="text"
                className="block w-full rounded-md border-1 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mt-4">
          <button
            type="submit"
            className="block w-full  p-2 bg-indigo-600 text-white rounded-md"
            disabled={isSubmitting}
          >
            Join Meeting
          </button>
        </div>

        </div>
      </form>
    </div>
  )
}

export default JoinMeeting