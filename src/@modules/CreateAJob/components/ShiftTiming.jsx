import React, { useState } from 'react'
const weekdaysList = ["s","M","T","W","t","F","s"]
const ShiftTiming = () => {
  const [activeday,setActiveDay] = useState(0);
  return (
    <div className='flex w-full flex-col '>
      <div className='flex border-b py-4 mt-4 '>
        <h3 className='text-[24px]'>Schedule working days & timings</h3>
      </div>
      <div className='flex justify-between py-5 md:pr-20'>
        {weekdaysList.map((data,i)=>{
          return(
            <button className='flex p-2 w-10 justify-center items-center bg-[#006AB3] text-white rounded-sm' onClick={()=>setActiveDay(i)}>{data}</button>
          )
        })}

      </div>
      <div className='flex  flex-wrap md:pr-20'>

     <div className='flex flex-col md:flex-row gap-10 w-full mt-10'>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Sunday</div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Monday </div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>
     </div>

        <div className='flex  flex-col md:flex-row gap-10 w-full mt-10'>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Tuesday</div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Wednesday</div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 w-full mt-10'>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Thursday</div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Friday</div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 w-full mt-10 md:pr-10'>
          <div className='flex w-full md:w-1/2 bg-[#e2e2e2] justify-center items-center rounded-md justify-between '>
            <div className='bg-[#006AB3] py-3 text-sm text-white px-2 flex justify-center items-center rounded-md  w-full'>Saturday</div>
            <p className='w-full min-w-fit text-sm px-5 '>9:00 am to 5:00 pm</p>
          </div>

        </div>


      </div>

    </div>
  )
}

export default ShiftTiming