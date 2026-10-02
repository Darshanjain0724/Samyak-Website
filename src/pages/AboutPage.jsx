import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';

const BRANDS = [
  { id: 1, name: 'Somany', logo: '/assets/about_brand_somany.png' },
  { id: 2, name: 'Simpolo', logo: '/assets/about_brand_simpolo.png' },
  { id: 3, name: 'Ibis', logo: '/assets/about_brand_ibis.png' },
  { id: 4, name: 'Brand 10', logo: '/assets/about_brand_10.png' },
];

export default function AboutPage() {
  const [brandOffset, setBrandOffset] = useState(0);

  const handlePrevBrand = () => {
    setBrandOffset((prev) => (prev === 0 ? BRANDS.length - 1 : prev - 1));
  };

  const handleNextBrand = () => {
    setBrandOffset((prev) => (prev === BRANDS.length - 1 ? 0 : prev + 1));
  };

  const visibleBrands = [...BRANDS.slice(brandOffset), ...BRANDS.slice(0, brandOffset)];

  return (
    <div className="figma-page-container about-page">
      {/* 1. Page Header */}
      <Header />

      {/* 2. Hero Section */}
      <section className="about-hero-section">
        <h1 className="about-main-title">About us</h1>

        {/* Decorative Floating Tiles (Left & Right) */}
        <div className="about-hero-tiles-left">
          <img src="/assets/about_tile_left_1.png" alt="" className="tile-rot-left tile-1" />
          <img src="/assets/about_tile_left_2.png" alt="" className="tile-rot-left tile-2" />
          <img src="/assets/about_tile_left_3.png" alt="" className="tile-rot-left tile-3" />
        </div>

        <div className="about-hero-tiles-right">
          <img src="/assets/about_tile_right_1.png" alt="" className="tile-rot-right tile-1" />
          <img src="/assets/about_tile_right_2.png" alt="" className="tile-rot-right tile-2" />
          <img src="/assets/about_tile_right_3.png" alt="" className="tile-rot-right tile-3" />
        </div>

        {/* Intro Texts */}
        <div className="about-intro-wrap">
          <h2 className="about-intro-title">Welcome to Samyak Ceramics</h2>
          <p className="about-intro-text">
            Davanagere’s biggest showroom with a 25000 sq. ft display area with more than 3000 Tiles on display. Samyak ceramics offer an extensive range of Tiles catering to various applications including Floor, wall, bathrooms, Kitchen & Outdoor Spaces, the product portfolio includes Ceramic Tiles, Vitrified Tiles, Polished vitrified Tiles, Glazed Vitrified Tiles and Digital Tiles.
          </p>
          <p className="about-intro-text">
            Our range also includes sanitary ware from the best-known brands including closet, basins, bath accessories and some kitchenware appliances.
          </p>
        </div>
      </section>

      {/* 3. We Offer Section */}
      <section className="about-offer-section">
        <div className="offer-image-box">
          <img src="/assets/about_we_offer.png" alt="Showroom Display" className="offer-img" />
        </div>
        <div className="offer-text-box">
          <h2 className="offer-heading">We offer</h2>
          <p className="offer-desc">
            Under one roof you get all products with good pricing & best quality with good service.
          </p>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="about-stats-section">
        <div className="stat-card">
          <img src="/assets/about_stat_blueprint_1.png" alt="Projects Worked" className="stat-icon" />
          <h3 className="stat-label">Projects worked</h3>
          <span className="stat-number">150</span>
        </div>

        <div className="stat-card">
          <img src="/assets/about_stat_blueprint_2.png" alt="Expert Workers" className="stat-icon" />
          <h3 className="stat-label">Expert Workers</h3>
          <span className="stat-number">40</span>
        </div>

        <div className="stat-card">
          <img src="/assets/about_stat_blueprint_3.png" alt="Happy Clients" className="stat-icon" />
          <h3 className="stat-label">Happy Clients</h3>
          <span className="stat-number">500</span>
        </div>
      </section>

      {/* 5. Vision & Mission Section */}
      <section className="about-vision-section">
        <h2 className="vision-section-title">Our Vision & Mission </h2>

        {/* Vision Card */}
        <div className="vision-card-wrap vision-card-left">
          <div className="vision-card-header">
            <img src="/assets/about_vision_icon.png" alt="Vision Icon" className="vision-icon" />
            <h3 className="vision-card-title">VISION</h3>
          </div>
          <div className="vision-card-content">
            <p>To be the leading provider of innovative and sustainable home solutions.</p>
            <p>To transform spaces into extraordinary living environments.</p>
            <p>To be the preferred choice for premium tiles, sanitary ware, and granite.</p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="vision-card-wrap mission-card-right">
          <div className="vision-card-header">
            <img src="/assets/about_mission_icon.png" alt="Mission Icon" className="vision-icon" />
            <h3 className="vision-card-title">MISSION</h3>
          </div>
          <div className="vision-card-content">
            <p>To offer a diverse range of high-quality products to meet the evolving needs of our customers.</p>
            <p>To deliver exceptional customer service and build long-lasting relationships.</p>
            <p>To contribute to sustainable living through eco-friendly products and practices.</p>
          </div>
        </div>
      </section>

      {/* 6. Our Partners Section */}
      <section className="about-partners-section">
        <h2 className="partners-section-title">Our Partners</h2>
        <div className="partners-grid">
          {/* Partner 1 */}
          <div className="partner-card bg-gold">
            <div className="partner-info">
              <h3 className="partner-name">Arun jain </h3>
              <p className="partner-role">Our partner</p>
            </div>
            <div className="partner-img-wrap">
              <img src="/assets/about_partner_1.png" alt="Arun jain" className="partner-photo" />
            </div>
          </div>

          {/* Partner 2 */}
          <div className="partner-card bg-warm">
            <div className="partner-info">
              <h3 className="partner-name">Ashish Jain</h3>
              <p className="partner-role">Our partner</p>
            </div>
            <div className="partner-img-wrap">
              <img src="/assets/about_partner_2.png" alt="Ashish Jain" className="partner-photo" />
            </div>
          </div>

          {/* Partner 3 */}
          <div className="partner-card bg-gold">
            <div className="partner-info">
              <h3 className="partner-name">Hitesh Jain</h3>
              <p className="partner-role">Our partner</p>
            </div>
            <div className="partner-img-wrap">
              <img src="/assets/about_partner_3.png" alt="Hitesh Jain" className="partner-photo" />
            </div>
          </div>

          {/* Partner 4 */}
          <div className="partner-card bg-warm">
            <div className="partner-info">
              <h3 className="partner-name">Kaushik Jain</h3>
              <p className="partner-role">Our partner</p>
            </div>
            <div className="partner-img-wrap">
              <img src="/assets/about_partner_4.png" alt="Kaushik Jain" className="partner-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials Section */}
      <section className="about-testimonials-section">
        <h2 className="testimonials-title">What our Clients Say about us</h2>
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card card-side">
            <div className="testimonial-quote-mark quote-gold">“</div>
            <div className="testimonial-author">
              <h4>Mrs. Ananya Desai</h4>
              <p>Davanagere Resident</p>
            </div>
            <p className="testimonial-text">
              Samyak Ceramics exceeded my expectations! The quality of their Tiles is unmatched, and the variety they offer is impressive. The staff's guidance made the selection process seamless, and the end result in our home is truly stunning.
            </p>
          </div>

          {/* Testimonial 2 (Center Hero) */}
          <div className="testimonial-card card-center">
            <div className="testimonial-quote-mark quote-warm">“</div>
            <div className="testimonial-author">
              <h4>Mr. Karthik Sharma</h4>
              <p>Homeowner</p>
            </div>
            <p className="testimonial-text">
              As a homeowner in Davanagere, Samyak Ceramics has become our go-to destination for all things Tiles. Their showroom's vast display area and personalized service set them apart. Highly recommend for anyone looking to elevate their space
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card card-side">
            <div className="testimonial-quote-mark quote-gold">“</div>
            <div className="testimonial-author">
              <h4>Mrs. Priya Rao</h4>
              <p>Satisfied Customer</p>
            </div>
            <p className="testimonial-text">
              Our experience with Samyak Ceramics was fantastic. From the initial consultation to the final installation, their team demonstrated a commitment to both quality and style. Our bathroom renovation was a success, thanks to Samyak Ceramics
            </p>
          </div>
        </div>
      </section>

      {/* 8. Our Associates (Brands) Section */}
      <section className="about-associates-section">
        <h2 className="associates-title">Our Associates</h2>
        <div className="associates-banner-container">
          <button className="assoc-arrow-btn left" onClick={handlePrevBrand} aria-label="Previous brand">
            <img src="/assets/carousel_arrow_left.png" alt="Previous" />
          </button>

          <div className="associates-logos-track">
            {visibleBrands.map((brand) => (
              <div key={`${brand.id}-${brandOffset}`} className="assoc-logo-item">
                <img src={brand.logo} alt={brand.name} className="assoc-logo-img" />
              </div>
            ))}
          </div>

          <button className="assoc-arrow-btn right" onClick={handleNextBrand} aria-label="Next brand">
            <img src="/assets/carousel_arrow_right.png" alt="Next" />
          </button>
        </div>
      </section>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
