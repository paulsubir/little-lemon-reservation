import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>© 2024 Little Lemon Restaurant. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px',
};

export default Footer;