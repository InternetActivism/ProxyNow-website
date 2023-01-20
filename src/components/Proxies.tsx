import React from "react";
import { useEffect, useRef, useState } from "react";

import { useTable } from 'react-table'
import MaterialTable from 'material-table';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Proxies = () => {

    const IP_ADDRESS = '141.148.228.97'; // Example IP address

    const [tableData, setTableData] = useState([])

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

    // async function getCountryFromIp(ip) {
    //   //console.log(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}` + '&ipAddress=' + ip)
    //   //const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}` + '&ipAddress=' + ip);
    //   const response = await fetch(`http://ip-api.com/json/` + ip)
    //   const data = response.json();
    //   //console.log(data.location.country);
    //   //return data.location.country;
    //   console.log(data.countryCode)
    //   return data.countryCode;
    // }

    async function getIpInfo() { 
      const dataJSON = await new Promise(fetchData => setTimeout(fetchData, 1000));
      // console.log(dataJSON
      let data = [];
      for (let [id, info] of Object.entries(dataJSON)) {
      
        
        // get countries
        let country = ""
        if(!info.country) {
          // country = await getCountryFromIp(info.ip)      
          // MAKE SURE TO IMPLEMENT INSERTING COUNTRY FLAG: https://stackoverflow.com/questions/49282818/icons-in-react-table 
        }
        else {
          country = info.country
        }
        
        let platformData = [];
        if(info.platforms.whatsapp && info.platforms.telegram) {
          platformData = ["whatsapp", "telegram"];
        }
        else if(info.platforms.whatsapp) {
          platformData = ["whatsapp"];
        }
        else if(info.platforms.telegram) {
          platformData = ["telegram"];
        }
        
        let obj = {
          // get ip addresses
          ip: info.ip,
          // get ports
          port: info.port,
          country: country,
          // get platforms
          platforms: platformData
        }
        data.push(obj);
      }
      return data;
    }

    async function createProxyTable() {
      setTableData(getIpInfo());

      // organize into table like below
    }

    async function createData(number, item, qty, price) {
      return { number, item, qty, price };
     }
       
     const rows = [
      createData(1, "Apple", 5, 3),
      createData(2, "Orange", 2, 2),
      createData(3, "Grapes", 3, 1),
      createData(4, "Tomato", 2, 1.6),
      createData(5, "Mango", 1.5, 4)
     ];

     const columns = [
        {
          field:'ip',
          headerName: 'IP Address', // accessor is the "key" in the data
        },
        {
          field: 'port',
          headerName: 'Port',
        },
        {
          field: 'country',
          headerName: 'Country',
        },
        {
          field: 'platforms',
          headerName: 'Platforms',
        }
      ]

    return (
      <>
        <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={12}
        />
      </div>
        </>
    );
}

export default Proxies;