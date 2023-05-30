import React, { useState } from "react";

function Signout() {
  const [statusVisible, setStatusVisible] = useState(false);
  const toggleStatus = () => {
    setStatusVisible(!statusVisible);
  };
  return (
    <div>
      <button onClick={toggleStatus}>
        <div class="flex mr-3  items-center space-x-4">
          <img
            class=" border-b w-7 h-7 ml-9 mt-16  mlmr-3 rounded"
            src="https://www.kindpng.com/picc/m/19-194798_transparent-logout-png-sign-out-icon-transparent-png.png"
            alt=""
          />
          <div class="font-medium dark:text-white">
            <div class="  tet-red-500 mt-16 ">Sign out</div>
          </div>
        </div>
      </button>
      {statusVisible && (
        <div
          className="bg-gray-200 ml-9 text-gray-800 py-4 px-6 mt-4
rounded"
        >
          <div className="flex items-center">
            <div className="w-2/3 ml-4">
              <div className="text-sm font-bold">Sign out </div>
              <div className="text-xs">Do you really want to sign out?</div>
            </div>
          </div>
          <button
            type="submit"
            class="uppercase mr-5 py-3 px-5 mt-3 text-sm font-medium text-center text-black rounded-lg bg-slate-400 sm:w-fit hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            yes
          </button>
          <button
            type="submit"
            class="uppercase  py-3 px-5 mt-3 text-sm font-medium text-center text-black rounded-lg bg-slate-400 sm:w-fit hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}
export default Signout;
