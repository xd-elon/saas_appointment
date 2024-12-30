import myprofile from "../img/2024eu.jpeg"
import { ProfileDropDown } from "./ProfileDropDown";

export function Header() {

  return (
    <div className="bg-white rounded-b-lg shadow-md px-5 py-3 flex flex-row justify-between">

      <div className="flex flex-row justify-between w-80">
        <button className="btn">Appointments</button>
        <button className="btn">Patients</button>
        <button className="btn">Diaries</button>
        <button className="btn">Settings</button>
      </div>

      <div className="flex flex-row items-center">
        <div className="bg-gray-400 w-7 h-7 rounded-md">
          <img src={myprofile} alt="" />
        </div>
        <button className="btn ml-2 font-light">Alan Delon</button>
        <ProfileDropDown />
        {/* <FaChevronDown className="ml-2 text-primary-bluebasic" /> */}
      </div>
    </div>
  )
}

