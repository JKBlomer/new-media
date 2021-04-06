import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyNavbar from "./MyNavbar.js";
import MyForm from "./MyForm.js";

function Example() {
    return (
        <div>
            <MyNavbar />
            <MyForm/>
            
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
