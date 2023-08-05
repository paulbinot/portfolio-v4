import { styled } from 'styled-components'

export const Space = styled.div`
  border: 1.5px solid ${({ theme }) => theme.color.background.secondary};
  background: ${({ theme }) => theme.color.background.primary};
  border-radius: 1.6vw;
`