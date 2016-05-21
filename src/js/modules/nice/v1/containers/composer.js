export const injectAuthAction = (context, actions) => ({
  context: () => (context),
  login: actions.auth.login,
  logout: actions.auth.logout
});

export const composeAuth = ({context}, onData) => {
  const {firebase} = context();
  firebase.auth().getRedirectResult().then((result) => {
    const {user} = result;
    if (user) {
      onData(null, {authData: user});
    } else {
      firebase.auth().onAuthStateChanged((authData) => {
        if (authData) {
          onData(null, {authData});
        } else {
          onData(null, {});
        }
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
    console.log(error)
    onData(null, {});
  });
};

export const composeLogo = ({logo}, onData) => {
  onData(null, {logo});
};

export const composeAuthLink = ({authLink}, onData) => {
  onData(null, {authLink});
};
