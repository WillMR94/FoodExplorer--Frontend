import styled from "styled-components";

export const Container=styled.div`
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
gap:22px;

.controls{
display: flex;
flex-direction:row;
gap:18px;
margin-top:8px;
}

.subtract{
background: transparent;
border: none;
>SVG{
width: 18px;
height: 18px
}
}

.quantity{
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
color:${({theme})=>theme.COLORS.LIGHT_300};
}


.plus{
background: transparent;
border: none;
>SVG{
width: 18px;
height: 18px
}
}

.orderButton{
display: inline-flex;
align-items: center;
justify-content: center;
gap:7.5px ;
width: 162px;
height: 32px;
background-color: ${({theme})=>theme.COLORS.TOMATO_100};
border-radius: 5px;
border: none;

>SVG{
width: 17.5px;
height:15px;
}

>span{
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
color:${({theme})=>theme.COLORS.LIGHT_300};
}}

@media (min-width:1023px){
flex-direction:row;
gap:18px;

>.orderButton{
gap:7.5px ;
width: 92px;
height: 48px;
>span{
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
}
}}
`;
