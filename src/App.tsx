import { getNominalExchangeData, dataNominalExchangeRate } from '../public/data.tsx'
import Chart from './Chart.tsx';

const nominalExchangeData:dataNominalExchangeRate = await getNominalExchangeData()

function App() {
  return (
    <>
      <Chart data={nominalExchangeData}></Chart>
    </>
  )
}

export default App

