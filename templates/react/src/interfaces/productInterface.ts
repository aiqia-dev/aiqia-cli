export interface ActiveActionsSchema {
  allowed: boolean;
  conditions: Record<string, unknown>;
  key: string;
  uuid: string;
}

export interface ResourcesSchema {
  activeActions: ActiveActionsSchema[];
  availableActions: string[];
  icon: string;
  key: string;
  label: string;
  uuid: string;
}

export interface SubmoduleSchema {
  icon: string;
  key: string;
  label: string;
  resources: ResourcesSchema[];
  route: string;
  uuid: string;
}

export interface ModuleSchema {
  iconOrLogoSrc: string;
  key: string;
  label: string;
  route: string;
  submodules: SubmoduleSchema[];
  uuid: string;
}

export interface ProductSchema {
  key: string;
  modules: ModuleSchema[];
  theme: {
    accentColor: string;
    darkMode: boolean;
    primaryColor: string;
    secondaryColor: string;
    uuid: string;
  };
}
