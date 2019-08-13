const Player = require('./player')
const User = require('./user')
const RealMadrid = require('./club').RealMadrid
const Barcelona = require('./club').Barcelona
const Liverpool = require('./club').Liverpool
const Arsenal = require('./club').Arsenal

const PremierLeague = require('./league').PremierLeague
const LaLiga = require('./league').Laliga

//DRIVER CODE
//----------------PLAYER_RELEASE 0--------
let cristianoRonaldo = new Player('Cristiano Ronaldo', '1.87m', 'Striker', 'Portugal', 94000000);
let toniKroos = new Player('Toni Kroos', '1.83m', 'Central Midfield', 'Germany', 25000000);

let gerardPique = new Player('Gerard Pique', '1.93m', 'Centre-Back', 'Spain', 4300000);
let luisSuarez = new Player('Luis Suarez', '1.82m', 'Centre-Forward', 'Uruguay', 73000000);

let davidLuiz = new Player('David Luiz', '1.89m', 'Centre-Back', 'Brazil', 35000000);
let thibautCourtois = new Player('Thibaut Courtois', '1.99m', 'Keeper', 'Belgium', 2000000);

let mohamedSalah = new Player('Mohamed Salah', '1.77m', 'Striker', 'Egypt', 42000000);
let andrewRobertson = new Player('Andrew Robertson', '1.77m', 'Left-Back', 'Egypt', 9000000);

console.log(cristianoRonaldo);
//EXPECTED OUTPUT:
  // Player {
  // playerName: 'Cristiano Ronaldo',
  // height: '1.87m',
  // position: 'Striker',
  // nationality: 'Portugal',
  // transferFee: 94000000,
  // currentClub: null }

//----------------USER_RELEASE 1--------
let nurdin = new User('nurdin', 'EU')
let bimo = new User('bimo', 'SEA')
let yusuf = new User('yusuf', 'SEA')
let teddy = new User('Teddy', 'SEA')
console.log(nurdin);


// //--------------------CLUB_RELEASE 2----------
let realMadrid = new RealMadrid(nurdin);
realMadrid.addPlayer(cristianoRonaldo);
console.log(realMadrid);
// // EXPECTED OUTPUT:
//   //RealMadrid {
//   // user : User {
//   // name : 'nurdin', lose:0, win:0, server: 'EU'
//   // },
//   // name: 'Real Madrid F.C.',
//   // stadium: 'Santiago Bernabéu',
//   // location: 'Madrid',
//   // manager: 'Zinedine Zidane',
//   // budgetTransfer: 10000000000,
//   // players:
//   //  [ Player {
//   //      playerName: 'Cristiano Ronaldo',
//   //      height: '1.87m',
//   //      position: 'Striker',
//   //      nationality: 'Portugal',
//   //      transferFee: 94000000,
//   //      currentClub: 'Real Madrid F.C.' } ] }

let barca = new Barcelona(bimo);
barca.addPlayer(gerardPique);
barca.addPlayer(luisSuarez);
console.log(barca);
// // EXPECTED OUTPUT:
//   // Barcelona {
//   // name: 'F.C. Barcelona',
//   // stadium: 'Camp Nou',
//   // location: 'Barcelona',
//   // manager: 'Ernesto Valverde',
//   // budgetTransfer: 20000000,
//   // players:
//   //  [ Player {
//   //      playerName: 'Gerard Pique',
//   //      height: '1.93m',
//   //      position: 'Centre-Back',
//   //      nationality: 'Spain',
//   //      transferFee: 4300000,
//   //      currentClub: 'F.C. Barcelona' },
//   //    Player {
//   //      playerName: 'Luis Suarez',
//   //      height: '1.82m',
//   //      position: 'Centre-Forward',
//   //      nationality: 'Uruguay',
//   //      transferFee: 73000000,
//   //      currentClub: 'F.C. Barcelona' } ] }

let liverpool = new Liverpool(teddy);
console.log(liverpool);
//EXPECTED OUTPUT:
  // Liverpool {
  //   name: 'Liverpool F.C.',
  //   stadium: 'Anfield',
  //   location: 'Liverpool',
  //   manager: 'Jürgen Klopp',
  //   budgetTransfer: 50000000,
  //   players: [] }

