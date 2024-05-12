import React from 'react'
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import cplusplus from '../../assets/c++.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import codeforces from '../../assets/codeforces.png';



export default function Skills(props) {
    return (
        <section class="text-gray-600 body-font " id='skills' ref={props.myref}>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">Skills</h1>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                                <img src={js} alt='javascript' />
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Javascript</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                                <img src={react} alt='React' />
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">React Js</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                                <img src={cplusplus} alt='c++' />
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">C++</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                                <img src={codeforces} alt='competitive programming' />
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Competitive Programming</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                                <img src={html} alt='HTML' />
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">HTML 5</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                                <img src={css} alt='css' />
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">CSS</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
