import React, { Component } from "react";

/* Import Components */
import CheckBox from "../Components/CheckBox";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Select from "../Components/Select";
import Button from "../Components/Button";
import axios from "axios";
import Apptable from "../tablecompnent";

//import TableData from '../form';
class FormContainer extends Component {
constructor(props) {
    super(props);
    this.state = {
      newUser: {
        EmailID:"",
        FirstName:"",
        LastName:"",
        branch:"",
        Gender: "",
        phno:"",
        batch:"",
        designation:"",
        rows: [{}]
        
      },
      certValues: [{ certName: "", certLink : "" }],
      branchOptions:["CSE -H","CSE -R","AI & DS","ECE"],
      batchOptions:["Y20","Y21","Y22","Y19"],
      designationOptions:["Faculty","Student","Co-ordinator","Hod"],
      genderOptions: ["Male", "Female", "Others"],
      certOptions: ["AWS SAA","AWS DA","Redhat ex183"],
      certurlOptions: ["Programming", "Development", "Design", "Testing"]
    };
    //this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleAge = this.handleAge.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleCheckBox2 = this.handleCheckBox2.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleAddRow = this.handleAddRow.bind(this);
    // this.handleRemoveRow = this.handleRemoveRow.bind(this);
    // this.handleRemoveSpecificRow = this.handleRemoveSpecificRow.bind(this);
  }

  handleChange(i, e) {
    let certValues = this.state.certValues;
    certValues[i][e.target.name] = e.target.value;
    this.setState({ certValues });
  }

  addFormFields() {
    this.setState(({
      certValues: [...this.state.certValues, { certName: "", certLink: "" }]
    }))
  }

  removeFormFields(i) {
    let certValues = this.state.certValues;
    certValues.splice(i, 1);
    this.setState({ certValues });
  }


  // handleAge(e) {
  //   let value = e.target.value;
  //   this.setState(
  //     prevState => ({
  //       newUser: {
  //         ...prevState.newUser,
  //         age: value
  //       }
  //     }),
  //     () => console.log(this.state.newUser)
  //   );
  // }
  // handleChange = idx => e => {
  //   const { name, value } = e.target;
  //   const rows = [...this.state.newUser.rows];
  //   rows[idx] = {
  //     [name]: value
  //   };
  //   this.setState(
  //     // rows
  //     prevState => ({
  //       newUser: {
  //         ...prevState.newUser,
  //         [name]: value
  //       }
  //     }) 
  //   );
  // };
  // handleAddRow = () => {
  //   const item = {
  //     name: "",
  //     mobile: ""
  //   };
  //   console.log(item);
  //   this.setState({
  //     rows: [...this.state.newUser.rows, item]
  //   });
    
  // };
  // handleRemoveRow = () => {
  //   this.setState({
  //     rows: this.state.newUser.rows.slice(0, -1)
  //   });
  // };
  // handleRemoveSpecificRow = (idx) => () => {
  //   const rows = [...this.state.newUser.rows]
  //   rows.splice(idx, 1)
  //   this.setState({ rows })
  // }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,         
          [name]: value
        }
      }) 
    );
  }

  // handleTextArea(e) {
  //   console.log("Inside handleTextArea");
  //   let value = e.target.value;
  //   this.setState(
  //     prevState => ({
  //       newUser: {
  //         ...prevState.newUser,
  //         about: value
  //       }
  //     }),
  //     () => console.log(this.state.newUser)
  //   );
  // }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.certurl.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.certurl.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.certurl, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, certurl: newSelectionArray }
    }));
  }
  handleCheckBox2(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.Nameofcert.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.Nameofcert.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.Nameofcert, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, Nameofcert: newSelectionArray }
    }));
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.state.newUser.rows = this.state.certValues;
    let userData = this.state.newUser;
    console.log(userData);
    axios.post('https://i408lklthf.execute-api.us-east-1.amazonaws.com/stage',userData)
      .then(function (response) {
        console.log(response);
      })
 
  }

  handleClearForm(e) {
    e.preventDefault();
    console.log(this.state.newUser);
    this.setState({
      newUser: {
        EmailID:"",
        FirstName:"",
        LastName:"",
        branch:"",
        age: "",
        Gender: "",
        skills: [],
        Nameofcert: [],
        batch:"",
        certurl:[]
      }
    });
  }

  render() {
    
    return (
      <div>
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>

         <Input
          inputType={"text"}
          title={"Email ID:"}
          name={"EmailID"}
          value={this.state.newUser.EmailID}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          title={"First Name"}
          name={"FirstName"}
          value={this.state.newUser.FirstName}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
         <Input
          inputType={"text"}
          title={"Last Name"}
          name={"LastName"}
          value={this.state.newUser.LastName}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        {/* <Input
          inputType={"number"}
          name={"age"}
          title={"Age"}
          value={this.state.newUser.age}
          placeholder={"Enter your age"}
          handleChange={this.handleAge}
        />{" "} */}
        {/* Age */}
        <Select
          title={"Gender"}
          name={"Gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.Gender}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />{" "}
        <Select
          title={"Department"}
          name={"branch"}
          options={this.state.branchOptions}
          value={this.state.newUser.branch}
          placeholder={"Select branch"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          title={"Phone Number"}
          name={"phno"}
          value={this.state.newUser.phno}
          placeholder={"Enter phone number"}
          handleChange={this.handleInput}
        />{" "}
         
        <Select
          title={"Batch"}
          name={"batch"}
          options={this.state.batchOptions}
          value={this.state.newUser.batch}
          placeholder={"Select batch"}
          handleChange={this.handleInput}
        />{" "}
          <Select
          title={"Designation"}
          name={"designation"}
          options={this.state.designationOptions}
          value={this.state.newUser.designation}
          placeholder={"Select designation"}
          handleChange={this.handleInput}
        />{" "}
         {/* <CheckBox
          title={"Certs"}
          name={"Nameofcert"}
          options={this.state.certOptions}
          selectedOptions={this.state.newUser.Nameofcert}
          handleChange={this.handleCheckBox2}
        />{" "}
          <CheckBox
          title={"CertUrl"}
          name={"certurl"}
          options={this.state.certurlOptions}
          selectedOptions={this.state.newUser.certurl}
          handleChange={this.handleCheckBox}
        />{" "} */}
         {/* <Apptable/> */}
         {this.state.certValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>cert Name</label>
              <input type="text" name="certName" value={element.certName || ""} onChange={e => this.handleChange(index, e)} />


            


              <label>cert link</label>
              <input type="text" name="certLink" value={element.certLink || ""} onChange={e => this.handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
            <div className="button-section">
              <button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
          </div>


        {/* <div className="container">
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
                  {this.state.newUser.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        {/* <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        /> */}
                       {/* <Select
        //   title={"Designation"}
                                 name={"designation"}
          options={this.state.designationOptions}
          value={this.state.newUser.rows[idx].name}
          placeholder={"Select designation"}
          handleChange={this.handleChange(idx)}
                  />{" "}



                      </td>
                      <td>
                        <input
                          type="text"
                          name="mobile"
                          value={this.state.newUser.rows[idx].mobile}
                          onChange={this.handleChange(idx)}
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
        </div> */} 



















        {/* Skill */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
     
       
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
