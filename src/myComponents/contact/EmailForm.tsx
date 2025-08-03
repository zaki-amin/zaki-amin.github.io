'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'
import { toast } from 'sonner'
import { Card } from '@/components/ui/card'

const STANDARD_INPUT_STYLE =
  'w-full px-4 py-3 border-2 text-white placeholder:text-gray-200 bg-gray-900 rounded-md outline-none focus:ring-4'
const ERROR_INPUT_STYLE = 'border-red-600 focus:border-red-600 ring-0'
const NON_ERROR_INPUT_STYLE =
  'border-gray-300 focus:border-gray-600 border-gray-600 focus:border-white ring-0'

const EmailForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  })

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_ACCESS_KEY as string,
    settings: {
      from_name: 'Personal Website',
      subject: 'New email from your website',
    },
    onSuccess: () => {
      toast.success('Email sent successfully!')
      reset()
    },
    onError: () => {
      toast.error('Error sending email. Please try again later.')
    },
  })

  return (
    <Card className='px-4 border-dashed'>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='checkbox'
            id=''
            className='hidden'
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input>

          <div className='mb-5'>
            <h3 className='text-sm font-semibold text-green-300'>Name</h3>
            <input
              type='text'
              placeholder='Your Name'
              autoComplete='false'
              className={`${STANDARD_INPUT_STYLE} ${
                errors.name ? ERROR_INPUT_STYLE : NON_ERROR_INPUT_STYLE
              }`}
              {...register('name', {
                required: 'Full name is required',
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className='mt-1 text-red-600'>
                <small>{errors.name.message as string}</small>
              </div>
            )}
          </div>

          <div className='mb-5'>
            <label htmlFor='email_address' className='sr-only'>
              Email Address
            </label>
            <h3 className='text-sm font-semibold text-green-300'>
              Email Address
            </h3>
            <input
              id='email_address'
              type='email'
              placeholder='Your Email Address'
              autoComplete='false'
              className={`${STANDARD_INPUT_STYLE} ${
                errors.email ? ERROR_INPUT_STYLE : NON_ERROR_INPUT_STYLE
              }`}
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email && (
              <div className='mt-1 text-red-600'>
                <small>{errors.email.message as string}</small>
              </div>
            )}
          </div>

          <div className='mb-3'>
            <h3 className='text-sm font-semibold text-green-300'>Message</h3>
            <textarea
              placeholder='Your Message'
              className={`${STANDARD_INPUT_STYLE} h-36 ${
                errors.message ? ERROR_INPUT_STYLE : NON_ERROR_INPUT_STYLE
              }`}
              {...register('message', {
                required: 'Message is required',
              })}
            />
            {errors.message && (
              <div className='mt-1 text-red-600'>
                <small>{errors.message.message as string}</small>
              </div>
            )}
          </div>

          <button
            type='submit'
            className='w-full rounded-md py-4 font-semibold text-white bg-purple-800 transition-colors hover:bg-purple-600'
          >
            {isSubmitting ? (
              <svg
                className='w-5 h-5 mx-auto text-white animate-spin'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </>
    </Card>
  )
}

export default EmailForm
