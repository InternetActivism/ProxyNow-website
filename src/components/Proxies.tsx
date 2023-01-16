import React from "react";
import { useEffect, useRef, useState } from "react";

import { useTable } from 'react-table'

const Proxies = () => {

    const IP_ADDRESS = '141.148.228.97'; // Example IP address
    
    useEffect(() => {
      createProxyTable();
      const val = setInterval(() => {
        createProxyTable();
      }, 1000*60*30);
      return () => clearInterval(val);
    });
    
    async function fetchData() {
      const response = await fetch('https://proxynow-c699d-default-rtdb.firebaseio.com/.json');
      if (response.ok) {
        const response_body = await response.json();
        return response_body;
      }
    }

    async function getCountryFromIp(ip) {
      //console.log(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}` + '&ipAddress=' + ip)
      //const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}` + '&ipAddress=' + ip);
      const response = await fetch(`http://ip-api.com/json/` + ip)
      const data = response.json();
      //console.log(data.location.country);
      //return data.location.country;
      console.log(data.countryCode)
      return data.countryCode;
    }
    
    const dataTest = React.useMemo(() => [],[])

    async function getIpInfo() { 
      // fetchData()
      const dataJSON = await fetchData();
      // console.log(dataJSON

      for (let [id, info] of Object.entries(dataJSON)) {
      
        
        // get countries
        let country = ""
        if(!info.country) {
          country = await getCountryFromIp(info.ip)      
          // MAKE SURE TO IMPLEMENT INSERTING COUNTRY FLAG: https://stackoverflow.com/questions/49282818/icons-in-react-table 
        }
        else {
          country = info.country
        }
        
        

        let obj = {
          // get ip addresses
          ip: info.ip,
          // get ports
          port: info.port,
          country: country,
          // get platforms
          whatsappTrue: info.platforms.whatsapp,
          telegramTrue: info.platforms.telegram
        }
        dataTest.push(obj);
        
      }
      console.log(dataTest)
      return dataTest
    }

    async function createProxyTable() {
      console.log(getIpInfo())

      // organize into table like below
    }
    
    const data = React.useMemo(
      () => [
        {
          col1: 'Hello',
          col2: 'World',
        },
        {
          col1: 'react-table',
          col2: 'rocks',
        },
        {
          col1: 'whatever',
          col2: 'you want',
        },
      ],
      []
    )
    
    const columns = React.useMemo(
      () => [
        {
          Header: 'IP Address',
          accessor: 'ip', // accessor is the "key" in the data
        },
        {
          Header: 'Port',
          accessor: 'port',
        },
        {
          Header: 'Country',
          accessor: 'country',
        },
        {
          Header: 'Platforms',
          accessor: 'platforms',
        }
      ],
      []
    )
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, dataTest })
  
    return (
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
};

export default Proxies;