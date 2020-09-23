import React from 'react';
import './App.css';
import {stockData} from './data'

export const Stocks=()=>{
    return (
        <React.Fragment>
            <div className="stock-container">

            <Homepage />
            <tr>
                <th>Company</th>
                <th>ticker</th>
                <th>stockPrice</th>
                <th>timeElapsed</th>
            </tr>
                {stockData.map((data, key)=>{
                    return(
                        <div key={key}>
                       
                            <Stock
                            key = {key}
                            company ={ data.company}
                            ticker ={ data.ticker}
                            stockPrice={data.stockPrice}
                            timeElapsed={ data.timeElapsed}
                            />
                          
                        </div>
                    )
                })}


            </div>
        </React.Fragment>
    );
}

const Homepage=()=>{
    return(
        <header className="header">
            <h2>your stock tracker</h2>
        </header>
    );
}

const Stock=({company, ticker, stockPrice, timeElapsed})=>{
    if(!company) return <div />;
    return(
        <table>
         
        
         <tbody>
           
          
            <tr>
                <td>
                    <h5>{company}</h5>
                </td>
                
          
                <td>
                    <h5>{ticker}</h5>
                </td>
          
                <td>
                    <h5>{stockPrice}</h5>
                </td>
           
                <td>
                    <h5>{timeElapsed}</h5>
                </td>
            </tr>
            </tbody>    
        </table>
    )

}