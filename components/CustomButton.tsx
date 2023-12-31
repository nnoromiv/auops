import { CustomButtonProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const CustomButton = ({linkURL, customButtonStyles, isDisabled, btnType, title, icon, handleClick} : CustomButtonProps ) => {
  return (
    <>
      {
        linkURL === "" ?
        <button 
            className={`btn border border-solid border-white hover:scale-110 cursor-pointer ${customButtonStyles}`}
            disabled={isDisabled}
            type={ btnType || "button"}
            onClick={handleClick}
        >
          { icon }
          <span className='flex-1'>{title}</span>
        </button>
        :
        <Link
            href={linkURL || ""}
            className='flex justify-center items-center'>
                <button 
                    className={`btn border border-solid border-white hover:scale-110 cursor-pointer ${customButtonStyles}`}
                    disabled={isDisabled}
                    type={ btnType || "button"}
                    onClick={handleClick}
                >
                  { icon }
                  <span className='flex-1'>{title}</span>
                </button>
        </Link>
      }
    </>
  )
}

export default CustomButton