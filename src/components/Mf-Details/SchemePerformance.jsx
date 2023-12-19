import React from 'react'

import { useState } from "react";

function SchemePerformance() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };

  return (
    <>
       <div className='card-mn box-shadow performance-hist-details'>
        <h3 className='title-secnd'>Scheme's <span>Performance</span> (Historical)</h3>
        <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                    <th>
                    Calendar
                    </th>
                    <th>
                    Fund Return(%)
                    </th>
                    <th>
                    Category Average(%)
                    </th>
                    <th>
                    Category Best(%)
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1 m</td>
                    <td>5.12</td>
                    <td>0.68</td>
                    <td>5.12</td>
                    </tr>
                    <tr>
                    <td>1 m</td>
                    <td>20.02</td>
                    <td>5.13</td>
                    <td>22.21</td>
                    </tr>
                    <tr>
                    <td>1 m</td>
                    <td>13.84</td>
                    <td>6.60</td>
                    <td>25.28</td>
                    </tr>
                    <tr>
                    <td>1 m</td>
                    <td>149.47</td>
                    <td>16.89</td>
                    <td>149.47</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default SchemePerformance