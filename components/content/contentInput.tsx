import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import InputDropdown from "./dropdown";

const TopProps={
  title:"个人信息",
  items:[
      {label:"姓名",type:"text",placeholder:"请输入姓名"},
      {label:"求职意向",type:"text",placeholder:"请输入求职意向"},
      {label:"联系方式",type:"text",placeholder:"请输入联系方式"},
      {label:"邮箱",type:"text",placeholder:"请输入邮箱"},
    ]
}

export default function ContentInput() {
  const [isOpen,setIsOpen] = useState(false)
  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
  <div className="flex">
  <div className={`overflow-y-auto transition-width duration-300 ease-in-out text-white top-0.5 left-0  text-lg 
    ${isOpen ? "w-80" :"w-16 cursor-pointer"} bg-blue-300 border-r-2 border-amber-400 shadow-2xs`}
    onClick={isOpen ? undefined : openSidebar}>
    {/* 侧边栏内容 */}
    <div className="flex flex-col h-full">
      {/* 侧边栏的主要内容 */}
      <div className="flex-1">
        {/* 侧边栏的其他内容 */}
        {isOpen && (
          <ul>
            <li className="">
              <InputDropdown title={TopProps.title} items={TopProps.items}  />
            </li>
            <li className="">
              <InputDropdown title={TopProps.title} items={TopProps.items} />
            </li>
              <InputDropdown title={TopProps.title} items={TopProps.items} />
          </ul>
        )}
      </div>
      {/* 底部按钮 */}
      <div className="flex justify-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer justify-center p-2 rounded hover:bg-blue-400"
        >
          {isOpen ? <ChevronLeft size={36} /> : <ChevronRight size={36}/>}
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
