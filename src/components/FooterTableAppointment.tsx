import { LuSettings } from "react-icons/lu";
import { FaCaretLeft, FaCaretRight, FaCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

export function FooterTableAppointment() {


  return (
    <div className="absolute flex flex-row items-center justify-between bottom-0 left-0 w-full px-8 py-4">
      
      <div className="flex flex-row items-center">
        <div className="bg-white shadow-md p-2 rounded-lg ">
          <LuSettings className="text-primary-bluebasic text-2xl"/>
        </div>

        <div className="ml-4 ">
          <input type="number" defaultValue={10} className="w-[60px] bg-transparent border-b border-primary-bluebasic"/>
          <button className="ml-4 hover:text-primary-bluebasic">Show on page</button>
        </div>
      </div>

      <div className="flex flex-row items-center -ml-14">
        <span>Pages</span>
        <button><FaCaretLeft className="text-primary-bluebasic text-lg"/></button>
        <div>1</div>
        <span>...</span>
        <div className="bg-white rounded-md shadow-md p-2">6</div>
        <span>...</span>
        <div>10</div>
        <button><FaCaretRight className="text-primary-bluebasic text-lg" /></button>
      </div>

      <button className="relative bg-white rounded-md shadow-md p-2">
        <FaCircle className="absolute text-red-500 text-sm top-0 left-1" />
        <FaRegMessage  className="text-2xl text-primary-bluebasic"/>
      </button>
    </div>
  );
}