import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('mood') || 'light';
    document.documentElement.classList.add(savedMode);
    setIsDark(savedMode);
  }, []);

  const handleDarkMode = () => {
    const html = document.documentElement;

    if (isDark === 'light') {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('mood', 'dark');
      setIsDark('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('mood', 'light');
      setIsDark('light');
    }
  };

  return (
    <button
      onClick={handleDarkMode}
      className="relative group p-1 cursor-pointer rounded-full bg-Orange_Color text-White_Color border-[2px] border-White_Color"
    >
      <span className="dark:hidden relative">
        <MdDarkMode className="text-3xl font-bold" />
        <div className="absolute right-5 -bottom-10 mb-2 bg-Orange_Color text-White_Color text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-[1000]">
          Switch To Dark
        </div>
      </span>

      <span className="hidden dark:inline relative">
        <MdLightMode className="text-3xl font-bold" />
        <div className="absolute right-5 -bottom-10 mb-2 bg-Orange_Color text-White_Color text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-[1000]">
          Switch To Light
        </div>
      </span>
    </button>
  );
};

export default DarkModeToggle;