import "./style.css";

export type InfoCardProps = {
  title: string;
  subTitle: string;
  image: string;
};

export const InfoCard = ({ image, subTitle, title }: InfoCardProps) => {
  return (
    <div className="info-card | d-flex align-items-center justify-content-between">
      <div className="title-sub-title">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
};
