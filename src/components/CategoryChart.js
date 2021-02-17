import React, { useState, useEffect} from 'react';
import { Radar } from 'react-chartjs-2';

function CategoryChart({ currentUser }){

    const categories = currentUser.tasks.map(task => task.category)
    const points = currentUser.tasks.map(task => task.points)

    const [chartData, setChartData] = useState({})

    // const [categories, setCategories] = useState("")
    // const [points, setPoints] = useState()

    // useEffect(() => {
    //     if (currentUser){
    //         setCategories(currentUser.tasks.map(task => task.category))
    //         setPoints(currentUser.tasks.map(task => task.points))
    //     }
    // }, [])

    function chart(){
        setChartData( 
            {
                labels: categories,
                datasets: [
                {
                    label: 'Points',
                    data: points,
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "#2235c1",
                    borderColor: "#2235c1",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#2fd39f",
                    pointBackgroundColor: "#2fd39f",
                    pointBorderWidth: 10,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "#2fd39f",
                    pointHoverBorderColor: "#2085d8",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return(
        <div className="chart">
            <Radar
                data={chartData} 
                options={{
                    responsive: true,
                    title: { text: "MY GOALS DISTRIBUTION", display:true },       
                }} 
            />
        </div>
    );
}

export default CategoryChart;