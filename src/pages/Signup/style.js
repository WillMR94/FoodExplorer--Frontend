import styled from 'styled-components';

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.DARK_400};
width: 100%;
min-height: 100vh;
padding: 158px 47px 339px 65px;
display: flex;
flex-direction: column;
gap: 32px;

.hide{
display: none;
}

.title{
display: flex;
flex-direction: row;
gap: 10.75px;
align-items: center;
margin-bottom: 41px;

>svg{
width: 43.3px;
height: 43.3px;
}

>h1{
font-size: 37.24px;
font-weight: 700;
color: ${({ theme }) =>theme.COLORS.LIGHT_100}
}}

p{
color: ${({ theme }) => theme.COLORS.LIGHT_400};
margin-bottom: 8px;
}

a{
font-family: 'Poppins';
margin:0 auto;
font-size: 14px;
font-weight: 500;
color: ${({ theme }) => theme.COLORS.LIGHT_100};
};

@media (min-width:1023px){
flex-direction: row;
align-items: center;
justify-content: center;
gap: 11%;
padding: 142px 76px 142px 54px;

.hide{
display: inline;
}

.title{
margin: 0;

>svg{
width: 49.5px;
height: 49.5px;
}

>h1{
font-family: 'Roboto';
font-size: 42px;
font-weight: 700;
}}}

@media (min-width:1367px){
gap: 30.6rem;
padding: 142px 152px 142px 108px;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap:32px;


@media (min-width:1023px){
padding: 64px;
min-width: 47.6rem ;
width: 35%;
height: 62.1rem;
background-color: ${({theme})=>theme.COLORS.DARK_700};
border-radius: 16px;

>h2{
margin: auto;
font-family: 'Poppins';
font-size: 32px;
font-weight: 500;
color: ${({theme})=>theme.COLORS.LIGHT_100};
}}

`;

