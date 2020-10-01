import { useStaticQuery, graphql } from "gatsby";
export const useDepartmentTeaser = () => {
  return useStaticQuery(
    graphql`
      query {
        tischtennis: feedTischtennis {
          title
          description: contentSnippet
          image: enclosure {
            url
          }
          link
        }
      }
    `
  );
};
