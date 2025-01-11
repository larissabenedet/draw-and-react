import styled from 'styled-components'

export const ModalContent = styled.div`
  text-align: center;
  position: relative;
`
export const FactsList = styled.ul<{ $detectedShape?: string | null }>`
  text-align: left;

  list-style-type: ${(props) => {
    switch (props.$detectedShape) {
      case 'Star':
        return '"\\2B50"'
      case 'Triangle':
        return '"\\25B2"'
      case 'Heart':
        return '"\\2764"'
      default:
        return 'disc'
    }
  }};

  & li {
    padding-left: 10px;
    margin-bottom: 10px;
  }
`

export const StyledButton = styled.button`
  position: absolute;
  display: block;
  top: -20px;
  right: 0px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  & svg {
    width: 25px;
    height: 25px;
  }
`
