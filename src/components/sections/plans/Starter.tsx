import React from "react";
import { Check } from "lucide-react";

function Starter() {
  return (
    <div className="max-w-lg bg-white flex flex-col text-center text-gray-900 border border-gray-100 rounded-lg shadow-blue mx-auto p-6 xl:p-8">
      <h3 className="text-2xl font-semibold mb-4">Starter</h3>
      <p className="text-md sm:text-lg text-gray-500 font-light">
        Best option for personal use & for your next project.
      </p>
      <div className="py-8">
        <span className="text-5xl font-extrabold mr-2">$29.99</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul role="list" className="text-left space-y-4 mb-8">
        <li className="w-full flex justify-start items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Event creation from scratch or CSV import.
          </span>
        </li>
        <li className="w-full flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Invitation creation and distribution on selected channels.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Basic event configuration (date, name, description, image).
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">QR code generation for invitations.</span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Basic event management with collaboration for up to 2 team members.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">Attendance tracking via mobile app.</span>
        </li>
      </ul>
      <a
        href="#"
        className="bg-blue-500 hover:bg-blue-700 text-center text-white text-sm font-medium rounded-lg focus:ring-4 focus:ring-blue-200 px-5 py-2.5"
      >
        Get started
      </a>
    </div>
  );
}

export default Starter;
