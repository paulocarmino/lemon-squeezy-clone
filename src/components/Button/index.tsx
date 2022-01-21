import * as React from 'react'
import { ImSpinner2 } from 'react-icons/im'

import clsxm from '@/utils/clsxm'

enum ButtonVariant {
  'default',
  'outline'
}

export type ButtonProps = {
  icon?: any
  block?: boolean
  isLoading?: boolean
  variant?: keyof typeof ButtonVariant
} & React.ComponentPropsWithRef<'button'>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      icon = null,
      block = false,
      isLoading,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          'relative bg-black flex items-center py-2 px-8 rounded-md hover:cursor-pointer shadow-sm',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500 text-sm font-medium',
          'transition-colors duration-75',
          'min-h-[48px]',
          'disabled:cursor-not-allowed',
          block && 'w-full flex items-center justify-center',
          [
            variant === 'default' && ['bg-primary-500 text-white hover:bg-primary-400 disabled:bg-primary-200 disabled:hover:bg-primary-200'],
            variant === 'outline' && [
              'bg-transparent text-black border hover:border-gray-300'
            ],
          ],
          isLoading &&
          'relative text-transparent hover:text-transparent disabled:cursor-wait transition-none',
          className
        )}
        {...rest}
      >
        {icon && <div className="inline-block mr-3 text-2xl">{icon}</div>}
        {
          isLoading && (
            <div
              className={clsxm(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'
              )}
            >
              <ImSpinner2 className="animate-spin" data-testid="loading-icon" />
            </div>
          )
        }
        {children}
      </button >
    )
  }
)

export default Button
