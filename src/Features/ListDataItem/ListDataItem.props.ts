import { LabelValue } from "../../Shared/types/data";

export interface ListDataItemProps {
  dataEmployeeAllInfo: {
    [key: string]: LabelValue | LabelValue[];
  };
}
