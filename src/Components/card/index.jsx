import {Container,Img} from './style'

export function Card (){
    return(
        <Container>
            <Img/>
            <div className='card'>
                <div>
                    <h1>Sabores inigualáveis</h1>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                </div>
            </div>
        </Container>

    )
}