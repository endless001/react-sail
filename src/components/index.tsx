import React from "react";

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <div>{error?.message}</div>
);

// 类型守卫
const isError = (value: any): value is Error => value?.message;


export const ErrorBox = ({ error }: { error: unknown }) => {
    if (isError(error)) {

    }
    return null;
};



