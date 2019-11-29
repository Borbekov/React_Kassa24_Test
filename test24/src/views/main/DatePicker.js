import React, { Component } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import InputMask from 'react-input-mask';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterDate } from "../../actions/filterActions";

class DatePicker extends Component{
  state = {
    from: "",
    to: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleClick = () => {
    const { filterDate } = this.props;
    filterDate(this.state)
    this.setState({
      from: "",
      to: "",
    })
  }

  render() {
    const { from, to } = this.state;
    return(
      <div className="dates">
        <div>
          <InputMask
            mask="99/99/9999"
            value={from}
            onChange={this.handleChange}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="From"
                id="from"
              />
            )}
          </InputMask>
        </div>
        <div>
          <InputMask
            mask="99/99/9999"
            value={to}
            onChange={this.handleChange}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="To"
                id="to"
              />
            )}
          </InputMask>
        </div>
        <div className="date_btn">
          <Button
            onClick={this.handleClick}
            name="Find"
            color="primary"
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      filterDate
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(DatePicker);
