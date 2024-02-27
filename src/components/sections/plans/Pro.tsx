import React from "react";
import { Check } from "lucide-react";

function Pro() {
  return (
    <div className="max-w-lg bg-white flex flex-col text-center text-gray-900 border border-gray-100 rounded-lg shadow-blue mx-auto p-6 xl:p-8">
      <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
      <p className="text-md sm:text-lg text-gray-500 font-light">
        Relevant for multiple users, extended & premium support.
      </p>
      <div className="py-8">
        <span className="text-5xl font-extrabold mr-2">$49.99</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul role="list" className="text-left space-y-4 mb-8">
        <li className="w-full flex justify-start items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">All features of the Basic Plan, plus:</span>
        </li>
        <li className="w-full flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">Advanced event configuration options.</span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Unlimited collaboration with team members.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Custom branding options for invitations and event pages.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Advanced analytics and reporting on attendee statistics.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">Priority support.</span>
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

export default Pro;
