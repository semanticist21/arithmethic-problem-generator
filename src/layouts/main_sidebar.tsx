"use client";

import { useTitlebarHeight } from "@hooks/use_size";
import { PrintTwoTone, SettingsTwoTone } from "@mui/icons-material";
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { FC } from "react";

export const MainSidebar: FC = () => {
  const theme = useTheme();

  const items = [
    { text: "옵션", icon: <SettingsTwoTone /> },
    { text: "인쇄", icon: <PrintTwoTone /> },
  ];

  const titleBarHeight = useTitlebarHeight();

  return (
    <Drawer variant="persistent" anchor="left" open>
      <div style={{ height: titleBarHeight }} />
      {items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon className="min-w-0">{item.icon}</ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </Drawer>
  );
};
