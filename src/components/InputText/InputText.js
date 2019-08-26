import React from "react";
import style from "./InputText.module.css";
import PropTypes from "prop-types";
export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    let { onKeyup } = this.props;
    onKeyup && onKeyup(e.target.value);
  }
  render() {
    let { value = "", placeHolder } = this.props;
    return (
      <input
        type="text"
        onChange={this.onChange}
        className={style.inputArea}
        placeholder={placeHolder}
        value={value}
      />
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onKeyup: PropTypes.func
};
