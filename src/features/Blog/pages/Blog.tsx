import { BlogContent, Header, LatestNews } from "../components";
import { data } from "../fixtures";

export const Blog = () => {
  return (
    <main className="container py-20 px-20">
      <div>
        <Header
          title=" NASA Calls in Webb Telescope to Track Recently Identified Hazardous
        Asteroid"
          subTitle="The odds of asteroid 2024 YR4 hitting Earth are shifting, with the space rock now carrying a 1-in-48 chance of collision.
        "
        />

        <div className="d-flex gap-16">
          <BlogContent />
          <LatestNews news={data} />
        </div>
      </div>
    </main>
  );
};
