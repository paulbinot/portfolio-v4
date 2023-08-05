import React from 'react'
import styled from 'styled-components'
import { Space } from './common/Space'
import { Assets } from '../constants/assets'
import { breakpoints } from '../themes/breakpoints'

const Header: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>
          <span>Paul</span>
          <span>Binot</span>
        </Title>
      </TitleWrapper>
      <RightWrapper>
        <Sphere src={Assets.svgs.assets.sphere} alt='wireframe planet' />
      </RightWrapper>
      <Me src={Assets.images.assets.me} alt='profile picture' />
    </Container>
  )
}
export default Header

const Container = styled.header`
  display: flex;
  position: relative;

  @media screen and (${breakpoints.mobileL}) {
    flex-direction: column;
  }
`

const TitleWrapper = styled(Space)`
  padding: 3vw 2vw 8vw 2vw;
  width: 64%;

  @media screen and (${breakpoints.mobileL}) {
    width: 100%;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 14vw;
  font-family: ${({ theme }) => theme.font.title};
  display: flex;
  flex-direction: column;
  line-height: 11vw;

@media screen and (${breakpoints.mobileL}) {
  font-size: 21vw;
  line-height: 17vw;
}
`

const RightWrapper = styled(Space)`
  flex-grow: 1;
  position: relative;

  @media screen and (${breakpoints.mobileL}) {
    height: 80vw;
  }
`

const Sphere = styled.img`
  width: 32vw;
  position: absolute;
  top: -7vw;
  right: -5vw;


  @media screen and (${breakpoints.mobileL}) {
    top: -1px;
    width: 40vw;
  }
`

const Me = styled.img`
  width: 32vw;
  position: absolute;
  left: 64%;
  transform: translateX(-46%);
  bottom: -1px;

  @media screen and (${breakpoints.mobileL}) {
    width: 80vw;
    transform: none;
    left: -10vw;
  }
`