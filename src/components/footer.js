import React from 'react';
import './footer.css';

const copyRightYear = () => {
    let date = new Date(), fullYear = date.getFullYear();
    return <span>{fullYear}</span>;
};

const Footer = () => {
   return(
    <div className="col-md-12">
        <div className="footer">
           &copy;&nbsp;{copyRightYear()} Redux Sagas.
        </div>
    </div>  
   )
}

export default Footer;