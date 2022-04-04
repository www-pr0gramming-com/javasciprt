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

function signIn(user, password) {
  if (user === database[0].username && password === database[0].password) {
    console.log(news);
  } else {
    alert("wrong username and password!");
  }
}

signIn(username, password);

function eachUser(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
