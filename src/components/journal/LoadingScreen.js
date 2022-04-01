import React from 'react'

export const LoadingScreen = () => {
  return (
    <div className='loading__main-content'>
        <div>
            <h1 className='mb-1'>Please Wait...</h1>
            <i className="fa fa-2x fa-spin fa-duotone fa-spinner"></i>
        </div>
    </div>
  )
}
