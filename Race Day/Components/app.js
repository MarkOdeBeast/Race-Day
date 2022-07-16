let raceNumber = Math.floor(Math.random() * 1000);

let early = false;

let runnerAge = 18;

if(runnerAge > 18 && early){
  raceNumber += 1000;
}

if(runnerAge > 18 && early){
  console.log(`Your race will start at 09:30. ${raceNumber}`);
}else if(runnerAge > 18 && late){
  console.log(`Your race will start at 11:00. ${raceNumber}`);
}else {
  console.log('See registration desk.')
}

if(runnerAge < 18){
  console.log(`Your race will start at 12:30. ${raceNumber}`)
}
