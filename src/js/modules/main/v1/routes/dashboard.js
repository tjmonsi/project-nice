import NewArticleButton from './../components/new-article-button.jsx';

export default (React, {PageCtx, page, mount, CompLib, logo, nav}) => {
  const {
    GeneralLayout,
    Header,
    Drawer,
    SideSection
  } = CompLib;

  page('/dashboard', () => {
    mount(PageCtx, {
      classes: 'project-nice',
      template: (c) => (React.createElement(GeneralLayout, {
        fixedHeader: true,
        fixedDrawer: true,
        classes: c,
        header: (classes) => (React.createElement(Header, {
          classes
        })),
        drawer: (classes) => (React.createElement(Drawer, {
          classes,
          logo,
          nav
        })),
        sections: [
          (c2) => (React.createElement(NewArticleButton))
          // (c2) => (React.createElement(BannerSlider, {
          //   classes: c2,
          //   banner: (classes, id, width, float) => (React.createElement(Banner, {
          //     classes,
          //     width,
          //     id,
          //     float,
          //     textAlign: 'center'
          //   }))
          // })),
          // (c2) => (React.createElement(SideSection, {
          //   classes: c2,
          //   leftSide: true,
          //   leftSection: (classes) => (React.createElement(ArticleSummaryList, {
          //     classes,
          //     limit: 3
          //   })),
          //   rightSection: (classes) => (React.createElement(ArticleList, {
          //     classes,
          //     limit: 3,
          //     start: 3
          //   }))
          // }))
        ]
      }))
    });
  });
};
