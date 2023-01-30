import React, { Component } from 'react';
import axios from 'axios';


class movies extends Component {
  state = {
    loading: false,
    EmailID: "",
    Gender: "",
    branch: "",
    designation: "",
    phno: "",
    Nameofcert: [],
    certurl: [],
    FirstName: "",
    LastName: "",
    batch: "",
    value: ''
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios(
      `https://2oro97ky0l.execute-api.us-east-1.amazonaws.com/getcustomerdetailsbyemail/getcustomerdetailsbyemail?EmailID=${val}`
    );
    const movies = await res.data;
    //console.log(movies.Item);
    this.setState({EmailID:movies.Item.EmailID});
    this.setState({designation:movies.Item.designation});
    this.setState({phno:movies.Item.phno});
    this.setState({FirstName:movies.Item.FirstName});
    this.setState({LastName:movies.Item.LastName});
    this.setState({batch:movies.Item.batch});
    this.setState({Nameofcert:movies.Item.Nameofcert});
    this.setState({certurl:movies.Item.certurl});
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };
  render() {
    const nameofcert = this.state.Nameofcert.map(cert =>
        <li>{cert}</li>
      );
    const certurl = this.state.certurl.map(url => <li>{url}</li>);
    
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {/* <button onClick={this.search(this.state.value)} >Search</button> */}
        <h>{this.state.EmailID}</h>
        <h2>{this.state.FirstName}</h2>
        <h1>{this.state.LastName}</h1>
        <h3>{this.state.Gender}</h3>
        <h2>{this.state.phno}</h2>
        <h2>{this.state.designation}</h2>
        <h2>{this.state.batch}</h2>
        <ul>{nameofcert}</ul>   
        <strong><url>{certurl}</url></strong>
      </div>
    );
  }
}

export default movies;