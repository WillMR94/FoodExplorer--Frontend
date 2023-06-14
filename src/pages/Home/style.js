import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;

display: grid;
flex-direction: column;
grid-template-rows:114px auto 77px;
background-color: ${({theme})=>theme.COLORS.DARK_400};
overflow-x: hidden;
;

`;

export const Content = styled.div`
display: flex;
flex-direction: column;
max-width:100vw;
padding-bottom: 54px;
background-color: ${({theme})=>theme.COLORS.DARK_400};

`;

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


