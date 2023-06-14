import styled from "styled-components";

export const Container=styled.div`
width: 100%;
display: inline-flex;
align-items: center;
justify-content: space-between;
background-color: ${({theme})=>theme.COLORS.DARK_600};
height: 77px;
padding: 0 27px;

div:nth-child(1){
display: inline-flex;
align-items: center;
gap:6.5px;

svg{
fill:${({theme})=>theme.COLORS.LIGHT_700};
width: 22px;
height: 18px;
}

span{
color: ${({theme})=>theme.COLORS.LIGHT_700};
font-family: 'Roboto';
font-size: 15px;
font-weight: 700;
}}

div:nth-child(2){
span{
font-family: 'DM Sans';
font-size: 12px;
font-weight: 400;
color: ${({theme})=>theme.COLORS.LIGHT_200};;
};
}


@media (min-width:1023px){
padding:0 123px;

div:nth-child(1){
svg{
width: 30px;
height: 30px;
}

span{
font-size: 24px;
font-weight: 700;
}}

div:nth-child(2){
span{
font-size: 14px;
font-weight: 400;
}}}
`;
