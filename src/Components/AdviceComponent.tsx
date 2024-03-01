import React from 'react'

const AdviceComponent = (props : {id : number, advice: string}) => {
  return (
    <div className='pt-5 pb-4'>
        <p className='text2color tracking-widest'>Advice #{props.id}</p>
        <h2 className='textcolor pt-2'>"{props.advice}"</h2>
    </div>
  )
}

export default AdviceComponent;