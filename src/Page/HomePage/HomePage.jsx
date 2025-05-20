import React from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';

const HomePage = () => {
    return (
        <div>
            <div className="bg-white dark:bg-Primary_Color rounded-lg px-6 py-8 ring shadow-xl ">
                <div>
                    <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
        </div >
    );
};

export default HomePage;