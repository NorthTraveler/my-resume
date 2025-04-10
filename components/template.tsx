import { useRef } from "react";
import ContentInput from "./content/contentInput";
import ResumeShow from "./content/resumeShow";
//210 毫米 × 297 毫米
export default function Template() {
    
  return (
    <div className="flex">
        {/* <Top />
        <ContenInput />
        <ResumeShow />
        <Footer/> */}
        <ContentInput />
        <div className={`bg-gray-900 flex w-full`}>
          <ResumeShow />
        </div>
    </div>
  )
}
