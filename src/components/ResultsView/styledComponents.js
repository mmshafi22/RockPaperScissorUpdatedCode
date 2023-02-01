import styled from 'styled-components'

export const ResultBgContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ChoiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`
export const ParagraphElement = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
`
export const ImageElement = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`
export const ResultElement = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
export const PlayBtn = styled.button`
  background-color: #ffffff;
  height: 40px;
  width: 120px;
  border: 0;
  color: #223a5f;
  font-family: Bree Serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 10px;
  border-radius: 9px;
  outline: none;
  cursor: pointer;
`
