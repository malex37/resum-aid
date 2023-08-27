import { IdentificationDataContext } from "@/states/IdentificationDataContext";
import { JobDescriptionContext } from "@/states/JobDescriptionsContext";

export interface RootState {
  IdentificationData: typeof IdentificationDataContext;
  JobDescriptionData: typeof JobDescriptionContext;
}

export const rootState: RootState = {
  IdentificationData: IdentificationDataContext,
  JobDescriptionData: JobDescriptionContext,
};
