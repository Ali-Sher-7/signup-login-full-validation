import React, { useState, useEffect } from "react";
import Header from "../../assets/gineric/Navbar";
import Footer from "../../assets/gineric/Footer";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  // const [searchEmail, setSearchEmail] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  // const [isSearch, setIsSearch] = useState(false);
  // const handleSearch = (e) => {
  //   setUsers(
  //     users.filter(
  //       (user) =>
  //         user.fname === searchEmail ||
  //         user.email === searchEmail ||
  //         user.id === searchEmail
  //     )
  //   );
  //   setIsSearch(true);
  //   setSearchEmail("");
  // };

  const Filter = (e) => {
    setSearchUser(
      users.filter(
        (user) =>
          user.fname.toLowerCase().includes(e.target.value) ||
          user.lname.toLowerCase().includes(e.target.value) ||
          user.email.toLowerCase().includes(e.target.value) ||
          user.id.toLowerCase().includes(e.target.value)
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((result) => {
        setUsers(result.data);
        setSearchUser(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <section className="home bg-secondary text-white">
        <div className="container-fluid">
          {/* <form className="form py-5" onSubmit={handleSearch}>
            <div className="row align-items-end justify-content-end w-100">
              <div className="form-group col-md-4">
                <label htmlFor="id" className="fs-5 fw-bold mb-2">
                  Search User by Email, First Name Or ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={searchEmail}
                  placeholder="Search User....."
                  onChange={(e) => setSearchEmail(e.target.value)}
                  required
                ></input>
              </div>

              <div className="form-group col-md-1">
                <button type="submit" className="btn btn-success ml-4 border">
                  Search
                </button>
              </div>
            </div>
            {!isSearch ? (
              <></>
            ) : (
              <div className="row">
                <div className="col-md-12 ">
                  <h3 className="text-center my-5 fs-1 fw-bold">
                    Searched User
                  </h3>
                  <table className="table border table-success table-hover text-center rounded">
                    <thead>
                      <tr className="">
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchUser.map((user, index) => (
                        <tr key={index}>
                          <th scope="row">{user.id}</th>
                          <td>{user.fname}</td>
                          <td>{user.lname}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </form> */}

          <div className="col-md-12 pt-5">
            <h4 className="text-center pb-5 fs-1 fw-bold">All SignUp Users</h4>
          </div>
          <div className="pb-5 col-md-12">
            <label className=" fs-5 fw-bold">
              Enter ID or First Name or Last Name or Email to Search User:
            </label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              className="rounded border-0 py-2 px-4"
              onChange={Filter}
            />
          </div>
          <div className="overflow">
            <table className="table table-success border  table-hover text-center table-rounded table-striped">
              <thead>
                <tr className="">
                  <th scope="col">Sri-No</th>
                  <th className="thead" scope="col">
                    Id
                  </th>
                  <th className="thead" scope="col">
                    First Name
                  </th>
                  <th className="thead" scope="col">
                    Last Name
                  </th>
                  <th className="thead" scope="col">
                    Email
                  </th>
                  <th className="thead" scope="col">
                    Password
                  </th>
                  <th className="thead" scope="col">
                    Confirm Password
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchUser.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th className="tdata" scope="row">
                        {index + 1}
                      </th>
                      <td className="tdata">{user.id}</td>
                      <td className="tdata">{user.fname}</td>
                      <td className="tdata">{user.lname}</td>
                      <td className="tdata">{user.email}</td>
                      <td className="tdata">{user.password}</td>
                      <td className="tdata">{user.cpassword}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
