import styled from "styled-components";
import Img from '../../Assets/images/salad.png'

export const Container = styled.div`
margin: auto;
width: 32rem;
display: flex;
flex-direction: column;
align-items: center;

.returnButton{
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
}

>.wrapper{
display: flex;
flex-direction:column;
gap: 16px;
align-items: center;
}

.content{
display: flex;
flex-direction: row;
flex-wrap:wrap;
gap: 24px;
justify-content: center;

  >h2{
  font-family: 'Poppins';
  font-size: 27px;
  font-weight: 500;
  color: ${({theme})=>theme.COLORS.LIGHT_300};
  }

  >span{
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  color: ${({theme})=>theme.COLORS.LIGHT_300};
  text-align: center;
  padding: 0px 10px;
  }

  >.Tags{
  margin-bottom: 24px;
  }
  >a{
    >button{
    width: 131px;
    height: 48px;
    color: ${({theme})=>theme.COLORS.LIGHT_100};
    background-color: ${({theme})=>theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 5px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
    }
  }
}

img{
width: 26.4rem;
height: 26.4rem;
background: url(${Img});
background-size:cover;
margin:16px 0;
};

@media (min-width:1023px){
width: 85rem;
padding: 0 10px; 
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 30px;

  >.wrapper{
  display: flex;
  flex-direction:row;
  gap: 30px;
  align-items: center;
  }

  .content{
  width: 500px;
  gap: 18px;
  justify-content: start;

    >h2{
    font-family: 'Poppins';
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 0;
    }

    >span{
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    padding: 0px;
    }
  }

  img{
  width: 32rem;
  height: 32rem;
  }
};

@media (min-width:1299px){
width: 110rem;
gap: 42px;

  >.wrapper{
  gap: 48px;
  }

  .content{
  width: 690px;
  gap: 24px;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;

    >h2{
    font-family: 'Poppins';
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 0;
    }

    >span{
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    }
  }

  img{
  width: 39rem;
  height: 39rem;
  }

};
`;

