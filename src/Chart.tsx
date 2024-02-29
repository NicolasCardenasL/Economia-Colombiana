import { dataChart } from "../public/data.tsx"
import { Tooltip, Legend, ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';

function Chart({ data }: { data: dataChart }) {
  console.log(data)
  return (
    <>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="vigenciadesde" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="black" activeDot={{ r: 3 }} />
        </LineChart>
    </>
  )
}

export default Chart
