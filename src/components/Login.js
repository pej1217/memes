import React, { Component } from 'react';
import { Auth } from "aws-amplify";

class Login extends Component {
 render() {
  return (
    <section class="page-section" id="Login">
    <div class="container">
     
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Login</h2>
 
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
        </div>
       
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
            
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                
                    <div class="form-floating mb-3">
                        <input class="form-control" id="name" type="text" placeholder="Enter your account..." data-sb-validations="required" />
                        <label for="name">account</label>
                        <div class="invalid-feedback" data-sb-feedback="name:required">A accoutnt is required.</div>
                    </div>
    
          
                    <div class="form-floating mb-3">
                        <input class="form-control" id="phone" type="password" placeholder="Enter your password..." data-sb-validations="required" />
                        <label for="phone">password</label>
                        <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                    </div>
           
         
                    <button class="btn btn-primary btn-xl" id="submitButton" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
    </section>
  );
 }
}
export default Login;