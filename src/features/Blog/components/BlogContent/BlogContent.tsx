import {
  FaXTwitter,
  FaFacebookF,
  FaRedditAlien,
  FaEnvelope,
  FaLink,
  FaShareFromSquare,
} from "react-icons/fa6";

import "./style.css";

type SocialMedia = {
  id: number;
  bgColor: React.CSSProperties["backgroundColor"];
  icon: React.ReactNode;
};

const SOCIAL_MEDIA: SocialMedia[] = [
  {
    id: 1,
    bgColor: "black",
    icon: <FaXTwitter size={18} />,
  },
  {
    id: 2,
    bgColor: "rgb(59 89 152)",
    icon: <FaFacebookF size={18} />,
  },
  {
    id: 3,
    bgColor: "rgb(255 87 0)",
    icon: <FaRedditAlien size={18} />,
  },
  {
    id: 4,
    bgColor: "rgb(163 163 163)",
    icon: <FaEnvelope size={18} />,
  },
  {
    id: 5,
    bgColor: "rgb(0 117 178)",
    icon: <FaLink size={18} />,
  },
];

export const BlogContent = () => {
  return (
    <div className="blog-content">
      <div className="metadata-social-media | d-flex align-items-center justify-content-between">
        <div className="metadata | d-flex flex-wrap">
          <h3 className="author">
            BY <span>Passant Rabie</span>
          </h3>

          <h5 className="time"> Published February 11, 2025 </h5>

          <span className="separator">|</span>

          <h5 className="comments">Comments (25)</h5>

          <span className="separator only-mobile">|</span>

          <div className="only-mobile">
            <a href="#">
              <FaShareFromSquare />
            </a>
          </div>
        </div>

        <ul className="social-media | d-flex align-items-center gap-4">
          {SOCIAL_MEDIA.map(({ bgColor, icon, id }) => (
            <li key={id} style={{ backgroundColor: bgColor }}>
              <a href="#">{icon}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="photo">
          <img src="https://gizmodo.com/app/uploads/2024/09/earth-planet-killer-asteroid-nuke-x-ray-680x453.jpg" />

          <div>
            An illustration of a near-Earth Asteroid. <span>NASA</span>
          </div>
        </div>

        <div className="main-content">
          <h2>
            The odds of asteroid 2024 YR4 hitting Earth are shifting, with the
            space rock now carrying a 1-in-48 chance of collision.
          </h2>

          <p>
            Faced with the (very low probability) threat of an incoming asteroid
            impact, NASA is bringing out the big guns. The agency will employ
            its powerful Webb space telescope to monitor newly discovered
            asteroid 2024 YR4, which has a small chance of hitting Earth in
            2032.
          </p>

          <br />

          <p>
            Based on current estimates, asteroid 2024 YR4 has a 2.1% chance of
            impact on December 22, 2032. Although the odds are still in our
            favor, there are currently no other known large asteroids with an
            impact probability above 1%, according to NASA. The space agency
            tends to take these matters quite seriously, which is why it plans
            to collect additional observations of the space rock using the Webb
            telescope in March to refine the current estimates, NASA revealed in
            a recent update.
          </p>
        </div>
      </div>
    </div>
  );
};
