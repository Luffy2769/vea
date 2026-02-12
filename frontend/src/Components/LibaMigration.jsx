import React from 'react';
import { FaGlobeAmericas, FaBriefcase, FaHome, FaUsers, FaCheckCircle, FaShieldAlt, FaClock, FaHandshake, FaAward, FaPassport, FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/LibaMigration.css';
import { Helmet } from 'react-helmet';

export default function LibaMigration() {
  return (
    <div className="liba-page">
      <Helmet>
        <title>Liba Migration Services | Canada PR, Work Permits & Immigration Experts</title>
        <meta name="description" content="Liba Migration Services - Sister concern of VE-Scholars. 8+ years expertise in Canada PR, work permits, family sponsorship & global immigration. 500+ families settled. 98% success rate." />
        <link rel="canonical" href="https://veabroad.com/LibaMigration" />
        <meta property="og:title" content="Liba Migration Services | Canada PR & Immigration Experts" />
        <meta property="og:description" content="8+ years expertise in Canada PR, work permits, family sponsorship. 500+ families settled. 98% success rate." />
        <meta property="og:url" content="https://veabroad.com/LibaMigration" />
      </Helmet>
      {/* Hero Section */}
      <section className="liba-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="liba-badge mb-3">🌍 Sister Concern of VE-Scholars</div>
              <h1 className="liba-hero-title">Liba Migration Services</h1>
              <p className="liba-hero-subtitle">
                Your Trusted Partner for Canada PR, Work Permits & Global Immigration Solutions
              </p>
              <div className="liba-hero-stats">
                <div className="stat-box">
                  <h3>8+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-box">
                  <h3>500+</h3>
                  <p>Families Settled</p>
                </div>
                <div className="stat-box">
                  <h3>98%</h3>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Liba Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="section-title">About Liba Migration Services</h2>
              <p className="section-text">
                Liba Migration Services is the specialized migration arm of the VE-Scholars Group, dedicated exclusively to providing comprehensive immigration solutions for individuals, families, and professionals seeking global opportunities.
              </p>
              <p className="section-text">
                With over 8 years of proven expertise in international migration, we have successfully helped 500+ families establish new lives in Canada and other leading destinations. Our team of certified immigration consultants ensures full compliance, transparency, and personalized strategies for every client.
              </p>
              <div className="liba-highlights">
                <div className="highlight-box">
                  <FaShieldAlt className="highlight-icon" />
                  <div>
                    <h4>Full Compliance</h4>
                    <p>100% legal and transparent process</p>
                  </div>
                </div>
                <div className="highlight-box">
                  <FaHandshake className="highlight-icon" />
                  <div>
                    <h4>Personalized Service</h4>
                    <p>Tailored strategies for your profile</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop" alt="Liba Migration" className="img-fluid rounded-3 shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section light-bg">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Specialized Services</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <FaHome />
                </div>
                <h3>Canada Permanent Residency</h3>
                <p>Express Entry, PNP, Family Sponsorship, and all PR pathways to settle permanently in Canada.</p>
                <ul className="service-features">
                  <li><FaCheckCircle /> CRS Score Optimization</li>
                  <li><FaCheckCircle /> Provincial Nominee Programs</li>
                  <li><FaCheckCircle /> Document Preparation</li>
                  <li><FaCheckCircle /> Post-Landing Support</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <FaBriefcase />
                </div>
                <h3>Work Permits</h3>
                <p>LMIA-based work permits, open work permits, and employer-specific work authorization.</p>
                <ul className="service-features">
                  <li><FaCheckCircle /> LMIA Processing</li>
                  <li><FaCheckCircle /> Job Search Support</li>
                  <li><FaCheckCircle /> Work Permit Extensions</li>
                  <li><FaCheckCircle /> Spouse Work Permits</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <FaPassport />
                </div>
                <h3>Business Immigration</h3>
                <p>Entrepreneur programs, investor visas, and startup visa pathways for business professionals.</p>
                <ul className="service-features">
                  <li><FaCheckCircle /> Business Plan Development</li>
                  <li><FaCheckCircle /> Investment Guidance</li>
                  <li><FaCheckCircle /> Startup Visa Program</li>
                  <li><FaCheckCircle /> Self-Employed Programs</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <FaUsers />
                </div>
                <h3>Family Sponsorship</h3>
                <p>Reunite with your loved ones through spouse, parent, and dependent sponsorship programs.</p>
                <ul className="service-features">
                  <li><FaCheckCircle /> Spouse Sponsorship</li>
                  <li><FaCheckCircle /> Parent & Grandparent Program</li>
                  <li><FaCheckCircle /> Dependent Children</li>
                  <li><FaCheckCircle /> Super Visa Applications</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <FaPlane />
                </div>
                <h3>Study to PR Pathway</h3>
                <p>Strategic planning from study permit to permanent residency for international students.</p>
                <ul className="service-features">
                  <li><FaCheckCircle /> Post-Graduation Work Permit</li>
                  <li><FaCheckCircle /> Canadian Experience Class</li>
                  <li><FaCheckCircle /> Career Pathway Planning</li>
                  <li><FaCheckCircle /> PR Application Strategy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <FaGlobeAmericas />
                </div>
                <h3>Global Immigration</h3>
                <p>Migration services for Australia, UK, USA, and other leading immigration destinations.</p>
                <ul className="service-features">
                  <li><FaCheckCircle /> Australia Skilled Migration</li>
                  <li><FaCheckCircle /> UK Skilled Worker Visa</li>
                  <li><FaCheckCircle /> USA EB-5 & H1B</li>
                  <li><FaCheckCircle /> Europe Work Permits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Liba */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why Choose Liba Migration Services?</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                <FaAward className="why-icon" />
                <h4>8+ Years Expertise</h4>
                <p>Proven track record in Canadian and global immigration</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                <FaShieldAlt className="why-icon" />
                <h4>100% Compliance</h4>
                <p>Fully legal, transparent, and ethical process</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                <FaUsers className="why-icon" />
                <h4>500+ Families Settled</h4>
                <p>Successfully helped families build new lives abroad</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="why-card">
                <FaClock className="why-icon" />
                <h4>End-to-End Support</h4>
                <p>From application to post-landing assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section light-bg">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Migration Process</h2>
          <div className="process-timeline">
            <div className="process-item">
              <div className="process-number">1</div>
              <h4>Free Assessment</h4>
              <p>Evaluate your eligibility and profile strength</p>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <h4>Strategy Planning</h4>
              <p>Customized immigration pathway based on your goals</p>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <h4>Documentation</h4>
              <p>Complete document preparation and verification</p>
            </div>
            <div className="process-item">
              <div className="process-number">4</div>
              <h4>Application Filing</h4>
              <p>Submit applications with full compliance</p>
            </div>
            <div className="process-item">
              <div className="process-number">5</div>
              <h4>Follow-up & Updates</h4>
              <p>Regular tracking and communication</p>
            </div>
            <div className="process-item">
              <div className="process-number">6</div>
              <h4>Success & Settlement</h4>
              <p>Post-landing support and settlement guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="liba-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Ready to Start Your Immigration Journey?</h2>
              <p>Get expert guidance from Liba Migration Services and make your global dreams a reality</p>
              <div className="cta-buttons">
                <Link to="/consultationForm" className="btn-primary-liba">
                  Book Free Consultation
                </Link>
                <Link to="/migrate" className="btn-outline-liba">
                  Explore Migration Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
