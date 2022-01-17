import * as React from 'react'
import clsxm from '@/utils/clsxm'

export type InputProps = {
  label?: string
} & React.ComponentPropsWithRef<'input'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label = "", className, ...rest }, ref) => {
    return (
      <div>
        {!!label &&
          <label htmlFor={label} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        }
        <input ref={ref} className={clsxm("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm disabled:cursor-not-allowed disabled:bg-gray-200", className)}
          name={label}
          {...(label ? { id: label } : {})}
          {...rest}
        />
      </div>)
  }
)

export default Input
