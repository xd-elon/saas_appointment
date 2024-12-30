import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCalendarOutline } from "react-icons/io5";

export function DateFilter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex space-x-4">
      {/* Data de início */}
      <div className="flex flex-row items-center">
      <label className="block text-sm font-medium text-primary-blue2 mr-2">From: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="block w-[100px] px-2  border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          dateFormat="dd.MM.yyyy"
        />
        <IoCalendarOutline className="ml-2 text-primary-blue2" />
      </div>

      {/* Data de término */}
      <div className="flex flex-row items-center">
      <label className="block text-sm font-medium text-primary-blue2 mr-2">At: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="block w-[100px] px-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          dateFormat="dd.MM.yyyy"
        />
        <IoCalendarOutline className="ml-2 text-primary-blue2" />
      </div>
    </div>
  );
}
