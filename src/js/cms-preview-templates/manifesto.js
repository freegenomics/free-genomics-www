import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM d, yyyy") }</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { widgetFor("body") }
      </div>
    </div>;
  }
}
