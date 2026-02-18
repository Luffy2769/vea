import React from "react";
import {
  FaUsers,
  FaGlobe,
  FaAward,
  FaHandshake,
  FaEye,
  FaBullseye,
  FaHeart,
  FaClock,
  FaCheckCircle,
  FaUniversity,
} from "react-icons/fa";
import "../Styles/About.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About VE-Scholars | 10+ Years Education & Migration Expertise</title>
        <meta name="description" content="VE-Scholars: 10+ years in international migration, 35+ years academic coaching. 500+ successful students & PR approvals. Expert guidance for Canada PR, study abroad & global opportunities." />
        <link rel="canonical" href="https://veabroad.com/about" />
        <meta property="og:title" content="About VE-Scholars | 10+ Years Education & Migration Expertise" />
        <meta property="og:description" content="VE-Scholars: 10+ years in international migration, 35+ years academic coaching. 500+ successful students & PR approvals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://veabroad.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About VE-Scholars",
            "description": "VE-Scholars is a trusted education and migration consultancy with over a decade of expertise."
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">About VE Abroad</h1>
              <p className="hero-subtitle">
                VE-Scholars is a trusted education and migration consultancy
                with over a decade of expertise in guiding students and
                professionals toward global opportunities. Backed by 10+ years
                of industry experience and a 35-year academic coaching
                foundation in Andheri, Mumbai, we combine academic excellence
                with international career strategy.
              </p>
              <p className="hero-subtitle">
                Our journey began with a strong commitment to education. With
                more than three decades of academic mentoring and student
                development, we deeply understand students' aspirations,
                challenges, and the preparation required to succeed in a
                competitive global environment.
              </p>
              <p className="hero-subtitle">
                Building on this strong foundation, VE-Scholars was established
                to provide structured, transparent, and result-driven pathways
                for students seeking higher education abroad and professionals
                aiming for international migration.
              </p>
              <p className="hero-subtitle">
                Over the years, we have successfully guided 500+ students and
                families toward international education, Permanent Residency
                (PR), and Work Permit pathways across Canada and other leading
                destinations. Our expert team ensures personalized counselling,
                compliance-focused documentation, and end-to-end support — from
                university selection and application strategy to visa processing
                and post-landing assistance.
              </p>
              <p className="hero-subtitle">
                VE-Scholars proudly operates alongside its sister concern, Liba
                Migration Services, a recognized name in Canada PR and work
                permit solutions. Together, we provide comprehensive global
                mobility solutions for students, skilled professionals, and
                families seeking long-term settlement and career growth
                overseas.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=450&fit=crop"
                  alt="VE Abroad Team"
                  className="img-fluid rounded-3 shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="hero-highlights pt-3">
                <div className="highlight-item">
                  <FaClock className="highlight-icon" />
                  <span>10+ Years of International Migration expertise</span>
                </div>
                <div className="highlight-item">
                  <FaUsers className="highlight-icon" />
                  <span>35+ Years of Academic Coaching Experience</span>
                </div>
                <div className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>500+ Successful Student & PR Approval</span>
                </div>
                <div className="highlight-item">
                  <FaHandshake className="highlight-icon" />
                  <span>Transparent & Ethical Advisory Process</span>
                </div>
                <div className="highlight-item">
                  <FaUniversity className="highlight-icon" />
                  <span>Strong Global Network of Institutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="mission-vision section light-bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card">
                <div className="card-icon">
                  <FaBullseye />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To deliver accurate, transparent, and compliance-driven
                  migration and education services. To provide personalized
                  career strategies aligned with each client's academic
                  background and long-term goals. To maintain the highest
                  standards of integrity, professionalism, and ethical
                  counselling. To build long-term relationships based on trust,
                  results, and global success. To empower students and families
                  with the right information, preparation, and support required
                  for international settlement.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card">
                <div className="card-icon">
                  <FaEye />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a globally recognized education and migration
                  advisory brand that transforms aspirations into international
                  success stories — by providing ethical guidance, strategic
                  planning, and life-changing global opportunities. We envision
                  a future where students and professionals from India
                  confidently access world-class education, meaningful careers,
                  and secure residency pathways across the globe through trusted
                  and transparent mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h4>Integrity</h4>
              <p>
                We maintain the highest ethical standards in all our dealings,
                ensuring transparency and honesty at every step.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h4>Compassion</h4>
              <p>
                We understand that each journey is personal and treat every
                client with empathy, care, and respect.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaAward />
              </div>
              <h4>Excellence</h4>
              <p>
                We strive for perfection in everything we do, continuously
                improving our services and expertise.
              </p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaGlobe />
              </div>
              <h4>Innovation</h4>
              <p>
                We embrace new technologies and methodologies to provide
                cutting-edge solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership section light-bg">
        <div className="container">
          <h2 className="text-center mb-5">
            Leadership & Visionaries Behind VE-Scholars
          </h2>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="leader-card">
                <div className="leader-header">
                  <h3>Mr. Girish Gupta</h3>
                  <p className="leader-title">
                    Co-Founder & Director – Academic Strategy & Career
                    Development
                  </p>
                </div>
                <div className="leader-content">
                  <p>
                    With an exceptional legacy of over 35 years in education
                    coaching and career mentorship, Mr. Girish Gupta stands as
                    the academic pillar behind VE-Scholars. His distinguished
                    career has been dedicated to shaping futures, mentoring
                    young minds, and building strong academic foundations that
                    lead to global success.
                  </p>
                  <p>
                    Renowned for his strategic career counselling approach, Mr.
                    Gupta has guided thousands of students in identifying the
                    right academic pathways aligned with long-term career
                    growth. His deep understanding of education systems, student
                    psychology, and international academic frameworks enables
                    him to provide clarity where students often face
                    uncertainty.
                  </p>
                  <p>
                    Through his visionary leadership, more than 100+ students
                    have successfully settled abroad through education and
                    international work opportunities. His mentorship extends
                    beyond admissions — he believes in preparing students for
                    life, leadership, and long-term global success.
                  </p>
                  <p>
                    At VE-Scholars, Mr. Gupta ensures that every student
                    receives guidance rooted in experience, integrity, and
                    excellence — maintaining the highest standards of academic
                    and ethical counselling.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="leader-card">
                <div className="leader-header">
                  <h3>Mr. Jafar Sayed</h3>
                  <p className="leader-title">
                    Founder & Managing Director – Liba Migration Services
                    <br />
                    Co-Founder & Director – Global Migration & International
                    Relations, VE-Scholars
                  </p>
                </div>
                <div className="leader-content">
                  <p>
                    Mr. Jafar Sayed is a visionary entrepreneur and
                    international migration specialist with over 8 years of
                    proven expertise in global immigration services. As the
                    Founder of Liba Migration Services and Co-Founder of
                    VE-Scholars, he leads the organization's international
                    expansion, strategic partnerships, and high-value
                    immigration programs.
                  </p>
                  <p>
                    With extensive experience across multiple immigration
                    systems, Mr. Sayed specializes in Canada Permanent Residency
                    (PR), Work Permits, Study Visas, Business Immigration, and
                    Skilled Migration Programs. His deep procedural knowledge,
                    regulatory understanding, and strategic documentation
                    planning have helped numerous families establish successful
                    lives in Canada and enabled students to access world-class
                    education globally.
                  </p>
                  <p>
                    Under his leadership, Liba Migration Services has earned a
                    reputation for transparency, precision, and results-driven
                    execution. He is known for building structured migration
                    strategies tailored to each client's profile — ensuring
                    long-term stability, compliance, and success.
                  </p>
                  <p>
                    His mission is not just migration — it is global mobility
                    with purpose, helping families, professionals, and students
                    build secure and prosperous futures abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements section">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">1000+</div>
              <div className="achievement-label">Successful Cases</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Countries Covered</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">98%</div>
              <div className="achievement-label">Success Rate</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">35+</div>
              <div className="achievement-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications section light-bg">
        <div className="container">
          <h2>Certifications & Memberships</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>ICCRC Certified</h5>
                <p>Immigration Consultants of Canada Regulatory Council</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>MARA Registered</h5>
                <p>Migration Agents Registration Authority - Australia</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>OISC Regulated</h5>
                <p>Office of the Immigration Services Commissioner - UK</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <h5>ISO Certified</h5>
                <p>ISO 9001:2015 Quality Management System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Join thousands of satisfied clients who have achieved their
              international dreams with VE Abroad. Let's make your aspirations a
              reality.
            </p>
            <div className="cta-buttons">
              <button className="lmbtn">
                <Link to="/consultationForm" className="cta-link">
                  Get Free Consultation
                </Link>
              </button>
              <button className="btn-outline">
                <Link to="/" className="outline-link">
                  Explore Services
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
