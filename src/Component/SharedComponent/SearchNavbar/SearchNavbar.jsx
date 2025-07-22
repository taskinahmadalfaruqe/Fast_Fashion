import { FaBars, FaSearch } from 'react-icons/fa';
import Cart from '../../NavbarCoponets/Cart/Cart';
import { CgProfile } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';

function SearchNavbar() {
    return (
        <div className='bg-[#f5f5f5] dark:bg-Black_Color border-b-2 border-Blue_color'>
            <div className="container" style={{ margin: "0px auto 0px", padding:" 0px 10px" }}>
                <div className=' flex justify-between items-center gap-5 '>
                    <div className='flex justify-start items-center gap-2 '>
                        <FaBars />
                        <span className='hidden'>Shop By Category</span>
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
                            <button className="btn text-xl" popoverTarget="popover-1" style={{ anchorName: "--anchor-1", padding:'2px' } /* as React.CSSProperties */}>
                                <CgProfile></CgProfile>
                                <IoMdArrowDropdown></IoMdArrowDropdown>
                            </button>

                            <ul className="dropdown menu w-24  shadow-sm bg-Primary_Color dark:bg-Blue_color rounded-box mt-3"
                                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1", position: 'absolute', buttom: 0, right: 0 } /* as React.CSSProperties */}>
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
        </div>
    )
}

export default SearchNavbar;
