import { Container } from './style'
import { Miniature } from "../../Components/Miniature";
import { Slider,Slide } from '../../Components/Carrosel'


export function Section({name,data,...rest}){
 
  const settings={
    navigation:true,
    loop:true,
    loopedSlides:1,
    breakpoints: {
      320: {
      slidesPerView: 1.3,
      spaceBetween: 0
      },
      425: {
        slidesPerView: 1.6,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1366: {
        slidesPerView: 3.5,
        spaceBetween: 17
      }
    }
  }
  
return(
  <Section>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <Slider settings={settings}>
        <Slide> 
        <Miniature 
        key={id}
        imgUrl={imgUrl} 
        title={title} 
        text={text} 
        price={price} />
        </Slide>
      </Slider>
    </div>
  </Section>
)
}