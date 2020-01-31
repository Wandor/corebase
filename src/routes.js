import Login from "./login";
import CreateCustomer from "./CreateCustomer";

// This component contains route definitions for the project
const routes = [
    { 
        path: "/", 
        exact: true, 
        name: "Login",
        component: Login 
    },
    { 
        path: "/Create-Customer", 
        exact: true, 
        name: "Create Customer",
        component: CreateCustomer 
    }
];

export default routes;
