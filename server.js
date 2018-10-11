const express = require('express');
const NBA = require('nba');
const nbajs = require('nba.js');
const fs = require('fs');
const _ = require('lodash')

const players = require('./players.json');
const splits = require('./splits.json');
const shooting = require('./shooting.json');
const splitstest = require('./splitstest.json');

// splitstest.forEach((val) => {
//     if (val.splits.center['0-8'].shots !== 0) {
//       val.splits.center['0-8'].percentage = Number(val.splits.center['0-8'].made / val.splits.center['0-8'].shots * 100).toFixed(2);
//     } else val.splits.center['0-8'].percentage = 0.00
//     if (val.splits.center['8-16'].shots !== 0) {
//       val.splits.center['8-16'].percentage = Number(val.splits.center['8-16'].made / val.splits.center['8-16'].shots * 100).toFixed(2);
//     } else val.splits.center['8-16'].percentage = 0.00
//     if (val.splits.center['16-24'].shots !== 0) {
//       val.splits.center['16-24'].percentage = Number((val.splits.center['16-24'].made / val.splits.center['16-24'].shots) * 100).toFixed(2);
//     } else val.splits.center['16-24'].percentage = 0.00
//     if (val.splits.center['24+'].shots !== 0) {
//       val.splits.center['24+'].percentage = Number(val.splits.center['24+'].made / val.splits.center['24+'].shots * 100).toFixed(2);
//     } else val.splits.center['24+'].percentage = 0.00

//     if (val.splits.right['8-16'].shots !== 0) {
//       val.splits.right['8-16'].percentage = Number(val.splits.right['8-16'].made / val.splits.right['8-16'].shots * 100).toFixed(2);
//     } else val.splits.right['8-16'].percentage = 0.00
//     if (val.splits.right['16-24'].shots !== 0) {
//       val.splits.right['16-24'].percentage = Number((val.splits.right['16-24'].made / val.splits.right['16-24'].shots) * 100).toFixed(2);
//     } else val.splits.right['16-24'].percentage = 0.00
//     if (val.splits.right['24+'].shots !== 0) {
//       val.splits.right['24+'].percentage = Number(val.splits.right['24+'].made / val.splits.right['24+'].shots * 100).toFixed(2);
//     } else val.splits.right['24+'].percentage = 0.00

//     if (val.splits.left['8-16'].shots !== 0) {
//       val.splits.left['8-16'].percentage = Number(val.splits.left['8-16'].made / val.splits.left['8-16'].shots * 100).toFixed(2);
//     } else val.splits.left['8-16'].percentage = 0.00
//     if (val.splits.left['16-24'].shots !== 0) {
//       val.splits.left['16-24'].percentage = Number((val.splits.left['16-24'].made / val.splits.left['16-24'].shots) * 100).toFixed(2);
//     } else val.splits.left['16-24'].percentage = 0.00
//     if (val.splits.left['24+'].shots !== 0) {
//       val.splits.left['24+'].percentage = Number(val.splits.left['24+'].made / val.splits.left['24+'].shots * 100).toFixed(2);
//     } else val.splits.left['24+'].percentage = 0.00

//     if (val.splits.leftCenter['16-24'].shots !== 0) {
//       val.splits.leftCenter['16-24'].percentage = Number((val.splits.leftCenter['16-24'].made / val.splits.leftCenter['16-24'].shots) * 100).toFixed(2);
//     } else val.splits.leftCenter['16-24'].percentage = 0.00
//     if (val.splits.leftCenter['24+'].shots !== 0) {
//       val.splits.leftCenter['24+'].percentage = Number(val.splits.leftCenter['24+'].made / val.splits.leftCenter['24+'].shots * 100).toFixed(2);
//     } else val.splits.leftCenter['24+'].percentage = 0.00

//     if (val.splits.rightCenter['16-24'].shots !== 0) {
//       val.splits.rightCenter['16-24'].percentage = Number((val.splits.rightCenter['16-24'].made / val.splits.rightCenter['16-24'].shots) * 100).toFixed(2);
//     } else val.splits.rightCenter['16-24'].percentage = 0.00
//     if (val.splits.rightCenter['24+'].shots !== 0) {
//       val.splits.rightCenter['24+'].percentage = Number(val.splits.rightCenter['24+'].made / val.splits.rightCenter['24+'].shots * 100).toFixed(2);
//     } else val.splits.rightCenter['24+'].percentage = 0.00
    
//     if (val.splits.backCourt['backCourt'].shots !== 0) {
//       val.splits.backCourt['backCourt'].percentage = Number((val.splits.backCourt['backCourt'].made / val.splits.backCourt['backCourt'].shots) * 100).toFixed(2);
//     } else val.splits.backCourt['backCourt'].percentage = 0.00

//     if(val.shotsTaken !== 0) {
//       val.percentage = Number((val.shotsMade / val.shotsTaken) * 100).toFixed(2);
//     }
// })

// const stats = JSON.stringify(splitstest, null, 2);
// const txt = 'splitstest2.json';
// fs.writeFile(txt, stats);

// splits.forEach((player) => {

