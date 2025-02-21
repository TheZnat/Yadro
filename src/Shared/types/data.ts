export interface LabelValue {
  label: string;
  value: string;
}

export interface WorkInfo {
  [key: string]: LabelValue; // Добавляем индексный сигнатур
  status: LabelValue;
  division: LabelValue;
  level: LabelValue;
  schedule: LabelValue;
  dateOfHiring: LabelValue;
  avatar: LabelValue;
}

export interface ContactInfo {
  [key: string]: LabelValue; // Добавляем индексный сигнатур
  email: LabelValue;
  phone: LabelValue;
  city: LabelValue;
}

export interface Employees {
  id: string;
  fio: string;
  workInfo: WorkInfo;
  contactInfo: ContactInfo;
}
