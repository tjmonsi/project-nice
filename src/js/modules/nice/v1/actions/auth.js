export default {
  login: (context) => {
    const {firebase} = context;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
    // firebase.auth().getRedirectResult().then((result) => {
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const token = result.credential.accessToken;
    //     console.log(token);
    //     console.log(result);
    //     // ...
    //   }
    //   // The signed-in user info.
    //   const user = result.user;
    //   console.log(user);
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   const credential = error.credential;
    //   // ...;
    //   console.log(errorCode);
    //   console.log(errorMessage);
    //   console.log(email);
    //   console.log(credential);
    // });
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
