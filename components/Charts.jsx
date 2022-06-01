import { PureComponent } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'USD/RUB',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'USD/RUB',
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'USD/RUB',
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'USD/RUB',
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'USD/RUB',
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'USD/RUB',
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'USD/RUB',
        pv: 4300,
        amt: 2100,
    },
];

export default class Charts extends PureComponent {

    render() {
        const { type } = this.props;
        return (
            <ResponsiveContainer width="100%" height="100%">

                {type === 'line' ?
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
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#00579C" />
                    </LineChart>:
                    type === 'bar' ?
                        <BarChart
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
                            <XAxis dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="pv" fill="#23C14F" />
                        </BarChart> : <></>
                }
            </ResponsiveContainer>
        );
    }
}