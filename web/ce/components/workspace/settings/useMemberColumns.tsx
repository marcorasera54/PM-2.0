import { useState } from "react";
import { useParams } from "next/navigation";
import { AccountTypeColumn, NameColumn, RowData } from "@/components/workspace/settings/member-columns";
import { useUser, useUserPermissions } from "@/hooks/store";
import { EUserPermissions, EUserPermissionsLevel } from "@/plane-web/constants/user-permissions";

export const useMemberColumns = () => {
  // states
  const [removeMemberModal, setRemoveMemberModal] = useState<RowData | null>(null);

  const { workspaceSlug } = useParams();

  const { data: currentUser } = useUser();
  const { allowPermissions } = useUserPermissions();

  const getFormattedDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("it-IT", options);
  };

  // derived values
  const isAdmin = allowPermissions([EUserPermissions.ADMIN], EUserPermissionsLevel.WORKSPACE);

  const columns = [
    {
      key: "Nome completo",
      content: "Nome completo",
      thClassName: "text-left",
      tdRender: (rowData: RowData) => (
        <NameColumn
          rowData={rowData}
          workspaceSlug={workspaceSlug as string}
          isAdmin={isAdmin}
          currentUser={currentUser}
          setRemoveMemberModal={setRemoveMemberModal}
        />
      ),
    },

    {
      key: "Nome visualizzato",
      content: "Nome visualizzato",
      tdRender: (rowData: RowData) => <div className="w-32">{rowData.member.display_name}</div>,
    },

    {
      key: "Indirizzo email",
      content: "Indirizzo email",
      tdRender: (rowData: RowData) => <div className="w-48 truncate">{rowData.member.email}</div>,
    },

    {
      key: "Tipo dii account",
      content: "Tipo dii account",
      tdRender: (rowData: RowData) => <AccountTypeColumn rowData={rowData} workspaceSlug={workspaceSlug as string} />,
    },

    {
      key: "Autenticazione",
      content: "Autenticazione",
      tdRender: (rowData: RowData) => (
        <div className="capitalize">{rowData.member.last_login_medium?.replace("-", " ")}</div>
      ),
    },

    {
      key: "Data di iscrizione",
      content: "Data di iscrizione",
      tdRender: (rowData: RowData) => <div>{getFormattedDate(rowData?.member?.joining_date || "")}</div>,
    },
  ];
  return { columns, workspaceSlug, removeMemberModal, setRemoveMemberModal };
};
