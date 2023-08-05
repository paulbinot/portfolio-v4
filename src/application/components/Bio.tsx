import React from 'react'
import styled from 'styled-components'
import { Space } from './common/Space'
import { breakpoints } from '../themes/breakpoints'

const Bio: React.FC = () => {
  return (
    <Container>
      <BioWrapper>
        <BioContent>
        Hello ! My name is Paul BINOT, I'm a french programer of 22 yo !
Today, I work on the Node JS environment as a fullstack developer.
I like to create with my computer so I like code, web design, photo and video edition, ... I also like automotive, aquariums, DIY, ...
        </BioContent>
      </BioWrapper>
      <JobWrapper>
        <JobText>
          <span>Javascript</span>
          <span>fullstack</span>
          <span>developer</span>
        </JobText>
        <Star>*</Star>
      </JobWrapper>
    </Container>
  )
}
export default Bio

const Container = styled.section`
  display: flex;

  @media screen and (${breakpoints.tablet}) {
    flex-direction: column;
  }
`

const BioWrapper = styled(Space)`
  padding: 2vw 2.4vw;
  width: 34%;

  @media screen and (${breakpoints.tablet}) {
    padding: 5vw 4.5vw;
    width: 100%;
  }
`

const BioContent = styled.p`
  font-size: 1.9vw;
  line-height: 2.4vw;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.default};

  @media screen and (${breakpoints.tablet}) {
    font-size: 6vw;
    line-height: 7vw;
  }
`

const JobWrapper = styled(Space)`
  background: ${({ theme }) => theme.gradient.yellow.left};
  flex-grow: 1;
  display: flex;
  align-items: end;
  padding: 4vw 5vw;
  position: relative;

@media screen and (${breakpoints.tablet}) {
  padding: 15vw 7vw 7vw 7vw;
}
`

const JobText = styled.h2`
  font-size: 7vw;
  display: flex;
  flex-direction: column;
  line-height: 6vw;
  font-family: ${({ theme }) => theme.font.title};
  text-transform: uppercase;

  @media screen and (${breakpoints.tablet}) {
    font-size: 11vw;
    line-height: 9vw;
  }
`

const Star = styled.span`
  position: absolute;
  top: 1vw;
  right: -2vw;
  font-size: 16vw;
  font-family: ${({ theme }) => theme.font.title};
`