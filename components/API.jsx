import React, {useState, useEffect} from 'react'
import Table from '../components/Table.jsx'

const API = ({ columns, template, width = 'auto', type = '', className = '', fake, func, isMobile }) => {
    const [tables, setTables] = useState(template);
    const [prices, setPrices] = useState(false);
    const [color, setColor] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            func(setTables, setPrices, setColor, prices, isMobile)
        }, 10000)
    },[tables]);

    return (
        <Table
            width={width}
            className={className}
            columns={columns}
            tables={tables}
            type={type}
            fake={fake}
            colors={color}
        />
    )
}

export default API;