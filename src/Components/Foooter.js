import React from "react";

function Foooter() {
  return (
    <div>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Foooter;
