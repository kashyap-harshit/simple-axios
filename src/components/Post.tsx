import React from 'react'


type postProps = {
    id : number;
    title: string;
    body: string;
}
export default function Post({id, title, body} : postProps) {
  return (
    <div className='border-black border-2 my-2 text-center mx-20'>

      <div className='text-2xl uppercase'>ID : {id} <br /> TITLE : {title}</div>
      <div>{body}</div>
    </div>
  )
}
