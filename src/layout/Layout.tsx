import { FC, PropsWithChildren } from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
