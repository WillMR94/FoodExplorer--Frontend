import { useState } from 'react'
import { Container} from "./style";
import { PlusSVG,SubtractSVG } from '../../Assets/Icons/icons'

export function Quantity(){
    const [quantity, setquantity] = useState(1);

function plus(){
  if(quantity === 99){
    alert('pedido maximo: 99 pratos')
  }else{
    setquantity(quantity+1)
  }
}

function  subtract(){
  if(quantity <= 1){
    alert('pedido mínimo: 01 prato')
  }else{
    setquantity(quantity-1)
  }
}

  return(
    <Container>
      <div className='controls'>
        <button className="subtract" onClick={subtract}><SubtractSVG/></button>
        <span className="quantity">{('0'+ quantity).slice(-2)}</span>
        <button className="plus" onClick={plus}><PlusSVG/></button>
      </div>
      <button className="orderButton"><span className="orderValue">incluir</span></button>
    </Container>
  )
}