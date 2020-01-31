import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import Functions from "./functions";
import Axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert/lib/dist/SweetAlert";

const requiredFields = ["fname", "lname", "cellphone"];
class CreateCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      towns: [],
      genders: [],
      customers: [],
      FNAME: "",
      LNAME: "",
      CELLPHONE: "",
      EMAIL: "",
      DOB: "",
      TOWN_CODE: "",
      GENDER_CODE: "",
      COUNTRY_CODE: "",
      CREDITLIMIT: "",
      BLOCKED: "",
      error: false,
      errorMessage: ""
    };

    this.funcs = new Functions(this, "FNAME", "LNAME", "CELLPHONE");

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.funcs.getCountries();
    this.funcs.getTowns();
    this.funcs.getGenders();
  }

  handleClick() {
    const { fname, lname, cellphone } = this.state;

    const values = {
      fname, lname, cellphone
    };

    const empty = [];
    
    requiredFields.forEach(field =>
      values[`${field}`] === "" ? empty.push(field) : false
    );


    if (empty.length === 0) {

      let data = {
        FNAME: this.state.FNAME,
        LNAME: this.state.LNAME,
        CELLPHONE: this.state.CELLPHONE,
        EMAIL: this.state.EMAIL,
        DOB: this.state.DOB,
        TOWN_CODE: this.state.TOWN_CODE,
        GENDER_CODE: this.state.GENDER_CODE,
        COUNTRY_CODE: this.state.COUNTRY_CODE,
        CREDITLIMIT: this.state.CREDITLIMIT,
        BLOCKED: this.state.BLOCKED
      };
      Axios.post("http://192.168.0.77.20000/api/CUSTOMER", data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    } else {
      this.setState({
        error: true,
        errorMessage: "It appears there are required fields you haven't filled!"
      });
      empty.forEach(emptyField =>
        document.getElementById(`${emptyField}`).classList.add("required")
      );
      setTimeout(() => {
        this.setState({ error: false, errorMessage: "" });
      }, 8000);
    }
  }

  confirmRefund() {
    this.setState({
      alert: (
        <SweetAlert
          warning
          confirmBtnText="Proceed!"
          showCancel
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="primary"
          title="Are you sure?"
          onConfirm={this.handleSubmit}
          onCancel={this.hideAlert}
        >
          Please Confirm Submission
        </SweetAlert>
      )
    });
  }

  render() {
    return (
      <div className="main-content">
        <Nav error={this.state.error} errorMessage={this.state.errorMessage} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <SideBar />
            </div>
            <div className="col-sm-10">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-left">Customer</h3>
                  <p className="panel-sub-title font-13 text-muted text-left">
                    Create a new customer
                  </p>
                </div>
                <div className="panel-body">
                  <label className="bg-default boldtext text-white badge">
                    CUSTOMER INFORMATION
                  </label>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            First Name
                          </label>
                          <div className="col-md-8">
                            <input
                              type="text"
                              id="fname"
                              name="FNAME"
                              value={this.state.FNAME}
                              onChange={this.funcs.handleChange}
                              className="form-control field-required"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Second Name
                          </label>
                          <div className="col-md-8">
                            <input
                              type="text"
                              id="lname"
                              name="LNAME"
                              onChange={this.funcs.handleChange}
                              value={this.state.LNAME}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Date Of Birth
                          </label>
                          <div className="col-md-8">
                            <input
                              type="date"
                              id="DOB"
                              name="DOB"
                              onChange={this.funcs.handleChange}
                              value={this.state.DOB}
                              className="form-control field-required"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Gender
                          </label>
                          <div className="col-md-8">
                            <select
                              type="text"
                              id="GENDER_CODE"
                              onChange={this.funcs.handleChange}
                              name="GENDER_CODE"
                              className="form-control"
                            >
                              <option value="" />
                              {this.state.genders.map((gender, key) => {
                                return (
                                  <option key={key} value={gender.GENDER_CODE}>
                                    {gender.GENDER_NAME}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Town
                          </label>
                          <div className="col-md-8">
                            <select
                              type="text"
                              id="TOWN_CODE"
                              onChange={this.funcs.handleChange}
                              name="TOWN_CODE"
                              className="form-control"
                            >
                              <option value="" />
                              {this.state.towns.map((town, key) => {
                                return (
                                  <option key={key} value={town.TOWN_CODE}>
                                    {town.TOWN_NAME}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="col-md-4 control-label text-right text-dark">
                            Country
                          </label>
                          <div className="col-md-8 ">
                            <select
                              type="text"
                              id="COUNTRY_CODE"
                              onChange={this.funcs.handleChange}
                              name="COUNTRY_CODE"
                              className="form-control"
                            >
                              <option value="" />
                              {this.state.countries.map((country, key) => {
                                return (
                                  <option
                                    key={key}
                                    value={country.COUNTRY_CODE}
                                  >
                                    {country.COUNTRY_NAME}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Phone Number
                          </label>
                          <div className="col-md-8">
                            <CurrencyFormat
                              id="cellphone"
                              onChange={this.funcs.handleChange}
                              name="CELLPHONE"
                              value={this.state.CELLPHONE}
                              // onChange={(e) => handleChange(e, "primaryPhoneNumber")}
                              className="form-control field-required"
                              required=""
                            />
                            {/* {values.primaryPhoneField ?
                            <p style={{color: "red"}}>*enter a valid phone number (10 characters)</p> : null} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Email Address
                          </label>
                          <div className="col-md-8">
                            <input
                              type="email"
                              id="EMAIL"
                              name="EMAIL"
                              onChange={this.funcs.handleChange}
                              value={this.state.EMAIL}
                              // onChange={(e) => handleChange(e, "primaryPhoneNumber")}
                              className=" form-control field-required"
                              required=""
                            />
                            {/* {values.emailField ?
                            <p style={{color: "red"}}>*enter a valid email address (example.com)</p> : null} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Credit Limit
                          </label>
                          <div className="col-md-8">
                            <CurrencyFormat
                              thousandSeparator={true}
                              type="text"
                              id="CREDITLIMIT"
                              onChange={this.funcs.handleChange}
                              name="CREDITLIMIT"
                              value={this.state.CREDITLIMIT}
                              className="form-control fill-text field-required"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="row">
                          <label className="control-label text-right  col-md-4">
                            Blocked
                          </label>
                          <div className="col-md-8">
                            <input type="checkbox" value="BLOCKED" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer text-right">
                  <span>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-secondary btn-sm mr-lg--2"
                      onClick={this.handleClick}
                      id="createcustomer"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

export default CreateCustomer;
