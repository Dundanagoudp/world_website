import React from 'react';
import "../pages/HomeSections.css";
export const HomeSections = () => {
  return (
    <section className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-container">
        {/* Top Certificates */}
        <div className="certificates-row">
          <img src="/L1.webp" alt="CISA" className="certificate-logo" />
          <img src="/L2.webp" alt="ECSA" className="certificate-logo" />
          <img src="/L3.webp" alt="BSI" className="certificate-logo" />
          <img src="/L5.webp" alt="ISO 9001:2015" className="certificate-logo" />
          <img src="/L1.webp" alt="ISO 27001" className="certificate-logo" />
          <img src="/L2.webp" alt="ECSA" className="certificate-logo" />
          <img src="/L3.webp" alt="BSI" className="certificate-logo" />
          <img src="/L1.webp" alt="ISO 9001:2015" className="certificate-logo" />
          <img src="/L1.webp" alt="ISO 27001" className="certificate-logo" />
        </div>

        {/* Ratings */}
        <div className="ratings-row">
          <div className="rating-card">
            <img src="google-logo.png" alt="Google" className="rating-logo" />
            <p>Google ★ 4.8</p>
          </div>
          <div className="rating-card">
            <img src="clutch-logo.png" alt="Clutch" className="rating-logo" />
            <p>Clutch ★ 4.9</p>
          </div>
          <div className="rating-card">
            <img src="sortlist-logo.png" alt="Sortlist" className="rating-logo" />
            <p>Sortlist ★ 5.0</p>
          </div>
          <div className="rating-card">
            <img src="bark-logo.png" alt="Bark" className="rating-logo" />
            <p>Bark ★ 4.8</p>
          </div>
          <div className="rating-card">
            <img src="goodfirms-logo.png" alt="GoodFirms" className="rating-logo" />
            <p>GoodFirms ★ 4.9</p>
          </div>
        </div>
      </div>
    </section>
  );
};
