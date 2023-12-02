import React from "react";

const Footer = () => {
  const curretYear = new Date().getFullYear();
  return (
    <header className="card-footer text-center">
      © {curretYear} Company, Inc
    </header>
  );
};

export default Footer;
