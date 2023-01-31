import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'

export const GameBgContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;
  max-width: 1000px;
`
export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #ffffff;
  border-radius: 9px;
  width: 100%;
`
export const GameNameContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
`
export const GameName = styled.li`
  font-family: Bree Serif;
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const Score = styled.div`
  background-color: #ffffff;
  width: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  @media (min-width: 768px) {
    width: 150px;
  }
`
export const ScoreHeading = styled.h1`
  font-family: Bree Serif;
  font-size: 25px;
  color: #223a5f;
  letter-spacing: 1px;
  margin: 0px;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`
export const ScoreParagraph = styled.p`
  font-family: Bree Serif;
  font-size: 25px;
  color: #223a5f;
  font-weight: bold;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
export const ButtonRules = styled.button`
  background-color: #ffffff;
  border: 0;
  border-radius: 6px;
  font-family: Roboto;
  font-size: 13px;
  color: #223a5f;
  font-weight: bold;
  letter-spacing: 1px;
  align-self: flex-end;
  width: 100px;
  height: 40px;
  cursor: pointer;
  outline: none;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ButtonClose = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`
export const RulesImg = styled.img`
  width: 100%;
`
export const CloseIcon = styled(RiCloseLine)`
  width: 30px;
  height: 30px;
`
