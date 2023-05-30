import React, { useState } from 'react';

function About() {
const [statusVisible, setStatusVisible] = useState(false);
const toggleStatus = () => {
setStatusVisible(!statusVisible);
};
return (
<div>
<button
onClick={toggleStatus}>
<div class="flex mr-3  items-center space-x-4">
<img class=" border-b w-6 h-6 ml-9 mt-16  mlmr-3 rounded" src="https://www.freeiconspng.com/uploads/question-mark-blue-button-icon-png-0.png" alt=""/>
    <div class="font-medium dark:text-white">
        <div class="  tet-red-500 mt-16 ">About</div>
        </div></div>
</button>
{statusVisible && (


<div className="bg-gray-200 text-gray-800 py-4 px-6 mt-4
rounded">
<div className="flex items-center">

<div className="w-2/3 ml-4 ">
<p className="text-sm ">
  

  We are here to provide a level playing field for retail players. Built by underdogs for the understated and ignored retailer. We hope to work with retailers increasing their efficiency so that they can compete just as well with their bigger tech supplemented online players. The aim is to bring down operational costs, increase efficiency and push sales while still maintaining the human touch that can only be experienced in the offline world. There is far too much emphasis on taking everything online. We have forgotten our roots, our local bazaars, the friendships shared with the local shopkeeper and the fun feeling of touching, feeling and looking at the physical product before purchasing it. Here is an app handcrafted in Goa, India with love just for you. - ZunderDog Note: We understand covid and the precautions required to keep the virus from spreading and will hence also work at building a product that helps it's users decrease their risk of catching it. 
   </p>

</div>
</div>



</div>
)}
</div>


);
}
export default About;