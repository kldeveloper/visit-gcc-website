import React from 'react'
import CountryBanner from '../../components/countries/banner/CountryBanner'
import Requirments from '@/components/countries/requirments/Requirments'
import About from '@/components/countries/about/About'
import Events from "@/components/home/events/Events"
import Destination from '@/components/countries/destination/Destination'
import Contacts from '@/components/countries/contacts/Contacts'
import SliderOne from '@/components/slider/SliderOne';
import styles from '../packages/packages.module.css';





const page = () => {

  const packagesData = [
    { id: 1, heading: 'Dubai Miracle Garden', price: '85.00', ratings: '4.7/5 (685)', image: "../images/blog/01.jpg",slug:"Dubai-Miracle-Garden" },
    { id: 2, heading: 'Dubai Big Bus City Tour', price: '202.00', ratings: '4.7/5 (685)', image: "../images/blog/02.jpg",slug:"Dubai-Big-Bus-City-Tour" },
    { id: 3, heading: 'Ultimate Desert Safari', price: '250.20', ratings: '4.7/5 (685)', image: "../images/blog/03.jpg",slug:"Ultimate-Desert-Safari" },
    { id: 4, heading: 'Global Village Dubai', price: '105.20', ratings: '4.7/5 (685)', image: "../images/blog/04.jpg",slug:"Global-Village-Dubai" },
    { id: 5, heading: '3D World Selfie Museum', price: '99.22', ratings: '4.7/5 (685)', image: "../images/blog/04.jpg",slug:"3D-World-Selfie-Museum" },
    { id: 5, heading: 'Burj Al Arab', price: '99.22', ratings: '4.7/5 (685)', image: "../images/blog/04.jpg",slug:"Burj-Al-Arab" },
    { id: 5, heading: 'Ski Dubai', price: '99.22', ratings: '4.7/5 (685)', image: "../images/blog/04.jpg",slug:"Ski-Dubai" },
    { id: 5, heading: 'Dinner in the Sky', price: '99.22', ratings: '4.7/5 (685)', image: "../images/blog/04.jpg",slug:"Dinner-in-the-Sky" },
    { id: 5, heading: 'Motiongate Park', price: '99.22', ratings: '4.7/5 (685)', image: "../images/blog/04.jpg",slug:"Motiongate-Park" },
  ];
  return (
    <div>
      <CountryBanner/>
      <Requirments/>
      <About/>
      <Events />
      <Destination/>
      <section className={styles['package-category-01']}>
        <div className={styles['home-blog']}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-md-6 pb-3'}>
                <h3>GCC Packages</h3>
              </div>
              <div className={'col-md-6 pb-3 text-right'}>
                <a href="/" className={'float-right'}>View All</a>
              </div>
              <SliderOne values={packagesData} speed={10000} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles['package-category-01']}>
        <div className={styles['home-blog']}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-md-6 pb-3'}>
                <h3>New Things This Month</h3>
              </div>
              <div className={'col-md-6 pb-3 text-right'}>
                <a href="/" className={'float-right'}>View All</a>
              </div>
              <SliderOne values={packagesData} speed={10000} />
            </div>
          </div>
        </div>
      </section>

      <Contacts/>
      
      

    </div>
  )
}

export default page
