export default (React, {PageCtx, page, mount, CompLib, logo, nav}) => {
  const {
    GeneralLayout,
    Header,
    Drawer,
    SideSection
  } = CompLib;

  page('/article/edit/:id', (ctx) => {
    const {id} = ctx.params;
    mount(PageCtx, {
      classes: 'project-nice',
      template: (c) => (React.createElement(GeneralLayout, {
        fixedHeader: true,
        classes: c,
        header: (classes) => (React.createElement(Header, {
          classes,
          logo,
          topRight: nav
        })),
        drawer: (classes) => (React.createElement(Drawer, {
          classes,
          logo,
          nav
        })),
        sections: [
        ]
      }))
    });
  });
};
