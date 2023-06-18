import { Container } from './style';
import { Tags } from '../Tags'
import { OrderBar } from '../../Components/OrderBar'
import { ReturnButton } from '../../Components/ReturnButton'
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth'
import { Link,useNavigate } from 'react-router-dom'

export function Details({id,title,text,price,ingredients,imgUrl,...rest}){
  const { user } = useAuth();
  const { access } = user;


  if(access === '1'){
    return(
      <Container>
        <div className='returnButton'>
          <ReturnButton/>
        </div>
        <div className='wrapper'>
          <img src={`${api.defaults.baseURL}/files/${imgUrl}`} alt="" />
          <div className='content'>
            <h2>{title}</h2>
            <span>{text}</span>
            {
              ingredients &&
                <div className="Tags">{
                  ingredients.map((ingredient,index) => 
                  <Tags key={index} content={ingredient}/>
                  )
                }</div>
            }
            <Link to={`/edit/${id}`}><button>Editar prato</button></Link>
          </div>
        </div>
      </Container>
    )
  }else{
    return(
      <Container>
        <div className='returnButton'>
          <ReturnButton/>
        </div>
        <div className='wrapper'>
          <img src={`${api.defaults.baseURL}/files/${imgUrl}`} alt="" />
          <div className='content'>
            <h2>{title}</h2>
            <span>{text}</span>
            {
              ingredients &&
                <div className="Tags">{
                  ingredients.map((ingredient,index) => 
                  <Tags key={index} content={ingredient}/>
                  )
                }</div>
            }
            <OrderBar price={price}/>
          </div>
        </div>
      </Container>
    )
  }
}