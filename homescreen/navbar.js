const NavBar = () => {
  const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-around';
    nav.style.alignItems = 'center';
    nav.style.padding = '1em';
    nav.style.backgroundColor = 'white';


  const links = [
        { name: 'Home', href: './simple.html', icon: 'home.png' },
        { name: 'Calendar', href: '../calendar/index.js', icon: 'calendar.png' },
        { name: 'Notifications', href: './notifications.js', icon: 'notfications.png' },
        { name: 'Friends', icon: 'user.png' }
    ];
  
  links.forEach(link => {
        const a = document.createElement('a');
        a.style.color = 'white';
        a.style.textDecoration = 'none';
        a.style.padding = '0.5em';
        a.style.display = 'flex';
        a.style.alignItems = 'center';

        const icon = document.createElement('img');
        icon.src = link.icon;
        icon.alt = link.name;
        icon.style.width = '20px';
        icon.style.height = '20px';
        icon.style.marginRight = '8px';
        // Hover effect for links
        a.addEventListener('mouseenter', () => {
            a.style.color = '#DCEDE9';
        });
        a.addEventListener('mouseleave', () => {
            a.style.color = 'white';
        });

        nav.appendChild(a);
    });

    return nav;
}

export default NavBar;
