'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './destination.module.css';

function Destination() {
  const [destinationContent, setDestinationContent] = useState("manama");

  const handleLinkClick = (content) => {
    setDestinationContent(content);
  };

  return (
    <div className={styles['destination']}>
      <div className={'container'}>
        <h3>Popular Destination</h3>
        <div className={'col-md-12'}>
        <div className={styles.link}>
      <h4 className={destinationContent === 'manama' ? styles.active : ''} onClick={() => handleLinkClick('manama')}>Manama</h4>
      <h4 className={destinationContent === 'marassi' ? styles.active : ''} onClick={() => handleLinkClick('marassi')}>Marassi Beach</h4>
      <h4 className={destinationContent === 'reef' ? styles.active : ''} onClick={() => handleLinkClick('reef')}>Reef Island</h4>
      <h4 className={destinationContent === 'muharraq' ? styles.active : ''} onClick={() => handleLinkClick('muharraq')}>Al Muharraq</h4>
      <h4 className={destinationContent === 'arad' ? styles.active : ''} onClick={() => handleLinkClick('arad')}>Arad Fort</h4>
    </div>
        </div>
        <div className={styles['destination-des']}container >
          {destinationContent === 'manama' && (
            <div className={'row'}>
              <div className={'col-md-6'}>
                <img src='./images/manama.jpg' alt='Manama'/>
              </div>
              <div className={'col-md-6'}>
                <h3>Manama</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
              </div>
            </div>
          )}
          {destinationContent === 'marassi' && (
            <div className={'row'}>
              <div className='col-md-6'>
                <img src='./images/marassi beach.jpg' alt='Marassi Beach'/>
              </div>
              <div className={'col-md-6'}>
                <h3>Marassi Beach</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
 
              </div>
            </div>
          )}
          {destinationContent === 'reef' && (
            <div className={'row'}>
              <div className={'col-md-6'}>
                <img src='./images/reefisland.jpg' alt='Reef Island'/>
              </div>
              <div className={'col-md-6'}>
                <h3>Reef Island</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
 
              </div>
            </div>
          )}
            {destinationContent === 'muharraq' && (
            <div className={'row'}>
              <div className={'col-md-6'}>
                <img src='./images/almuraq.jpg' alt='Reef Island'/>
              </div>
              <div className={'col-md-6'}>
                <h3>Al Muharraq</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
 
              </div>
            </div>
          )}

          {destinationContent === 'arad' && (
            <div className={'row'}>
              <div className={'col-md-6'}>
                <img src='./images/ad fort.jpg' alt='Reef Island'/>
              </div>
              <div className={'col-md-6'}>
                <h3>Arad Fort</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid aspernatur dolore autem quasi, minima, quod ut quam consequuntur optio dolorum praesentium tempore magnam nostrum voluptate, temporibus vitae dolorem ducimus?</p>
 
              </div>
            </div>
          )}
          
          
        </div>
      </div>
    </div>
  );
}

export default Destination;
