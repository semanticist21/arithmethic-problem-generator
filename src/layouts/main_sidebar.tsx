import { PrintTwoTone, SettingsTwoTone } from "@mui/icons-material";
import { Drawer, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";

export const MainSidebar: FC = () => {
  const items = [
    { text: "옵션", icon: <SettingsTwoTone /> },
    { text: "인쇄", icon: <PrintTwoTone /> },
  ];

  //FIXME
  return (
    <Drawer className="opacity-0" variant="permanent" anchor="left">
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </ListItem>
      ))}
    </Drawer>
  );
};
