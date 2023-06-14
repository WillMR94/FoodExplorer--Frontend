import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: inline-flex;
align-items: center;
justify-content: center;
gap:19.25px;

.subtract{
background: transparent;
border: none;
>SVG{
width: 20.5px;
height: 20.5px
}
}

.quantity{
font-family: 'Roboto';
font-size: 23px;
font-weight: 700;
color:${({theme})=>theme.COLORS.LIGHT_300};
}


.plus{
background: transparent;
border: none;
>SVG{
width: 20.5px;
height: 20.5px
}
}

.orderButton{
display: inline-flex;
align-items: center;
justify-content: center;
gap:7.5px ;
width: 188px;
height: 38px;
background-color: ${({theme})=>theme.COLORS.TOMATO_100};
border-radius: 5px;
border: none;

>SVG{
width: 17.5px;
height:15px;
}

>span{
font-family: 'Poppins';
font-size: 9px;
font-weight: 500;
color:${({theme})=>theme.COLORS.LIGHT_300};
}}

@media (min-width:1023px){
justify-content: flex-start;
}
`;