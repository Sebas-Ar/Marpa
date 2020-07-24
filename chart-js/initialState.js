export const initialState = (data, axis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]) => ({
    labels: axis,
    datasets: [
        {
            label: "Voltaje", // nombre
            lineTension: 0.1, // curvas
            fill: false, // relleno
            backgroundColor: "rgba(75,192,192,0.4)", // color relleno
            borderColor: "rgba(75,192,192,1)", // color linea
            borderCapStyle: "butt", // estilo de punto final de linea
            borderDash: [], // cortes de la linea
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(75,192,192,1)",
            pointBorderWidth: 5,
            pointHoverRadius: 12,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,0)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 15,
            data,
        },
    ],
});