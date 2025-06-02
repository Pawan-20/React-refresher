import { createSelector } from "@reduxjs/toolkit";

import { announcementSelectors } from "./AnnouncementSlice";
import { RootState } from "./store";

export const selectUnacknowledgedAnnouncements = createSelector(
  (state: RootState) => announcementSelectors.selectAll(state),
  (announcements) => announcements.filter((a) => a.acknowledgedBy.length === 0)
);
