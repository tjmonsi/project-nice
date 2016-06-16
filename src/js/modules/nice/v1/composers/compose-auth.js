export default ({context}, onData) => {
  const {firebase} = context();
  firebase.auth().getRedirectResult().then((result) => {
    let profile = null;
    const {user} = result;
    if (user) {
      profile = user;
      onData(null, {authData: user});
    } else {
      firebase.auth().onAuthStateChanged((authData) => {
        profile = authData;
        onData(null, {authData});
      });
    }
    if (profile) {
      const {display_name, email, avatar, uid} = profile;
      firebase.database().ref(`/users/profiles/${uid}`).set({
        display_name,
        email,
        avatar,
        date_updated: new Date()
      });
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
    console.log(error);
    onData(null, {});
  });
};
