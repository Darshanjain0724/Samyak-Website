import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DownloadPage.css';

const CATALOGUES = [
  {
    id: 1,
    title: "12MM Outlook Collection",
    image: "/assets/catalogue_12mm_outlook.png",
    fileUrl: "#"
  },
  {
    id: 2,
    title: "1200x1800 Catalogue",
    image: "/assets/catalogue_1200x1800.png",
    fileUrl: "#"
  },
  {
    id: 3,
    title: "600x1200 MM Endless ",
    image: "/assets/catalogue_600x1200_endless.png",
    fileUrl: "#"
  },
  {
    id: 4,
    title: "600x1200 MM Carving ",
    image: "/assets/catalogue_600x1200_carving.png",
    fileUrl: "#"
  }
];

export default function DownloadPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <div className="figma-page-container download-page">
      {/* 1. Page Header */}
      <Header />

      {/* 2. Download Header / Filter Section */}
      <section className="download-hero-section">
        <h1 className="download-main-title">Download</h1>

        <div className="download-hero-body">
          {/* Left: Catalogues title & Filter dropdown */}
          <div className="download-filter-col">
            <div className="catalogues-title-wrap">
              <h2 className="catalogues-heading">Catalogues</h2>
              <div className="catalogues-underline-short" />
            </div>

            <div className="filter-dropdown-container">
              <div className="filter-dropdown-trigger" onClick={() => setFilterOpen(!filterOpen)}>
                <span className="filter-label">Filter</span>
                <img src="/assets/filter_dropdown_icon.png" alt="Filter" className={`filter-arrow ${filterOpen ? 'rotated' : ''}`} />
              </div>
              <div className="filter-underline-long" />

              {filterOpen && (
                <div className="filter-options-menu">
                  <div className={`filter-opt ${selectedFilter === 'All' ? 'active' : ''}`} onClick={() => { setSelectedFilter('All'); setFilterOpen(false); }}>All Catalogues</div>
                  <div className={`filter-opt ${selectedFilter === 'Tiles' ? 'active' : ''}`} onClick={() => { setSelectedFilter('Tiles'); setFilterOpen(false); }}>Tiles</div>
                  <div className={`filter-opt ${selectedFilter === 'Granite' ? 'active' : ''}`} onClick={() => { setSelectedFilter('Granite'); setFilterOpen(false); }}>Granite</div>
                  <div className={`filter-opt ${selectedFilter === 'Sanitary' ? 'active' : ''}`} onClick={() => { setSelectedFilter('Sanitary'); setFilterOpen(false); }}>Sanitary</div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Book Mockup Image */}
          <div className="download-mockup-col">
            <div className="download-mockup-card">
              <img src="/assets/download_book_mockup.png" alt="Catalogues Book Mockup" className="mockup-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catalogues Section */}
      <section className="download-catalogues-section">
        {/* ITACA Catalogues Banner */}
        <div className="itaca-banner-container">
          <h2 className="itaca-title">ITACA Catalogues </h2>
        </div>

        {/* 2x2 Catalogues Grid */}
        <div className="catalogues-grid">
          {CATALOGUES.map((item) => (
            <div key={item.id} className="catalogue-item-card">
              <div className="catalogue-img-box">
                <img src={item.image} alt={item.title} className="catalogue-preview-img" />
              </div>
              <div className="catalogue-footer-bar">
                <h3 className="catalogue-name">{item.title}</h3>
                <a href={item.fileUrl} download className="catalogue-download-btn" aria-label={`Download ${item.title}`}>
                  <img src="/assets/download_btn_icon.png" alt="Download" className="download-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Unified Bottom Footer */}
      <Footer />
    </div>
  );
}
