import { useState,useEffect } from "react";
import { api } from '../../services/api';
import { useParams,useNavigate } from 'react-router-dom'
import { Container } from "./style";
import { PlusSVG,SubtractSVG,OrderSVG } from '../../Assets/Icons/icons'
// import { plus, subtract } from './script'


export function OrderBar({price,...rest}){
   const [priceAtt,setPriceAtt]=useState(price);
   const {id} = useParams();


function plus(){
  let qnt=document.querySelector('.quantity')
  let quantity=Number(qnt.textContent)
  const plusButton=document.querySelector('.plus')

  if(quantity === 99){
    alert('pedido maximo: 99 pratos')
  }else{
    let quantityAtt = quantity+1
    let orderPrice = quantityAtt*price
    qnt.textContent=String(quantityAtt).padStart(2,'0')
    setPriceAtt(orderPrice)
  }
}

function  subtract(){
  let qnt=document.querySelector('.quantity')
  let quantity=Number(qnt.textContent)
  const subtractButton=document.querySelector('.subtract')
  if(quantity >= 2){
    let quantityAtt = quantity-1
    let orderPrice = quantityAtt*price
    qnt.textContent=String(quantityAtt).padStart(2,'0')
    setPriceAtt(orderPrice)
  }else{
    alert('pedido minímo: 01 prato')
  }   
}

useEffect(() => {
  async function charge(){
  const response = await api.get(`/meals/${id}`);
  const {showById} = response.data
  let {price} = showById[0]
  setPriceAtt(price)
  }
  charge()
},[price]);

return(
<Container>
  <button className="subtract" onClick={subtract} ><SubtractSVG/></button>
  <span className="quantity">01</span>
  <button className="plus" onClick={plus}><PlusSVG/></button>
  <button className="orderButton">
  <OrderSVG/>
  <span className="orderValue">pedir R${priceAtt}</span>
  </button>
</Container>

)
  
}