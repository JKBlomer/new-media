import React from 'react';
import ReactDOM from 'react-dom';

import MyNavbar from "./MyNavbar.js";
import MyForm from "./MyForm.js";

function MyApp() {
    return (
        <div>
            <MyNavbar />
            <MyForm/>
            
        </div>
    );
}

export default MyApp;

if (document.getElementById('my-app')) {
    ReactDOM.render(<MyApp />, document.getElementById('my-app'));
}