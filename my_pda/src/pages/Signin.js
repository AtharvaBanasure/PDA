import React from "react";
import Logo from "../assets/img/PDA_Logo_trsp.png";
import LocalImage from "../assets/img/Signin.jpg";
import { connect } from "react-redux";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Request from "../api/requests";
import { change_login } from "../actions/loginActions";
import axios from "axios";
const Signin = (props) => {  
    const [password, setPassword] = useState("");
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();
    const login = async ()=>{ 
        await Request.login({username,password})
        .then((res) => {
            console.log(res.data.auth_token,"auth tokenke")
            if(res.data.auth_token !== undefined) localStorage.setItem("auth-token", res.data.auth_token)
            localStorage.setItem("username", username)
            props.change_longinStatus();
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            // props.toast.toast.error("Unable to login!");
        });
      
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(first_name);
        console.log(last_name);
        console.log(username);
        console.log(password);
        await Request.register({ first_name, last_name, username, password })
          .then((data) => {
            console.log(props,"props")
            // props.toast.toast.success("Account Created Successfully!");
            login();
          })
          .catch((err) => {
            console.log(err);
            if(err.code==="ERR_NETWORK") {
                setError("Network Error");
                // props.toast.toast.error("Network Error");
            }
            else if(err.code==="ERR_BAD_REQUEST") {setError("Email Already Exists");
            // props.toast.toast.error("Username Already Exists");
        }
          });
      };
    const backgroundImage = {
        backgroundImage: `url(${LocalImage})`,
    };
    return (

        <div class="h-full bg-white dark:bg-gray-900">
            <div class="mx-auto">
                <div class="flex justify-center px-6 py-12">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={backgroundImage}></div>
                        <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                            First Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            value={first_name}
                                            onChange={(e) => setfirst_name(e.target.value)}
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            value={last_name}
                                            onChange={(e) => setlast_name(e.target.value)}
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="******************"
                                        />
                                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-[#426B1F] rounded-full focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >Register Account
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                <div class="text-center">
                                    <a class="inline-block text-sm text-[#426B1F] align-baseline hover:text-blue-800"
                                        href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div class="text-center">
                                    <a class="inline-block text-sm text-[#426B1F] dark:text-blue-500 align-baseline hover:text-blue-800"
                                        href="./login">
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    change_longinStatus: () => {
      dispatch(change_login());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);