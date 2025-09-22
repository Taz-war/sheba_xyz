import React from 'react'

const StaffMiniCard = ({staff}) => {
  return (
    <div className=' border-gray-50 border hover:border-sky-800 rounded-md shadow-md p-2'>
        <div className=' items-center'>
      <img src={staff.image} alt={staff.name} className='w-16 mx-auto rounded-full' />
      <div>
        {staff.name}
        {staff.bio}
        {Number(staff.rate).toString()}
      </div>
        </div>
    </div>
  )
}

export default StaffMiniCard
