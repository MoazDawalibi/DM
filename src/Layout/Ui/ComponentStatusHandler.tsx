import React from "react";
import { QueryStatusEnum } from "../../enums/QueryStatus";
import Loading from "../../Components/Utils/Loading/Loading";

interface ComponentStatusHandlerProps {
  children: React.ReactNode;
  status: QueryStatusEnum;
}
function ComponentStatusHandler({
  children,
  status,
}: ComponentStatusHandlerProps) {
  if (status === QueryStatusEnum.LOADING) return <Loading />;
  if (status === QueryStatusEnum.ERROR) return <div>Error</div>;
  return children;
}

export default ComponentStatusHandler;
