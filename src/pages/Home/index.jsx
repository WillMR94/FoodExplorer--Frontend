import { useState,useEffect,prevState} from "react";
import { api } from '../../services/api';
import { Container,Content,Section } from "./style";
import { Header } from "../../Components/Header/";
import { Footer } from '../../Components/Footer';
import { Card } from '../../Components/card'
import { Miniature } from "../../Components/Miniature";
import { Slider,Slide } from '../../Components/Carrosel'



export function Home(){
  const [ search, setSearch]=useState('');
  const [ dataResponse, setDataResponse]=useState('');
  const [ meals, setMeals]=useState('');
  const [ desserts, setDesserts]=useState('');
  const [ drinks, setDrinks]=useState('');

  function SearchBar(r){
    setSearch(r)
  }

  const settings={
    navigation:true,
    loop:true,
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

  async function homeData(){
    if(search){ 
      const response = await api.get(`/meals/search/${search}`);
      const dados = response.data;
      setDataResponse(dados);
    }else{
      const response = await api.get(`/meals`);
      const dados = response.data;
      setDataResponse(dados);
    }
  }

  function filtered(){
    let mealsfilter = (Object.values(dataResponse).filter(meal => meal.type === 1));
    let dessertsfilter = (Object.values(dataResponse).filter(dessert => dessert.type === 2));
    let drinksfilter = (Object.values(dataResponse).filter(drink => drink.type === 3));
    setMeals(mealsfilter);
    setDesserts(dessertsfilter);
    setDrinks(drinksfilter);
   }
  

  useEffect(() => {
    homeData()
  },[search]);

  useEffect(() => {
    filtered() 
  },[dataResponse]);

return(
<Container>
<Header handleSearch={SearchBar}/>
<Content>
  <Card/>
  <Section className="mealClass">
    <div>
      <h2>Refeições</h2>
    </div>
    <div>
      <Slider settings={settings}>
        {meals && Object.values(meals).map(meal => (
          <Slide key={meal.id}> 
            <Miniature
              id={meal.id}
              imgUrl={meal.imgUrl}
              title={`${meal.title} >`}
              text={meal.text}
              price={meal.price}
            />
          </Slide>
        ))}
      </Slider>
    </div>
  </Section>
  <Section className="dessertClass">
    <div>
      <h2>Sobremesas</h2>
    </div>
    <div>
      <Slider settings={settings}>
        {desserts && Object.values(desserts).map(dessert => (
          <Slide key={dessert.id}> 
            <Miniature
              key={dessert.id}
              id={dessert.id}
              imgUrl={dessert.imgUrl}
              title={`${dessert.title} >`}
              text={dessert.text}
              price={dessert.price}
            />
          </Slide>
        ))}
      </Slider>
    </div>
  </Section>
  <Section className="drinkClass">
    <div>
      <h2>Bebidas</h2>
    </div>
    <div>
      <Slider settings={settings}>
        {drinks && Object.values(drinks).map(drink => (
          <Slide key={drink.id}> 
            <Miniature
              key={drink.id}
              id={drink.id}
              imgUrl={drink.imgUrl}
              title={`${drink.title} >`}
              text={drink.text}
              price={drink.price}
            />
          </Slide>
        ))}
      </Slider>
    </div>
  </Section>

</Content>
<Footer/>
</Container>

  );


}