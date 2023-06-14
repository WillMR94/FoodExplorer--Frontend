import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
width:fit-content;

>button{
width: fit-content;
display: inline-flex;
gap: 11px;
align-items: center;
background: transparent;
border: none;
}

span{
font-family: 'Poppins';
font-size: 24px;
font-weight: 500;
color: ${({theme})=>theme.COLORS.LIGHT_300};
}

@media (min-width:1023px){
span{
font-family: 'Poppins';
font-weight: 700;
}
}

`;  