import React from "react";
import DepartmentTeaserListComponent from "../department-teaser-list";
import { H2 } from "../../../plugins/gatsby-theme-tsv-zorneding/src/components/globals";
import { default as Teaser } from "../../../plugins/gatsby-theme-tsv-zorneding/src/components/teaser";

class DepartmentTeaserList extends React.Component {
  admin() {
    return {
      label: "Abteilungsliste",
      name: "department_teaser_list",
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          required: false,
        },
      ],
    };
  }
  render() {
    let content;

    if (this.props.admin) {
      content = [...Array(3)].map(function (k) {
        return (
          <Teaser
            title="Platzhalter Titel"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            featuredimage="/img/default.jpg"
            key={k}
          />
        );
      });
      content = [<div className="posts">{content}</div>];
    } else {
      content = <DepartmentTeaserListComponent />;
    }
    return (
      <>
        {this.props.title && (
          <header className="major">
            <H2>{this.props.title}</H2>
          </header>
        )}
        {content}
        <hr />
      </>
    );
  }
}

export default DepartmentTeaserList;
