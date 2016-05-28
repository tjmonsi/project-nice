export default {
  login: (context) => {
    const {firebase} = context;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  },
  logout: (context) => {
    const {firebase} = context;
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }, (error) => {
      // An error happened.
      console.log(error);
    });
  }
};
