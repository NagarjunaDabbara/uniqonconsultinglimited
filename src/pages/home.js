import React , { Component } from 'react'
import Navigation from '../components/navigation.js'
import CitiesSlider from '../components/CitiesSlider.js' 
import CardBox from '../components/cardBox.js'
import HomeContent from '../components/homeContent.js'
import Partner from '../components/partner.js'
import ContactContent from '../components/contactContent.js'
import Footer from '../components/footer.js'
export default class home extends Component {
   render(){
       
const slides = [
    {
      city: '',
    
      img: 'https://images.pexels.com/photos/19972/pexels-photo.jpg?cs=srgb&dl=city-night-bridge-river-19972.jpg&fm=jpg',
    },
    {
      city: '',
      img: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?cs=srgb&dl=blank-business-composition-computer-373076.jpg&fm=jpg',
    },
    {
      city: '',
      country: 'Czech Republic',
      img: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      city: '',
      country: 'Netherlands',
      img: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];
    return (
        <div>
          
            <Navigation/>
            <CitiesSlider slides={slides} />
           <CardBox/>
           <HomeContent/>
           <Partner/>
           <ContactContent/>
           <Footer/>
        </div>
    )}
}
