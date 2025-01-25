import React from "react";

const AboutMeSidebar = () => {
  const socialLinks = [
    { href: "#", iconClass: "icofont-facebook", label: "Facebook" },
    { href: "#", iconClass: "icofont-twitter", label: "Twitter" },
    { href: "#", iconClass: "icofont-linkedin", label: "LinkedIn" },
    { href: "#", iconClass: "icofont-pinterest", label: "Pinterest" },
  ];

  return (
    <div className="col-lg-8 col-xl-4 col-12">
      <div className="ep-blog__sidebar-widget">
        <h4 className="ep-blog__sidebar-title">About Me</h4>
        <div className="ep-blog__sidebar-about">
         
          <div className="ep-blog__about-img">
            <img
              src="assets/images/blog/sidebar/about-img.png"
              alt="About Me"
            />
          </div>

        
          <div className="ep-blog__about-info">
            <h6>Stanio lainto smarle</h6>
            <p>
              Aliquam eros justo, posuere loborti viverra ullamcorper posuere
            </p>
          </div>

          
          <div className="ep-blog__about-social">
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} aria-label={link.label}>
                    <i className={link.iconClass}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSidebar;
