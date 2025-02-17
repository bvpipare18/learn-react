import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function MyButton() {
  return <button>Click me</button>;
}

// use embedded JSX expression inside of a component
function MyComponent() {
  const name = "Virat Kohli";
  const age = 35;
  const element = <h1>Hello, {name} {age}</h1>;
  return element;
}


// use Javascript function in JSX expression
function add(x, y){
  return x+y;
}
function AddNumbers(){
  return <h1>Let's add numbers {add(10,5)}</h1>
}


// dynamic attributes


function RenderDynamicAttr() {
  const imageURL = "https://images.unsplash.com/photo-1618886487325-f665032b6352?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const linkToSite = "www.example.com"
const imageElement = <img src={imageURL}></img>
const linkElement = <a href={linkToSite}>click me</a>
  return linkElement;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderDynamicAttr/>
    <MyComponent/>
    <MyButton/>
    <AddNumbers/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
