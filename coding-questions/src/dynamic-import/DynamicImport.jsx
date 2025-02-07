import React, { lazy, Suspense, useState } from "react";

function DynamicImport() {
  const LazyComponent = lazy(() => import("./LazyComponent"));
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Dynamic Import</button>
      {show && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default DynamicImport;
