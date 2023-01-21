import React from 'react'

// import photos
import Diani from "../../Images/Diani.jpg"
import Kenya from "../../Images/home2.jpg"
import Nairobi from "../../Images/hOME3.jpg"
import Mombasa from "../../Images/HOME4.jpg"


// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay,Zoom ,EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';


SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y,Autoplay,Zoom ,EffectFade]);

function HomeSlider() {

    const Landstyles ={
        backgd:{
           height:'480px',
            width:'100%',
            backgroundPosition:'center',
            backgroundSize:'contain',
        },
        Linker:{
            color:'#519e51',
            textDecoration:'none',
            paddingLeft:'5px',
            paddingRight:'15px',
            fontSize:'20px'
        }
    }


  return (
    <Swiper 
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        zoom={true}
        effect={"fade"}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
       
        modules={[ Navigation, Pagination, Scrollbar, A11y,Autoplay,Zoom ,EffectFade]}
        
  >
    <SwiperSlide>
      <div className="swiper-zoom-container" >
        <img src={Kenya} styles={Landstyles.backgd} />
      </div>     
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container" >
        <img src={Mombasa} styles={Landstyles.backgd} />
      </div>     
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container" >
        <img src={Nairobi} styles={Landstyles.backgd} />
      </div>     
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container" >
        <img src={Diani} styles={Landstyles.backgd} />
      </div>     
    </SwiperSlide>


  
    ...
  </Swiper>
  )
}

export default HomeSlider