import React from 'react'
import { NameChange,clearAll } from "@/actions/redux/statechange"
import { useSelector, useDispatch } from 'react-redux';
export default function TopInput() {
    const name = useSelector((state:InputProps) => state.value?.top?.name);
    const phone = useSelector((state) => state.value?.top?.phone);
    const email = useSelector((state) => state.value?.top?.email);
    const address = useSelector((state) => state.value?.top?.address);
    const dispatch = useDispatch();
  return (
    <div className="text-black shadow-md w-[396px] h-[612px] bg-white border border-gray-400 mx-auto m-2 p-1">
    {/* Top Content */}
    <div className='flex justify-between items-center'>
        <div className='text-center flex-1'>
      <div className='text-md font-bold text-black'>{name}</div>
      <div className='text-xs'>
        <p className='inline text-black text-[0.55rem]'>{phone}</p>
        <p className='px-1 inline'>|</p>
        <p className='inline text-black text-[0.55rem]'>{email}</p>
        <p className='px-1 inline'>|</p>
        <p className='inline text-black text-[0.55rem]'>{address}</p>
      </div>
      <div>
      <p className='inline text-black text-[0.55rem]'>东北大学在读</p>
        </div>
      </div>
    <img width={65} src='photo.png'/>
  </div>
  </div>
  )
}
