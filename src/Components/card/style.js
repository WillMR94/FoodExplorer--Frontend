import styled from 'styled-components'
import Image from '../../Assets/images/fruits.png'

export const Container = styled.div`
display:inline-flex;
width: 100%;
position: relative;


.card{
margin: 44px 16px 0px 16px;
justify-content: center;
width: 100%;
height: 120px;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
border-radius: 3px;
display: flex;
align-items: center;

>div{
width: 202px;
margin-right: 10px;

>h1{
font-family: 'Poppins';
font-size: 18px;
font-weight: 600;
color:${({theme})=>theme.COLORS.LIGHT_300}
}

>span{
font-family: 'Poppins';
font-size: 12px;
font-weight: 400;
color:${({theme})=>theme.COLORS.LIGHT_300}
}}}

@media (min-width:424px){
.card{
margin: 44px 16px 0 36px;
justify-content: flex-end;

>div{
  width: 50%;
}

};
}

@media (min-width:762px){
.card{  
height: 180px;

>div{

>h1{font-size: 22px;}

>span{

font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
}}}}


@media (min-width:1023px){
.card{
height: 260px;
margin: 16.2rem 9rem 0;

>div{
>h1{
font-size: 40px;
font-weight: 500;
}

}}}

@media (min-width:1367px){
.card{
height: 260px;
margin: 16.2rem 12.4rem 0;

>div{
>h1{
font-size: 40px;
font-weight: 500;
}

}}}


`

export const Img = styled.div`
display: none;
width: 19.1rem;
height: 14.9rem;
background: url(${Image}) no-repeat center center;
background-size: 100% 100%;
position: absolute;
left: 0;
bottom: 0;
margin-left:6px;
margin-bottom: 0px;

@media (min-width:424px){
display: block;
}


@media (min-width:762px){
margin-left:10px;
width: 32rem;
height: 21rem;
}

@media (min-width:1023px){
margin-left:7rem;
width: 48rem;
height: 31rem;
}

@media (min-width:1365px){
width: 63.2rem;
height: 40.6rem;
}

`;
