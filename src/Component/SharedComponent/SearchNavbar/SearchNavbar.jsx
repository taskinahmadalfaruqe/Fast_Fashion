import React from 'react'
import FindPathname from '../../../Hooks/FindPathname/FindPathname'
import CommonButton from '../Button/CommonButton'

function SearchNavbar() {
    return (
        <div>
            <FindPathname></FindPathname>
            <CommonButton ButtonName={"Shop"}></CommonButton>
        </div>
    )
}

export default SearchNavbar
