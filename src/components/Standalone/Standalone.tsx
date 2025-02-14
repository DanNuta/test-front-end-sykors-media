import "./style.css";

type Props = {
  text: string;
};

export const Standalone = ({ text }: Props) => {
  return (
    <div className="standalone">
      <span className="segment" />
      <span className="content">{text}</span>
      <span className="segment" />
    </div>
  );
};
