"use client";

import { observer } from "mobx-react";
import { useParams } from "next/navigation";
import useSWR from "swr";
// ui
import { Loader, Card } from "@plane/ui";
// components
import { ActivityMessage, IssueLink } from "@/components/core";
import { ProfileEmptyState } from "@/components/ui";
// constants
import { USER_PROFILE_ACTIVITY } from "@/constants/fetch-keys";
// helpers
import { calculateTimeAgo } from "@/helpers/date-time.helper";
import { getFileURL } from "@/helpers/file.helper";
// hooks
import { useUser } from "@/hooks/store";
// assets
import recentActivityEmptyState from "@/public/empty-state/recent_activity.svg";
// services
import { UserService } from "@/services/user.service";
import { capitalizeFirstLetter } from "@/helpers/string.helper";

const userService = new UserService();

export const ProfileActivity = observer(() => {
  const { workspaceSlug, userId } = useParams();
  // store hooks
  const { data: currentUser } = useUser();

  const { data: userProfileActivity } = useSWR(
    workspaceSlug && userId ? USER_PROFILE_ACTIVITY(workspaceSlug.toString(), userId.toString(), {}) : null,
    workspaceSlug && userId
      ? () =>
          userService.getUserProfileActivity(workspaceSlug.toString(), userId.toString(), {
            per_page: 10,
          })
      : null
  );

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Attività recenti</h3>
      <Card>
        {userProfileActivity ? (
          userProfileActivity.results.length > 0 ? (
            <div className="space-y-5">
              {userProfileActivity.results.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="flex-shrink-0 grid place-items-center overflow-hidden rounded-full h-6 w-6">
                    {activity.actor_detail?.avatar_url && activity.actor_detail?.avatar_url !== "" ? (
                      <img
                        src={getFileURL(activity.actor_detail?.avatar_url)}
                        alt={activity.actor_detail?.display_name}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-gray-700 text-xs text-white font-medium">
                        {activity.actor_detail?.display_name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="-mt-1 w-4/5 break-words">
                    <p className="inline text-sm text-custom-text-200">
                      <span className="font-medium text-custom-text-100">
                        {capitalizeFirstLetter(activity.actor_detail?.display_name)}{" "}
                      </span>
                      {activity.field ? (
                        <ActivityMessage activity={activity} showIssue />
                      ) : (
                        <span>
                          ha creato <IssueLink activity={activity} />
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-custom-text-200 whitespace-nowrap ">
                      {calculateTimeAgo(activity.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ProfileEmptyState
              title="Nessun dato disponibile"
              description="We couldn’t find data. Kindly view your inputs"
              image={recentActivityEmptyState}
            />
          )
        ) : (
          <Loader className="space-y-5">
            <Loader.Item height="40px" />
            <Loader.Item height="40px" />
            <Loader.Item height="40px" />
            <Loader.Item height="40px" />
            <Loader.Item height="40px" />
          </Loader>
        )}
      </Card>
    </div>
  );
});
