import React from 'react'

export default function About() {
  return (
    <div class="self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="images/haseeb-modi-LKySOH0mr38-unsplash.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-sans tracking-tight font-extrabold text-blue-700 dark:text-white">ABOUT REPOSITORY</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span class="italic">Greetings, and welcome to our project repository! Here, you'll find a wealth of innovative projects developed by our bright and dedicated computer engineering students. Our repository is a showcase of their hard work, creativity, and problem-solving skills.</span></p>
        <p class="prose max-h-24 overflow-hidden transition-all duration-500 ease-in-out" id="content hidden mb-3 font-normal text-gray-700 dark:text-gray-400"><span class= 'italic'>Feel free to explore, learn, and be inspired. Your journey through these projects will not only provide insights into the fascinating world of computer engineering but also inspire you to innovate and create.</span></p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 id="showMore>
            Show more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 hidden" id="showLess">Show Less</button>
    </div>
</div>


   
  )
}