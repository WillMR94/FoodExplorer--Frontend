import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-width:424px;
height: 100vh;
display: grid;
flex-direction: column;
grid-template-rows:114px auto 77px;
background-color: ${({theme})=>theme.COLORS.DARK_400}
;

`;

export const Content = styled.div`
padding:24px 10px 54px;
background-color: ${({theme})=>theme.COLORS.DARK_400};

.Tags{
justify-content: center;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 24px;
}


`;
