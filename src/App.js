import React from "react";
import Logo from "./components/Logo"
import Panel from "./components/Panel"
//import Painting from "./components/Painting";   //у ехала
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";

/*const numbers = [1,2,3,4,5];*/
const colors = ["red", "green", "blue", "yellow"];
const App = () => {
    return (
        <div>
           {/*<h1>Главный компонент-контейнер приложения</h1>*/}
      {/*<ul>{numbers.map((number)=>(<li>{number}</li>))}</ul>*/ }
            <Panel  title="Последние новости">
                <p>Привет!</p>
                <a href="">Читать...</a>
            </Panel>
             <Panel>
                <p>Привет!</p>
                <p>
                   Lorem ipsum ..... 
                </p>
            </Panel>
            <Logo text="Главный компонент-контейнер приложения" />
            
            <ul>
                {colors.map((color) => (
                    <li key={color}>{color}</li>//key может быть index
                ))}
            </ul>
            <PaintingList paintings={paintings}/>
            {/*<ul class='gallerys'>
                {paintings.map((painting) => (
              <li key={painting.id}> 
                <Painting
                url={painting.url}
                title={painting.title}//   уехала PaintingList.js
                price={painting.price}
                profileUrl={painting.author.url}
                tag ={painting.author.tag}
                quantity={painting.quantity}
                />
              </li>
            ))}
                </ul>*/}  
            
            {/*   <Painting url={paintings[2].url}
                title={paintings[2].title}
                price={paintings[2].price}
                profileUrl={paintings[2].author.url}
                tag ={paintings[2].author.tag}
                quantity={paintings[2].quantity}
            />

             <Painting url="https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg"
                title="Feathers. Art abstract"
                price={500}
                profileUrl="https://pixabay.com/users/ractapopulous-24766/"
                tag ="ractapopulous"
                quantity={paintings[0].quantity}
    />*/}
        </div>
    );
};

export default App;