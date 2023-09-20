import { Tabs as TabsA, TabsProps as TabsPropsA } from "antd";

type TabsProps = TabsPropsA & {};

export const Tabs = (props: TabsPropsA) => {
  return <TabsA {...props} />;
};
