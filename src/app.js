/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es"];
  for (let i = 0; i < pronoun.length; i++) {
    console.log(pronoun[0].concat(adj[i], noun[0], extension[0]));
    console.log(pronoun[1].concat(adj[0], noun[0], extension[0]));
  }
  for (let i = 0; i < pronoun.length; i++) {
    console.log(pronoun[0].concat(adj[i], noun[0], extension[1]));
    console.log(pronoun[1].concat(adj[0], noun[0], extension[1]));
  }
  for (let i = 0; i < pronoun.length; i++) {
    console.log(pronoun[0].concat(adj[i], noun[1], extension[0]));
    console.log(pronoun[1].concat(adj[0], noun[1], extension[0]));
  }
  for (let i = 0; i < pronoun.length; i++) {
    console.log(pronoun[0].concat(adj[i], noun[1], extension[1]));
    console.log(pronoun[1].concat(adj[0], noun[1], extension[1]));
  }
};
