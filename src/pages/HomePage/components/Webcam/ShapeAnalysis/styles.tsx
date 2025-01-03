import styled from 'styled-components'

export const Container = styled.div<{ $isWebcamActive?: boolean }>`
  display: ${({ $isWebcamActive }) => ($isWebcamActive ? 'block' : 'none')};
  margin: 0 auto;
  text-align: center;
`

export const LiveView = styled.div`
  position: relative;
  float: left;
  width: calc(100% - 10px);
  cursor: pointer;

  & p {
    position: absolute;
    padding: 5px;
    background-color: rgba(255, 111, 0, 0.85);
    color: #fff;
    border: 1px dashed rgba(255, 255, 255, 0.7);
    z-index: 2;
    font-size: 12px;
  }

  & .highlighter {
    background: rgba(0, 255, 0, 0.25);
    border: 1px dashed #fff;
    z-index: 1;
    position: absolute;
  }
`

export const VideoStyled = styled.video`
  width: 100%;
`
