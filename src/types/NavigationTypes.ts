export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Diagnosis: undefined;
  Professionals: undefined;
  SupportGroups: undefined;
  Pharmacy: undefined;
  Hotlines: undefined;
  ChatBot: undefined;
  DailyTips: undefined;
  FamilySupport: undefined;
  Premium: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainStackParamList = Omit<RootStackParamList, keyof AuthStackParamList>;