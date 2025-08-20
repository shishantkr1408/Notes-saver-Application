import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateTopastes } from '../redux/pasteSlice';

const Home = () => {
    const[title,setTitle]= useState("");
    const[value,setValue]=useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId"); 
    const dispatch=useDispatch();
    const allpastes=useSelector((state) => state.paste.pastes);
    // useEffect(() => {
    // if (pasteId) {
    //     const paste = allpastes.find((p) => p._id === pasteId); // fix property access
    //     setTitle(paste.title);
    //     setValue(paste.content);
    // }
    // }, [pasteId,allpastes]); // Include allpastes as dependency because you use it in effect

    useEffect(() => {
        if (pasteId) {
            const paste = allpastes.find((p) => p._id === pasteId);
        //     if (paste) {
        //         setTitle(paste.title);
        //         setValue(paste.content);
        //     } else {
        //         setTitle('');
        //         setValue('');
        //         // Optionally show a "Paste not found" message
        //     }
        // } else {
        //     setTitle('');
        //     setValue('');
        // }
        setTitle(paste.title);
        setValue(paste.content);
        }
    }, [pasteId]);


    // function createPaste(){
    //     const paste={
    //         title:title,
    //         content:value,
    //         id:pasteId || Date.now().toString(36),
    //         createdAt:new Date().toISOString(),
    //     }
    //     if(pasteId){
    //         //update
    //         dispatch(updateTopastes(paste));
    //     }
    //     else{
    //         //create
    //         dispatch(addToPastes(paste));
    //     }

    //     //after creation or updation
    //     setTitle('');
    //     setValue('');
    //     setSearchParams({});
    // }
    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            // id: newId, // for consistency
            createdAt: new Date().toISOString(),
        };
        if (pasteId) {
            dispatch(updateTopastes(paste)); // updates by _id
        } else {
            dispatch(addToPastes(paste));
        }
        setTitle('');
        setValue('');
        setSearchParams({});
    }

  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
        <input type="text" className="bg-gray-700 text-white p-2 rounded-2xl mt-2 w-[70%] pl-4" placeholder='enter title here'
        value={title}
        onChange={(e)=>setTitle(e.target.value)} />
        <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>
            {
                pasteId? "Update My paste" :
                "Create My paste"
            }
        </button>
       </div> 
       <div className='mt-8'>
        <textarea 
        className="bg-gray-700 text-white rounded-2xl mt-4 min-w-[500px] p-4" value={value}
        placeholder='Enter-content here'
        onChange={(e)=>setValue(e.target.value)} rows={20}
        ></textarea>
       </div>
    </div>
  )
}

export default Home