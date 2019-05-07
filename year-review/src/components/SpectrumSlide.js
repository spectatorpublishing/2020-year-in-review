import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/white-down-arrow-icon.png'
import read_more from '../assets/readmore.svg'

const Article = styled.div`
  margin: 0vw;
`
const Image = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({img_src}) => img_src});
	width: 100vw;
	height: 100vh;
	object-fit: cover;
  background-size: cover;
  position: relative;
`
const Title = styled.h3`
  position: absolute;
	top: 40vh;
  color: white;
  padding: 0vh 10vw;
`

const Arrow = styled.img`
  width: 6vw;
  z-index: 1;
  position: absolute;
  left: 90%;
  top: 90%;
  transform: rotate(180deg);
`

const Logo = styled.img`
  display: block;
  width: 20vw;
  position: absolute;

  left: -15vw;
`
  
const Link = styled.a`
  text-decoration: none;
  position: absolute;
  left: 80vw;
  top: 70%;
`

const handleClick = () => {
  window.scrollTo(0, 0)
}

const slide = (props) =>{
  return (
    <Article>
        <Image {...props}>
            <Title>{props.title}</Title>
            <Arrow src={arrow} onClick = {handleClick}/>
            <Link href={props.url}><Logo src={read_more} alt="readmore"/> </Link>
        </Image>
    </Article>
  );
}

export default slide;
