import React from 'react';
// import './dashboard.css';
import './dashboard.scss';
import LOGO from './assets/LOGO.png';// Assuming you have a CSS file for styling
import Item5 from './assets/Item-5.png';
import maindashboard from './assets/main-dashboard.png';
import Item1 from './assets/Item-1.png'
import Item2 from './assets/Item -2.png'
import Item3 from './assets/Item -3.png'
import Item4 from './assets/Item -4.png'
import Item6 from './assets/Item -6.png'
import manageDashboard from './assets/manage-dashboard.png'
import listofmedia from './assets/list-of-media.png'
import icons1 from './assets/icons-1.png'
import icons2 from './assets/icons-2.png'
import icons3 from './assets/icons-3.png'
import notification from './assets/notification.png'
import barcode from './assets/bar-code-scan.png'
import historycard from './assets/history-card.png'
import combinecard from './assets/combine-card.png'
import datecard from './assets/date-card.png'
import lapbanner from './assets/lapbanner.png'
import imagesectionone from './assets/image-section-one.png'
import imagesectiontwo from './assets/image-section-two.png'
import imagesectionthree from './assets/image-section-three.png'
import Rankingposition from './assets/Ranking position.png'
import procertificate from './assets/pro-certificate.png'
import arrow from './assets/arrow.png'
import playstore from './assets/play-store.png'
import appstore from './assets/app-store.png'
import LINDMEDIA from './assets/LIND-MEDIA.png'
import XMEDIA from './assets/X-MEDIA.png'
import INSTA from './assets/instagram.png'
import footerimg from './assets/footer-img.png'



const Header = () => (
    <header>
        <nav>
            <div className="logo">
                <img src={LOGO} alt="Logo" />
            </div>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Comparison</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>
        </nav>
    </header>
);

const HeroSection = () => (
    <section className="hero">
        <h1>Manage your sales and analytics at one place</h1>
        <p>Track your performance and take data-driven decisions.</p>
        <div>
            <button className="btn-buy">Buy Template</button>
            <button className="btn">Get Started</button>
        </div>
    </section>
);

const DashboardSection = () => (
    <section className="dashboard">
        <img src={maindashboard} alt="Dashboard Image" />
        <div className="dashboard-sub">
            <img src={Item5} alt="item-5" />
            <img src={Item1} alt="item-1" />
            <img src={Item2} alt="item-2" />
            <img src={Item3} alt="item-3" />
            <img src={Item4} alt="item-4" />
            <img src={Item6} alt="item-6" />
        </div>
    </section>
);

const FeaturesSection = () => (
    <section className="features">
        <div className="container">
            <div className="left-panel">
                <h1>Keep track of all usage</h1>
                <p>Tracking all usages for efficient management and comprehensive oversight.</p>
                <ul>
                    <li>✔ Comprehensive Usage Monitoring</li>
                    <li>✔ Efficient Management</li>
                    <li>✔ Enhanced Oversight</li>
                </ul>
                <button className="watchlist-btn">Go to Watchlist →</button>
            </div>
            <div className="right-panel">
                <img src={manageDashboard} alt="Manage Dashboard" />
            </div>
        </div>
    </section>
);

const FeaturesOverviewSection = () => (
    <section className="features-overview">
        <div className="features-icons">
            <div className="feature">
                <img src={icons1} alt="Real-Time Tracking" />
                <h3>Real-Time Tracking</h3>
                <p>Monitor usage as it happens to stay updated with the latest data.</p>
            </div>
            <div className="feature">
                <img src={icons2} alt="Detailed Reporting" />
                <h3>Detailed Reporting</h3>
                <p>Generate in-depth reports that provide insights into usage patterns and trends.</p>
            </div>
            <div className="feature">
                <img src={icons3} alt="Customizable Alerts" />
                <h3>Customizable Alerts</h3>
                <p>Set up notifications for specific usage thresholds or unusual activity.</p>
            </div>
        </div>
        <div className="features-grid">
            <div className="left-features">
                <div className="feature-box">
                    <h2>Timely alerts & sync ups</h2>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens</p>
                    <img src={notification} alt="Timely Alerts" />
                </div>
                <div className="feature-box">
                    <h2>Encrypted integrations across</h2>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens</p>
                    <img src={barcode} alt="Encrypted Integrations" />
                </div>
            </div>
            <div className="right-feature feature-box">
                <h2>AI Suggested Optimization</h2>
                <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens</p>
                <img src={listofmedia} alt="AI Suggested Optimization" />
            </div>
        </div>
    </section>
);

