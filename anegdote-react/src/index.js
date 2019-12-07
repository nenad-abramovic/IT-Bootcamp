import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Quote =({text, points}) => {
    return(
        <>
        <p>{text}</p>
        <p>has {points} votes</p>
        </>
    )
}

const App = ({quotes}) => {
    const [points, setPoints] = useState(Array(quotes.length).fill(0));
    const [index, setIndex] = useState(0);
    const [best, setBest] = useState(0);
  return (
        <>
    <Quote key={index} text={quotes[index]} points={points[index]}></Quote>
    <button onClick={() => setIndex(Math.floor(Math.random() * quotes.length))}>Random</button>
    <button onClick={() => {
        setPoints(points.map((p, i) => (i === index) ? p+1 : p)); 
        console.log(Math.max(...points), points);
        setBest(points.indexOf(Math.max(...points)));
    }}>Vote</button>
    <Quote text={quotes[best]} points={points[best]} />
    </>
  );
}

const quotes = [
    'Talk is cheap. Show me the code.',
    'Programs must be written for people to read, and only incidentally for machines to execute.',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Give a man a program, frustrate him for a day.',
    'Teach a man to program, frustrate him for a lifetime.',
    'The most disastrous thing that you can ever learn is your first programming language.',
    'The most important property of a program is whether it accomplishes the intention of its user.',
    'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.',
    'Happiness should be a function without any parameters',
    'User interface is the process of shifting from chaotic complexity to elegant simplicity.'
]

ReactDOM.render(
  <App quotes={quotes} />,
  document.getElementById('root')
)