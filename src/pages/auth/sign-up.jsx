import React, { useState } from 'react';
import { Input, Checkbox, Button, Typography, Select, Option } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    cinNumber: '',
    gender: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
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

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = 'This field is required';
      }
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign-up logic here

      // Redirect to sign-in page after successful sign-up
      navigate('/sign-in');
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Background pattern"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your details to register.</Typography>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Username
            </Typography>
            <Input
              size="lg"
              name="username"
              placeholder="Username"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && <Typography variant="small" color="red" className="text-xs">{errors.username}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              First Name
            </Typography>
            <Input
              size="lg"
              name="firstName"
              placeholder="First Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <Typography variant="small" color="red" className="text-xs">{errors.firstName}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Last Name
            </Typography>
            <Input
              size="lg"
              name="lastName"
              placeholder="Last Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <Typography variant="small" color="red" className="text-xs">{errors.lastName}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              CIN Number
            </Typography>
            <Input
              size="lg"
              name="cinNumber"
              placeholder="CIN Number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.cinNumber}
              onChange={handleInputChange}
            />
            {errors.cinNumber && <Typography variant="small" color="red" className="text-xs">{errors.cinNumber}</Typography>}
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <Typography variant="small" color="red" className="text-xs">{errors.email}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Phone Number
            </Typography>
            <Input
              size="lg"
              name="phoneNumber"
              placeholder="Phone Number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && <Typography variant="small" color="red" className="text-xs">{errors.phoneNumber}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Account Type
            </Typography>
            <Select
              size="lg"
              label="Select Account Type"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              value={formData.accountType}
              onChange={(value) => setFormData({ ...formData, accountType: value })}
            >
              <Option value="transporteur">Transporteur</Option>
              <Option value="expediteur">Expéditeur</Option>
            </Select>
            {errors.accountType && <Typography variant="small" color="red" className="text-xs">{errors.accountType}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="Password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <Typography variant="small" color="red" className="text-xs">{errors.password}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && <Typography variant="small" color="red" className="text-xs">{errors.confirmPassword}</Typography>}
          </div>
          <Checkbox
            checked={termsAccepted}
            onChange={handleCheckboxChange}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree to the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {errors.termsAccepted && <Typography variant="small" color="red" className="text-xs">{errors.termsAccepted}</Typography>}
          <Button type="submit" className="mt-6" fullWidth disabled={!termsAccepted}>
            Register Now
          </Button>


        <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
