import React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import Axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

class Functions {
  constructor(that, ...requiredFields) {
    this.BASE_URL = window.Env.baseUrl + "/";
    this.that = that;
    this.requiredFields = requiredFields;
    this.confirmSubmit = this.confirmSubmit.bind(that);
    this.initialState = JSON.stringify(that.state);
  }

  getGenders = () => {
    Axios.get(`${this.BASE_URL}api/gender`, this.CONFIG).then(response => {
      console.log(response);
      this.that.setState({
        genders: response.data
      });
    });
  };

  getCountries = () => {
    Axios.get(`${this.BASE_URL}api/country`, this.CONFIG).then(response => {
      console.log(response);
      this.that.setState({
        countries: response.data
      });
    });
  };

  getTowns = () => {
    Axios.get(`${this.BASE_URL}api/town`, this.CONFIG).then(response => {
      console.log(response);
      this.that.setState({
        towns: response.data
      });
    });
  };

  getCustomer = () => {
    Axios.get(`${this.BASE_URL}api/customer`, this.CONFIG).then(response => {
      this.that.setState({
        customers: response.data
      });
    });
  };

  confirmSubmit = () => {
    this.that.setState({
      alert: (
        <SweetAlert
          warning
          confirmBtnText="Proceed!"
          showCancel
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="primary"
          title="Are you sure?"
          onConfirm={this.proceedSubmission}
          onCancel={this.hideAlert}
        >
          Please Confirm Submission
        </SweetAlert>
      )
    });
  };

  checkEmpty = () => {
    const empty = [];
    this.requiredFields.forEach(field =>
      this.that.state[`${field}`] === "" ? empty.push(field) : false
    );

    if (empty.length === 0) {
      return false;
    } else {
      this.that.setState({
        error: true,
        errorMessage: "It appears there are required fields you haven't filled!"
      });
      empty.forEach(emptyField =>
        document.getElementById(`${emptyField}`).classList.add("required")
      );
      setTimeout(() => {
        this.that.setState({ error: false, errorMessage: "" });
      }, 8000);
      return true;
    }
  };

  handleChange = event => {
    let target = event.target;
    let name = target.name;
    this.that.setState({
      [name]: target.value
    });
  };
}

export default Functions;
