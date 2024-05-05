import React from 'react'
import hero from '../../assets/hero.jpg';


export default function About() {
    return (
        
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:pl-32">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white animate-slidein300">Hi I'm Rahul!
                            <br class="hidden lg:inline-block" />
                        </h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 animate-slidein500">I am a sophomore at IIT Kharagpur, pursuing BTech in the ECE department.<br/> I am very keen and inclined towards software and game development,<br/> being fluent in Java and Python programming language.
                            I am also interested in graphics <br/> and web development . I am on my way to explore new interests.</p>
                        <div class="flex justify-center animate-slidein700">
                            <button class="inline-flex text-white bg-purple-500  py-2 px-6 focus:outline-purple-500 hover:bg-transparent hover:text-purple-500 hover:border-purple-500 hover:border-2 rounded text-lg">Download CV</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img class="object-cover object-center rounded " alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </div>
    )
}
