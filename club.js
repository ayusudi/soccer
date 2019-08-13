class Club {
  constructor(teamName, stadium, location, manager, budgetTransfer) {
    this.name = teamName
    this.stadium = stadium
    this.location = location
    this.manager = manager
    this.budgetTransfer = budgetTransfer
    this.players = []
  }
  addPlayer(player) {
    player.currentClub = this.name
    this.players.push(player)
  }
  buyPlayer(player, club) {
    if (this.budgetTransfer > player.transferFee) {
      if (!player.currentClub && !club) {
        this.budgetTransfer -= player.transferFee
        this.addPlayer(player)
        console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer}`)
      }
      else if (club.name === player.currentClub) {
        this.budgetTransfer -= player.transferFee
        this.addPlayer(player)
        for (let i=0; i<club.players.length; i++){
          if (club.players[i].currentClub !== club.name){
            club.players.splice(i, 1)
          }
        }
        console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer}`)
      }
      else {
        console.log(`There is no Player with name ${player.name} in ${club.name}.`)
      }
    }
    else {
      console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for $${player.transferFee - this.budgetTransfer} to buy this player`)
    }
  }
}

class RealMadrid extends Club {
  constructor() {
    super('Real Madrid F.C', 'Santiago Bernabeu', 'Madrid', 'Zinadine Zidane', 10000000000)
  }
}

class Barcelona extends Club {
  constructor() {
    super('F.C. Barcelona', 'Camp Nou', 'Barcalona', 'Ernest Valverde', 20000000)
  }
}

class Liverpool extends Club {
  constructor() {
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}

class Arsenal extends Club {
  constructor() {
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000)
  }
}

module.exports = {
  RealMadrid,
  Barcelona,
  Liverpool,
  Arsenal
}