let arsenal = new Arsenal(teddy);
console.log(arsenal);
//EXPECTED OUTPUT:
  // Arsenal {
  //   name: 'Arsenal F.C.',
  //   stadium: 'Emirates Stadium',
  //   location: 'London',
  //   manager: 'Arsène Wenger',
  //   budgetTransfer: 35000000,
  //   players: [] }

// //----------------------LEAGUE_RELEASE 2----------------------------
let premierLeague = new PremierLeague();
console.log(premierLeague);
//EXPECTED OUTPUT:
  // PremierLeague {
  //   country: 'United Kingdom',
  //   ceo: 'Richard Scudamore',
  //   clubs: [] }

let laliga = new LaLiga();
//  LaLiga { country: 'Spain', ceo: 'Javier Gomez', clubs: [] }

premierLeague.addClub(liverpool);
premierLeague.addClub(arsenal);

laliga.addClub(realMadrid);
console.log(JSON.stringify(laliga, null, 2));
laliga.addClub(barca);

premierLeague.members();
//EXPECTED OUTPUT
  //List club in this League:
  // ===============================
  //1. Liverpool F.C., stadium: Anfield
  //2. Arsenal F.C., stadium: Emirates Stadium

laliga.members();
//EXPECTED OUTPUT
  // List club in this League:
  // ===============================
  // 1. Real Madrid F.C., stadium: Santiago Bernabéu
  // 2. F.C. Barcelona, stadium: Camp Nou

// premierLeague.members()

// //------------------BURSATRANSFERPEMAIN_RELEASE 3------------------------


arsenal.buyPlayer(andrewRobertson, null); // You buy Andrew Robertson with transfer fee $9000000, remaining budget: $26000000
console.log(arsenal);

// console.log(barca);
arsenal.buyPlayer(gerardPique, barca); //You buy Gerard Pique with transfer fee $4300000, remaining budget: $21700000

arsenal.buyPlayer(thibautCourtois, liverpool) //There is no Player with name Thibaut Courtois in Liverpool F.C.


console.log(arsenal);
// console.log(barca);
// //EXPECTED OUTUPUT for Object ARSENAL after buy player, budget berkurang dan list player bertambah
//   // Arsenal {
//   //   name: 'Arsenal F.C.',
//   //   stadium: 'Emirates Stadium',
//   //   location: 'London',
//   //   manager: 'Arsène Wenger',
//   //   budgetTransfer: 21700000,
//   //   players:
//   //    [ Player {
//   //        playerName: 'Andrew Robertson',
//   //        height: '1.77m',
//   //        position: 'Left-Back',
//   //        nationality: 'Egypt',
//   //        transferFee: 9000000,
//   //        currentClub: 'Arsenal F.C.' },
//   //      Player {
//   //        playerName: 'Gerard Pique',
//   //        height: '1.93m',
//   //        position: 'Centre-Back',
//   //        nationality: 'Spain',
//   //        transferFee: 4300000,
//   //        currentClub: 'Arsenal F.C.' } ] }

console.log(gerardPique);
// //EXPECTED OUTPUT AFTER GERARD PIQUE BOUGHT BY ARSENAL, currentClub berubah
//   // Player {
//   //   playerName: 'Gerard Pique',
//   //   height: '1.93m',
//   //   position: 'Centre-Back',
//   //   nationality: 'Spain',
//   //   transferFee: 4300000,
//   //   currentClub: 'Arsenal F.C.' }

console.log(barca);
// //EXPECTED OUTPUT IN OBJECT barca after GERARD PIQUE transfered, Gerard Pique not in the list players anymore
//   // Barcelona {
//   //   name: 'F.C. Barcelona',
//   //   stadium: 'Camp Nou',
//   //   location: 'Barcelona',
//   //   manager: 'Ernesto Valverde',
//   //   budgetTransfer: 20000000,
//   //   players:
//   //    [ Player {
//   //        playerName: 'Luis Suarez',
//   //        height: '1.82m',
//   //        position: 'Centre-Forward',
//   //        nationality: 'Uruguay',
//   //        transferFee: 73000000,
//   //        currentClub: 'F.C. Barcelona' } ] }

liverpool.buyPlayer(cristianoRonaldo, realMadrid);
// //EXPECTED OUTPUT:
//   //Budget not sufficient to buy Cristiano Ronaldo. Your club need extra money for $44000000 to buy this player
