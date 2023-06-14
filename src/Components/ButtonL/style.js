import styled from "styled-components";

export const Container = styled.div`
width: 100%;


button{
padding: 12px 0;
margin: auto;
width: 100%;
height: 48px;
border-radius: 5px;
background-color: ${({theme})=>theme.COLORS.TOMATO_100};
color:${({theme})=>theme.COLORS.LIGHT_100};
border: none;
}


`;