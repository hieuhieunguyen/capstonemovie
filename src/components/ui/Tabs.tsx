import { Tabs as TabsA, TabsProps as TabsPropsA } from "antd";

type TabsProps = TabsPropsA & {
  // props
};

export const Tabs = (props: TabsPropsA) => {
  return <TabsA {...props} />;
};
