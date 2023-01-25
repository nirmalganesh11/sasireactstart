
import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://2oro97ky0l.execute-api.us-east-1.amazonaws.com/getcustomerdetailsbyemail/getcustomerdetailsbyemail?EmailID=2000031905@kluniversity.in").then((data) => {
      console.log(data.data.Item);
      setPost(data?.data.Item.EmailID);
    });
  }, []);
  return (
    <div>
      Users
      <p>{post}</p>
    </div>
  );
}
export default Users;