import React from 'react';
import "./css/login.css";
import HomeLogo from './../logos/home23.png';
import $ from './../jquery.js';



export default function Login() {

    var status = 1;

    function activateLasers(e) {
        e.preventDefault();
        console.log('You clicked submit activate 1.');
        $('#logindiv').hide();
        $('#Registerclass').show();

    }
    function activateLasers2(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        $('#logindiv').show();
        $('#Registerclass').hide();
    }

    function goHome(e){
        e.preventDefault();
        status=0;
        console.log(status);
    }

    if (status==1) {
        return (

            <div className='MainClass'>
                <div className='logindiv' id='logindiv'>
                    <form>
                        <h2>Login to your account</h2>
                        <input id='userEmail' type="email" placeholder='email' required></input>
                        <input id='userPassword' type="password" placeholder='password' required></input>
                        <button className='loginbtn'>Login</button>
                    </form> 
                    <div className='createbtn'  >
                        <p>Don't have an account? </p>
                        <button onClick={activateLasers} >Create one!</button>
                    </div> 
                    <br></br>
                    <button className='HomeBtn' > 
                        <img src={HomeLogo} alt=""/>
                        <a href='https://srivarshinisachayanthan.github.io/HOMEPAGE/'>Go Home</a>
                    </button>
                    {/* <a href="./home.html">Visit Pluralsight</a> */}
                </div>
    
                
              
                <div className='Registerclass' id='Registerclass'>
                    <form>
                        <h2>Create an Account</h2>
                        <div className='usernamecontainer'>
                            <input id='userfirstname' placeholder='First name*' required></input>
                            <input id='userlasttname' placeholder='Last name'></input>
                        </div>
                        <input id='userEmailid' type="email" placeholder='email*' required></input>
                        <div className='passwordContainer'>
                            <input id='userfirstPassword' type="password" placeholder='Password*' required></input>
                            <input id='userconfirmPassword' type="password" placeholder='Confirm Password*' required></input>
                        </div>
    
                        <div className='UserDetails'>
                            <div className='gender'>
                                <label for="gender"  required> Gender *</label>
                                <div>
                                    <input type="radio" name="gender" value="male"  required/>
                                    <p>Male</p>
                                </div>
                                <div>   
                                    <input type="radio" name="gender" value="female"/>
                                    <p>Female</p>
                                </div>
                                <div>
                                    <input type="radio" name="gender" value="other"/>
                                    <p>Other</p>
                                </div>
                            </div>
    
                            <div className='dobinput'>
                                <label for="birthday">Date of Birth *</label>
                                <input type="date" id="birthday" name="birthday"  required/>
                            </div>
    
                            <div className='countrycontainer'>
                                <label for="country" required>Country *</label>
                                <select name="country" id="country"  required>
                                    <option value="-" >Select</option>
                                    <option value="India" required>India</option>
                                    <option value="US">US</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
    
                        </div>
                    <button className='loginbtn'>Sign Up</button>
                    </form>
    
                    <div className='createbtn'>
                        <p>Have an account? </p>
                        <button  onClick={activateLasers2} >Login</button>
                        <p className='instead'> instead</p>
                    </div>
                    <br></br>
                    <button className='HomeBtn' onClick={goHome}> 
                        <img src={HomeLogo} alt="BigCo Inc. logo"/>
                        <a href='https://srivarshinisachayanthan.github.io/HOMEPAGE/'>Go Home</a>
                    </button>
                </div>
                
                
            </div>
        )
    }    

}

