import React from 'react';
import icons from '../../assets/Icons/Group 9969.png';
const Footer = () => {
    return (
        <div className='footer'>
        <div className='f-t-1'>
        <div>
         <h5>CareerHub</h5>
         <p><small>There are many variations of <br />passages of Lorem Ipsum , <br />but the majority have suffered <br />alteration in some form.</small></p>
         <img src={icons} className='f-img' />
        </div>
        <div>
        <p><small><strong>Company</strong></small></p>
        <p><small>About Us</small></p>
        <p><small>Work</small></p>
        <p><small>Latest News</small></p>
        <p><small>Careers</small></p>
        </div>
        <div>
        <p><small><strong>Product</strong></small></p>
        <p><small>Prototype</small></p>
        <p><small>Plans & Pricing</small></p>
        <p><small>Customers</small></p>
        <p><small>Integrations</small></p>
        </div>
        <div>
        <p><small><strong>Support</strong></small></p>
        <p><small>Help Desk</small></p>
        <p><small>Sales</small></p>
        <p><small>Become a Partner</small></p>
        <p><small>Developers</small></p>
        </div>
        <div>
        <p><small><strong>Contact</strong></small></p>
        <p><small>524 Broadway , NYC</small></p>
        <p><small>+1 777 - 978 - 5570</small></p>
        <p><small>asif93@student.sust.edu</small></p>
        </div>
        </div>
        <div className='f-t-1'>
        <p><small>@2023 CareerHub. All Rights Reserved</small></p>
        <p><small>Powered by </small><a href="https://github.com/asif93-138" target="_blank"><strong>Asif</strong></a></p>
        </div>
     </div>
    );
};

export default Footer;