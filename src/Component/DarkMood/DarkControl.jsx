// darkMode.js or inside Navbar.js
export const handelDarkMood = () => {
  const html = document.documentElement;
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
