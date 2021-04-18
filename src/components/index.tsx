import React from "react";


export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
 <div>{error?.message}</div>
);
