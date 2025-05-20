import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import CommonButton from '../../Component/SharedComponent/Button/CommonButton';

const ErrorPage = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/Animation.json')
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error('Failed to load animation:', err));
    }, []);

    return (
        <div className='container w-[100vw] h-[90vh] flex flex-col gap-1 items-center justify-center'>
            <div className=' mt-10'>
                <CommonButton ButtonName={"Home"} NavigateLink={"/"}></CommonButton>
            </div>
            <div className='flex justify-center items-center'>
                {animationData ? (
                    <Lottie
                        className='w-[500px] h-[500px]'
                        animationData={animationData}
                        loop={true}
                    />

                ) : (
                    <p>Loading animation...</p>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;
