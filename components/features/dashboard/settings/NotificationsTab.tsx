import React from "react";

export interface NotificationsTypes {
  email: boolean;
  updates: boolean;
  marketing: boolean;
}
export interface NotificationsTabProps {
  notifications: NotificationsTypes;
  setNotifications: (
    value:
      | NotificationsTypes
      | ((prevVar: NotificationsTypes) => NotificationsTypes)
  ) => void;
}
const NotificationsTab = ({
  notifications,
  setNotifications,
}: NotificationsTabProps) => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Notifications</h2>
        <p className="text-sm text-slate-500">
          Manage how you receive updates and alerts.
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            id: "email",
            label: "Email Notifications",
            desc: "Receive daily summaries and important alerts.",
          },
          {
            id: "updates",
            label: "Course Updates",
            desc: "Get notified when new content is added to your courses.",
          },
          {
            id: "marketing",
            label: "Marketing",
            desc: "Receive offers and news about new features.",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-color"
          >
            <div>
              <h4 className="text-sm font-bold text-slate-900">{item.label}</h4>
              <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
            </div>
            <button
              onClick={() =>
                setNotifications((prev) => ({
                  ...prev,
                  [item.id]: !prev[item.id as keyof typeof prev],
                }))
              }
              className={`relative inline-flex h-5 w-10 items-center rounded-full transition-color ${
                notifications[item.id as keyof typeof notifications]
                  ? "bg-indigo-600"
                  : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications[item.id as keyof typeof notifications]
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsTab;
