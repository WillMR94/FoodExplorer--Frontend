import styled from "styled-components";

export const Container = styled.div`
width: 100%;

.swiper-wrapper{
  margin: auto;
}

.swiper, swiper-container {
z-index: 0;
width: 100%;
};

.swiper-slide{
display: flex;
justify-content: center;
};



.swiper-button-next{
display: none;
color:${({theme})=>theme.COLORS.LIGHT_100};
};

.swiper-button-prev{
display: none;
color:${({theme})=>theme.COLORS.LIGHT_100};
}

@media (min-width:1023px){
  -webkit-mask-image: linear-gradient(90deg, rgba(255,251,251,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 65%, rgba(255,251,251,0) 100%);
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;

.swiper, swiper-container {
width: calc(100vw - 240px);
};


.swiper-button-next{
display:flex;
position: absolute;
right: 24px;
}

.swiper-button-next:after{
font-size:27.5px;
padding-bottom:35px;
}

.swiper-button-prev{
display:flex;
position: absolute;
left: 24px;
}

.swiper-button-prev:after{
font-size:27.5px;
padding-bottom:35px;
}

}

`;

/*.swiper {
padding: 32px;
-webkit-mask-image: linear-gradient(90deg, rgba(255,251,251,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 65%, rgba(255,251,251,0) 100%);
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center; 
};

.swiper, swiper-container {
z-index: 0;
};

.swiper-slide{
display: flex;
justify-content: center;
};

.swiper-button-next{
width:15px ;
height:27.5px ;
color:${({theme})=>theme.COLORS.LIGHT_100};
};

.swiper-button-prev{
width:15px;
height:27.5px ;
color:${({theme})=>theme.COLORS.LIGHT_100};
}*/