import React from 'react'
// import { routes } from '../routes'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
// import FeatureCard from '../components/feature-card'
import './Home.css'
// import './style.css'


const Home= (props) => {
  const navigate = useNavigate()
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home</title>
        <meta
          property="og:title"
          content="Home"
        />
      </Helmet>
      <header
          data-thq="thq-navbar"
          className="navbarContainer home1-navbar-interactive"
        >
          <span className="logo">BANKIFY</span>
          <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
            <nav className="home1-links"></nav>
            <div className="home1-buttons">
            <button className="home1-login buttonFlat" onClick={() => navigate('/CreateBill')}>Create Bill</button>
            <button className="home1-login buttonFlat" onClick={() => navigate('/Bill')}>My Bills</button>
            <button className="home1-login buttonFlat" onClick={() => navigate('/AddSource')}>Add Account</button>
            <button className="home1-login buttonFlat" onClick={() => navigate('/home')}>Home</button>
              <button className="home1-login buttonFlat" onClick={() => navigate('/')}>Logout</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
           
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home1-mobile-menu1 mobileMenu"
          >
             
          </div>
        </header>
      <div className="home1-hero">
        <div className="home1-hero1 heroContainer">
        <div className="account-boxes">
                        <div className="account-box">Acc1</div>
                        <div className="account-box">Acc2</div>
                        <div className="account-box">Acc3</div>
                    </div>
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
