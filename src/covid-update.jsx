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
      <h3>Live - Covid-19 Corona Virus Tracker</h3>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Active</th>
            <td>{numFormat.format(covidDate.active)}</td>
          </tr>
          <tr>
            <th scope="row">confirmed</th>
            <td>{numFormat.format(covidDate.confirmed)}</td>
          </tr>
          <tr>
            <th scope="row">deaths</th>
            <td>{numFormat.format(covidDate.deaths)}</td>
          </tr>
          <tr>
            <th scope="row">deltaconfirmed</th>
            <td>{numFormat.format(covidDate.deltaconfirmed)}</td>
          </tr>
          <tr>
            <th scope="row">deltadeaths</th>
            <td>{numFormat.format(covidDate.deltadeaths)}</td>
          </tr>
          <tr>
            <th scope="row">deltarecovered</th>
            <td>{numFormat.format(covidDate.deltarecovered)}</td>
          </tr>
          <tr>
            <th scope="row">lastupdatedtime</th>
            <td>{covidDate.lastupdatedtime}</td>
          </tr>
          <tr>
            <th scope="row">migratedother</th>
            <td>{numFormat.format(covidDate.migratedother)}</td>
          </tr>
          <tr>
            <th scope="row">recovered</th>
            <td>{numFormat.format(covidDate.recovered)}</td>
          </tr>
          <tr>
            <th scope="row">state</th>
            <td>{covidDate.state} All</td>
          </tr>
          <tr>
            <th scope="row">statecode</th>
            <td>{covidDate.statecode}</td>
          </tr>
          <tr>
            <th scope="row">statenotes</th>
            <td>{covidDate.statenotes ? covidDate.statenotes : "NA"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}

export default CovidUpdate;
