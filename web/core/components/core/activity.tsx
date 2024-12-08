"use client";

import { useEffect } from "react";
import { observer } from "mobx-react";
import { useParams } from "next/navigation";
// store hooks
// icons
import {
  TagIcon,
  CopyPlus,
  Calendar,
  Link2Icon,
  Users2Icon,
  ArchiveIcon,
  PaperclipIcon,
  ContrastIcon,
  TriangleIcon,
  LayoutGridIcon,
  SignalMediumIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react";
import { IIssueActivity } from "@plane/types";
import { Tooltip, BlockedIcon, BlockerIcon, RelatedIcon, LayersIcon, DiceIcon, Intake } from "@plane/ui";
// helpers
import { renderFormattedDate } from "@/helpers/date-time.helper";
import { capitalizeFirstLetter } from "@/helpers/string.helper";
import { useLabel } from "@/hooks/store";
import { usePlatformOS } from "@/hooks/use-platform-os";
// types

export const IssueLink = ({ activity }: { activity: IIssueActivity }) => {
  // router params
  const { workspaceSlug } = useParams();
  const { isMobile } = usePlatformOS();

  return (
    <Tooltip
      tooltipContent={activity?.issue_detail ? activity.issue_detail.name : "This issue has been deleted"}
      isMobile={isMobile}
    >
      {activity?.issue_detail ? (
        <a
          aria-disabled={activity.issue === null}
          href={`${`/${workspaceSlug ?? activity.workspace_detail?.slug}/projects/${activity.project}/issues/${
            activity.issue
          }`}`}
          target={activity.issue === null ? "_self" : "_blank"}
          rel={activity.issue === null ? "" : "noopener noreferrer"}
          className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
        >
          <span className="whitespace-nowrap">{`${activity.project_detail.identifier}-${activity.issue_detail.sequence_id}`}</span>{" "}
          <span className="font-normal break-all">{activity.issue_detail?.name}</span>
        </a>
      ) : (
        <span className="inline-flex items-center gap-1 font-medium text-custom-text-100 whitespace-nowrap">
          {" an Issue"}{" "}
        </span>
      )}
    </Tooltip>
  );
};

const UserLink = ({ activity }: { activity: IIssueActivity }) => {
  // router params
  const { workspaceSlug } = useParams();

  return (
    <a
      href={`/${workspaceSlug ?? activity.workspace_detail?.slug}/profile/${
        activity.new_identifier ?? activity.old_identifier
      }`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center font-medium text-custom-text-100 hover:underline"
    >
      {activity.new_value && activity.new_value !== "" ? activity.new_value : activity.old_value}
    </a>
  );
};

const LabelPill = observer(({ labelId, workspaceSlug }: { labelId: string; workspaceSlug: string }) => {
  // store hooks
  const { workspaceLabels, fetchWorkspaceLabels } = useLabel();

  useEffect(() => {
    if (!workspaceLabels) fetchWorkspaceLabels(workspaceSlug);
  }, [fetchWorkspaceLabels, workspaceLabels, workspaceSlug]);

  return (
    <span
      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
      style={{
        backgroundColor: workspaceLabels?.find((l) => l.id === labelId)?.color ?? "#000000",
      }}
      aria-hidden="true"
    />
  );
});

const inboxActivityMessage = {
  declined: {
    showIssue: "declined issue",
    noIssue: "declined this issue from intake.",
  },
  snoozed: {
    showIssue: "snoozed issue",
    noIssue: "snoozed this issue.",
  },
  accepted: {
    showIssue: "accepted issue",
    noIssue: "accepted this issue from intake.",
  },
  markedDuplicate: {
    showIssue: "declined issue",
    noIssue: "declined this issue from intake by marking a duplicate issue.",
  },
};

const getInboxUserActivityMessage = (activity: IIssueActivity, showIssue: boolean) => {
  switch (activity.verb) {
    case "-1":
      return showIssue ? inboxActivityMessage.declined.showIssue : inboxActivityMessage.declined.noIssue;
    case "0":
      return showIssue ? inboxActivityMessage.snoozed.showIssue : inboxActivityMessage.snoozed.noIssue;
    case "1":
      return showIssue ? inboxActivityMessage.accepted.showIssue : inboxActivityMessage.accepted.noIssue;
    case "2":
      return showIssue ? inboxActivityMessage.markedDuplicate.showIssue : inboxActivityMessage.markedDuplicate.noIssue;
    default:
      return "updated intake issue status.";
  }
};

const activityDetails: {
  [key: string]: {
    message: (activity: IIssueActivity, showIssue: boolean, workspaceSlug: string) => React.ReactNode;
    icon: React.ReactNode;
  };
} = {
  assignees: {
    message: (activity, showIssue) => {
      if (activity.old_value === "")
        return (
          <>
            ha aggiunto un nuovo membro <UserLink activity={activity} />
            {showIssue && (
              <>
                {" "}
                a <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha rimosso un membro <UserLink activity={activity} />
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <Users2Icon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  archived_at: {
    message: (activity) => {
      if (activity.new_value === "restore")
        return (
          <>
            ha ripristinato <IssueLink activity={activity} />
          </>
        );
      else
        return (
          <>
            ha archiviato <IssueLink activity={activity} />
          </>
        );
    },
    icon: <ArchiveIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  attachment: {
    message: (activity, showIssue) => {
      if (activity.verb === "created")
        return (
          <>
            ha caricato un nuovo{" "}
            <a
              href={`${activity.new_value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              allegato
            </a>
            {showIssue && (
              <>
                {" "}
                a <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha rimosso un allegato
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <PaperclipIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  description: {
    message: (activity, showIssue) => (
      <>
        ha aggiornato la descrizione
        {showIssue && (
          <>
            {" "}
            a <IssueLink activity={activity} />
          </>
        )}
      </>
    ),
    icon: <MessageSquareIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  estimate_point: {
    message: (activity, showIssue) => {
      if (!activity.new_value)
        return (
          <>
            ha rimosso il punto di stima
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha impostato il punto di stima a {activity.new_value}
            {showIssue && (
              <>
                {" "}
                per <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <TriangleIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  issue: {
    message: (activity) => {
      if (activity.verb === "created")
        return (
          <>
            ha creato <IssueLink activity={activity} />
          </>
        );
      else
        return (
          <>
            ha rimosso <IssueLink activity={activity} />
          </>
        );
    },
    icon: <LayersIcon width={12} height={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  labels: {
    message: (activity, showIssue, workspaceSlug) => {
      if (activity.old_value === "")
        return (
          <span className="overflow-hidden">
            ha aggiunto una nuova etichetta{" "}
            <span className="inline-flex items-center gap-2 rounded-full border border-custom-border-300 px-2 py-0.5 text-xs">
              <LabelPill labelId={activity.new_identifier ?? ""} workspaceSlug={workspaceSlug} />
              <span className="flex-shrink font-medium text-custom-text-100 break-all line-clamp-1">
                {activity.new_value}
              </span>
            </span>
            {showIssue && (
              <span className="">
                {" "}
                a <IssueLink activity={activity} />
              </span>
            )}
          </span>
        );
      else
        return (
          <>
            ha rimosso l'etichetta{" "}
            <span className="inline-flex items-center gap-2 rounded-full border border-custom-border-300 px-2 py-0.5 text-xs">
              <LabelPill labelId={activity.old_identifier ?? ""} workspaceSlug={workspaceSlug} />
              <span className="flex-shrink font-medium text-custom-text-100 break-all line-clamp-1">
                {activity.old_value}
              </span>
            </span>
            {showIssue && (
              <span>
                {" "}
                da <IssueLink activity={activity} />
              </span>
            )}
          </>
        );
    },
    icon: <TagIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  link: {
    message: (activity, showIssue) => {
      if (activity.verb === "created")
        return (
          <>
            ha aggiunto questo{" "}
            <a
              href={`${activity.new_value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              link
            </a>
            {showIssue && (
              <>
                {" "}
                a <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else if (activity.verb === "updated")
        return (
          <>
            ha aggiornato il{" "}
            <a
              href={`${activity.old_value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              link
            </a>
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha rimosso questo{" "}
            <a
              href={`${activity.old_value}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              link
            </a>
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <Link2Icon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  cycles: {
    message: (activity, showIssue, workspaceSlug) => {
      if (activity.verb === "created")
        return (
          <>
            <span className="flex-shrink-0">
              ha aggiunto {showIssue ? <IssueLink activity={activity} /> : "questa task"}{" "}
              <span className="whitespace-nowrap">al ciclo</span>{" "}
            </span>
            <a
              href={`/${workspaceSlug}/projects/${activity.project}/cycles/${activity.new_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              <span className="break-all">{activity.new_value}</span>
            </a>
          </>
        );
      else if (activity.verb === "updated")
        return (
          <>
            <span className="flex-shrink-0 whitespace-nowrap">ha impostato il ciclo a </span>
            <a
              href={`/${workspaceSlug}/projects/${activity.project}/cycles/${activity.new_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              <span className="break-all">{activity.new_value}</span>
            </a>
          </>
        );
      else
        return (
          <>
            ha rimosso <IssueLink activity={activity} /> dal ciclo{" "}
            <a
              href={`/${workspaceSlug}/projects/${activity.project}/cycles/${activity.old_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              <span className="break-all">{activity.old_value}</span>
            </a>
          </>
        );
    },
    icon: <ContrastIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  modules: {
    message: (activity, showIssue, workspaceSlug) => {
      if (activity.verb === "created")
        return (
          <>
            ha aggiunto {showIssue ? <IssueLink activity={activity} /> : "questa task"} al modulo{" "}
            <a
              href={`/${workspaceSlug}/projects/${activity.project}/modules/${activity.new_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              <span className="break-all">{activity.new_value}</span>
            </a>
          </>
        );
      else if (activity.verb === "updated")
        return (
          <>
            ha impostato il modulo a{" "}
            <a
              href={`/${workspaceSlug}/projects/${activity.project}/modules/${activity.new_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              <span className="break-all">{activity.new_value}</span>
            </a>
          </>
        );
      else
        return (
          <>
            ha rimosso <IssueLink activity={activity} /> dal modulo{" "}
            <a
              href={`/${workspaceSlug}/projects/${activity.project}/modules/${activity.old_identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline items-center gap-1 font-medium text-custom-text-100 hover:underline"
            >
              <span className="break-all">{activity.old_value}</span>
            </a>
          </>
        );
    },
    icon: <DiceIcon className="h-3 w-3 !text-custom-text-200" aria-hidden="true" />,
  },
  name: {
    message: (activity, showIssue) => (
      <>
        ha impostato il titolo a <span className="break-all">{activity.new_value}</span>
        {showIssue && (
          <>
            {" "}
            per <IssueLink activity={activity} />
          </>
        )}
      </>
    ),
    icon: <MessageSquareIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  parent: {
    message: (activity, showIssue) => {
      if (!activity.new_value)
        return (
          <>
            ha rimosso il genitore{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.old_value}</span>
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha impostato il genitore a{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.new_value}</span>
            {showIssue && (
              <>
                {" "}
                per <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <UsersIcon className="h-3 w-3 !text-custom-text-200" aria-hidden="true" />,
  },
  priority: {
    message: (activity, showIssue) => (
      <>
        ha impostato la priorità a{" "}
        <span className="font-medium text-custom-text-100">
          {activity.new_value ? capitalizeFirstLetter(activity.new_value) : "None"}
        </span>
        {showIssue && (
          <>
            {" "}
            per <IssueLink activity={activity} />
          </>
        )}
      </>
    ),
    icon: <SignalMediumIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  relates_to: {
    message: (activity, showIssue) => {
      if (activity.old_value === "")
        return (
          <>
            ha segnato che {showIssue ? <IssueLink activity={activity} /> : "this issue"} è correlato a{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.new_value}</span>.
          </>
        );
      else
        return (
          <>
            ha rimosso la relazione da{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.old_value}</span>.
          </>
        );
    },
    icon: <RelatedIcon height="12" width="12" className="text-custom-text-200" />,
  },
  blocking: {
    message: (activity, showIssue) => {
      if (activity.old_value === "")
        return (
          <>
            ha indicato che {showIssue ? <IssueLink activity={activity} /> : "questa task"} sta bloccando un'altra task{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.new_value}</span>.
          </>
        );
      else
        return (
          <>
            ha rimosso la task bloccante{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.old_value}</span>.
          </>
        );
    },
    icon: <BlockerIcon height="12" width="12" className="text-custom-text-200" />,
  },
  blocked_by: {
    message: (activity, showIssue) => {
      if (activity.old_value === "")
        return (
            <>
                ha segnato che {showIssue ? <IssueLink activity={activity} /> : "questa task"} è bloccato da{" "}
                <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.new_value}</span>.
            </>
        );
    else
        return (
            <>
                ha rimosso {showIssue ? <IssueLink activity={activity} /> : "questa task"} dall'essere bloccata dalla task{" "}
                <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.old_value}</span>.
            </>
        );
    },
    icon: <BlockedIcon height="12" width="12" className="text-custom-text-200" />,
  },
  duplicate: {
    message: (activity, showIssue) => {
      if (activity.old_value === "")
        return (
          <>
            ha segnato che {showIssue ? <IssueLink activity={activity} /> : "questa task"} è bloccata da{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.new_value}</span>.
          </>
        );
      else
        return (
          <>
            ha rimosso {showIssue ? <IssueLink activity={activity} /> : "questa task"} dall'essere bloccata dalla task{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">{activity.old_value}</span>.
          </>
        );
    },
    icon: <CopyPlus size={12} className="text-custom-text-200" />,
  },
  state: {
    message: (activity, showIssue) => (
      <>
        ha impostato lo stato su <span className="font-medium text-custom-text-100 break-all">{activity.new_value}</span>
        {showIssue && (
          <>
            {" "}
            per <IssueLink activity={activity} />
          </>
        )}
      </>
    ),
    icon: <LayoutGridIcon size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  start_date: {
    message: (activity, showIssue) => {
      if (!activity.new_value)
        return (
          <>
            ha rimosso la data di inizio
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha impostato la data di inizio su{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">
              {renderFormattedDate(activity.new_value)}
            </span>
            {showIssue && (
              <>
                {" "}
                per <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <Calendar size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  target_date: {
    message: (activity, showIssue) => {
      if (!activity.new_value)
        return (
          <>
            ha rimosso la data di scadenza
            {showIssue && (
              <>
                {" "}
                da <IssueLink activity={activity} />
              </>
            )}
          </>
        );
      else
        return (
          <>
            ha impostato la data di scadenza su{" "}
            <span className="font-medium text-custom-text-100 whitespace-nowrap">
              {renderFormattedDate(activity.new_value)}
            </span>
            {showIssue && (
              <>
                <IssueLink activity={activity} />
              </>
            )}
          </>
        );
    },
    icon: <Calendar size={12} className="text-custom-text-200" aria-hidden="true" />,
  },
  inbox: {
    message: (activity, showIssue) => (
      <>
        {getInboxUserActivityMessage(activity, showIssue)}
        {showIssue && (
          <>
            {" "}
            <IssueLink activity={activity} />
          </>
        )}
        {activity.verb === "2" && ` dal modulo segnalando un problema duplicato.`}
      </>
    ),
    icon: <Intake className="size-3 text-custom-text-200" aria-hidden="true" />,
  },
};

export const ActivityIcon = ({ activity }: { activity: IIssueActivity }) => (
  <>{activityDetails[activity.field as keyof typeof activityDetails]?.icon}</>
);

type ActivityMessageProps = {
  activity: IIssueActivity;
  showIssue?: boolean;
};

export const ActivityMessage = ({ activity, showIssue = false }: ActivityMessageProps) => {
  // router params
  const { workspaceSlug } = useParams();

  return (
    <>
      {activityDetails[activity.field as keyof typeof activityDetails]?.message(
        activity,
        showIssue,
        workspaceSlug ? workspaceSlug.toString() : (activity.workspace_detail?.slug ?? "")
      )}
    </>
  );
};
