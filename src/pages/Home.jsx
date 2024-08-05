import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (

    <div className="Home" style={{ backgroundImage: `url(images/haseeb-modi-LKySOH0mr38-unsplash.jpg)` }}>
      <h1 class="font-bold text-grey-600 text-center font-serif"> <span className="italic">WELCOME</span></h1>
      <p class='font-serif text-center text-grey-600 text-xs'>to</p>
      <h7 class= "text-center font-serif font-extrabold tracking-tighter text-blue-600 text-6xl dark:text-white"  >CPERepo</h7>
      <h3 class="">Home for project paper management and storage</h3>
      <div className="flex justify-center">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' id='/login'>Get Started</button>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-blue-700 flex">storing</div>
        <div class="bg-blue-700 border-dotted flex">management</div>
        <div class="bg-blue-700 flex">collaboration</div>
      </div>

    </div>
  );
}


export default Home;

