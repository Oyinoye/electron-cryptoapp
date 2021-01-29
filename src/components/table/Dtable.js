import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './Table.css'
import {Line} from 'react-chartjs-2';
import DataTable from '@bit/adeoy.utils.data-table';
import axios from 'axios';



import "bootstrap/dist/css/bootstrap.min.css";

const API_LINK = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1y';

  
const Dtable = () => {

const [items, setItems] = useState([]);
const [price, setPrice] = useState([]);

let id = [];

useEffect(() => {
  const fetchItems = async () => {
    const result = await axios(API_LINK);
  
  // console.log(result.data)
  let happy = result.data
 let lineGraph = () => happy.forEach(element => {
    price.push({
      labels: element.sparkline_in_7d.price,
      datasets: [{ data: element.sparkline_in_7d.price }]
    });

    setPrice(lineGraph)
  }) 

  setItems(happy);

  // happy.forEach(record => {
  //   price.push(record.id);
  //   time.push(record.market_cap);
  // });



  // let newArray = []

  // newArray.map((items) => {
  //   return items.sparkline_in_7d.price;
  // })

  // console.log(newArray);
  
  }
  fetchItems();
}, [])

// console.log(items[2].sparkline_in_7d.price)




// const state = {
//   // labels: new Array(items.length).fill("Data"),
//   labels: chartData,
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: []
//     }
//   ]
// }

  // console.log(Object.keys(items[1])[2])
  // console.log(items[1].name)

  // const dataArr = items.reduce(function(acc, crypto) {
   
  //   return {...acc, 
  //    [Object.keys(items[1])[2]]: items[2].name,
  //    [Object.keys(items[1])[3]]: items[2].image,
  //    [Object.keys(items[1])[4]]: items[2].current_price,
  //    [Object.keys(items[1])[5]]: items[2].market_cap,
  //    [Object.keys(items[1])[9]]: items[2].high_24h,
  //    [Object.keys(items[1])[11]]: items[2].price_change_24h
  //  }
  // },
  //   []);
  
  // console.log(dataArr)

  
 
  // console.log(data);

  const columns = [
    { title: 'Asset Name', format: (row) => (<div className='assets'><img src={row.image} alt={row.title} /> <div className='assets_name'>  <div className='assets_id'> {row.id}</div> <span> {row.symbol}</span> </div></div>) },
    { title: 'Price', format: (row) => <> ${row.current_price}</> },
    { title: "24H Change", data: "price_change_percentage_24h" },
    { title: "Market Cap", format: (row) => <> ${row.market_cap} </>},
    { title: "Volume", format: (row) => <> ${row.total_volume} </>},
    { title: "Market Cap", format: (row) => (

    <div className="chart">
        {price.map((n, index) => {
          return <Line key={index} data={n} />;
        })}
      </div>




    /* <Line
      data={state}
      options={{
        title:{
          display:true,
          fontSize:14
        },
        legend:{
          display:false,
          position:'right'
        }
      }}
    /> */
  
    )},
  ];

  const click = (row) => {
    console.log(row);
  };

  return (
    <div className='table__main'>
        
      <DataTable
        data={items}
        columns={columns}
        striped={true}
        hover={true}
        responsive={true}
        onClickRow={click}
      />
    </div>
  );
};

export default Dtable;

