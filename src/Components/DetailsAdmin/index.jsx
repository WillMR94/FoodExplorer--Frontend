import { Container} from './style';
import { Tags } from '../Tags'
import { ReturnButton } from '../ReturnButton'

export function DetailsAdmin({title,text,data,...rest}){
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
              }</div>}
      <button>Editar prato</button>
      </div>
      </div>
      </Container>
  )
}