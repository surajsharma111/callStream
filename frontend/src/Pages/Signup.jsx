import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Form = () => {
  const { register, handleSubmit, formState: { errors }, isSubmitting } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  <div className=' w-full h-full flex items-center justify-center'>
    <div>
    <form  
      className="  border border-black space-y-6 w-8/12 m-auto mt-12" 
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='w-1/3'>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className=" mt-2">
          <input
            id="email"
            {...register('email', { required: "Email is required" })}
            type="email"
            className="block w-full rounded-md border-1 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      {/* Password Input */}
      <div  className='w-1/3'>
        <label 
          htmlFor="password" 
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            {...register('password', { required: "Password is required" })}
            type="password"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
          />
        </div>
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      {/* Confirm Password Input */}
      <div  className='w-1/3'>
        <label 
          htmlFor="confirmPassword" 
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Confirm Password
        </label>
        <div className="mt-2">
          <input
            id="confirmPassword"
            {...register('confirmPassword', {
              required: "Confirm Password is required",
              validate: (value) => value === watch('password') || "Passwords do not match"
            })}
            type="password"
            className="block w-full rounded-md border-1 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
          />
        </div>
        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
      </div>

      {/* Code Input */}
      <div className="flex flex-row gap-4 w-fit items-center justify-center border border-black p-2">
  {/* Code Input */}
  <div className="flex-1">
    <input
      id="code"
      placeholder="Code"
      {...register("code", { required: "Code is required" })}
      type="text"
      className="w-40 rounded-md border p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-golden"
    />
    {errors.code && <span className="text-red-500 text-sm">{errors.code.message}</span>}
  </div>

  {/* Send Code Button */}
  <button
    type="submit"
    className="border border-black p-2 bg-indigo-600 text-white rounded-md"
    disabled={isSubmitting}
  >
    Send Code
  </button>
</div>

      

      {/* Submit Button */}
      <div>
        <button 
          type="submit" 
          className="block w-1/3 p-2 bg-indigo-600 text-white rounded-md"
          disabled={isSubmitting}
        >
          Sign Up
        </button>
      </div>

      {/* Forgot Password Link */}
      <div className=" border border-black w-1/3 flex items-center justify-center">
        <div className="text-sm leading-6">
          <Link to="/admin/forgot-password" className="font-semibold text-golden hover:text-underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </form>
    </div>
   
  </div>
   
  );
};

export default Form;
