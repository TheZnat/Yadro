import { LabelValue } from "../../Shared/types/index";

export interface ListDataItemProps {
  dataEmployeeAllInfo: {
    [key: string]: LabelValue | LabelValue[];
  };
}
