import React from "react";
import { default as Teaser } from "../../plugins/gatsby-theme-tsv-zorneding/src/components/teaser";
import { useDepartmentTeaser } from "../hooks/use-department-teaser";

function DepartmentTeaserList() {
  const feeds = useDepartmentTeaser();

  const teaser = Object.keys(feeds).map(function (key) {
    let feed = feeds[key];
    console.log(feed);

    return (
      <Teaser
        title={feed.title}
        link={feed.link}
        description={feed.description}
        featuredimage={feed.image.url}
        key={key}
      />
    );
  });

  return (
    <>
      <div className="posts">{teaser}</div>
      <hr />
    </>
  );
}

export default DepartmentTeaserList;
