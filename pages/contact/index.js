import { useForm } from 'react-hook-form';
import React from "react";
import { TextField, Button,Card } from '@mui/material';

const index = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {console.log(data);console.log(register)};

  return (
    <div className="my-5 flex flex-col md:flex-row md:space-x-8">
      <div className="text-center md:block md:w-1/2">
        <p className="text-black text-xl font-medium">Feel free to contact me!</p>
        <p>I'm always available.</p>
        <div>
          <h1>Other contacts</h1>
          <li className='flex flex-row justify-center'>
            <Button href="https://www.linkedin.com/in/kenneth-kh-nguyen/" className='text-red-500'>LinkedIn</Button>
            <Button href="https://github.com/kennethngyen" className='text-red-500'>GitHub</Button >
          </li>
        </div>
      </div>
      <div className="flex-grow p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-lg mx-auto md:mx-0 mt-16 md:mt-0"
        >
          <h1 className="text-2xl font-semibold mb-8">Get in touch</h1>
          <TextField
            label="Your Name"
            variant="outlined"
            margin="dense"
            {...register('name', { required: true, maxLength: 100 })}
            error={!!errors.name}
            helperText={errors.name && 'Required'}
          />
          <TextField
            label="Subject"
            variant="outlined"
            margin="dense"
            {...register('subject', { required: true, maxLength: 100 })}
            error={!!errors.subject}
            helperText={errors.subject && 'Required'}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            margin="dense"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            helperText={errors.email && 'Required'}
          />
          <TextField
            label="Message"
            variant="outlined"
            margin="dense"
            multiline
            rows={2}
            {...register('message', { required: true, min: 8 })}
            error={!!errors.message}
            helperText={errors.message && 'Should be at least 8 characters'}
          />
          <Button variant="contained" type="submit" className="text-white bg-red-500 hover:bg-red-600 mt-4">
            Send
          </Button>
        </form>
      </div>
    </div>
  );  
};

export default index;
