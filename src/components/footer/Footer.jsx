import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__policy">
        <h2 style={{ color: "whitesmoke", fontSize: "2rem" }}>
          Pantip - Learn, Share & Fun
        </h2>
        <ul className="policy__list">
          <li>
            <a href="https://pantip.com/about/tos">กฏกติกา มารยาท</a>
          </li>
          <li>
            <a href="https://pantip.com/about/defamation">คำแนะนำการโพสต์</a>
          </li>
          <li>
            <a href="https://pantip.com/about/privacy">
              นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
            </a>
          </li>
          <li>
            <a href="https://pantip.com/about/privilege">
              สิทธิ์การใช้งานของสมาชิก
            </a>
          </li>
          <li>
            <a href="https://pantip.com/about/contact">ติดต่อทีมงาน Pantip</a>
          </li>
          <li>
            <a href="https://pantip.com/advertising">ติดต่อลงโฆษณา</a>
          </li>
          <li>
            <a href="https://pantip.com/about/job">ร่วมงานกับ Pantip</a>
          </li>
          <li>
            <a href="https://pantip.com/app">Download App Pantip</a>
          </li>
          <li>
            <a href="https://pantip.com/about/certified_developer">
              Pantip Certified Developer
            </a>
          </li>
        </ul>
      </div>
      <hr style={{ background: "#dddddd", border: "none", height: "1px" }} />
      <div className="footer__credit">
        <p>© {new Date().getFullYear()} Nattapat Pattarapremcharoen</p>
        <ul className="credit__socials">
          <li>
            <a href="https://www.facebook.com/pantipdotcom/">
              <FacebookIcon sx={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Pantip1996">
              <TwitterIcon sx={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@pantipchannel">
              <YouTubeIcon sx={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pantipdotcom/">
              <InstagramIcon sx={{ color: "white" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
