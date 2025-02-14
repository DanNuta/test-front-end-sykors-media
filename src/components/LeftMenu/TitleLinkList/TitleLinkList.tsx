import "./style.css";

type Props = {
  title: string;
  list: React.ReactNode[];
  render?: (list: React.ReactNode, idx: number) => React.ReactNode;
};

export const TitleLinkList = ({ title, list, render }: Props) => {
  const renderedList = list.map((item, index) =>
    render ? (
      render(item, index)
    ) : (
      <li key={index}>
        <a href="#">{item}</a>
      </li>
    )
  );

  return (
    <div className="title-link-list">
      <div>{title}</div>
      <ul className="d-flex justify-content-center align-items-center">
        {renderedList}
      </ul>
    </div>
  );
};
