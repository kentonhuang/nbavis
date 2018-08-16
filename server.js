const express = require('express');
const NBA = require('nba');
const nbajs = require('nba.js');
const fs = require('fs');

const app = express();

const port = 3000;

const curry = NBA.findPlayer('zhou qi');
console.log(curry);

// let stats;
// NBA.stats.playerProfile({ PlayerID: curry.playerId })
// 	.then((data) => {
// 		stats = JSON.stringify(data.seasonTotalsRegularSeason, null, 2);
// 		const txt = 'test.txt'
// 		fs.writeFile(txt, stats);
// 	})

app.listen(port, function () {
	console.log("Server is running on " + port + " port");
});