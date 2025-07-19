import React from 'react'
import FindPathname from '../../../Hooks/FindPathname/FindPathname'
import CommonButton from '../Button/CommonButton'
import { FaBars } from 'react-icons/fa';

function SearchNavbar() {
    return (
        <div className='container'>
            <div className='CategoryBar'>
                <FaBars />
                <span>Shop By Category</span>
            </div>
            <div className='Searcbox'>
                <div className='text-Black_Color'>
                    <input type="text" placeholder="Type here" className="input" />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default SearchNavbar;
