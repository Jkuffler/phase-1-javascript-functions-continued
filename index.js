function saturdayFun(activity = "roller-skate") {   
    return `This Saturday, I want to ${activity}!`
 }
 function mondayWork(chore = "go to the office") {
     return `This Monday, I will ${chore}.`
 }
 function wrapAdjective (parm = "*") {
     return function inner(wrap = "special"){
         return `You are ${parm}${wrap}${parm}!`
     }
 }
 