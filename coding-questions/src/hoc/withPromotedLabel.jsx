import React from "react";

function withPromotedLabel(WrappedComponent) {
  {
    console.log("inside promoted label");
  }
  return function (props) {
    return (
      <div className="promoted-card">
        <h1 className="promoted-label">Promoted Label</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withPromotedLabel;
