/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Jay from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "My"];
  let subject = ["dog", "alien", "neighbor", "driver", "sister", "bird"];
  let action = ["took", "stole", "broke", "ruined", "tore", "burned"];
  let possession = ["my homework", "my wallet", "my laptop", "my food"];
  let where = ["on the street", "on the plane", "in the kitchen"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possession.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[posIndex] +
    " " +
    where[wheIndex]
  );
};
