import React, { useState } from "react";

function Policies() {
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
            src="https://media.istockphoto.com/id/487942754/vector/shopping-icon.jpg?s=612x612&w=0&k=20&c=LXS5emgukMCLuXU3iN1OsBWNaNGcQ0Nvfh3_FKO4l_4="
            alt=""
          />
          <div class="font-medium dark:text-white">
            <div class="  tet-red-500 mt-16 ">Policies</div>
          </div>
        </div>
      </button>
      {statusVisible && (
        <div
          className="bg-gray-200 text-gray-800 py-4 px-6 mt-4
rounded"
        >
          <div className="flex items-center">
            <div class="bg-white p-4">
              <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                <svg
                  class="h-6 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Privacy Policy
              </button>
              <button class="inline-flex mt-1 items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                <svg
                  class="h-6 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Terms and Conditions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Policies;
