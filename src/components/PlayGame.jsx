import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice';
import { Button, OutlineButton } from './styled/Button';
import Rules from './Rules';

function PlayGame() {
  const [score,setScore]=useState(0);
  const [selectedNum,setSelectedNum]=useState();
  const [currentDice,setCurrectDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  const generateRandomNum=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
   }
   
   const roleDice=()=>{
    const randomNum=generateRandomNum(1,7);
    setCurrectDice((prev)=>randomNum);

    if(!selectedNum){
      setError("You have not selected any number");
      return;
    }
    setError("");

    if(selectedNum==randomNum){
      setScore((prev)=> prev + randomNum);
    }else{
      setScore((prev)=>prev-2);
    }

     setSelectedNum(undefined);
   }

   const resetScore=()=>{
    setScore(0);
   }
  return (
    <MainContainer>
       <div className='top_section'>
          <TotalScore score={score}/>
          <NumberSelector 
            error={error}
            setError={setError}
            selectedNum={selectedNum}
            setSelectedNum={setSelectedNum}
          />
       </div>
       <RoleDice currentDice={currentDice}
        roleDice={roleDice}
       />
       <div className='btns'>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
        onClick={()=>setShowRules(prev=>!prev)}
        >{showRules?"Hide":"Show"} Rules</Button>
       </div>
       {showRules&&<Rules/>}
  </MainContainer>
  );
}

export default PlayGame;

const MainContainer=styled.div`
 padding-top: 5px;
 margin: 10px 40px;
 .top_section{
  display:flex;
  justify-content: space-between;
  align-items: end; 
 }
 .btns{
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

 }
`;