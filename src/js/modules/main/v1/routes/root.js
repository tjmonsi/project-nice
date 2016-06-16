import BannerSlider from './../containers/banner-slider';
import Banner from './../containers/banner';
import ArticleSummaryList from './../containers/article-summary-list';
import ArticleList from './../containers/article-list';

export default (React, {PageCtx, page, mount, CompLib, logo, nav}) => {
  const {
    GeneralLayout,
    Header,
    Drawer,
    SideSection
  } = CompLib;

  page('/', () => {
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
          (c2) => (React.createElement(BannerSlider, {
            classes: c2,
            banner: (classes, id, width, float) => (React.createElement(Banner, {
              classes,
              width,
              id,
              float,
              textAlign: 'center'
            }))
          })),
          (c2) => (React.createElement(SideSection, {
            classes: c2,
            leftSide: true,
            leftSection: (classes) => (React.createElement(ArticleSummaryList, {
              classes,
              limit: 3
            })),
            rightSection: (classes) => (React.createElement(ArticleList, {
              classes,
              limit: 3,
              start: 3
            }))
          }))
        ]
      }))
    });
  });
};
