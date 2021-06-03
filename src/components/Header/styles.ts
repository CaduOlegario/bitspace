import styled from 'styled-components'

export const Container = styled.header`
  /* background: var(--pink); */
  background: linear-gradient(270deg, #FF5F2D 0%, #ED2786 100%);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img.logoHeader {
    width: 230px
  }
`