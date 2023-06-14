import styled from "styled-components";

export const Section=styled.div`
display: flex;
flex-direction: column;
width: 100%;


>div:nth-child(1){
>h2{
font-family: 'Poppins';
font-size: 18px;
font-weight: 500;
text-align: left;
color:${({theme})=>theme.COLORS.LIGHT_300};
padding: 24px;
}}

>div:nth-child(2){};

@media (min-width:1023px){


  >div:nth-child(1){
>h2{
font-size: 32px;
font-weight: 500;
text-align: left;
padding:60px 0 23px 125px;}

}
}
`;
