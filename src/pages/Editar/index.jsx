import { useState,useEffect,prevState} from "react";
import { api } from '../../services/api';
import { useParams,useNavigate } from 'react-router-dom'
//-----
import { Container,Content } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from '../../Components/Footer';
import { ReturnButton } from '../../Components/ReturnButton'
import { Input } from '../../Components/Input'
import { IgredientItem } from '../../Components/IgredientItem'
import { FiUpload } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

 
export function Editar(){
  const [ search, setSearch]=useState('');
  const navigate = useNavigate();
  const [ imgUrl, setImgUrl]=useState('');
  const [ title, setTitle]=useState('');
  const [ text, setText]=useState('');
  const [ ingredients, setIngredients]=useState([]);
  const [ newIngredients, setNewIngredients]=useState('');
  const [ price, setPrice]=useState('');
  const [ type, setType]=useState('');
  const {id} = useParams();
  //------
  const {deletMeal} = useAuth();
  const {updateMeal} = useAuth();

  function handleFile(event){
    const file = event.target.files[0];
    setImgUrl(file)
  };

  function SearchBar(r){
    setSearch(r)
  }

  function handleDelet(){
    deletMeal(id);
    navigate("/")
  }

  function handleUpdate(){
    if(!title || !price || !type){
      alert('preencha todos os campos!')
      return
    }else{
    updateMeal({id,imgUrl,title,text,price,type,ingredients});
    }
    alert("Dados Atualizados com sucesso");
    return
  }

   function handleIngredients(){
     setIngredients(prevState => [...prevState, newIngredients]);
     setNewIngredients('');
   };

   function handleDeleteIngredients(deleted){
     setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
   }



  useEffect(() => {
    async function edit(){
      try{
        const response = await api.get(`/meals/${id}`);
        const {showById} = response.data
        let {title,text,ingredients,price,type} = showById[0]
        const ingredientsArray = ingredients.split(",");
        price = await price.replace(',','.');
        price = Number(price);
        setTitle(title);
        setText(text);
        setPrice(price);
        setIngredients(ingredientsArray);
        setType(type);
      }
      catch(error){
        if(error.response){
          alert(error.response.data.message)
        }
        else{
          alert("404");
        }
      }
    }
    edit();
  },[]);


return(
<Container >
<Header handleSearch={SearchBar}/>
<Content>
<ReturnButton className="arrowBack"/>
<h1>Editar prato</h1>


<form>

<div className="wrapper">
<div className="image">
  <label for="image">Imagen do prato</label>
  <Input type="file" name="image" id="image" icon={FiUpload} onChange={handleFile}/>
</div>

<div className="name">
  <label for="name">Nome</label>
  <Input type="text" name="name" id="name" placeholder="Ex.: Salada Ceasar" value={title} onChange={e => setTitle(e.target.value)}/>
</div>

<div className="category">
  <label for="category">Categoria</label>
  <select id="category" name="category" value={type} onChange={e => setType(e.target.value)}>
    <option value=''>Selecione</option>
    <option value="1">Refeição</option>
    <option value="2">Sobremesa</option>
    <option value="3">Bebida</option>
  </select>
</div>
</div>

<div className="wrapper">
        <div className="ingredients">
          <label for="name">Igredientes</label>
          <div className="igredientWrapper">{
                 ingredients && ingredients.map((ingredient,index) => (
                    <IgredientItem
                      key={index}
                      value={ingredient}
                      onClick={()=>{handleDeleteIngredients(ingredient)}}
                    />
                  ))
            }

            <IgredientItem
              placeholder="Adicionar"
              isNew="fake"
              onChange={e => setNewIngredients(e.target.value)}
              value={newIngredients}
              onClick={handleIngredients}
            />
          </div>
        </div>

<div className="price">
  <label for="price">Preço</label>
  <Input type="number" name="price" id="price" placeholder="R$ 00,00" value={price} onChange={e => setPrice(e.target.value)} />
</div>
</div>

<div>
  <label for="description">Descrição</label>
  <textarea name="description" id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" cols="30" rows="10" value={text} onChange={e => setText(e.target.value)}></textarea>
</div>

<div className="submitFlex">
<button className="delet" type="button" value="delet" onClick={handleDelet} >Excluir Prato</button>
<button className="submit" type="button" value="Save" onClick={handleUpdate} >Salvar alterações</button>
</div>
</form>





</Content>
<Footer/>
</Container>

  );
}