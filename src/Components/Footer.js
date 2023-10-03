import React from "react";
function Footer(){
    const footerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '1rem',
        color: 'white',
        marginTop: '0rem', 
      };
    return(
        <div style={footerStyle}>
        <footer>
          <div className="container mx-auto text-center text-white">
            <p>
              &copy; {new Date().getFullYear()} ArchDaily. All rights
              reserved.
            </p>
            <p>Contact: contact@archdaily.com</p>
          </div>
        </footer>
      </div>
    );
}
export default Footer;