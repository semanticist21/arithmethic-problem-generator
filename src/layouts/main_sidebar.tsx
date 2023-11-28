"use client";

import { useTitlebarHeight } from "@hooks/use_size";
import { PrintTwoTone, SettingsTwoTone } from "@mui/icons-material";
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  SxProps,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import useNavStore from "store/nav_store";

export const MainSidebar: FC = () => {
  // props
  const theme = useTheme();
  const titleBarHeight = useTitlebarHeight();

  const { setActiveKey } = useNavStore();

  // sidebar items
  const items = [
    { text: "옵션", icon: <SettingsTwoTone /> },
    { text: "인쇄", icon: <PrintTwoTone /> },
  ];

  // sidebar styles
  const drawerStyle: SxProps = {
    width: theme.drawerWidth,
    flexShrink: 0,
    margin: 0,
  };

  const itemStyle: SxProps = {
    width: theme.drawerWidth,
  };

  // sidebar handlers
  const createChangeActiveKey = (key: number) => () => setActiveKey(key);

  return (
    <Drawer variant="persistent" anchor="left" open sx={drawerStyle}>
      <div style={{ height: titleBarHeight }} />
      {items.map((item, index) => (
        <ListItem key={index} disablePadding sx={itemStyle}>
          <ListItemButton onClick={createChangeActiveKey(index)}>
            <ListItemIcon className="min-w-0">{item.icon}</ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </Drawer>
  );
};
