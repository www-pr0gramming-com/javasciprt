var database = [
  {
    username: "taro",
    password: "password1",
  },
  {
    username: "taro2",
    password: "password1",
  },
  {
    username: "taro3",
    password: "password1",
  },
  {
    username: "taro4",
    password: "password1",
  },
];

var news = [
  {
    username: "john",
    timeline: "aaaaaaaaaaaaaaaaaa",
  },
  {
    username: "john2",
    timeline: "bbbbbbbbbbbbbbbbbb",
  },
];

var username = prompt("username?");
var password = prompt("password?");

function eachUser(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (eachUser(username, password)) {
    console.log(news);
  } else {
    alert("wrong username and password!");
  }
}

signIn(username, password);