const TrackingSection = () => (
    <section className="tracking-section">
        <h1>Track what matters to you</h1>
        <div className="tracking-cards">
            <div className="tracking-card">
                <h3>Transactions</h3>
                <p>Pick winning stocks confidently with 130+ filters or create your own.</p>
                <div className="tracking-image">
                    <img src={historycard} alt="Transactions" />
                </div>
            </div>
            <div className="tracking-card">
                <h3>Friends and family</h3>
                <p>Pick winning stocks confidently with 130+ filters or create your own.</p>
                <div className="tracking-image">
                    <img src={combinecard} alt="Friends and Family" />
                </div>
            </div>
            <div className="tracking-card">
                <h3>Timely reminders</h3>
                <p>Pick winning stocks confidently with 130+ filters or create your own.</p>
                <div className="tracking-image">
                    <img src={datecard} alt="Timely Reminders" />
                </div>
            </div>
        </div>
    </section>
);

const FocusSection = () => (
    <section className="focus-section">
        <h2>Focus on what matters</h2>
        <p>Checkout how both end of forms look like for our users</p>
        <div className="toggle-buttons">
            <button className="creator-view active">Creator View</button>
            <button className="end-user-view">End User View</button>
        </div>
        <div className="video-wrapper">
            <img src={lapbanner} alt="Calendar View" />
        </div>
    </section>
);

const TestimonialSection = () => (
    <section className="testimonial-section">
        <div className="company-logos">
            <img src={Item5} alt="item-5" />
            <img src={Item1} alt="item-1" />
            <img src={Item2} alt="item-2" />
            <img src={Item3} alt="item-3" />
            <img src={Item4} alt="item-4" />
            <img src={Item6} alt="item-6" />
        </div>
        <div className="testimonial-cards">
            <div className="testimonial">
                <p>“We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few days. I don’t see us not using Metaforms in the near future.”</p>
                <h4>Rohin Singh</h4>
                <span>Chief Integrating Officer</span>
            </div>
            <div className="testimonial">
                <p>“We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few days. I don’t see us not using Metaforms in the near future.”</p>
                <h4>Rohin Singh</h4>
                <span>Chief Integrating Officer</span>
            </div>
            <div className="testimonial">
                <p>“We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few days. I don’t see us not using Metaforms in the near future.”</p>
                <h4>Rohin Singh</h4>
                <span>Chief Integrating Officer</span>
            </div>
        </div>
    </section>
);

