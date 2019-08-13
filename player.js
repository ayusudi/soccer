class Player {
    constructor(playerName, height, position, nationality, transferFee){
      this.playerName = playerName
      this.height = height
      this.position = position
      this.nationality = nationality
      this.transferFee = transferFee
      this.currentClub = null
    }
}

module.exports = Player