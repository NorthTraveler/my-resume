import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NameChange,clearAll } from "@/actions/redux/statechange"
import { useSelector, useDispatch } from 'react-redux';
export default function InputDropdown({title,items}:InputDropdownProps) {
    const [isTopOpen, setIsTopOpen] = useState(false);
    const name = useSelector((state) => state.state.value.top.name);
    const toggleDropdown = () => {
      setIsTopOpen(!isTopOpen);
    };

  return (
    <div className="text-left relative">

        <div
          onClick={toggleDropdown}
          className="transition-opacity duration-300 ease-in-out opacity-100 items-center cursor-pointer inline-flex text-white justify-center w-full rounded-sm border-b tex border-blue-200 shadow-sm  py-2 text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
        
          {title}
          <ChevronDown />
      </div>
      {isTopOpen && (
            <div className="origin-top-right left-0 w-full border-b-2 border-blue-400 focus:outline-none transition-opacity duration-300 ease-in-out opacity-100">
            <div  className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <ul>
                    <li className="p-1">
                        <p className="px-2 text-gray-700 text-sm">{name}</p>
                        <input className="mt-1 w-56 text-md border-blue-600 ring-0"/>
                    </li>
                    <li className="p-1">
                        <p className="px-2 text-gray-700 text-sm">电话</p>
                        <input className="mt-1 w-56 text-md border-blue-600 ring-0"/>
                    </li>
                    <li className="p-1">
                        <p className="px-2 text-gray-700 text-sm">邮箱</p>
                        <input className="mt-1 w-56 text-md border-blue-600 ring-0"/>
                    </li>
                    <li className="p-1">
                        <p className="px-2 text-gray-700 text-sm">所在地区</p>
                        <input className="mt-1 w-56 text-md border-blue-600 ring-0"/>
                    </li>
                    <li className="p-1">
                        <p className="px-2 text-gray-700 text-sm">目前情况</p>
                        <input className="mt-1 w-56 text-md border-blue-600 ring-0"/>
                    </li>
                    <li className="p-1">
                        <p className="px-2 text-gray-700 text-sm">照片上传</p>
                        <button>upload</button>
                    </li>
                </ul>
                <div className="flex justify-center">
                <button
                    className="block rounded-3xl w-24 py-1 text-sm text-gray-700 hover:bg-blue-400"
                    role="menuitem"
                >
                    save all
                </button>
                <button
                    className="block rounded-3xl w-24 py-1 text-sm text-gray-700 hover:bg-blue-400"
                    role="menuitem"
                >
                    clear all
                </button>
            </div>
          </div>
        </div>
      )}




    </div>
  )
}
