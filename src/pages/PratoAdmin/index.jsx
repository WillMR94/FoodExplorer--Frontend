import { Container,Content } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from '../../Components/Footer';
import { DetailsAdmin } from '../../Components/DetailsAdmin';

export function PratoAdmin(){
  return(
  <Container>
    <Header/>
      <Content>
          <div>
          <DetailsAdmin
          
    data={{
    title: 'Salada Ravanello',
    content:'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
    tags:[
      {id:'1',name:'alface',},
      {id:'2',name:'cebola',},
      {id:'3',name:'pão naan'},
      {id:'4',name:'pepino'},
      {id:'5',name:'rabanete'},
      {id:'6',name:'tomate'},
    ]}
    }/>

            </div>
        </Content>
    <Footer/>
  </Container>

  );
}