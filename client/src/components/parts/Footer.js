import { Link } from "react-router"

export const Footer = () => {
  <div>
     <div className="inner_section">
        <div className="col-xs-10 col-sm-6 col-md-6 col-lg-4">
           <form action="#">
              <div className="input-group">
                 <input className="btn btn-lg" name="email" id="email" type="email" placeholder="YOUR E-MAIL" required>
                 <button className="btn btn-warning btn-lg" id="sub_button" type="submit">Submit</button>
              </div>
           </form>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4"></div>
        <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4">
          <Link to="https://www.facebook.com/gabuddhistsummercamp/">
          <img  className="ssLogo" src="assets/images/fb.png">
          </Link>
        </div>
     </div>
  </div>
}
