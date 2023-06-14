import styled from "styled-components"


export const Container=styled.div`
position:relative;
display: flex;
flex-direction: column;
width: 210px;
border-radius: 8px;
padding:23px 0;
background-color:${({theme})=>theme.COLORS.DARK_200};
border: 1px solid ${({theme})=>theme.COLORS.DARK_300};
gap:12px;

.heart{
position:absolute;
right:16px;
top:16px
}
.pen{
position:absolute;
right:16px;
top:16px
}

img{
margin: auto;
width: 8.8rem;
height: 8.8rem;
background-size:cover; 
}

h2,a{
text-align: center;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
color: ${({theme})=>theme.COLORS.LIGHT_300};
}


>.text{
display: none;
}

.price{
margin: auto;
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
color: ${({theme})=>theme.COLORS.CAKE_200};
}


@media (min-width:1023px){
width: 304px;
height: 462px;
padding:24px 0 46px 0;
gap:15px;

>img{
margin: auto;
width: 17.6rem;
height: 17.6rem;
}

h2,a{
text-align: center;
font-family: 'Poppins';
font-size: 24px;
font-weight: 700;
color: ${({theme})=>theme.COLORS.LIGHT_300};
}

>.text{
display:inline-flex;
margin: auto;
text-align: center;
font-family: 'Roboto';
font-size: 14px;
font-weight: 400;
color: ${({theme})=>theme.COLORS.LIGHT_400};
}

>.price{
font-size: 32px;
font-weight: 400;
color: ${({theme})=>theme.COLORS.CAKE_200};
}

}

`;



/*span{
text-align: center;
font-family: 'Roboto';
font-size: 14px;
font-weight: 400;
color: ${({theme})=>theme.COLORS.LIGHT_400};
};*/