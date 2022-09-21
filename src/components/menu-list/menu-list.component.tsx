import React, { FunctionComponent, SVGProps } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { menuListStyle, menuListActiveStyle } from "./menu-list.styles";

import { ReactComponent as agents } from "../../assets/icons/agents.svg";
import { ReactComponent as articles } from "../../assets/icons/articles.svg";
import { ReactComponent as contacts } from "../../assets/icons/contacts.svg";
import { ReactComponent as ideas } from "../../assets/icons/ideas.svg";
import { ReactComponent as overview } from "../../assets/icons/overview.svg";
import { ReactComponent as settings } from "../../assets/icons/settings.svg";
import { ReactComponent as subscription } from "../../assets/icons/subscription.svg";
import { ReactComponent as tickets } from "../../assets/icons/tickets.svg";

type ImagesType = {
  Overview: FunctionComponent<SVGProps<SVGSVGElement>>;
  Tickets: FunctionComponent<SVGProps<SVGSVGElement>>;
  Ideas: FunctionComponent<SVGProps<SVGSVGElement>>;
  Contacts: FunctionComponent<SVGProps<SVGSVGElement>>;
  Agents: FunctionComponent<SVGProps<SVGSVGElement>>;
  Articles: FunctionComponent<SVGProps<SVGSVGElement>>;
  Settings: FunctionComponent<SVGProps<SVGSVGElement>>;
  Subscription: FunctionComponent<SVGProps<SVGSVGElement>>;
};

const images: ImagesType = {
  Overview: overview,
  Tickets: tickets,
  Ideas: ideas,
  Contacts: contacts,
  Agents: agents,
  Articles: articles,
  Settings: settings,
  Subscription: subscription,
};

type Props = {
  items: string[];
};

const MenuListItem: React.FC<Props> = function MenuListItem({ items }) {
  const { pathname } = useLocation();
  const locations = pathname.split("/");
  const lastPath = locations[locations.length - 1];

  return (
    <List>
      {items.map((text) => (
        <ListItem key={text} disablePadding>
          <Link
            to={`/admin/${text.charAt(0).toLowerCase() + text.slice(1)}`}
            className="menu__link"
          >
            <ListItemButton
              sx={
                lastPath.includes(text.toLowerCase())
                  ? menuListActiveStyle
                  : menuListStyle
              }
            >
              <ListItemIcon>
                <SvgIcon
                  format="align-center"
                  component={images[text as keyof ImagesType]}
                  inheritViewBox
                  sx={{
                    fontSize: "16px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItem;
