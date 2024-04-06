import Tabs from "./tabs";
// import "./tabs.css";

export default function TabsTest() {
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  function RandomComponent() {
    return <h1>This is Random component content</h1>;
  }

  const tabs = [
    {
      label: "Tab1",
      content: "This is tab1 content",
    },
    {
      label: "Tab2",
      content: "This is tab2 content",
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
