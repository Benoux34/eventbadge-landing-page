import React from "react";
import { Check } from "lucide-react";

function Premium() {
  return (
    <div className="max-w-lg bg-white flex flex-col text-center text-gray-900 border border-gray-100 rounded-lg shadow-blue mx-auto p-6 xl:p-8">
      <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
      <p className="text-md sm:text-lg text-gray-500 font-light">
        Best for large scale uses and extended redistribution rights.
      </p>
      <div className="py-8">
        <span className="text-5xl font-extrabold mr-2">$99.99</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul role="list" className="text-left space-y-4 mb-8">
        <li className="w-full flex justify-start items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">All features of the Pro Plan, plus:</span>
        </li>
        <li className="w-full flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            VIP support with dedicated account manager.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Priority access to new features and updates.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Integration with CRM and marketing automation tools.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            White-labeling options for complete branding control.
          </span>
        </li>
        <li className="flex items-center gap-x-3">
          <Check className="w-[10%]" color="#22c55e" size={25} />
          <span className="w-[90%]">
            Dedicated training sessions for your team on using EventBadge
            effectively.
          </span>
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

export default Premium;
