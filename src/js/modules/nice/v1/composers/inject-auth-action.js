const injectAuthAction = (context, actions) => ({
  context: () => (context),
  login: actions.auth.login,
  logout: actions.auth.logout
});

export default injectAuthAction;
