import { InjectionToken } from "@angular/core";

export const CONFIG_TOKEN = new InjectionToken<ConfigToken>('config');

export interface ConfigToken {
  name: string;
}