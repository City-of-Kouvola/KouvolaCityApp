import {
  EventMapBase,
  NavigationState,
  ParamListBase,
  RouteConfig,
} from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export enum ERouteName {
  DETAILS = 'details',
  ENQUIRY = 'enquiry',
  ENQUIRY_INITIAL = 'enquiryInit',
  EVENTS = 'events',
  EVENTS_INITIAL = 'eventsInit',
  HOME = 'home',
  HOME_INITIAL = 'homeInit',
  LIBRARY_CARD = 'libraryCard',
  LIBRARY_CARD_INITIAL = 'libraryCardInit',
  ONLINE_STORE = 'onlineStore',
  ROUTE_PLANNER = 'routePlanner',
  ROUTE_PLANNER_INITIAL = 'routePlannerInit',
  TRIMBLE_FEEDBACK_REDIRECT = 'trimbleFeedbackRedirect',
  TRIMBLE_FEEDBACK_REDIRECT_INITIAL = 'trimbleFeedbackRedirectInit',
  VISIT_KVL = 'visitKvl',
  VISIT_KVL_INITIAL = 'visitKvlInit',
}

export type TStackScreenProps<
  ScreenParamList extends ParamListBase
> = RouteConfig<
  ScreenParamList,
  keyof ScreenParamList & string,
  NavigationState,
  StackNavigationOptions,
  EventMapBase
>;

export interface IHasInitialRoute {
  initialRouteName: ERouteName;
}
