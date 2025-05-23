import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CommonButton = ({ ButtonName, NavigateLink }) => {
  return (
    <Link
      to={NavigateLink}
      className="relative inline-flex items-center justify-center px-2 md:px-6 py-3 overflow-hidden font-medium transition-all bg-Primary_Color rounded hover:bg-Blue_color dark:bg-Blue_color  group border-[1px] border-Black_Color dark:border-White_Color text-Black_Color dark:text-White_Color hover:text-White_Color dark:hover:text-Blue_colorgit"
    >
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-Black_Color dark:bg-White_Color absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-center transition-colors duration-400 ease-in-out text-base lg:text-sm xl:text-base">
        {ButtonName}
      </span>
    </Link>
  );
};

CommonButton.propTypes = {
  ButtonName: PropTypes.string.isRequired,
  NavigateLink: PropTypes.string.isRequired,
};

export default CommonButton;
