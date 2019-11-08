import React, {useState} from 'react';
export function MyButton(props){

  return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  )

}