import { IoCalendarOutline, IoSearchOutline, IoAddOutline } from "react-icons/io5";
import { Dropdown } from "./Dropdown";
import { DateFilter } from "./DateFilter";
import { IoMdMore } from "react-icons/io";
import { TableAppointment } from "./TableAppoinment";

import { useDispatch } from "react-redux";
import {  toggleModal } from '../store/features/appointmentsSlice';

export function AppointmentContentView() {
  const dispatch = useDispatch();
  
  return (
    <div className="w-100 mt-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <h5 className="text-primary-blue2 font-semibold text-md">Appointments</h5>
          <IoCalendarOutline className="ml-2 text-primary-blue2" />
        </div>

        <div className="border border-primary-bluebasic rounded-md ml-12 flex flex-row items-center w-[70%]">
          <IoSearchOutline className="ml-4 text-primary-blue2"/>
          <input 
            type="text" 
            className="bg-transparent ml-4 text-sm w-[90%] outline-none"  
            placeholder="Search appointments"
          />
        </div>

        <button 
        onClick={() => dispatch(toggleModal())}
        className="rounded-md bg-primary-bluebasic flex items-center text-white hover:bg-primary-blue2 p-2 ml-16">
          <IoAddOutline className=""/>
          <span className="text-xs">New Appointment</span>
        </button>
        
      </div>

      <div className="mt-4 flex flex-row items-center justify-between">
        <div>
          <Dropdown title="Select Insurance"/>
          <Dropdown title="Select Technician"/>
          <Dropdown title="Select Location"/> 
        </div>

        <div className="flex flex-row items-center ml-8">
          <div className="flex flex-row items-center">
            <input className="" type="checkbox" name="" id="" />
            <span className="ml-2 text-sm">Hide visited</span>
          </div>
          <div className="flex flex-row items-center ml-6">
            <input type="checkbox" name="" id="" />
            <span className="ml-2 text-sm">Show empty</span>
          </div>
        </div>

        <div className="ml-5">
          <DateFilter/>
        </div>
        
        <div className="ml-10">
          <button className="bg-white p-2 rounded-md shadow-md">
            <IoMdMore />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <TableAppointment />
      </div>

    </div>
  )
}

