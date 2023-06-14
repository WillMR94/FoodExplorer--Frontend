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
padding: 10px 32px 53px 32px;
flex-direction: column;
max-width:100vw;
background-color: ${({theme})=>theme.COLORS.DARK_400};


h1{
font-family: 'Poppins';
font-size: 32px;
font-weight: 500;
text-align: left;
color: ${({theme})=>theme.COLORS.LIGHT_300};
margin: 24px 0;

}

form{
display: flex;
flex-direction: column;
gap:24px;

input::file-selector-button {
display: none;
}

.image{

  svg{
    width: 24px;
    height: 24px;
    color:${({theme})=>theme.COLORS.LIGHT_100}
  }

input{
width: 100%;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
color:${({theme})=>theme.COLORS.LIGHT_100}}
};

label{
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
text-align: left;
color: ${({theme})=>theme.COLORS.LIGHT_400};
}

>div{
display: flex;
flex-direction: column;
gap: 16px;}}

.wrapper{

>div{
display: flex;
flex-direction: column;
gap: 16px;}
}


select{
width: 100%;
padding: 16px 13px;
border-radius: 8px;
background-color: ${({theme})=>theme.COLORS.DARK_900};
color:${({theme})=>theme.COLORS.LIGHT_400};
border: none;
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
appearance: none;
-webkit-appearance: none;
background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
background-repeat: no-repeat;
background-position: right 16px top 50%;
}

.igredientWrapper{
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 16px;
padding: 8px;
border-radius: 8px;
background-color:${({theme})=>theme.COLORS.DARK_900} ;
}

textarea{
resize: none;
width: 100%;
height: 172px;
padding: 14px;
border-radius: 8px;
background-color: ${({theme})=>theme.COLORS.DARK_800};
color:${({theme})=>theme.COLORS.LIGHT_500};
border: none;
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
}

.submit{
width: 100%;
height: 48px;
padding: 12px 32px;
background-color: ${({theme}) => theme.COLORS.TOMATO_400};
border-radius:8px;
border:none;

font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
color: ${({theme}) => theme.COLORS.LIGHT_100};

};


@media (min-width:1023px){



  .wrapper{
display: flex;
flex-direction: row;
gap:32px;
}

.image{
width: 21vw;
}

.name{
width: 41.3vw;
}

.category{
width: 32.5vw;
}

.ingredients{
width: 75vw;
}

.price{
width: 22.5vw;
}

.submit{
width: 172px;
height: 48px;
padding: 12px 24px;
};

.submitFlex{
display: flex;
align-items: flex-end;
}

}
`;
