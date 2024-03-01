//Crteae a footer for your page
//function Footer(){
// return (
// <p> Is it expensive or is it quailty </p>
// <img src="/images/coffeeMug.png" alt="coffeeMug" />
// );
//}

//function Footer() {
//  return (
//   <div>
//   <p>Is it expensive or is it quality</p>
// <img src="/images/coffeeMug.png" alt="coffeeMug" />
//</div>
//);
//}

import "./footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              est id nisl fringilla mollis.
            </p>
            <div class="contact">
              <span>
                <i class="fas fa-envelope"></i> example@example.com
              </span>
              <span>
                <i class="fas fa-phone"></i> 123-456-7890
              </span>
            </div>
          </div>
          <div class="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="3000/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
              <li>
                <a href="/catalog">Catalog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
