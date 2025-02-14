import { FaArrowRight } from "react-icons/fa6";
import React from "react";

import { InfoCard, Standalone } from "../../../../components";

import "./style.css";

type News = {
  title: string;
  created_at: string;
  image: string;
};

type Props = {
  news: News[];
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};

export const LatestNews = ({ news }: Props) => {
  return (
    <aside>
      <div className="news-best-of">
        <div className="title">
          <Standalone text="Best of CES 2025 Awards" />
        </div>

        <a href="#">
          <img src="https://gizmodo.com/app/uploads/2025/01/Cover-2.jpg" />
        </a>

        <div className="best-off-arrow-right">
          <a className="d-flex align-items-center gap-4" href="#">
            <h2>Best of CES 2025 Awards</h2>
            <FaArrowRight size={20} />
          </a>
        </div>

        <div className="separator" />
      </div>

      <div className="title">
        <Standalone text="Latest news" />
      </div>

      {news.map(({ image, title, created_at }, idx) => (
        <React.Fragment key={title}>
          <a href="#">
            <InfoCard
              image={image}
              subTitle={formatDate(created_at)}
              title={title}
            />
          </a>

          {idx !== news.length - 1 && <div className="news-line-throw" />}
        </React.Fragment>
      ))}
    </aside>
  );
};
