import { useState } from 'react'

const Button = ({handler, label}) => {
  return(
    <>
    <button onClick={handler}>{label}</button>
    </>
  )
}

const StatisticLine = ({title, count}) => {
return (
  <>
    <tr>
      <td>{title}</td>
      <td>{count}</td>
    </tr> 
  </>
)
}

const Statistics = (props) => {
  const {total, average, good, positive, bad, neutral} = {...props.stats}
  if (total <= 0) {
    return (
      <>
      <tr><td>No Feedback is given</td></tr>
      </>
    )
  }
  return (
    <>
    <StatisticLine title={"good"} count={good} />
    <StatisticLine title={"neutral"} count={neutral} />
    <StatisticLine title={"bad"} count={bad} />
    <StatisticLine title={"all"} count={total} />
    <StatisticLine title={"average"} count={average} />
    <StatisticLine title={"positive"} count={positive + " %"} />
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

  const stats = {
    total,
    average,
    positive,
    good,
    neutral,
    bad
  }
  return (
    <div>
      <h2>
        Give feedback
      </h2>
      <Button label={"good"} handler={() => setGood(good + 1)} />
      <Button label={"neutral"} handler={() => setNeutral(neutral +1)} />
      <Button label={"bad"} handler={() => setBad(bad +1)} />

      <h2>
        Statistics
      </h2>
      <table>
        <tbody>
        <Statistics stats={stats} />
        </tbody>
      </table>
    </div>
  )
}

export default App
