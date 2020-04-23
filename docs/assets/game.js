let health = document.getElementById("health");
let mana = document.getElementById("mana");
let day = document.getElementById("day");
let backpack = document.getElementById("backpack");
let userHolder = document.getElementById("user");
let message = document.getElementById("message");
let buttons = document.getElementById("buttons");
let user = {
  name: '',
  health: 100,
  mana: 0,
  day: 0
}
let levels = {
  intro: '',
  one_1: "I wish you well on your journey and I hope this can help you conquer your initial obstacles.",
  one_2: "Umm...OK. Your choice buddy."
}
let rusty_sword = {
  cat: "w",
  dmg: 10,
  pos: 0,
  in: false
}
let button = {
  functionOne: function() {},
  functionTwo: function() {},
  functionThree: function() {},
  functionFour: function() {},
}
function ini() {
  user.name = prompt("What's your name adventurer?");
  levels.intro = "Welcome, " + user.name + ", to Millowill. Our world inhabits as many enchanting creatures as strange phenomenon.<br>For now, you need not know who I am, but allow me to give you with a little something to help you get started.";
  userHolder.innerText = user.name;
  health.innerText = user.health;
  mana.innerText = user.mana;
  message.innerHTML = levels.intro;
  day.innerText = user.day;
  buttons.children[0].innerText = "Accept";
  buttons.children[1].innerText = "Decline";
  button.functionOne = function() {
    rusty_sword.in = true;
    backpack.children[0].innerText = "Rusty sword";
    message.innerHTML = levels.one_1;
  }
}
