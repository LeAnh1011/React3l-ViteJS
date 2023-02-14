import { FC, PropsWithChildren } from "react";

const Body: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return <div>{props.children}</div>;
};

export default Body;
