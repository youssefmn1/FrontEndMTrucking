import React, { useState } from 'react';
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear error when user starts typing
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign-in logic here

      // Redirect to home page after successful sign-in
      navigate('/home');
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.email ? 'border-red-500' : ''}`}
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <Typography variant="small" color="red" className="text-xs">{errors.email}</Typography>}
            
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className={`!border-t-blue-gray-200 focus:!border-t-gray-900 ${errors.password ? 'border-red-500' : ''}`}
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <Typography variant="small" color="red" className="text-xs">{errors.password}</Typography>}
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Sign In
          </Button>

          <Typography variant="small" className="font-medium text-gray-900 mt-6 text-center">
            <a href="#">Forgot Password</a>
          </Typography>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Background pattern"
        />
      </div>
    </section>
  );
}

export default SignIn;
