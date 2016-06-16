import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

class Form extends React.Component {
  constructor() {
    super();
    this.sections = {};
    this.data = {};
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(value, name, event) {
    const {onChangeDispatch = () => {}} = this.props;
    this.data[name] = value;
    onChangeDispatch(this.data);
    // console.log(value, element, name, event);
    // console.log(this.sections[name].getValue())
  }
  renderActions() {
    const {actions, classes} = this.props;
    console.log(actions);
    return actions ? actions.map((action, key) => {
      return action && typeof action === 'function' ? action(classes, this.data) : null;
    }) : null;
  }
  renderSections() {
    const {data = {}, sections, classes} = this.props;
    return sections ? sections.map((sectionObj, key) => {
      const {section, name} = sectionObj;
      if (name) {
        const value = data[name];
        const ref = (c) => {
          this.sections[name] = c;
        };
        return section && typeof section === 'function' ?
          section(classes, name, value, this.onChangeHandler, ref) : null;
      }
      return section && typeof section === 'function' ? section(classes) : null;
    }) : null;
  }
  render() {
    const {
      classes,
      optionalClasses,
      shadow
    } = this.props;
    const suffix = `${prefix}-form`;
    const className = classNames(
      shadow && !isNaN(shadow) && (
        parseInt(shadow, 10) === 2,
        parseInt(shadow, 10) === 3,
        parseInt(shadow, 10) === 4,
        parseInt(shadow, 10) === 8,
        parseInt(shadow, 10) === 16
      ) ? `mdl-shadow--${shadow}p` : null,
      suffix,
      classList(classes, suffix),
      classList(optionalClasses, suffix)
    );
    return (
      <div
        className={className}
      >
        {this.renderSections()}
        <div className="">
          {this.renderActions()}
        </div>
      </div>
    );
  }
}

export default Form;
