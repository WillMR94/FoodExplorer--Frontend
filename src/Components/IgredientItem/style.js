import styled from "styled-components";

export const Container = styled.div`
width: 118px;
display: flex;
flex-direction: row;
align-items: center;
background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
border-radius: 8px;




>button{
border: none;
background: none;
margin: 5px 12px 0px 0;
}

.button-del{
color:${({ theme }) => theme.COLORS.LIGHT_100}
}

.button-add{
color: ${({ theme }) => theme.COLORS.LIGHT_500}
}

>input{
width:100%;
height: 32px;
padding:8px 0 8px 16px;
color: ${({ theme, isNew}) => isNew ? theme.COLORS.LIGHT_600 : theme.COLORS.LIGHT_100};
background: transparent;
border: none;
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;


&::placeholder{
  color: ${({ theme }) => theme.COLORS.GRAY_500};
}
}
`;