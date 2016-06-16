import Article from './../containers/article-preview';
import NewArticle from './../containers/new-article';
import random from 'random-js';

export default (React, {PageCtx, page, mount, CompLib, logo, nav}) => {
  const {
    GeneralLayout,
    Header,
    Drawer,
    Form,
    TextField,
    MarkdownEditor,
    Toggle,
    Banner,
    Button
  } = CompLib;

  const r = random();
  const id = r.string(10);

  const classes = 'project-nice';

  page('/article/add', () => {
    mount(PageCtx, {
      classes: 'project-nice',
      template: () => (React.createElement(GeneralLayout, {
        fixedHeader: true,
        classes,
        header: () => (React.createElement(Header, {
          classes,
          logo,
          topRight: nav
        })),
        drawer: () => (React.createElement(Drawer, {
          classes,
          logo,
          nav
        })),
        sections: [
          () => (React.createElement(NewArticle, {
            classes,
            id,
            React,
            Form,
            TextField,
            MarkdownEditor,
            Toggle,
            Article,
            Button,
            Banner
          }))

        ]
      }))
    });
  });
};
