import React from "react";
import { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const Proxies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://proxynow-c699d-default-rtdb.firebaseio.com/.json');
      if (response.ok) {
        const response_body = await response.json();
        setData(response_body);
      }
    };
    fetchData();
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">IP Address</th>
          <th className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">Country</th>
          <th className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">Platforms</th>
          <th className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">Latency</th>
          <th className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">Last Checked</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(data).map((item, index) => (
          <tr key={index}>
            <td className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">{item.ip}</td>
            <td className="pl-4 sm:pl-12 md:pl-14 lg:pl-20 inline-flex items-center">
              <span class="mr-2">{item.country}</span>
              <img className="w-6 h-6 object-cover" src={`https://flagpedia.net/data/flags/normal/${item.country.toLowerCase()}.png`} alt={item.country} />
            </td>
            <td className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">
              {item.platforms.telegram ? <img className="w-8 h-8 object-cover" src={"/telegram.svg"} alt="Telegram" /> : null}
              {item.platforms.whatsapp ? <img className="w-8 h-8 object-cover" src={"/whatsapp.svg"} alt="WhatsApp" /> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Proxies;
