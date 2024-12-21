// types
import { TXAxisValues, TYAxisValues } from "@plane/types";

export const ANALYTICS_TABS = [
  { key: "scope_and_demand", title: "Ambito e Richiesta" },
  { key: "custom", title: "Analitiche Personalizzate" },
];

export const ANALYTICS_X_AXIS_VALUES: { value: TXAxisValues; label: string }[] = [
  {
    value: "state_id",
    label: "Nome dello stato",
  },
  {
    value: "state__group",
    label: "Gruppo di stato",
  },
  {
    value: "priority",
    label: "Priorità",
  },
  {
    value: "labels__id",
    label: "Etichetta",
  },
  {
    value: "assignees__id",
    label: "Assegnatario",
  },
  {
    value: "estimate_point__value",
    label: "Punto di stima",
  },
  {
    value: "issue_cycle__cycle_id",
    label: "Ciclo",
  },
  {
    value: "issue_module__module_id",
    label: "Modulo",
  },
  {
    value: "completed_at",
    label: "Data di completamento",
  },
  {
    value: "target_date",
    label: "Data di scadenza",
  },
  {
    value: "start_date",
    label: "Data di inizio",
  },
  {
    value: "created_at",
    label: "Data di creazione",
  },  
];

export const ANALYTICS_Y_AXIS_VALUES: { value: TYAxisValues; label: string }[] = [
  {
    value: "issue_count",
    label: "Conteggio delle tasks",
  },
  {
    value: "estimate",
    label: "Stima",
  },
];

export const DATE_KEYS = ["completed_at", "target_date", "start_date", "created_at"];
