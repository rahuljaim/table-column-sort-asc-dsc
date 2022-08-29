import React, { useState, useEffect } from "react";
import ShortButton from "./ShortButton";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [val, setVal] = useState([]);
  const [val2, setVal2] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (val.length == 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setVal(res.data));
    }
  }, []);
  const updataval = (eventVal, bool) => {
    if (val) {
      setVal2(eventVal);
      setToggle(bool);
      console.log("val", val.length, val2.length);
    } else {
      setVal(eventVal);
      setToggle(bool);
      console.log("val", val.length, val2.length);
    }
  };

  return (
    <div>
      {/* {console.log(val)} */}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <table border="1px">
        <thead>
          <tr>
            <th>
              Name{" "}
              <ShortButton tdata={val} column="name" updataval={updataval} />
            </th>
            <th>
              Phone
              <ShortButton tdata={val} column="phone" updataval={updataval} />
            </th>
            <th>
              Email{" "}
              <ShortButton tdata={val} column="email" updataval={updataval} />
            </th>
            <th>
              Website{" "}
              <ShortButton tdata={val} column="website" updataval={updataval} />
            </th>
            <th>
              UserName
              <ShortButton
                tdata={val}
                column="username"
                updataval={updataval}
              />
            </th>
            <th>
              Company Name{" "}
              <ShortButton
                tdata={val}
                column="company.name"
                updataval={updataval}
              />
            </th>
          </tr>
        </thead>
        {toggle
          ? val.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.website}</td>
                    <td>{e.username}</td>
                    <td>{e.company.name}</td>
                  </tr>
                </tbody>
              );
            })
          : val2.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.website}</td>
                    <td>{e.username}</td>
                    <td>{e.company.name}</td>
                  </tr>
                </tbody>
              );
            })}
      </table>
    </div>
  );
}
