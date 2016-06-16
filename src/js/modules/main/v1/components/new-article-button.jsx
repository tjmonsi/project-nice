import React from 'react';
import * as CompLib from './../../../comp-lib';
const {Button} = CompLib;

class NewArticleButton extends React.Component {
  render() {
    const style = {
      textAlign: 'center',
      width: '100%',
      margin: 15
    };
    return (
      <div
        className="project-nice-new-article-button"
        style={style}
      >
        <Button
          withRipple = {true}
          isRaised = {true}
          colored = "primary"
          anchor = {true}
          href = "/article/add"
          label = "New Article"
        />
      </div>
    );
  }
}

export default NewArticleButton;
