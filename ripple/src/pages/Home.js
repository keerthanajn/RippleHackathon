import React from 'react'
// import { routes } from '../routes'
import { Helmet } from 'react-helmet'

// import FeatureCard from '../components/feature-card'
import './Home.css'
// import './style.css'
import { useNavigate } from 'react-router-dom';


const Home= (props) => {
  const navigate = useNavigate();
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home</title>
        <meta
          property="og:title"
          content="Home"
        />
      </Helmet>
      {/* <div className="home1-header"> */}
        <header
          data-thq="thq-navbar"
          className="navbarContainer home1-navbar-interactive"
        >
          <span className="logo">BANKIFY</span>
          <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
            <nav className="home1-links"></nav>
            <div className="home1-buttons">
              <button className="home1-login buttonFlat" onClick={()=>navigate('login')}>Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
           
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home1-mobile-menu1 mobileMenu"
          >
            <div className="home1-nav">
              <div className="home1-top">
                <span className="logo">BANKIFY</span>
                <div data-thq="thq-close-menu" className="home1-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home1-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home1-links1">
                <span className="home1-nav12 bodySmall">Home</span>
                <span className="home1-nav22 bodySmall">Login</span>
                <span className="home1-nav32 bodySmall">Transfer</span>
                <span className="home1-nav42 bodySmall">Transactions</span>
                <span className="home1-nav52 bodySmall">Profile</span>
              </nav>
              <div className="home1-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              {/* {/* <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home1-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg> 
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home1-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
               */}
            </div>
          </div>
        </header>
      {/* </div> */}
      <div className="home1-hero">
        <div className="home1-hero1 heroContainer">
          <div className="home1-container1">
            <h2 className="heading2"> Transaction History</h2>
            <div className="home1-container2">
              
              <div className="home1-btn-group"></div>
            </div>
          </div>
          <div class="transaction-history">
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Name of Receiver</th>
                <th>Amount</th>
                <th>Transaction Reference</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-04-13 10:30 AM</td>
                <td>John Doe</td>
                <td>$100.00</td>
                <td>Term 1</td>
            </tr>
            <tr>
                <td>2024-04-12 02:45 PM</td>
                <td>Jane Doe</td>
                <td>$50.00</td>
                <td>Term 2</td>
            </tr>
        </tbody>
    </table>
    
</div>

        </div>
      </div>
      <div className="home1-features">
        <div className="home1-features-container featuresContainer"></div>
      </div>
      <div className="home1-pricing"></div>
      <div className="home1-banner"></div>
      <div className="home1-faq">
        <div className="home1-faq-container faqContainer"></div>
      </div>
      <div className="home1-footer"></div>
    </div>
  )
}

export default Home
