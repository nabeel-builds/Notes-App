import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })

    setTask(copyTask)


    settitle('')
    setdetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)

    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex  bg-black text-white '>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex items-start gap-4 lg:w-1/2 flex-col p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input type="text" placeholder='Enter Notes Handling' className='px-5 py-2 w-full outline-none border-2 rounded' value={title} onChange={(e) => {
          settitle(e.target.value)

        }} />

        <textarea type="text" placeholder='Write Details' className='px-5 py-2 h-32 w-full flex items-start outline-none border-2 rounded' value={details} onChange={(e) => {
          setdetails(e.target.value)
        }} />

        <button className='bg-white w-full text-black px-5 py-2 rounded active:bg-gray-300'>Add Note</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>

          {task.map(function (elem, idx) {

            return <div key={idx} className='flex justify-between flex-col items-start relative bg-cover h-52 w-40 rounded-xl text-black pt-9 px-4 pb-4 bg-white bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLA3zygJEzofc8jNGrzWYvZ-qEEIklLEwnCQ&s")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 rounded font-bold text-xs text-white'>Delete</button>
            </div>


          })}

        </div>
      </div>
    </div>
  )
}

export default App