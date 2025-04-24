import React from 'react';
import { CiDark } from 'react-icons/ci';

const HomePage = () => {
    return (
        <div>
            <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <div>
                    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                        <CiDark></CiDark>
                    </span>
                </div>
                <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
        </div >
    );
};

export default HomePage;