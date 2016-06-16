export default ({
  context,
  actions,
  id,
  classes,
  React,
  TextField,
  Form,
  MarkdownEditor,
  Toggle,
  Article,
  Button,
  Banner
}, onData) => {

  const {article} = actions();
  const {livePreview, addArticle} = article;

  const onChangeDispatch = (data) => {
    livePreview(id, data);
  };

  const columns = 2;

  const sections = [
    () => (React.createElement(Form, {
      id,
      onChangeDispatch,
      sections: [
        {
          name: 'title',
          section: (c, name, value, onChangeHandler, ref) =>
            (React.createElement(TextField, {
              placeholder: 'Title',
              classes,
              onChangeHandler,
              name,
              value,
              ref,
              shouldFloat: true
            }))
        },
        {
          name: 'author',
          section: (c, name, value, onChangeHandler, ref) =>
            (React.createElement(TextField, {
              placeholder: 'Author',
              classes,
              onChangeHandler,
              name,
              value,
              ref,
              shouldFloat: true
            }))
        },
        {
          name: 'image_url',
          section: (c, name, value, onChangeHandler, ref) =>
            (React.createElement(TextField, {
              placeholder: 'Image URL',
              classes,
              onChangeHandler,
              name,
              value,
              ref,
              shouldFloat: true
            }))
        },
        {
          name: 'excerpt',
          section: (c, name, value, onChangeHandler, ref) =>
            (React.createElement(TextField, {
              placeholder: 'Short Summary',
              classes,
              onChangeHandler,
              name,
              value,
              ref,
              shouldFloat: true
            }))
        },
        {
          name: 'body',
          section: (c, name, value, onChangeHandler, ref) =>
            (React.createElement(MarkdownEditor, {
              placeholder: 'Text Body',
              classes,
              onChangeHandler,
              name,
              value,
              ref,
              rows: 10,
              shouldFloat: true
            }))
        },
        {
          name: 'published',
          section: (c, name, value, onChangeHandler, ref) =>
            (React.createElement(Toggle, {
              label: 'Publish on Save',
              classes,
              onChangeHandler,
              name,
              value,
              ref,
              type: 'switch'
            }))
        }
      ],
      actions: [
        (c, data) => (React.createElement(Button, {
          label: 'Submit',
          withRipple: true,
          isRaised: true,
          colored: 'primary',
          actionHandler: () => {
            addArticle(data);
          }
        }))
      ]
    })),
    () => (React.createElement(Article, {
      id,
      classes,
      Banner
    }))
  ];

  onData(null, {classes, sections, onChangeDispatch, columns});
};
