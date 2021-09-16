import { useEffect, useState } from "react";

const CovidUpdate = () => {

  let numFormat = Intl.NumberFormat("en-IN");

  console.log("Rupees: " + numFormat.format(45435435435334));


  const [covidDate, setCovidData] = useState(['']);

  const getCovidDate = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const resFormat = await res.json();
      console.log(resFormat.statewise[0]);
      setCovidData(resFormat.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCovidDate();
  },[]);

  return (
    <div>
      <h4>Live</h4>
      <h3>Covid-19 Corona Virus Tracker</h3>
      <ol>
        <li>active - {numFormat.format(covidDate.active)}</li>
        <li>confirmed - {numFormat.format(covidDate.confirmed)}</li>
        <li>deaths - {numFormat.format(covidDate.deaths)}</li>
        <li>deltaconfirmed - {numFormat.format(covidDate.deltaconfirmed)}</li>
        <li>deltadeaths - {numFormat.format(covidDate.deltadeaths)}</li>
        <li>deltarecovered - {numFormat.format(covidDate.deltarecovered)}</li>
        <li>lastupdatedtime - {covidDate.lastupdatedtime}</li>
        <li>migratedother - {numFormat.format(covidDate.migratedother)}</li>
        <li>recovered - {numFormat.format(covidDate.recovered)}</li>
        <li>state - {covidDate.state}</li>
        <li>statecode - {covidDate.statecode}</li>
        <li>statenotes - {covidDate.statenotes ? covidDate.statenotes : "NA"}</li>
      </ol>
    </div>
  );

}

export default CovidUpdate;
