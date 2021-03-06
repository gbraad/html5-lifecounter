window.addEventListener("load", function() {
  var d = document;
  var players = d.getElementsByClassName("player");
  var startingLifeTotal = parseInt(players[0].getElementsByClassName("player-life-total")[0].innerHTML);

  var playerLifeUp = function() {
    var playerLifeTotalElem = this.parentNode.getElementsByClassName("player-life-total")[0];
    playerLifeTotalElem.innerHTML = parseInt(playerLifeTotalElem.innerHTML) + 1;
  };

  var playerLifeDown = function() {
    var playerLifeTotalElem = this.parentNode.getElementsByClassName("player-life-total")[0];
    playerLifeTotalElem.innerHTML = parseInt(playerLifeTotalElem.innerHTML) - 1;
  };

  var playerLifeReset = function() {
    var playerLifeTotalElem = this.parentNode.getElementsByClassName("player-life-total")[0];
    playerLifeTotalElem.innerHTML = startingLifeTotal;
  };

  for (var i = 0; i < players.length; i++) {
    var lifeUp = players[i].getElementsByClassName("player-life-up")[0];
    lifeUp.addEventListener("click", playerLifeUp);
    var lifeDown = players[i].getElementsByClassName("player-life-down")[0];
    lifeDown.addEventListener("click", playerLifeDown);
    var lifeTotal = players[i].getElementsByClassName("player-life-total")[0];
    lifeTotal.addEventListener("click", playerLifeReset);
  }

});
