import React from 'react'
import shaurya from '../../assets/shaurya.png'
import link from '../../assets/link.png'
import FlashFeed from '../../assets/FlashFeed.png';

export default function Projects() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">Projects</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src={shaurya} alt="shaurya" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Web development</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Shaurya's Website</h2>
              <p class="leading-relaxed text-base">Contributed to the frontend development of the website of Shaurya, the annual inter-collegiate sports fest of IIT Kharagpur.</p>
              <div>
                <a href='https://shauryafest.in/'><img src={link} width="30px"></img></a>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src={FlashFeed} alt="shaurya" />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Web development</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">FlashFeed</h2>
              <p class="leading-relaxed text-base">Built a News Web App in React to display current latest news related to various fields.<br />•Used News API to fetch the latest news from the internet.<br/>
                •Used React Router DOM to create routes containing news related to topics like health, science, business, sports,</p>
              <div>
                <a href='https://github.com/rahulprasad00/Flash-Feed'><img src={link} width="30px"></img></a>
              </div>
            </div>
          </div>
          {/* <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div> */}
          {/* <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div> */}
          {/* <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div> */}
        </div>
      </div>
    </section>
  )
}
