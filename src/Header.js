import React from 'react';
//Functional Component
function Header(props) {
    return (
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <strong>{props.siteName}</strong>
                </a>
            </div>
        </div>
    );
}
export default Header;