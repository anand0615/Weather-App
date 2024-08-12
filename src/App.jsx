import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import { locationContext } from "./Context";
import axios from "axios";
import ShowData from "./components/ShowData";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [location, setLocation] = useState("delhi");
  const [weatherdata, setWeatherdata] = useState(null);

  async function getData() {
    try {
      const res = await axios.get(
        `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`
      );
      console.log(res.data);
      setWeatherdata(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='bg-gray-200 w-screen h-screen'>
      <locationContext.Provider value={{ location, setLocation }}>
        <AppBar onClick={getData} />
        <ShowData data={weatherdata} />
      </locationContext.Provider>
    </div>
  );
}
