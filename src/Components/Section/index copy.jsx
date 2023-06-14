import { Container } from './style'
import { Miniature } from "../../Components/Miniature";
import { Slider,Slide } from '../../Components/Carrosel'


export function Section({name,type,id,imgUrl,title,text,price,...rest}){
 
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
    }}
  
  return(
  <Container>
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
{/* 
        {data.dessert &&
        data.dessert.map(miniature => 
          <Slide> 
          <Miniature 
          key={miniature.id}
          imgUrl={miniature.imgUrl}
          imgAlt={miniature.imgAlt} 
          title={miniature.title} 
          text={miniature.text} 
          price={miniature.price} />
          </Slide>)}
    
        {data.drink &&
        data.drink.map(miniature => 
          <Slide> 
          <Miniature 
          key={miniature.id}
          imgUrl={miniature.imgUrl}
          imgAlt={miniature.imgAlt} 
          title={miniature.title} 
          text={miniature.text} 
          price={miniature.price} />
          </Slide>)} */}
      
  </Slider>
</div>

    </Container>
  )
}