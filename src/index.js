

function scoreCalc(frames){
  //10 frames with 2 possible bonus balls that count towards the 10th frames score
  let score = 0;

  //counts the score not including bonus balls
  for(let i=0; i < frames.length && i < 10; i++) {
    //checks for strike and if next frame exists
    if(frames[i][0] === 10 && frames[i+1]){
      //if next frame is also strike, the next frames first ball also needs to be counted if it exists
      if((frames[i+1][0] === 10) && frames[i+2]){
        score += 20 + frames[i+2][0];
      }
      //if next frame is not strike, so only next frames 2 balls will count
      else{
        score += 10 + frames[i+1][0] + frames[i+1][1];
      }
    }
    //if frame is spare and next frame exists, next frames first ball will be included in score
    else if((frames[i][0] + frames[i][1] === 10) && frames[i+1]){
      score += 10 + frames[i+1][0];
    }
    //neither spare nor strike or no other frame after current, score will be frames total
    else{
      score += frames[i][0] + frames[i][1];
    }
  } 

//   //Checks for bonus score due to 10th frame strike or spare
//   if (frames.length === 11){
//     //if 10th frame [0] is strike count next 2 balls
//     if(frames[9][0] === 10) {
//       bonusScore += frames[10][0] + frames[10][1];
//     }
//     //if 10th frame is spare count next 1 ball
//     else if(frames[9][0] + frames[9][1] === 10) {
//       bonusScore += frames[10][0];
//     }

//     else {
//       throw new Error('Error:  Extra ball(s) thrown after final frame, extraneous score not included in total');
//     }
//   }


//if there are 11 frames but the 10th frame did not include a strike or spare
//then there is an error
if(frames.length === 11 && frames[9][0] + frames[9][1] !== 10 ){
  throw new Error('Error: Extra ball(s) thrown after final frame');
}

//only 2 bonus balls allowed, any more is an error.
if (frames.length > 11){
  throw new Error('Error: Extra ball(s) thrown after final frame');
}

  return score;

} 

export default scoreCalc;