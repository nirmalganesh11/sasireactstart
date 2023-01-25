
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBCol, MDBIcon } from "mdbreact";
function Users() {
  const [post, setPost] = useState([]);
  
  const [searchInput, setSearchInput] = useState("2000031363@kluniversity.in");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

   
  // useEffect(() => {
  //   axios.get("https://2oro97ky0l.execute-api.us-east-1.amazonaws.com/getcustomerdetailsbyemail/getcustomerdetailsbyemail?EmailID=2000031363@kluniversity.in").then((data) => {
  //     console.log(data.data);
  //     setPost(data?.data.Item);
  //   });
  // }, []); 
  
//   const listItems = post.Nameofcert.map((number) =>
//   <li>{number}</li>
// );
  return (
    <div>
      Users
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
        <div>
          <button onClick={() => axios.get('https://2oro97ky0l.execute-api.us-east-1.amazonaws.com/getcustomerdetailsbyemail/getcustomerdetailsbyemail?EmailID=${searchInput}').then((data) => {
      console.log(data.data);
      setPost(data?.data.Item);
    })} >Search</button>
        </div>
      <p>{post.EmailID}</p>
      <p>{post.batch}</p>
      <p>{post.designation}</p>
      {/* <ol>{post.Nameofcert.map((cert) => {
        <li>{cert}</li>
      })}</ol> */}
      {/* {
        post.Nameofcert.map((certs,index)=>{
          <li key={index}>{certs}</li>
        })
      } */}


    </div>
  );


// const [query, setQuery] = useState("");
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await axios.get(`https://2oro97ky0l.execute-api.us-east-1.amazonaws.com/getcustomerdetailsbyemail/getcustomerdetailsbyemail?EmailID=${query}`);
//             setData(res.data);
//         };
//         if (query.length === 10 || query.length > 20) fetchData();
//     }, [query]);

//     return (
//         <div className="app">
//             <input
//                 className="search"
//                 placeholder="Search..."
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             <div>{data}</div>
//         </div>
//     );  
}
export default Users;
