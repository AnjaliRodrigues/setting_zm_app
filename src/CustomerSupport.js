import React, { useState } from "react";

function CustomerSupport() {
  const phoneNumber = "+8459163682";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div>
      <button onClick={handleCall}>
        <div class="flex mr-3  items-center space-x-4">
          <img
            class=" border-b w-6 h-6 ml-9 mt-16  mlmr-3 rounded"
            src="https://www.kindpng.com/picc/m/154-1540620_customer-care-customer-support-icon-transparent-hd-png.png"
            alt=""
          />
          <div class="font-medium dark:text-white">
            <div class="  tet-red-500 mt-16 ">Customer Support</div>
          </div>
        </div>
      </button>
    </div>
  );
}
export default CustomerSupport;
