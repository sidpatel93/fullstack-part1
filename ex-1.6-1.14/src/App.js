import { useState } from 'react'

const Button = ({handler, label}) => {
  return(
    <>
    <button onClick={handler}>{label}</button>
    </>
  )
}

const Display = ({title, count}) => {
return (
  <>
    <p>{title} {count}</p> 
  </>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good/total) * 100;

  return (
    <div>
      <h2>
        give feedback
      </h2>
      <Button label={"good"} handler={() => setGood(good + 1)} />
      <Button label={"neutral"} handler={() => setNeutral(neutral +1)} />
      <Button label={"bad"} handler={() => setBad(bad +1)} />
      <h2>
        Statistics
      </h2>
      <Display title={"good"} count={good} />
      <Display title={"neutral"} count={neutral} />
      <Display title={"bad"} count={bad} />
      <Display title={"all"} count={total} />
      <Display title={"average"} count={average} />
      <Display title={"positive"} count={positive + " %"} />
    </div>
  )
}

export default App
