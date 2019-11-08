import React, {useState} from 'react';
export function MyButton(props){
  const handleClick=()=>props.onClickFunction(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  )

}