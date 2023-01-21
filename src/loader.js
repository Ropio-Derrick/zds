import React from "react"
import Cube from "./Images/cube.png"

const Loader = () => {


    return (
        <div className="bg-black flex flex-col justify-center items-center h-screen " >
            <img src={Cube} className="h-20 animate-bounce  opacity-[40%] rotate-90" />
            <div className="flex justify-center items-center flex-row">
                <div class="bg-green-800 p-1 m-2 w-4 h-4 rounded-full delay-200 animate-bounce blue-circle"></div>
                <div class="bg-green-600 p-1 m-2 w-4 h-4 rounded-full delay-600 animate-bounce green-circle"></div>
                <div class="bg-green-300 p-1 m-2 w-4 h-4 rounded-full delay-400 animate-bounce red-circle "></div>
            </div>
        </div>
    );
};

export default Loader;