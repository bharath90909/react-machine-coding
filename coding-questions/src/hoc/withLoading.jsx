import React from "react";

function withLoading(WrappedComponent) {
  return function (props) {
    console.log("Loading");
    const { isLoading, label } = props;
    return isLoading ? (
      <h1>Loading....</h1>
    ) : (
      <WrappedComponent label={label} />
    );
  };
}

export default withLoading;
