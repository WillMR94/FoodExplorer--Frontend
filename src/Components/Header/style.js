import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 114px;
background-color: ${({theme})=>theme.COLORS.DARK_700};
position: relative;

nav{
padding: 60px 28px 0 28px ;
};

ul{
width: 100%;
display: inline-flex;
justify-content: center;
list-style: none;
align-items: center;
gap: 35px;
};

button{
background-color: transparent;
border: none;
};

.hide{
display: none;
};

.search{
width: 43vw;
};

.menu{
display: inline-flex;
align-items: center;

>SVG{
width: 24px;
height: 18px;
}
};

.logo{
color: white;
font-family: 'Roboto';
font-weight: 700;
font-size: 21px;
gap:8px;
display: inline-flex;
align-items: center;

>SVG{
width: 24px;
height: 24px;
fill:${({theme})=>theme.COLORS.CAKE_100}
}

>div:nth-child(2){
  flex-direction: row;
  gap:8px;
  align-items: center;
  display: flex;
}

.adminLogo{
  color: ${({theme})=>theme.COLORS.CAKE_200};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  margin-top: 3px;

}};

.order{
position: relative;

>button{

>span:nth-child(3){
position: absolute;
right:-10px;
top:-10px;
padding: 1.5px 6px;
border-radius: 50%;
background-color: ${({theme})=>theme.COLORS.TOMATO_100};
color: white;
text-align: center;
margin: auto;
}}

>SVG{
width: 26px;
height: 22px;
}}

.newMeal{
>button{
  height: 48px;
  background-color:${({theme})=>theme.COLORS.TOMATO_100};
  border: none;
  border-radius: 5px;
  width: 216px;

  >a{
  color: ${({theme})=> theme.COLORS.LIGHT_100};
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 500;
  }
}
}


@media (min-width:1023px){
height: 104px;

nav{
padding: 28px 0 0;
};

.hide{
display: block;
}

.menu{
  display:none;
}

.order{

>button{
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    width: 216px;
    height: 56px;
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap:11px;

>span:nth-child(2){
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
color: ${({theme})=>theme.COLORS.LIGHT_100};
}

>span:nth-child(3){
  display:none;
}}}

.menuMobile{
  display: none;
}
}









@keyframes show {
0%{
transform:translateX(-100%);}

100%{
  transform:translateX(0%);}}

  @keyframes hide {
  0% {
    width:100%;
  }

  100% {
    width:0%; 
  }
}

`;


  