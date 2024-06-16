"use client"

import React, { useState } from 'react'

const page = () => {
  const[title, settitle] = useState('')
  const[desc, setdesc] = useState('')
  const[maintask, setmaintask] = useState([])
  
  const formHandler = (e) =>{
    e.preventDefault()
    // console.log(title)
    // console.log(desc)
    setmaintask([...maintask , {title, desc}])
    settitle('')
    setdesc('')
    console.log(maintask)
  }

  const deleteHandler = (i) =>{
    let copytext = [...maintask]
    copytext.splice(i,1)
    setmaintask(copytext)
  }

let rendertask = <h2>No Task Available</h2>

if(maintask.length > 0 ){
  rendertask = maintask.map((t,i)=> {
    return (
    <li className='flex items-center justify-between mb-5'>
    <div className='flex justify-between w-2/3'>
      <h2 className='text-2xl font-semibold'>{t.title}</h2>
      <h2 className='text-xl font-semibold'>{t.desc}</h2>
    </div>
    <button onClick={()=>{
      deleteHandler()
    }} className='bg-red-500 font-bold rounded px-4 py-2 text-white'>Delete</button>
    </li>
    )
  })
}

  return (
    <>
    <div>
      <h1 className='bg-black text-white text-5xl text-center'>Ankit Todo List</h1>
    </div>
    <form onSubmit={formHandler}>
    <input type='text' className='text-2xl border-zinc-800 border-4 px-4 py-2 m-8' placeholder='Enter task here' value={title} onChange={(e)=>{
     settitle(e.target.value)
    }}/>
       <input type='text' className='text-2xl border-zinc-800 border-4 px-4 py-2 m-8' placeholder='Enter description  here' value={desc} onChange={(e)=>{
      setdesc(e.target.value)
    }}/>
      <button className='bg-black font-bold text-2xl text-white px-4 py-2 rounded'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-300'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page