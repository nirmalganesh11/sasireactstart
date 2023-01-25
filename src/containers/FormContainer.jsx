import React, { Component } from "react";

/* Import Components */
import CheckBox from "../Components/CheckBox";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Select from "../Components/Select";
import Button from "../Components/Button";
import axios from "axios";

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
        Nameofcert:[],
        certurl: [],
        batch:"",
        designation:""
      },
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
    const obj ={
    "EmailID": "2003245233",
    "FirstName": "nirmal",
    "LastName": "ganesh",
    "branch": "cse",
    "Gender": "male",
    "phno": "1234567",
    "Nameofcert": "awssaa",
    "certurl": "qwertyuio",
    "batch": "y20",
    "designation": "faculty"
    }
    e.preventDefault();
    let userData = this.state.newUser;
    //let userData = obj;
    console.log(userData);
    axios.post('https://i408lklthf.execute-api.us-east-1.amazonaws.com/stage',userData)
      .then(function (response) {
        console.log(response);
      })
    // fetch("https://i408lklthf.execute-api.us-east-1.amazonaws.com/stage", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",`
    //     "Content-Type": "application/json",
    //     "Access-Control-Request-Headers": "*",
    //     "Access-Control-Request-Method": "*"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
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
         <CheckBox
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
        />{" "}
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
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
