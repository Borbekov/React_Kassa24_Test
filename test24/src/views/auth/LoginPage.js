import React, { Component } from "react";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getItems } from "../../actions/authActions";

class LoginPage extends Component {
  
  handleSignIn = () => {
    const { getItems } = this.props;
    getItems();
  }

  render() {
    const { getItems, data } = this.props;
    if(!!data.data) {
      return <Redirect to="/" />
    }
    return (
      <div className="login_btn">
        <Button
          onClick={this.handleSignIn}
          name="Sign in"
          color="primary"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getItems
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
