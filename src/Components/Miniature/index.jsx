import { useState} from "react";
import { api } from '../../services/api';
import { Container } from "./style";
import { HeartSVG } from '../../Assets/Icons/icons'
import { Quantity } from "../Quantity";
import { PenSVG } from '../../Assets/Icons/icons'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'

export function Miniature({id,title,text,price,imgUrl,imgAlt,...rest}){
const { user } = useAuth();
const { access } = user;


if(access === '1'){
  return(
    <Container>
      <div className="pen">
        <Link to={`/edit/${id}`}><PenSVG/></Link>
      </div>
      <img src={(`${api.defaults.baseURL}/files/${imgUrl}`)} alt={imgAlt} />
      <Link to={`/prato/${id}`}><h2>{title}</h2> </Link>
      <span className="text">{text}</span>
      <span className="price">{price}</span>
    </Container>
  )
}else{
  return(
    <Container>
      <div className="heart">
        <HeartSVG/>
      </div>
      <img src={(`${api.defaults.baseURL}/files/${imgUrl}`)} alt={imgAlt} />
      <Link to={`/prato/${id}`}><h2>{title}</h2> </Link>
      <span className="text">{text}</span>
      <span className="price">{price}</span>
      <Quantity/>
    </Container>
  )
}
}