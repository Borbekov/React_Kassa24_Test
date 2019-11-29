import React, { Component } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import DatePicker from "./DatePicker";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getItems,
  deleteItems,
  deleteExactItem,
  signOut
} from "../../actions/authActions";

class MainPage extends Component {

  handleGetAll = () => {
    const { getItems } = this.props;
    getItems();
  }

  handleDeleteAll = () => {
    const { deleteItems } = this.props;
    deleteItems();
  }

  handleDeleteExact = (id) => {
    const { deleteExactItem } = this.props;
    deleteExactItem(id);
  }

  handleSignOut = () => {
    const { signOut } = this.props;
    signOut();
  }

  render() {
    const { data, getItems, deleteItems } = this.props;
    const tableHeader = [
      {
        title: "Avatar",
      },
      {
        title: "Title",
      },
      {
        title: "Text"
      },
      {
        title: "Date"
      },
      {
        title: "Action"
      }
    ]
    return (
      <div>
        <div className="top_buttons">
          <Button
            onClick={this.handleDeleteAll}
            name="Delete All"
            color="secondary"
          />
          <Button
            onClick={this.handleGetAll}
            name="Get All"
            color="primary"
          />
          <Button
            onClick={this.handleSignOut}
            name="Sign Out"
          />
        </div>
        <DatePicker />
        <div className="table">
          <Table header={tableHeader} data={data.data} onClick={this.handleDeleteExact}/>
        </div>
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
      getItems,
      deleteItems,
      deleteExactItem,
      signOut
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