//   shooting.forEach((val) => {
//     if(val.playerId === player.playerId) {
//       if (val.eventType === 'Made Shot') {
//         player.shotsMade++;
//       }
//       player.shotsTaken++;
//       if(val.shotZoneArea === 'Left Side(L)') {
//         if (val.shotZoneRange === '8-16 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.left['8-16'].made++
//           }
//             player.splits.left['8-16'].shots++
//         } 
//         else if(val.shotZoneRange === '16-24 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.left['16-24'].made++
//           }
//             player.splits.left['16-24'].shots++
//         }
//         else if(val.shotZoneRange === '24+ ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.left['24+'].made++
//           }
//             player.splits.left['24+'].shots++
//         }
//       }
//       if (val.shotZoneArea === 'Left Side Center(LC)') {
//         if(val.shotZoneRange === '16-24 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.leftCenter['16-24'].made++
//           }
//             player.splits.leftCenter['16-24'].shots++
//         }
//         else if(val.shotZoneRange === '24+ ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.leftCenter['24+'].made++
//           }
//             player.splits.leftCenter['24+'].shots++
//         }
//       }
//       if (val.shotZoneArea === 'Center(C)') {
//         if (val.shotZoneRange === 'Less Than 8 ft.'){
//           if(val.eventType === 'Made Shot') {
//             player.splits.center['0-8'].made++
//           }
//             player.splits.center['0-8'].shots++
//         }
//         else if (val.shotZoneRange === '8-16 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.center['8-16'].made++
//           }
//             player.splits.center['8-16'].shots++
//         } 
//         else if(val.shotZoneRange === '16-24 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.center['16-24'].made++
//           }
//             player.splits.center['16-24'].shots++
//         }
//         else if(val.shotZoneRange === '24+ ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.center['24+'].made++
//           }
//             player.splits.center['24+'].shots++
//         }
//       }
//       if (val.shotZoneArea === 'Right Side(R)') {
//         if (val.shotZoneRange === '8-16 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.right['8-16'].made++
//           }
//             player.splits.right['8-16'].shots++
//         } 
//         else if(val.shotZoneRange === '16-24 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.right['16-24'].made++
//           }
//             player.splits.right['16-24'].shots++
//         }
//         else if(val.shotZoneRange === '24+ ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.right['24+'].made++
//           }
//             player.splits.right['24+'].shots++
//         }
//       }
//       if (val.shotZoneArea === 'Right Side Center(RC)') {
//         if(val.shotZoneRange === '16-24 ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.rightCenter['16-24'].made++
//           }
//             player.splits.rightCenter['16-24'].shots++
//         }
//         else if(val.shotZoneRange === '24+ ft.') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.rightCenter['24+'].made++
//           }
//             player.splits.rightCenter['24+'].shots++
//         }
//       }
//       if (val.shotZoneArea === 'Back Court(BC)') {
//         if(val.shotZoneRange === 'Back Court Shot') {
//           if(val.eventType === 'Made Shot') {
//             player.splits.backCourt['backCourt'].made++
//           }
//             player.splits.backCourt['backCourt'].shots++
//         }
//       }
//     } 
//   })

// })

// const stats = JSON.stringify(splits, null, 2);
// const txt = 'splitstest.json';
// fs.writeFile(txt, stats);




let newArray = [];

// data.shot_Chart_Detail.forEach((val) => {
//   let obj = {};
//   obj.playerId = val.playerId;
//   obj.eventType = val.eventType;
//   obj.shotZoneArea = val.shotZoneArea;
//   obj.shotDistance = val.shotDistance;
//   obj.shotType = val.shotType;
//   obj.shotZoneRange = val.shotZoneRange;
//   newArray.push(obj);
// })

// const stats = JSON.stringify(newArray, null, 2);
// const txt = 'shooting.txt';
// fs.writeFile(txt, stats);



// players.forEach((val) => {
//   let obj = {};

//   obj.playerId = val.playerId;
//   obj.shotsTaken = 0,
//   obj.shotsMade = 0,
//   obj.splits = {
//     center: {
//       '0-8': {
//         made: 0,
//         shots: 0
//       },
//       '8-16': {
//         made: 0,
//         shots: 0
//       },
//       '16-24': {
//         made: 0,
//         shots: 0
//       },
//       '24+': {
//         made: 0,
//         shots: 0
//       }
//     },
//     rightCenter: {
//       '16-24': {
//         made: 0,
//         shots: 0
//       },
//       '24+': {
//         made: 0,
//         shots: 0
//       }
//     },
//     right: {
//       '8-16': {
//         made: 0,
//         shots: 0
//       },
//       '16-24': {
//         made: 0,
//         shots: 0
//       },
//       '24+': {
//         made: 0,
//         shots: 0
//       }
//     },
//     leftCenter: {
//       '16-24': {
//         made: 0,
//         shots: 0
//       },
//       '24+': {
//         made: 0,
//         shots: 0
//       }
//     },
//     left: {
//       '8-16': {
//         made: 0,
//         shots: 0
//       },
//       '16-24': {
//         made: 0,
//         shots: 0
//       },
//       '24+': {
//         made: 0,
//         shots: 0
//       }
//     },
//     backCourt: {
//       'backCourt': {
//         made: 0,
//         shots: 0,
//       }
//     }
//   }
//   newArray.push(obj);
// })

// console.log(newArray);

//     stats = JSON.stringify(newArray, null, 2);
//     const txt = 'splits.json'
//     fs.writeFile(txt, stats);

// console.log(splits[0]['203518']);

const app = express();

const port = 3000;

// const curry = NBA.findPlayer('stephen curry');
// console.log(curry);

// let stats;
// NBA.stats.playerProfile({ PlayerID: curry.playerId })
//   .then((data) => {
//     stats = JSON.stringify(data.seasonTotalsRegularSeason, null, 2);
//     const txt = 'test.txt'
//     fs.writeFile(txt, stats);
//   })

// NBA.stats.shots()
//   .then((data) => {
//     stats = JSON.stringify(data, null, 2);
//         const txt = 'test4.txt'
//         fs.writeFile(txt, stats);
//   })

app.listen(port, function () {
  console.log("Server is running on " + port + " port");
});