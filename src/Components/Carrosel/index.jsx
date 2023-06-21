import { Container} from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,A11y} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';


export const Slide=SwiperSlide


export function Slider({settings,children,...rest}){
  return(
    <Container>
      <Swiper modules={[Navigation, A11y]} {...settings}>{children}</Swiper>
    </Container> 
  )
}
