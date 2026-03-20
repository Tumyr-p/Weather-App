import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer} from 'recharts';



export default function Example({customGraf}: { customGraf: { temp: number; time: string }[] }) {
    return (
        <ResponsiveContainer
            width="100%"
            height={350}

        >
            <LineChart
                data={customGraf}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke='#6AB5C8'/>
                <XAxis dataKey="time" stroke='#6AB5C8'/>
                <YAxis width="auto" stroke='#6AB5C8'/>
                <Tooltip
                    cursor={{
                        stroke: '#6AB5C8',
                    }}
                    contentStyle={{
                        backgroundColor: '#1ab1d5',
                        borderColor: '#ffffff',
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#ffffff"
                    dot={{ fill: '#5bc8e8' }}
                    activeDot={{ r: 8, stroke: '#2196f3' }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}