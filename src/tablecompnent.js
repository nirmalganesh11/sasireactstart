import React from "react";
import Select from "./Components/Select";

class Apptable extends React.Component {
  
        state = {
            rows: [{}],
            name:[],
            link:[],
            designationOptions:["AWS SAA","AWS DA","AWS Cloud Practitioner","Hod"],
            certurlOptions: ["Programming", "Development", "Design", "Testing"]
          };
          
  // handleChange = idx => e => {
  //   const { name, value } = e.target;
  //   const rows = [...this.state.rows];
  //   rows[idx] = {
  //     [name]: value
  //   };
  //   this.setState({
  //     rows
  //   });
  //   console.log(this.state.rows);
  // };
  handleChange3 = idx => e => {
    const { name, value } = e.target;
    const link= [...this.state.link];
    link[idx] = {
      [name]: value
    };
    this.setState({
      link
    });
    console.log(this.state.link);
  };

  handleChange2 = idx => e => {
    const { namethis, value } = e.target;
    const name = [...this.state.name];
    name[idx] = {
      [namethis]: value
    };
    this.setState({
      name
    });
    console.log(this.state.name);
  }
  handleAddRow = () => {
    const item = {
      certName: "",
      certUrl: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
   
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> # </th>
                    <th className="text-center"> Certificate Name </th>
                    <th className="text-center"> Certificate Url </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange2(idx)}
                          className="form-control"
                        />
                       {/* <Select
        //   title={"Designation"}
                        name={"certName"}sd
                        options={this.state.designationOptions}
                        value={this.state.name[idx]}
                        placeholder={"Select designation"}
                        className="myselect"
                        handleChange={this.handleChange2(idx)}
                      />{" "} */}
         {/* <select value={this.state.rows[idx].certName} onChange={this.handleChange(idx)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}
        



                      </td>
                      {/* <td>
                        <input
                          type="text"
                          name="certUrl"
                          value={this.state.link[idx]}
                          onChange={this.handleChange3(idx)}
                          className="form-control"
                        />
                      </td> */}
                      <td>
                        <input
                          type="text"
                          name="certUrl"
                          value={this.state.rows[idx].certUrl}
                          onChange={this.handleChange3(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Apptable;