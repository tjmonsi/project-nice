export const injectAuthAction = (context, actions) => ({
  context: () => (context),
  login: actions.auth.login,
  logout: actions.auth.logout
});

export const composeAuth = ({context}, onData) => {
  // const {location, Firebase} = context();
  // const ref = new Firebase(location);
  // ref.onAuth((authData) => {
  //   onData(null, {authData});
  // });
};

export const composeLogo = ({logo}, onData) => {
  onData(null, {logo});
};
