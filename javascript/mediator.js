function Player(name) {
  this.points = 0;
  this.name = name;
}

Player.prototype.play = function() {
  this.points += 1;
  mediator.played();
}

var scoreboard = {
  element: document.getElementById('results'),
  update: function(score) {
    var i, msg = '';
    for (i in score) {
      if (score.hasOwnProperty(i)) {
        msg = `<p><strong>${i}</strong>: ${score[i]}</p>`;
      }
    }
    this.element.innerHTML = msg;
  }
}

var mediator = {
  player: {},
  setup: function() {
    var players = this.players;
    players.home = new Player('home');
    players.guest = new Player('guest');
  },

  played: function() {
    var players = this.players;
    var score = {
      Home: players.home.points,
      Guest: players.guest.points,
    };
    scoreboard.update(score);
  },

  keypress: function(e) {
    if (e.which === 49) {
      mediator.players.guest.play();
      return null;
    }
    if (e.which === 48) {
      mediator.players.home.play();
      return null;
   }
  }
}
