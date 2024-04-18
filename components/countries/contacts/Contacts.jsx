import React from 'react';
import './contacts.css';
import Link from 'next/link';

const Contacts = () => {
  return (
    <div className='contact'>

      <div className='container'>
        <h3>Useful Contacts</h3>
          <div className='row'>


            <div className='col-md-3'>

            <div className='contact-box'>
            <h4>Hotel</h4>
            <Link href="#">+91 9874561230</Link>
            </div>

            </div>

            <div className='col-md-3'>

               <div className='contact-box'>
            <h4>Taxi</h4>
            <Link href="#">+91 9874561230</Link>
            </div>

            </div>

            <div className='col-md-3'>

            <div className='contact-box'>
            <h4>Police</h4>
            <Link href="#">+91 9874561230</Link>
            </div>

                

            </div>

            

          </div>

      </div>
        
    </div>
  );
}

export default Contacts;
