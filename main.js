const numberOfWins = +process.argv[2];
const numberOfRounds = +process.argv[3];
const weapons = ['rock' , 'paper', 'scissors', 'lizard', 'Spock'];
const weaponOfChoice = () => {
  return weapons[parseInt(Math.random()*weapons.length) %5];
}
const result = (winLoseDraw) => {
  switch (winLoseDraw) {
    case 'lose':
    console.log("Player 2 wins!\n");
    playerTwoScore++;
    break;
    case 'draw':
    console.log("It's a draw.\n");
    break;
    default:
    console.log("Player 1 wins!\n");
    playerOneScore++;
  }
}
const whoWins = (playerOne, playerTwo) => {
  switch (true) {
    case playerOne === playerTwo:
      result('draw');
      break;
      case playerOne === weapons[0] && playerTwo === weapons[2] || weapons[3]:
      result('win');
      break;
      case playerOne === weapons[1] && playerTwo === weapons[0] || weapons[4]:
      result('win');
      break;
      case playerOne === weapons[2] && playerTwo === weapons[1] || weapons[3]:
      result('win');
      break;
      case playerOne === weapons[3] && playerTwo === weapons[1] || weapons[4]:
      result('win');
      break;
      case playerOne === weapons[4] && playerTwo === weapons[0] || weapons[2]:
      result('win');
      break;
      default:
      result('lose');
  }
}
const playerOneMoves = [];
const playerTwoMoves = [];
let playerOneScore = 0;
let playerTwoScore = 0;

for (let i = 0; i < numberOfRounds; i++) {
  playerOneMoves.push(weaponOfChoice());
  playerTwoMoves.push(weaponOfChoice());
  console.log(`Round ${i + 1}:`);
  console.log(`Player 1: ${playerOneMoves[i]}`);
  console.log(`Player 2: ${playerTwoMoves[i]}`);
  whoWins(playerOneMoves[i], playerTwoMoves[i]);
  if (playerOneScore === numberOfWins || playerTwoScore === numberOfWins) {
    console.log(playerOneScore === numberOfWins ? `Player 1 won ${numberOfWins} rounds out of ${numberOfRounds}. Player 1 wins the game!` : `Player 2 won ${numberOfWins} rounds out of ${numberOfRounds}. Player 2 wins the game!`);
    return true;
  }
}
console.log(`Player 1 score: ${playerOneScore}`);
console.log(`Player 2 score: ${playerTwoScore}`);
console.log(playerOneScore > playerTwoScore ? "Player One wins the game!" : playerTwoScore > playerOneScore ? "Player Two wins the game!" : "This game is a draw.");

