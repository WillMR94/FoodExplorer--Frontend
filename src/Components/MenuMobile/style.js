import styled from "styled-components";

export const Container =styled.div`
width: auto;


.hide{
display: none;
}

button{
background: transparent;
border:none;
}

.menuMobile{
width: 100%;
height: 100vh;
/* min-height: 920px; */
position:absolute ;
top:0;
left:0;
background-color: ${({theme})=>theme.COLORS.DARK_700};
animation: show 1s;
z-index: 1;
display: grid;
grid-template-rows: 114px auto 77px;


>div:nth-child(1){
height: 114px;
display: inline-flex;
gap: 16px;
align-items: baseline;
padding: 60px 0 0 28px;

>SVG,button{
width: 18px;
height: 18px;
}

>span{
font-family: 'Roboto';
font-weight: 400;
font-size: 21px;
color: ${({theme})=>theme.COLORS.LIGHT_100};
}}

>div:nth-child(2){
padding: 28px 28px 0 28px;
background-color: ${({theme})=>theme.COLORS.DARK_400};


button,a{
  width: 100%;
  text-align: left;
  border-bottom: 1px solid ${({theme})=>theme.COLORS.DARK_1000};
  margin-top: 46px;
  padding: 10px 0;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 24px;
  color: ${({theme})=>theme.COLORS.LIGHT_300};



}}}

.content{

display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 36px;
}

.menuMobileHide{
width: 0%;
height: 100vh;
/* min-height: 920px; */
position:absolute ;
top:0;
left:0;
background-color: ${({theme})=>theme.COLORS.DARK_700};
animation: hide 1s;
z-index: 1;


>div:nth-child(1){
height: 114px;
display: inline-flex;
gap: 0;
align-items: baseline;
padding: 0;

>SVG,button{
display: none;
}

>span{
font-family: 'Roboto';
font-weight: 0;
font-size: 0;
color: ${({theme})=>theme.COLORS.LIGHT_100};
}}

>div:nth-child(2){
padding: 0;
background-color: ${({theme})=>theme.COLORS.DARK_400};


button{
  margin-top: 46px;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: 0;
  color: ${({theme})=>theme.COLORS.LIGHT_300};

}}}
`;