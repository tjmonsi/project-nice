export default ({context, actions, classes, navpos, alwaysVisible}, onData) => {
  const {firebase} = context();
  const {auth} = actions();
  const {login, logout} = auth;
  firebase.auth().onAuthStateChanged((user) => {
    const links = [];
    if (user) {
      links.push({
        name: 'Dashboard',
        url: '/dashboard'
      });
    }

    links.push({
      name: 'Articles',
      url: '/articles'
    });
    links.push({
      name: 'Infographs',
      url: '/infographs'
    });

    if (user) {
      links.push({
        name: 'Profile',
        url: '/profile'
      });
      links.push({
        name: 'Logout',
        actionHandler: logout
      });
    } else {
      links.push({
        name: 'Login',
        actionHandler: login
      });
    }
    onData(null, {links, classes, navpos, alwaysVisible});
  });
};
