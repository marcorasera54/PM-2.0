// icons
import { SettingIcon } from "@/components/icons/attachment";
import { Props } from "@/components/icons/types";
import { EUserPermissions } from "./user-permissions";
// constants

export const WORKSPACE_SETTINGS = {
  general: {
    key: "general",
    label: "Generale",
    href: `/settings`,
    access: [EUserPermissions.ADMIN],
    highlight: (pathname: string, baseUrl: string) => pathname === `${baseUrl}/settings/`,
    Icon: SettingIcon,
  },
  members: {
    key: "members",
    label: "Membri",
    href: `/settings/members`,
    access: [EUserPermissions.ADMIN],
    highlight: (pathname: string, baseUrl: string) => pathname === `${baseUrl}/settings/members/`,
    Icon: SettingIcon,
  },
  "billing-and-plans": {
    key: "billing-and-plans",
    label: "Fatturazione e piani",
    href: `/settings/billing`,
    access: [EUserPermissions.ADMIN],
    highlight: (pathname: string, baseUrl: string) => pathname === `${baseUrl}/settings/billing/`,
    Icon: SettingIcon,
  },
  export: {
    key: "export",
    label: "Esporta",
    href: `/settings/exports`,
    access: [EUserPermissions.ADMIN],
    highlight: (pathname: string, baseUrl: string) => pathname === `${baseUrl}/settings/exports/`,
    Icon: SettingIcon,
  },
};

export const WORKSPACE_SETTINGS_LINKS: {
  key: string;
  label: string;
  href: string;
  access: EUserPermissions[];
  highlight: (pathname: string, baseUrl: string) => boolean;
  Icon: React.FC<Props>;
}[] = [
  WORKSPACE_SETTINGS["general"],
  WORKSPACE_SETTINGS["members"],
  WORKSPACE_SETTINGS["billing-and-plans"],
  WORKSPACE_SETTINGS["export"],
];