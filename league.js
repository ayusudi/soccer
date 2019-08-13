class League{
  constructor(country, ceo){
    this.country = country
    this.ceo = ceo
    this.clubs = [] 
  }
  addClub(club){
    this.clubs.push(club)
  }
  members(){
    console.log('\nList club in this League :')
    console.log('===============================');
    for (let i=0; i<this.clubs.length; i++){
      console.log(`${i+1}. ${this.clubs[i].name}, stadium ${this.clubs[i].stadium} `);
    }
  }
}

class PremierLeague extends League{
  constructor(){
    super('United Kingdom', 'Ricard Scudamore')
  }
}

class Laliga extends League{
  constructor(){
    super('Spain', 'Javier')
  }
}

module.exports = {
  PremierLeague,
  Laliga
}
