import React from "react";
import logo from "../../Assets/android-chrome-96x96.png"


export default class Footer extends React.Component {
  render() {
    return (
      <>
          <footer class="contact">
            <div class="container text-center text-md-left">
              <div class="row">
                <div class="col-md-4 mx-auto">
                  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About Us</h5>
                  <p>AI Schools is a platform where we provide the best knowledge in AI to inspire the next
                    generation of innovation in technology.
                  </p>
                  <p>Through our courses, we aim to deliver a sophisticated teaching experience and pass on vital
                    skills for students and professionals to grow in the industry
                  </p>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md-2 mx-auto">
                  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Offices</h5>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!">AI Health</a>
                    </li>
                    <li>
                      <a href="#!">AI Australia</a>
                    </li>
                    <li>
                      <a href="#!">AI Brisbane</a>
                    </li>
                    <li>
                      <a href="#!">AI Canberra</a>
                    </li>
                    <li>
                      <a href="#!">AI Darwin</a>
                    </li>
                  </ul>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md-2 mx-auto">

                  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Follow Us</h5>

                  <ul class="list-unstyled">
                  <li class="list-inline-item">
                <a class="btn-floating btn-fb mx-1">
                  <i class="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-1">
                  <i class="fab fa-twitter"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-1">
                  <i class="fab fa-google-plus-g"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-li mx-1">
                  <i class="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-dribbble mx-1">
                  <i class="fab fa-dribbble"> </i>
                </a>
              </li>
                  </ul>

                </div>

                <hr class="clearfix w-100 d-md-none"/>

                <div class="col-md-2 mx-auto">

                  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">GET IN TOUCH</h5>
                  <p>Lvl24, International Tower3, 300 Barangaroo Ave,
                    Sydney NSW 2000.
                  </p>
                  <a class="btn-floating btn-li mx-1">
                  Contact Us
                  </a>
                  <a class="btn-floating btn-li mx-1">
                  Careers
                  </a>
                </div>

              </div>

            </div>
            <hr/>

            <div class="footer-copyright text-center py-3">© 2020 Copyright AI Australia. All Rights Reserved.
            </div>

          </footer>
      </>
    );
  }
}
