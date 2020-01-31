/*
*utilities tabsets
 */
import React from "react";
import Collapsible from "react-collapsible";
import {Link} from "react-router-dom";

class SideBar extends React.Component {
    render() {
        return (
            <div>
                <div className="row cmas-payroll-left">
                    <Collapsible trigger="CREATE CUSTOMER">
                    <p><Link to="/Create-Customer">Create Customer</Link></p>
                    </Collapsible>
                    <Collapsible trigger="INVOICES">
                    <p><Link to="/invoices/Customer-Invoices">Customer Invoices</Link></p>
                    </Collapsible>
                    <Collapsible trigger="NOTES">
                        <p><Link to="/notes/Credit-Note">Credit Note</Link></p>
                    </Collapsible>
                    <Collapsible trigger="JOURNALS">
                        <p><Link to="/journals/Customer-Journals">Customer Journals</Link></p>
                    </Collapsible>
                </div>
            </div>
        );
    }
}

export default SideBar