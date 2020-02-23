enum Language {
    French = 0,
    English = 1
}

enum VisitorType {
  Recruiter = 0,
  Sponsor = 1,
  None = 3,
}

enum WindowState {
  REDUCED,
  CLOSED,
  FOCUS,
  BACKGROUND,
  OPENED,
}

enum MobileState {
  LOCKED,
  HOMESCREEN,
}

enum FDP {
  KERNEL,
  AUTHENTIFICATION,
  ANDROID,
}

enum WorkExperience {
  HigCo,
  Alteva,
  Paris8,
  Gymkee,
  Freelance
}

export {
  Language,
  VisitorType,
  WindowState,
  MobileState,
  FDP,
  WorkExperience
};
