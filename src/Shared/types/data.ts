type LabelValue = {
  label: string;
  value: string;
};

type WorkInfo = {
  status: LabelValue;
  division: LabelValue;
  level: LabelValue;
  schedule: LabelValue;
  dateOfHiring: LabelValue;
  avatar: LabelValue;
};

type ContactInfo = {
  email: LabelValue;
  phone: LabelValue;
  city: LabelValue;
};

export interface Employees {
  id: string;
  fio: string;
  workInfo: WorkInfo;
  contactInfo: ContactInfo;
}
