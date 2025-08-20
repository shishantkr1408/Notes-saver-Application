import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const {id}= useParams();
  const allpastes=useSelector((state)=>state.paste.pastes);
  const paste=allpastes.filter((p)=>p._id===id)[0];
  console.log("Final Paste: ",paste);
  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
        <input type="text" className="bg-gray-700 text-white p-2 rounded-2xl mt-2 w-[70%] pl-4" placeholder='enter title here'
        value={paste.title} disabled
        onChange={(e)=>setTitle(e.target.value)} />
       </div> 
       <div className='mt-8'>
        <textarea 
        className="bg-gray-700 text-white rounded-2xl mt-4 min-w-[500px] p-4" value={paste.content} disabled
        placeholder='Enter-content here'
        onChange={(e)=>setValue(e.target.value)} rows={20}
        ></textarea>
       </div>
    </div>
  )
}

export default ViewPaste