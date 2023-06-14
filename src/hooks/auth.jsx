import { createContext, useContext ,useState, useEffect }  from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [mealById, setMealById] = useState({});

  
  async function signIn({email,pass}){
    try{
      const response = await api.post("/sessions", { email, pass });
      const { user, token, access } = response.data;

      localStorage.setItem("@FoodExplorer_user" , JSON.stringify(user));
      // localStorage.setItem("@FoodExplorer_user_access" , JSON.stringify(access));
      localStorage.setItem("@FoodExplorer_token" , token);

      api.defaults.headers.common['authorization'] = `Bearer ${token}`;
      setData({user, token});
    }
    catch(error){
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível efetuar o login!");
      }
    }
  
  }

  function logOut(){
    localStorage.removeItem("@FoodExplorer_token");
    localStorage.removeItem("@FoodExplorer_user");
    setData({});
  }

  
  async function createMeal({title,text,imgUrl,price,ingredients,type}){
    
    try{
    const response = await api.post(`/meals/create`,{
      title:`${title}`,
      text:`${text}`,
      ingredients:`${ingredients}`,
      price:`${price}`,
      type:`${type}`
      });
      
    const fileUploadForm = new FormData();
    fileUploadForm.append("image", imgUrl);

    const imgUpdate = await api.patch(`/meals/image/${response.data.id}`,fileUploadForm);  
    // console.log(response.data.id);
    
    

      alert("Prato cadastrado com sucesso");
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Houve um erro =(");
      }
    }
  }

  async function deletMeal(id){
    await api.delete(`/meals/${id}`);
    alert("Prato deletado com sucesso")
    return
  }

  async function updateMeal({id,title,text,imgUrl,price,ingredients,type}){
    try{
    await api.put(`/meals/${id}`,{
      title:`${title}`,
      text:`${text}`,
      ingredients:`${ingredients}`,
      price:`${price}`,
      type:`${type}`
    })
    if(!imgUrl){}else{
    const fileUploadForm = new FormData();
    fileUploadForm.append("image", imgUrl);
    const imgUpdate = await api.patch(`/meals/image/${id}`,fileUploadForm);  
    }
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Houve um erro =(");
      }
    }
  }


useEffect(()=>{
 const token = localStorage.getItem("@FoodExplorer_token");
 const user = localStorage.getItem("@FoodExplorer_user");


   if(user && token){
    api.defaults.headers.common['authorization'] = `Bearer ${token}`;

     setData({
       token,
       user: JSON.parse(user)
     });
   }
 },[]);


  return(
    <AuthContext.Provider value={{
      signIn,
      logOut,
      createMeal,
      deletMeal,
      updateMeal,
      user:data.user,}}>
      {children}
    </AuthContext.Provider>
  )
};



function useAuth(){
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};

