import React from 'react'

type InputFieldProps = {
  id: string
  label: string
  error: Boolean
  helperText: string
}
export default function InputField({
  id,
  label,
  error,
  helperText,
  file,
}: InputFieldProps) {
  console.log(file)
  return (
    <div>
      <h4 className="text-gray-500">
        {label} <span className="text-red-500">*</span>
      </h4>
      <div className="relative">
        <span className="absolute top-3 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 mb-2 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </span>
        <input
          id={id}
          className={`border-b-2 
                      w-full
                      py-2
                      pl-6
                      
                      text-gray-400
                      focus:outline-none
                      placeholder-gray-400${
                        error
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-gray-300 focus:border-blue-300'
                      }`}
          type="text"
          {...file}
        />

        {error && <p>{helperText}</p>}
      </div>
    </div>
  )
}
