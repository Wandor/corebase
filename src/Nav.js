import React, { Component } from "react";
import {
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBFormInline,
    MDBNav,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";

import axios from "axios";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="NavigationBar fixed-top ">
                <MDBNavbar dark expand="md" className=" topbar-main">
                    <MDBNavbarBrand>
                        <strong className="white-text cemas-nav"><span>COREBASE SOLUTIONS </span></strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline>
                                    <div className="navbar-left app-search pull-left hidden-xs">
                                        <input
                                            type="text"
                                            id="search-org"
                                            name="search-org"
                                            placeholder="Search..."
                                            className="form-control"
                                            autoComplete="off"
                                        />
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <i className="fa fa-bell" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown className={"cemas-nav-left"}>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline" >COREBASE SOLUTIONS</div>
                                    </MDBDropdownToggle>
                                    {/* <MDBDropdownMenu className="dropdown-default menu-main">
                                        <MDBDropdownItem href="#!">Open Day</MDBDropdownItem>
                                        <MDBDropdownItem href="#!"> Close Day</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">New Ticket</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Current Tickets</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Schedule Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Register Notice</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Registered Notices</MDBDropdownItem>
                                        <MDBDropdownItem href="#!"> Apply Leave</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">About CEMAS Sacco</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Updates History</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">CEMAS User Manual</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Change Password</MDBDropdownItem>
                                        <MDBDropdownItem onClick={this.handleLogout}> Logout</MDBDropdownItem>
                                    </MDBDropdownMenu> */}
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                {/* <MDBNav className="sub-nav-menu">
                    <MDBNavItem className={"cemas-nav"}>
                       <p>Some nav here</p>
                    </MDBNavItem>
                    <MDBNavItem className={"cemas-nav"}>
                        <p>Some nav here</p>
                    </MDBNavItem>
                    <MDBNavItem className={"cemas-nav"}>
                        <p>Some nav here</p>
                    </MDBNavItem>
                </MDBNav> */}
                {/* {this.props.error ? <div id="myToast" style={{ color: "rgb(255, 255, 255)", height: "20px", backgroundColor: "rgb(239, 83, 80)" }} className="text-center">
                    <div className="container mine">{this.props.errorMessage}</div>
                </div> : ""} */}
            </div>
        );
    }
}

export default Nav;
