import styled from "styled-components";

export const Container = styled.div`
width: fit-content;
height: 32px;
display: flex;
padding: 4px 8px ;
border-radius: 5px;
background-color: ${({ theme }) => theme.COLORS.DARK_1000};


>span{
color:${({ theme }) => theme.COLORS.LIGHT_100};
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
}
`;