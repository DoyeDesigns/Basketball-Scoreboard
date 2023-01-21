let homeScore = 0
let awayScore = 0

// home scorboard Id's for points button
let plusOneEl = document.getElementById('home-score')
let plusTwoEl = document.getElementById('home-score')
let plusThreeEl = document.getElementById('home-score')

// function to add one point to total home points
function onePointHome() {
    homeScore += 1
    plusOneEl.textContent = homeScore
}

// function to add two points to total home score
function twoPointHome() {
    homeScore += 2
    plusOneEl.textContent = homeScore
}

// function to add three points to total home score
function threePointHome() {
    homeScore += 3
    plusOneEl.textContent = homeScore
}

// away scorboard Id's for points button
let plusOneElAway = document.getElementById('away-score')
let plusTwoElAway = document.getElementById('away-score')
let plusThreeElAway = document.getElementById('away-score')

// function to add one point to total away points
function onePointAway() {
    awayScore += 1
    plusOneElAway.textContent = awayScore
}

// function to add two points to total away score
function twoPointAway() {
    awayScore += 2
    plusOneElAway.textContent = awayScore
}

// function to add three points to total away score
function threePointAway() {
    awayScore += 3
    plusOneElAway.textContent = awayScore
}

// // function to reset the scoreboard
// awayScoreReset = document.getElementById('away-score')
// homeScoreReset = document.getElementById('home-score')

// function reset() {                         
// console.log(homeScore)
// console.log(awayScore)


// awayScoreReset.textContent = 0
// homeScoreReset.textContent = 0
// }