import { Link, useLocation } from "react-router-dom";

const FindPathname = () => {
    let { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className="flex items-center gap-1 tex-xl mb-5 dark:text-White_Color">
            <Link to={"/"} className="hover:text-Blue_color transition-all duration-75">Home</Link>
            <span>{'>'}</span>
            <Link to={pathname} className="hover:text-Blue_color transition-all duration-75">{pathname.replace(/^\//, '') || "Home"}</Link>

        </div >
    );
};

export default FindPathname;