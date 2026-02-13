import "../Styles/Work.css";
import { Link } from "react-router-dom";
import { MdWork, MdPublic, MdAttachMoney, MdTrendingUp, MdCardTravel, MdDescription, MdCheckCircle } from 'react-icons/md';
import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";

export default function Work() {
  const [flippedCard, setFlippedCard] = useState(null);
  const sectionRef = useRef(null);
  const hasFlipped = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFlipped.current) {
            setTimeout(() => {
              setFlippedCard(0);
              hasFlipped.current = true;
              setTimeout(() => setFlippedCard(null), 3000);
            }, 800);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="work-page">
      <Helmet>
        <title>Work Abroad Visa Services | Canada, Australia, UK, USA Work Permits</title>
        <meta name="description" content="Work visa assistance for Canada LMIA, Australia TSS 482, UK Skilled Worker, USA H1B. 92% success rate. Job search support, documentation & PR pathways. 500+ work visas processed." />
        <link rel="canonical" href="https://veabroad.com/work" />
        <meta property="og:title" content="Work Abroad Visa Services | International Work Permits" />
        <meta property="og:description" content="Work visa assistance for Canada, Australia, UK, USA. 92% success rate. 500+ work visas processed." />
        <meta property="og:url" content="https://veabroad.com/work" />
      </Helmet>
      <section className="work-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Launch Your Global Career</h1>
              <p className="lead mb-4 text-white">
                Unlock international work opportunities with expert visa guidance. From job search to visa approval, we're with you every step of the way.
              </p>
              <div className="d-flex gap-3 mb-4">
                <div className="stat-box">
                  <h3 className="fw-bold mb-0">500+</h3>
                  <small>Work Visas Processed</small>
                </div>
                <div className="stat-box">
                  <h3 className="fw-bold mb-0">92%</h3>
                  <small>Success Rate</small>
                </div>
              </div>
              <Link to="/consultationForm" className="btn btn-primary btn-lg">Start Your Journey</Link>
            </div>
            <div className="col-lg-6">
              <div className="work-hero-image">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=450&fit=crop" alt="Work Abroad" className="img-fluid rounded-3 shadow-lg" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdAttachMoney className="work-feature-icon text-success mb-3" />
                <h5>Higher Earnings</h5>
                <p className="text-muted">Competitive salaries abroad</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdPublic className="work-feature-icon text-primary mb-3" />
                <h5>Global Exposure</h5>
                <p className="text-muted">Work with top companies</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdTrendingUp className="work-feature-icon text-warning mb-3" />
                <h5>Career Growth</h5>
                <p className="text-muted">Accelerate your career</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center">
                <MdWork className="work-feature-icon text-info mb-3" />
                <h5>PR Pathways</h5>
                <p className="text-muted">Settle abroad permanently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 destinations-section" ref={sectionRef}>
        <div className="container">
          <h2 className="text-center mb-5">Top Work Destinations</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className={`flip-card ${flippedCard === 0 ? 'flipped' : ''}`} onClick={() => handleCardClick(0)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="work-country-flag">🇨🇦</div>
                    <h4>Canada</h4>
                  </div>
                  <div className="flip-card-back">
                    <h5>Canada</h5>
                    <p>LMIA-based work permits with PR pathways.</p>
                    <ul className="list-unstyled small">
                      <li><MdCheckCircle className="text-success me-1" />High demand sectors</li>
                      <li><MdCheckCircle className="text-success me-1" />Family sponsorship</li>
                      <li><MdCheckCircle className="text-success me-1" />PR in 1-2 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`flip-card ${flippedCard === 1 ? 'flipped' : ''}`} onClick={() => handleCardClick(1)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="work-country-flag">🇦🇺</div>
                    <h4>Australia</h4>
                  </div>
                  <div className="flip-card-back">
                    <h5>Australia</h5>
                    <p>Employer-sponsored visas with PR options.</p>
                    <ul className="list-unstyled small">
                      <li><MdCheckCircle className="text-success me-1" />Skilled occupation list</li>
                      <li><MdCheckCircle className="text-success me-1" />High salaries</li>
                      <li><MdCheckCircle className="text-success me-1" />Quality lifestyle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`flip-card ${flippedCard === 2 ? 'flipped' : ''}`} onClick={() => handleCardClick(2)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="work-country-flag">🇬🇧</div>
                    <h4>United Kingdom</h4>
                  </div>
                  <div className="flip-card-back">
                    <h5>United Kingdom</h5>
                    <p>Skilled Worker visa with 5-year settlement.</p>
                    <ul className="list-unstyled small">
                      <li><MdCheckCircle className="text-success me-1" />No cap on visas</li>
                      <li><MdCheckCircle className="text-success me-1" />Family inclusion</li>
                      <li><MdCheckCircle className="text-success me-1" />ILR after 5 years</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`flip-card ${flippedCard === 3 ? 'flipped' : ''}`} onClick={() => handleCardClick(3)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="work-country-flag">🇺🇸</div>
                    <h4>USA</h4>
                  </div>
                  <div className="flip-card-back">
                    <h5>USA</h5>
                    <p>H-1B specialty occupation visas.</p>
                    <ul className="list-unstyled small">
                      <li><MdCheckCircle className="text-success me-1" />Tech opportunities</li>
                      <li><MdCheckCircle className="text-success me-1" />Top salaries</li>
                      <li><MdCheckCircle className="text-success me-1" />Green card pathway</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Work Visa Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdCardTravel className="work-service-icon text-primary mb-3" />
                <h5>Visa Assessment</h5>
                <p className="text-muted">Evaluate your eligibility for work visas across multiple countries based on your profile.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdDescription className="work-service-icon text-primary mb-3" />
                <h5>Documentation Support</h5>
                <p className="text-muted">Complete assistance with resume, cover letters, credential evaluation, and visa documents.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdWork className="work-service-icon text-primary mb-3" />
                <h5>Job Search Guidance</h5>
                <p className="text-muted">Connect with employers, job portals, and recruitment agencies in your target country.</p>
              </div>
            </div>
            <div className="col-md-4 d-md-none">
              <div className="service-box p-4 bg-white rounded shadow-sm h-100">
                <MdCheckCircle className="work-service-icon text-primary mb-3" />
                <h5>Visa Processing</h5>
                <p className="text-muted">End-to-end visa application processing with interview preparation and follow-up support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-3">Work Visa Requirements</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Valid job offer or employment contract</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Updated resume and professional certificates</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Valid passport with 6+ months validity</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Proof of work experience and education</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Language proficiency test (IELTS/PTE)</li>
                <li className="list-group-item"><MdCheckCircle className="text-success me-2" />Police clearance and medical certificates</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary text-white p-5 rounded">
                <h3 className="mb-4">Ready to Work Abroad?</h3>
                <p className="mb-4 text-white">Book a free consultation with our certified work visa experts and get personalized guidance.</p>
                <Link to="/consultationForm" className="btn btn-light btn-lg">Get Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
