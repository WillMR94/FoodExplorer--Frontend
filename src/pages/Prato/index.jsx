import { useState,useEffect} from "react";
import { api } from '../../services/api';
import { useParams } from 'react-router-dom'
import { Container,Content } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from '../../Components/Footer';
import { Details } from '../../Components/Details';

export function Prato(){
  const [ imgUrl, setImgUrl]=useState('');
  const [ title, setTitle]=useState('');
  const [ text, setText]=useState('');
  const [ ingredients, setIngredients]=useState([]);
  const [ price, setPrice]=useState('');
  const {id} = useParams();

  useEffect(() => {
    async function dataSearch(){
      try{g
        const response = await api.get(`/meals/${id}`);
        const {showById} = response.data
        let {title,text,ingredients,price,imgUrl} = showById[0]
        const ingredientsArray = ingredients.split(",");
        price = await price.replace(',','.');
        price = Number(price);
        setTitle(title);
        setText(text);
        setPrice(price);
        setIngredients(ingredientsArray);
        setImgUrl(imgUrl);
      }catch(error){
        if(error.response){
          alert(error.response.data.message)
        }
        else{
          alert("404");
        }
      }
    }
    dataSearch();
  },[title]);

  return(
    <Container>
      <Header/>
        <Content>
          <div>
            <Details
            imgUrl={imgUrl}
            title={title}
            text={text}
            price={price}
            ingredients={ingredients}/>
          </div>
        </Content>
      <Footer/>
    </Container>
  );
}
