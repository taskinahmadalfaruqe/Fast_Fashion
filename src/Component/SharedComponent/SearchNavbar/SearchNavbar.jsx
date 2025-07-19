import { FaBars, FaSearch } from 'react-icons/fa';
import Cart from '../../NavbarCoponets/Cart/Cart';
import { CgProfile } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';

function SearchNavbar() {
    return (
        <div className="container  ">
            <div className=' flex justify-between items-center'>
                <div className='flex justify-start items-center gap-2 '>
                    <FaBars />
                    <span>Shop By Category</span>
                </div>
                <div className='Searcbox'>
                    <div className='flex justify-center items-center gap-3'>
                        <input type="text" placeholder="Search Products" className="input dark:bg-Dark_BG_Color" />
                        <span>
                            <FaSearch></FaSearch>
                        </span>
                    </div>
                </div>
                <div className='py-2 flex justify-center items-center gap-2'>
                    <div>
                        <button className="btn text-xl" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                            <CgProfile></CgProfile>
                            <IoMdArrowDropdown></IoMdArrowDropdown>
                        </button>

                        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                            <li><Link to={'/User/Login'}>Login</Link></li>
                            <li><Link to={'/auth/newUser/signUpPage'}>Sign UP</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchNavbar;
