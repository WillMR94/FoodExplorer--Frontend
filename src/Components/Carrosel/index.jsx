import { Container} from './style';
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
=======
import { Swiper,SwiperSlide } from 'swiper/react';
>>>>>>> 6c72020a6d311b13af5fbd5fb87425ac5d2ed698
import { Navigation,A11y} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';


export const Slide=SwiperSlide


export function Slider({settings,children,...rest}){
  return(
  <Container>
<Swiper modules={[Navigation, A11y]} {...settings}>{children}</Swiper>
 </Container> 
    )}
