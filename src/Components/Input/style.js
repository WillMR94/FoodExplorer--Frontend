import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height:48px;
display: inline-flex;
align-items: center;
background-color: ${({theme})=>theme.COLORS.DARK_900};
border-radius: 8px;


svg{
margin-left:16px;
color:${({theme})=>theme.COLORS.LIGHT_400} ;
}

input{
width: 100%;
padding: 16px 14px;
background-color: transparent;
color:${({theme})=>theme.COLORS.LIGHT_100};
border: none;
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
}

input:hover{
border: 1px solid ${({theme})=>theme.COLORS.LIGHT_100};
border-radius: 8px;
}

input::placeholder{
  color:${({theme})=>theme.COLORS.LIGHT_500};

}

/* @media (min-width: 1023px){
  background-color: ${({theme})=>theme.COLORS.DARK_700}
} */
`;

