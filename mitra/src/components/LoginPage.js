import React from 'react';

const LoginPage = ()=>
{
    return(
      <div class="backgroundLoginImage">
      <div id="loginDiv" class='container'>
        <div class="row">
        <div class='col-lg-12 col-md-12 col-sm-6'>
        <h2 id='namasteLogin'>NAMASTE <img src="https://img.icons8.com/emoji/48/null/folded-hands-medium-light-skin-tone.png"
         id="namasteImg" alt="namaste"/>
        </h2>
        <form id='loginForm'>
        <div class="form-group">
          <label for="loginName" id="formName">Your Name: </label>
          <input type="text" class="form-control" id="loginName" placeholder="Enter name..."/>
        </div>
        <div class="form-group">
          <label for="loginPh" id="formNumber">Your Phone Number: </label>
          <input type="text" class="form-control" id="loginPh" placeholder="Enter Phone Number..."/>
        </div>
        <button type="submit" id="loginButton">LOGIN</button>
      </form>
      <div class="signupLogin"><a  href="/signup>">New to Mitra? Sign Up Here</a>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
};

export default LoginPage;
