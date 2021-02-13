import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "modern-normalize/modern-normalize.css";
//import './index.css';
//import reportWebVitals from './reportWebVitals';


//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*const link = React.createElement("a", { href: "https://reactjs.org", target: "_blank" }, "Ссылочка");
//ReactDOM.render(link, document.getElementById("root"));
const jsxlink = <a href="reactjs.org">Ссылочка</a>;
console.log(link);
console.log(jsxlink);*/

/*const painting = {
  "id": "id-1",
  "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  "title": "Feathers. Art abstract",
  "price": 500,
  "author": {
    "tag": "ractapopulous",
    "url": "https://pixabay.com/users/ractapopulous-24766/"
  },
  "quantity": 10
};*/

/*const templete = (
  <div>
    <img src={painting.url} alt={painting.title} width="300"/>
    <h2>{painting.title}</h2>
    <p>Автор: <a href = {painting.author.url}>{painting.author.tag}</a></p>
    <p>Цена: {painting.price} кредитов</p>
    <button type="button">Добавить в корзину</button>
  </div>
);*/
//console.log(templete);
//ReactDOM.render(templete, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
