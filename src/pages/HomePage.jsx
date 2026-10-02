import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';

const FAQ_ITEMS = [
  {
    q: "How do I choose the right tile size for my space?",
    a: "Choosing the right tile size depends on the room's dimensions and the overall aesthetic you want to achieve. Larger tiles create a sense of spaciousness and fewer grout lines, making rooms feel bigger and more cohesive. For smaller spaces like compact bathrooms or intricate backsplashes, medium or mosaic tiles often work best."
  },
  {
    q: "How do I calculate the number of tiles required for my project?",
    a: "Measure the total square footage of the area to be tiled (Length × Width) and add an additional 10-15% margin to account for cutting, waste, and future repairs. Our showroom team can also assist you with precise calculations based on your architectural blueprints."
  },
  {
    q: "How do I care for granite countertops?",
    a: "Granite countertops should be cleaned daily with mild soap and warm water or a pH-neutral stone cleaner. Avoid abrasive pads, acidic solutions, or harsh chemicals. We also recommend periodic sealing to protect the stone from stains and maintain its natural lustre."
  },
  {
    q: "Can granite countertops be used in bathrooms?",
    a: "Yes, granite is an exceptional choice for bathroom vanities due to its moisture resistance, remarkable durability, and luxurious aesthetic. Proper sealing ensures long-lasting resistance against water spots and cosmetic products."
  },
  {
    q: "What is the difference between one-piece and two-piece toilets?",
    a: "One-piece toilets integrate the tank and bowl into a single seamless unit, making them easier to clean and sleek in modern aesthetics. Two-piece toilets feature a separate tank and bowl bolted together, offering classic versatility and easy part replacement."
  },
  {
    q: "How do I choose the right size of sanitaryware for my bathroom?",
    a: "Consider the clear floor space, door swing clearance, and plumbing inlet locations in your bathroom layout. Compact or wall-hung fixtures are ideal for space optimization, while freestanding units add grand luxury in larger suites."
  },
  {
    q: "How do I remove stains from granite countertops?",
    a: "For organic or oil-based stains, apply a poultice paste made from baking soda and water or hydrogen peroxide. Let it sit covered for 24-48 hours to draw out the stain, then rinse gently with warm water."
  }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="figma-page-container home-page">
      {/* 1. Hero Section */}
      <section className="home-hero-section">
        <Header variant="home" />

        {/* Hero Title & Subtitle */}
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to our Luxurious <br />
            Tile and Countertop Oasis
          </h1>
          <p className="hero-subtitle">
            Elavate your space with our premium offerings
          </p>
        </div>

        {/* Hero Banner Row */}
        <div className="hero-banners-row">
          {/* Left Kitchen Banner */}
          <div className="hero-kitchen-card">
            <img src="/assets/hero_kitchen_banner.jpg" alt="Luxury Redefined" className="hero-kitchen-img" />
            <div className="hero-kitchen-overlay">
              <h2 className="hero-kitchen-title">Luxury Redefined</h2>
              <button className="hero-kitchen-btn">Explore More</button>
            </div>
          </div>

          {/* Right Text Banner */}
          <div className="hero-side-card">
            <h3 className="hero-side-title">
              Discover the <br />
              timeless beauty
            </h3>
            <p className="hero-side-subtitle">
              Explore our stunning Products
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three Pillars / Stats Section */}
      <section className="home-pillars-section">
        <div className="pillar-item">
          <div className="pillar-icon-box">
            <img src="/assets/home_tiles_icon.png" alt="Exceptional Tiles" className="pillar-icon" />
          </div>
          <h3 className="pillar-title">Exceptional Tiles</h3>
          <p className="pillar-desc">
            Our ceramic tiles are meticulously crafted to elevate any space, blending timeless elegance with modern flair
          </p>
        </div>

        <div className="pillar-item">
          <div className="pillar-icon-box">
            <img src="/assets/home_sanitary_icon.png" alt="Sanitary Splendor" className="pillar-icon" />
          </div>
          <h3 className="pillar-title">Sanitary Splendor</h3>
          <p className="pillar-desc">
            Our premium sanitary ware collection combines comfort, style, and expectational functionality
          </p>
        </div>

        <div className="pillar-item">
          <div className="pillar-icon-box">
            <img src="/assets/home_granite_icon.png" alt="Granite Perfection" className="pillar-icon" />
          </div>
          <h3 className="pillar-title">Granite Perfection</h3>
          <p className="pillar-desc">
            Our Granite countertops are the epitome of sophisticated and durability. Sourced from the finest quarries.
          </p>
        </div>
      </section>

      {/* 3. Category 1: Tiles */}
      <section className="home-category-section cat-tiles">
        <div className="cat-bg-block bg-sand-warm" />
        <div className="cat-content-container">
          <div className="cat-text-col">
            <h2 className="cat-heading">
              Step into a World of Endless Possibilities with Our Tile Collection
            </h2>
            <p className="cat-description">
              Explore our wide range of tile options, from classic marble to contemporary concrete, and find the perfect fit for your project. Our tiles are not only beautiful but also durable an easy to maintain
            </p>
            <button className="cat-cta-btn">Button</button>
          </div>
          <div className="cat-image-col">
            <img src="/assets/home_category_tiles.png" alt="Tile Collection" className="cat-img" />
          </div>
        </div>
      </section>

      {/* 4. Category 2: Granite */}
      <section className="home-category-section cat-granite">
        <div className="cat-bg-block bg-sand-golden" />
        <div className="cat-content-container reverse">
          <div className="cat-image-col">
            <img src="/assets/home_category_granite.png" alt="Granite Countertops" className="cat-img" />
          </div>
          <div className="cat-text-col">
            <h2 className="cat-heading">
              Indulge in the Luxury of Granite
            </h2>
            <p className="cat-description">
              Elevate your kitchen or bathroom with our exceptional granite countertops. Meticulously cut and polished, each slab showcases the natural beauty and unparalleled durability of this timeless material. Explore our curated collection and find the perfect guanite to complement your design vision
            </p>
            <div className="cat-btn-right-wrap">
              <button className="cat-cta-btn">Button</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Category 3: Sanitary Ware */}
      <section className="home-category-section cat-sanitary">
        <div className="cat-bg-block bg-sand-warm" />
        <div className="cat-content-container">
          <div className="cat-text-col">
            <h2 className="cat-heading">
              Elevate your bathroom experience with our exquisite range of sanitary ware
            </h2>
            <p className="cat-description">
              Our sanitary ware collection combines exquisite design with eco-conscious technology. Experience unparalleled comfort and style while reducing your environmental impact. Discover a new era of bathroom elegance.
            </p>
            <button className="cat-cta-btn">Button</button>
          </div>
          <div className="cat-image-col">
            <img src="/assets/home_category_sanitary.png" alt="Sanitary Ware" className="cat-img" />
          </div>
        </div>
      </section>

      {/* 6. Lookbook / Collage Banner Section */}
      <section className="home-lookbook-section">
        <h2 className="lookbook-title">
          Elevate your Space with our premium tile collection
        </h2>
        <div className="lookbook-banner-wrap">
          <img src="/assets/home_collage_banner.png" alt="Premium Tile Collage" className="lookbook-banner-img" />
        </div>
      </section>

      {/* 7. Tags / Ticker Row */}
      <section className="home-tags-section">
        <div className="tags-row">
          <span className="tag-item">Marble Majesty</span>
          <span className="tag-item">Slate Serenity</span>
          <span className="tag-item">Clay Canvas</span>
          <span className="tag-item">Earthen Elegance</span>
          <span className="tag-item">Chevron Chic</span>
          <span className="tag-item">Hexagon Harmony</span>
          <span className="tag-item">Grid Glamor</span>
        </div>
        <div className="tags-row">
          <span className="tag-item">Steel Strength</span>
          <span className="tag-item">Copper Craze</span>
          <span className="tag-item">Bronze Beauty</span>
          <span className="tag-item">Porcelain Perfection</span>
          <span className="tag-item">Crystal Clarity</span>
          <span className="tag-item">Iridescent Illusion</span>
          <span className="tag-item">Translucent Treasure</span>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="home-faq-section" id="faq">
        <h2 className="faq-main-title">FAQ</h2>
        <div className="faq-card-container">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className={`faq-item-row ${openFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
              <div className="faq-question-wrap">
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-toggle-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              {openFaq === idx && (
                <div className="faq-answer-wrap">
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
