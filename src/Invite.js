import React, { useState } from "react";

function Invite() {
  const handleShare = async () => {
    const data = {
      title: "Share URL",

      text: "",
      url: ""
    };

    if (navigator.canShare && navigator.canShare(data)) {
      try {
        await navigator.share(data);
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported or unable to share");
    }
  };

  return (
    <div>
      <button onClick={handleShare}>
        <div class="flex mr-3  items-center space-x-4">
          <img
            class=" border-b w-7 h-7 ml-9 mt-16  mlmr-3 rounded"
            src="https://icon-library.com/images/invite-friends-icon/invite-friends-icon-11.jpg"
            alt=""
          />
          <div class="font-medium dark:text-white">
            <div class="  tet-red-500 mt-16 ">Invite Friends</div>
          </div>
        </div>
      </button>
    </div>
  );
}
export default Invite;
