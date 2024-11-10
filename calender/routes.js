const routes = {
  '/home': () => showSection('Home'),
  '/calendar': () => showSection('Calendar'),
  '/user': () => showSection(''),
  '/notifications': () => showSection('')
};

// Function to show the specific section based on route
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.route').forEach(section => section.style.display = 'none');
  
  // Show the section corresponding to the current route
  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Router initialization to handle the initial load and route changes
function router() {
  // Get the current path from the hash
  const path = window.location.hash.slice(1) || '/';
  
  // Call the route's function if it exists, otherwise show home
  const routeAction = routes[path] || routes['/'];
  routeAction();
}

// Set up event listeners
window.addEventListener('hashchange', router); 
window.addEventListener('load', router);     

// Trigger the router to initialize the page correctly
router();
