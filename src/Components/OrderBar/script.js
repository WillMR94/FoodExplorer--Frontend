


export function  plus(){
  let qnt=document.querySelector('.quantity')
  let value=document.querySelector('.orderValue')

  let quantity=Number(qnt.textContent)
  let price=25
  const plusButton=document.querySelector('.plus')

  if(quantity === 99){
    alert('pedido maximo: 99 pratos')
  }
  else{
  let quantityAtt = quantity+1
  let orderPrice = quantityAtt*price
  qnt.textContent=String(quantityAtt).padStart(2,'0')
  value.textContent=`pedir R$${orderPrice},00`
  }
  }


  export function  subtract(){
    let qnt=document.querySelector('.quantity')
    let value=document.querySelector('.orderValue')
  
    let quantity=Number(qnt.textContent)
    let price=25
    const subtractButton=document.querySelector('.subtract')
    if(quantity >= 2){
    let quantityAtt = quantity-1
    let orderPrice = quantityAtt*price
    qnt.textContent=String(quantityAtt).padStart(2,'0')
    value.textContent=`pedir R$${orderPrice},00`
    }
    else{
      alert('pedido minímo: 01 prato')
    }   
    }