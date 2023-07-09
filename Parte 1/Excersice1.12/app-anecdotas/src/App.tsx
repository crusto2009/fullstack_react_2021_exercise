import { useState } from 'react'
import './App.css'

function App() {

  let numero = [0, 1, 2, 3, 4, 5]


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const desordenarArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  desordenarArray(numero)

  const generarNumeroAleatorio = () => {
    const randomIndex = Math.floor(Math.random() * numero.length)
    return numero[randomIndex]
  }



  const handleNextAnecdota = () => {
    setSelected(generarNumeroAleatorio())
  }

  const handleVoteAnectoda = () => {

    let copy = { ...points }
    let positionSeledtecAnecdota: number = parseInt(selected.toString())
    console.log(positionSeledtecAnecdota)

    copy[positionSeledtecAnecdota as keyof typeof points] += 1

    setPoints(copy)
  }


  const filterBestAnecdota = () => {
    let menor = -Infinity
    let indexMayor = null


    Object.values(points).map((value, index) => {
      let valor = points[index as keyof typeof points]
      if (valor > menor) {
        menor = valor;
        indexMayor = index
      }
    })


    return indexMayor
  }

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  })

  let best = filterBestAnecdota() ?? null
  let contentBestAnecdota = null

  if (best != null) {
    contentBestAnecdota = <>
      {anecdotes[best as keyof typeof points]}
      <span>Has{points[best]} votes</span>
    </>
  } 

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <button onClick={handleNextAnecdota}>Next anecdota</button>
      <button onClick={handleVoteAnectoda}>Vote</button>

      <h2>Best Anecdote</h2>
      {contentBestAnecdota}
      
    </>
  )
}



export default App
