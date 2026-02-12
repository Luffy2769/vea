import "../Styles/Migrate.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGlobeAmericas, FaBriefcase, FaHome, FaGraduationCap, FaCheckCircle, FaUsers, FaShieldAlt, FaClock, FaAward } from 'react-icons/fa';
import { Helmet } from "react-helmet";
import Toast from './Toast';
import CountryComparison from './CountryComparison';
export default function Migrate() {
  const [formData, setFormData] = useState({
    country: "",
    email: "",
    phone: "",
  });
  const [toast, setToast] = useState(null);

  const quickForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/quickForm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === "success") {
        setToast({ message: 'Form submitted successfully!', type: 'success' });
        setFormData({
          country: "",
          email: "",
          phone: "",
        });
        setTimeout(() => setToast(null), 3000);
      }
    } catch (error) {
      setToast({ message: 'Error submitting form. Please try again.', type: 'error' });
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="migrate-page">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <Helmet>
        <title>Canada PR & Immigration Services | Permanent Residency Consultants</title>
        <meta name="description" content="Expert Canada PR, Australia PR & global immigration services. Personalized migration pathways, Express Entry, PNP, work permits. 98% success rate. Partner with Liba Migration Services." />
        <link rel="canonical" href="https://veabroad.com/migrate" />
        <meta property="og:title" content="Canada PR & Immigration Services | Permanent Residency Consultants" />
        <meta property="og:description" content="Expert Canada PR, Australia PR & global immigration services. 98% success rate." />
        <meta property="og:url" content="https://veabroad.com/migrate" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Immigration Consulting",
            "provider": {"@type": "Organization", "name": "VE-Scholars"},
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <section className="migrate-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h1 className="display-4 fw-bold mb-3">Immigrate & Build Your Global Future</h1>
              <p className="lead mb-5 text-white">
                Discover the best migration route for you and your family with tailored support every step of the way.
              </p>
              <div className="migrate-form-wrapper">
                <form className="migrate-form" onSubmit={quickForm}>
                  <select 
                    value={formData.country}
                    name="country" 
                    onChange={handleChange}
                    className="form-select"
                    required>
                    <option value="">Select Country to Migrate</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Germany</option>
                  </select>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Whatsapp / Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                  <button type="submit" className="btn btn-light btn-lg">
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Migrate Abroad?</h2>
          <div className="row g-4">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="benefit-card text-center p-4">
                <FaBriefcase className="benefit-icon text-primary mb-3" />
                <h5>Career Growth</h5>
                <p className="text-muted small mb-0">Access to excellent global career opportunities</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="benefit-card text-center p-4">
                <FaHome className="benefit-icon text-success mb-3" />
                <h5>Better Living</h5>
                <p className="text-muted small mb-0">Experience higher standard of living</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="benefit-card text-center p-4">
                <FaGraduationCap className="benefit-icon text-info mb-3" />
                <h5>Quality Education</h5>
                <p className="text-muted small mb-0">World-class healthcare and education</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="benefit-card text-center p-4">
                <FaGlobeAmericas className="benefit-icon text-warning mb-3" />
                <h5>Citizenship Path</h5>
                <p className="text-muted small mb-0">Permanent residency and citizenship options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">How the Migration Process Works</h2>
          <div className="row g-4">
            {[
              { num: '1', title: 'Free Eligibility Check', desc: 'Assess your profile' },
              { num: '2', title: 'Points Evaluation', desc: 'Calculate your score' },
              { num: '3', title: 'Document Prep', desc: 'Gather requirements' },
              { num: '4', title: 'Submit Application', desc: 'File your visa' },
              { num: '5', title: 'Track & Support', desc: 'Monitor progress' },
              { num: '6', title: 'Settlement Help', desc: 'Arrival assistance' }
            ].map((step, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg-2">
                <div className="process-step text-center">
                  <div className="step-number mb-3">{step.num}</div>
                  <h6 className="fw-bold">{step.title}</h6>
                  <p className="small text-muted mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light popular-destinations">
        <div className="container">
          <h2 className="text-center mb-5">Popular Migration Destinations</h2>
          <div className="row g-4">
            {[
              { flag: '🇨🇦', country: 'Canada PR', cost: 'CAD 4,500', time: '6-8 months', color: 'danger' },
              { flag: '🇦🇺', country: 'Australia PR', cost: 'AUD 4,700', time: '6-8 months', color: 'warning' },
              { flag: '🇬🇧', country: 'UK Skilled Worker', cost: 'GBP 3,200', time: '3-6 months', color: 'primary' },
              { flag: '🇩🇪', country: 'Germany Blue Card', cost: 'EUR 2,800', time: '2-4 months', color: 'info' }
            ].map((dest, idx) => (
              <div key={idx} className="col-6 col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center">
                  <div className="card-body p-4">
                    <div className="country-flag mb-3">{dest.flag}</div>
                    <h5 className="card-title">{dest.country}</h5>
                    <div className={`badge bg-${dest.color} mb-2`}>{dest.cost}</div>
                    <p className="text-muted small mb-0"><FaClock className="me-1" />{dest.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted small mt-4 mb-0">*Estimates vary based on country and visa type</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose VE Abroad?</h2>
          <div className="row g-4">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="feature-badge bg-primary text-white rounded-circle mx-auto mb-3">
                  <FaUsers />
                </div>
                <h5>Expert Counselors</h5>
                <p className="text-muted small mb-0">Certified migration specialists</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="feature-badge bg-success text-white rounded-circle mx-auto mb-3">
                  <FaCheckCircle />
                </div>
                <h5>Personalized Plans</h5>
                <p className="text-muted small mb-0">Tailored pathway strategies</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="feature-badge bg-info text-white rounded-circle mx-auto mb-3">
                  <FaShieldAlt />
                </div>
                <h5>Updated Policies</h5>
                <p className="text-muted small mb-0">Latest immigration rules</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="text-center p-3">
                <div className="feature-badge bg-warning text-white rounded-circle mx-auto mb-3">
                  <FaAward />
                </div>
                <h5>Full Support</h5>
                <p className="text-muted small mb-0">End-to-end assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Comparison Tool */}
      <section className="py-5 bg-light">
        <div className="container">
          <CountryComparison />
        </div>
      </section>

      {/* Liba Migration Highlight Section */}
      <section className="liba-highlight-section py-5">
        <div className="container">
          <div className="liba-highlight-box">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="liba-highlight-title">🌍 Liba Migration Services</h3>
                <p className="liba-highlight-text">
                  Partner with our sister concern, Liba Migration Services, for specialized Canada PR, Work Permits, and global immigration solutions. Expert guidance, transparent process, and proven success.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-center mt-3 mt-lg-0">
                <Link to="/LibaMigration" className="liba-highlight-btn">
                  Explore Liba Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Start Your Migration Journey?</h2>
          <p className="lead mb-4 text-white">Get expert guidance and personalized migration strategy today</p>
          <Link to="/consultationForm" className="btn btn-light btn-lg px-5">Get Free Assessment</Link>
        </div>
      </section>
    </div>
  );
}