const ComparisonTableSection = () => (
    <section className="focus-section">
        <h2>Focus on what matters</h2>
        <div className="comparison-table">
            <div className="left">
                <p>Dynamic copies for questions</p>
                <p>Auto-sequence of questions</p>
                <p>Follow-up questions on the basis</p>
                <p>AI thank you and start screen</p>
                <p>AI report generation with all important</p>
            </div>
            <div className="right">
                <div className="highlight">
                    <span>Metaforms</span>
                    <span className="check">✔</span>
                    <span className="check">✔</span>
                    <span className="check">✔</span>
                    <span className="check">✔</span>
                    <span className="check">✔</span>
                </div>
                <div>
                    <span>Typeform</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                </div>
                <div>
                    <span>Typeform</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                </div>
                <div>
                    <span>Typeform</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                    <span className="cross">✖</span>
                </div>
            </div>
        </div>
        <div className="bottom-section">
            <div className="product-hunt">
                <img src={Rankingposition} alt="Product Hunt Badge" />
                <img src={procertificate} alt="Product Hunt Badge" />
            </div>
            <div className="stats">
                <div className="main-stat">
                    <h2>40,00,000+</h2>
                    <p>Users love Tickertape</p>
                </div>
                <div className="sub-stats">
                    <div>
                        <h2>4.6</h2>
                        <p>Google Play Rating</p>
                    </div>
                    <div>
                        <h2>100cr+</h2>
                        <p>Transaction Volume</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const BlogsSection = () => (
    <section className="blogs-section">
        <h2>Blogs and newsroom updates</h2>
        <p className="subtitle">A community for India’s investors to hang out and talk about investments, personal finance</p>
        <div className="blogs-container">
            <div className="blog-card large">
                <img src={imagesectionone} alt="Blog 1" />
                <div className="blog-content">
                    <h3>Timely alerts & sync ups</h3>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens.</p>
                </div>
            </div>
            <div className="blog-card small">
                <img src={imagesectiontwo} alt="Blog 2" />
                <div className="blog-content">
                    <h3>Timely alerts</h3>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens.</p>
                </div>
            </div>
            <div className="blog-card wide">
                <img src={imagesectionthree} alt="Blog 3" />
                <div className="blog-content">
                    <h3>Timely alerts & sync ups</h3>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens.</p>
                </div>
            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="subtitle">A community for India’s investors to hang out and talk about investments, personal finance</p>
        <div className="faq-container">
            <div className="faq-item">
                <button className="faq-question">What is the conversion % of MetaForm?</button>
                <p>At the moment, I'm pretty happy where I am. Currently, I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations, and other fun stuff. If you’re interested in discussing a project or making something great together, please fill the form above.</p>
            </div>
            <div className="faq-item">
                <button className="faq-question">How do your quote pricing works and when can we get on call?</button>
                <div className="faq-answer">
                    <p>We provide transparent pricing based on your needs. Reach out to schedule a call.</p>
                </div>
            </div>
            <div className="faq-item">
                <button className="faq-question">Can you facelift my design?</button>
                <div className="faq-answer">
                    <p>Yes, we specialize in UI/UX enhancements for better user experience and aesthetics.</p>
                </div>
            </div>
            <div className="faq-item">
                <button className="faq-question">Can you facelift my design?</button>
                <div className="faq-answer">
                    <p>Yes, we can redesign your product for a fresh and modern look.</p>
                </div>
            </div>
        </div>
    </section>
);

const LastSection = () => (
    <section className="last-section">
        <div className="last-content">
            <h1>Manage your sales and analytics by one place</h1>
            <div className="sub-text">
                <img src={arrow} alt="Arrow" className="icon" />
                <p>Empowering Your Projects, Enhancing Your Success, Every Step of the Way.</p>
            </div>
            <div className="download-buttons">
                <a href="#" className="download-btn">
                    <img src={playstore} alt="Google Play" />
                </a>
                <a href="#" className="download-btn">
                    <img src={appstore} alt="App Store" />
                </a>
            </div>
            <div className="social-icons">
                <img src={LINDMEDIA} alt="LinkedIn" className="social-icon" />
                <img src={XMEDIA} alt="Twitter" className="social-icon" />
                <img src={INSTA} alt="Insta" className="social-icon" />
            </div>
        </div>
        <div className="last-image">
            <img src={footerimg} alt="Green Glowing Background" />
        </div>
    </section>
);

const Footer = () => (
    <footer>
        <p>© 2025 YourCompany. All rights reserved.</p>
    </footer>
);

const Dashboard = () => (
    <div>
        <Header />
        <HeroSection />
        <DashboardSection />
        <FeaturesSection />
        <FeaturesOverviewSection />
        <TrackingSection />
        <FocusSection />
        <TestimonialSection />
        <ComparisonTableSection />
        <BlogsSection />
        <FAQSection />
        <LastSection />
        <Footer />
    </div>
);

export default Dashboard;

