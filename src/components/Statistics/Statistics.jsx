import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const marksArray = [
        {
            assignment: 'A-1',
            marks: 57

        },
        {
            assignment: 'A-2',
            marks: 54

        },
        {
            assignment: 'A-3',
            marks: 54

        },
        {
            assignment: 'A-4',
            marks: 52

        },
        {
            assignment: 'A-5',
            marks: 50

        },
        {
            assignment: 'A-6',
            marks: 44

        },
        {
            assignment: 'A-7',
            marks: 58

        },
        {
            assignment: 'A-8',
            marks: 49

        } 
    ]


    return (
        <div className='stat'>
            <h3>Course Statistics</h3>
            <div className='stat area'>
            <AreaChart
                width={800}
                height={400}
                data={marksArray}
                margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
                 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;