import { Standalone } from "../../../../components";

import "./style.css";

type Props = {
  title: string;
  subTitle?: string;
};

export const Header = ({ title, subTitle }: Props) => {
  return (
    <div className="header">
      <div className="category">
        <Standalone text="Space & Spaceflight" />
      </div>
      <h1 className="title">{title}</h1>
      {subTitle && <h3 className="sub-title">{subTitle}</h3>}
    </div>
  );
};
