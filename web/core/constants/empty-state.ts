import { EUserPermissions } from "ee/constants/user-permissions";

export interface EmptyStateDetails {
  key: EmptyStateType;
  title?: string;
  description?: string;
  path?: string;
  primaryButton?: {
    icon?: React.ReactNode;
    text: string;
    comicBox?: {
      title?: string;
      description?: string;
    };
  };
  secondaryButton?: {
    icon?: React.ReactNode;
    text: string;
    comicBox?: {
      title?: string;
      description?: string;
    };
  };
  accessType?: "workspace" | "project";
  access?: any;
}

export enum EmptyStateType {
  WORKSPACE_DASHBOARD = "workspace-dashboard",
  WORKSPACE_ANALYTICS = "workspace-analytics",
  WORKSPACE_PROJECTS = "workspace-projects",
  WORKSPACE_ALL_ISSUES = "workspace-all-issues",
  WORKSPACE_ASSIGNED = "workspace-assigned",
  WORKSPACE_CREATED = "workspace-created",
  WORKSPACE_SUBSCRIBED = "workspace-subscribed",
  WORKSPACE_CUSTOM_VIEW = "workspace-custom-view",
  WORKSPACE_NO_PROJECTS = "workspace-no-projects",
  WORKSPACE_SETTINGS_API_TOKENS = "workspace-settings-api-tokens",
  WORKSPACE_SETTINGS_WEBHOOKS = "workspace-settings-webhooks",
  WORKSPACE_SETTINGS_EXPORT = "workspace-settings-export",
  WORKSPACE_SETTINGS_IMPORT = "workspace-settings-import",
  PROFILE_ACTIVITY = "profile-activity",
  PROFILE_ASSIGNED = "profile-assigned",
  PROFILE_CREATED = "profile-created",
  PROFILE_SUBSCRIBED = "profile-subscribed",
  PROJECT_SETTINGS_LABELS = "project-settings-labels",
  PROJECT_SETTINGS_INTEGRATIONS = "project-settings-integrations",
  PROJECT_SETTINGS_ESTIMATE = "project-settings-estimate",
  PROJECT_CYCLES = "project-cycles",
  PROJECT_CYCLE_NO_ISSUES = "project-cycle-no-issues",
  PROJECT_CYCLE_ACTIVE = "project-cycle-active",
  PROJECT_CYCLE_ALL = "project-cycle-all",
  PROJECT_CYCLE_COMPLETED_NO_ISSUES = "project-cycle-completed-no-issues",
  PROJECT_ARCHIVED_NO_CYCLES = "project-archived-no-cycles",
  PROJECT_EMPTY_FILTER = "project-empty-filter",
  PROJECT_ARCHIVED_EMPTY_FILTER = "project-archived-empty-filter",
  PROJECT_DRAFT_EMPTY_FILTER = "project-draft-empty-filter",
  PROJECT_NO_ISSUES = "project-no-issues",
  PROJECT_ARCHIVED_NO_ISSUES = "project-archived-no-issues",
  PROJECT_DRAFT_NO_ISSUES = "project-draft-no-issues",
  VIEWS_EMPTY_SEARCH = "views-empty-search",
  PROJECTS_EMPTY_SEARCH = "projects-empty-search",
  MEMBERS_EMPTY_SEARCH = "members-empty-search",
  PROJECT_MODULE_ISSUES = "project-module-issues",
  PROJECT_MODULE = "project-module",
  PROJECT_ARCHIVED_NO_MODULES = "project-archived-no-modules",
  PROJECT_VIEW = "project-view",
  PROJECT_PAGE = "project-page",
  PROJECT_PAGE_PRIVATE = "project-page-private",
  PROJECT_PAGE_PUBLIC = "project-page-public",
  PROJECT_PAGE_ARCHIVED = "project-page-archived",
  WORKSPACE_PAGE = "workspace-page",
  WORKSPACE_PAGE_PRIVATE = "workspace-page-private",
  WORKSPACE_PAGE_PUBLIC = "workspace-page-public",
  WORKSPACE_PAGE_ARCHIVED = "workspace-page-archived",

  COMMAND_K_SEARCH_EMPTY_STATE = "command-k-search-empty-state",
  ISSUE_RELATION_SEARCH_EMPTY_STATE = "issue-relation-search-empty-state",
  ISSUE_RELATION_EMPTY_STATE = "issue-relation-empty-state",
  ISSUE_COMMENT_EMPTY_STATE = "issue-comment-empty-state",

  NOTIFICATION_DETAIL_EMPTY_STATE = "notification-detail-empty-state",
  NOTIFICATION_ALL_EMPTY_STATE = "notification-all-empty-state",
  NOTIFICATION_MENTIONS_EMPTY_STATE = "notification-mentions-empty-state",
  NOTIFICATION_MY_ISSUE_EMPTY_STATE = "notification-my-issues-empty-state",
  NOTIFICATION_CREATED_EMPTY_STATE = "notification-created-empty-state",
  NOTIFICATION_SUBSCRIBED_EMPTY_STATE = "notification-subscribed-empty-state",
  NOTIFICATION_ARCHIVED_EMPTY_STATE = "notification-archived-empty-state",
  NOTIFICATION_SNOOZED_EMPTY_STATE = "notification-snoozed-empty-state",
  NOTIFICATION_UNREAD_EMPTY_STATE = "notification-unread-empty-state",

  ACTIVE_CYCLE_PROGRESS_EMPTY_STATE = "active-cycle-progress-empty-state",
  ACTIVE_CYCLE_CHART_EMPTY_STATE = "active-cycle-chart-empty-state",
  ACTIVE_CYCLE_PRIORITY_ISSUE_EMPTY_STATE = "active-cycle-priority-issue-empty-state",
  ACTIVE_CYCLE_ASSIGNEE_EMPTY_STATE = "active-cycle-assignee-empty-state",
  ACTIVE_CYCLE_LABEL_EMPTY_STATE = "active-cycle-label-empty-state",

  DISABLED_PROJECT_INBOX = "disabled-project-inbox",
  DISABLED_PROJECT_CYCLE = "disabled-project-cycle",
  DISABLED_PROJECT_MODULE = "disabled-project-module",
  DISABLED_PROJECT_VIEW = "disabled-project-view",
  DISABLED_PROJECT_PAGE = "disabled-project-page",

  INBOX_SIDEBAR_OPEN_TAB = "inbox-sidebar-open-tab",
  INBOX_SIDEBAR_CLOSED_TAB = "inbox-sidebar-closed-tab",
  INBOX_SIDEBAR_FILTER_EMPTY_STATE = "inbox-sidebar-filter-empty-state",
  INBOX_DETAIL_EMPTY_STATE = "inbox-detail-empty-state",

  WORKSPACE_DRAFT_ISSUES = "workspace-draft-issues",
}

const emptyStateDetails = {
  // workspace
  [EmptyStateType.WORKSPACE_DASHBOARD]: {
    key: EmptyStateType.WORKSPACE_DASHBOARD,
    title: "Panoramica dei tuoi progetti, attività e metriche",
    description:
      "Benvenuto su Plane, siamo entusiasti di averti qui. Crea il tuo primo progetto e traccia i tuoi problemi, questa pagina si trasformerà in uno spazio che ti aiuterà a progredire. Gli amministratori vedranno anche voci che aiutano il loro team a progredire.",
    path: "/empty-state/onboarding/dashboard",
    primaryButton: {
      text: "Crea il tuo primo progetto",
      comicBox: {
        title: "Tutto inizia con un progetto in Plane",
        description: "Un progetto potrebbe essere la roadmap di un prodotto, una campagna di marketing o il lancio di una nuova auto.",
      },
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_ANALYTICS]: {
    key: EmptyStateType.WORKSPACE_ANALYTICS,
    title: "Monitora i progressi, i carichi di lavoro e le allocazioni. Individua le tendenze, rimuovi gli ostacoli e accelera il lavoro",
    description:
      "Vedi la portata rispetto alla domanda, le stime e l'espansione della portata. Ottieni performance per i membri del team e per i team, e assicurati che il progetto proceda in tempo.",
    path: "/empty-state/onboarding/analytics",
    primaryButton: {
      text: "Inizia il tuo primo progetto",
      comicBox: {
        title: "L'analisi funziona meglio con Cycles + Modules",
        description:
          "Prima, suddividi i tuoi problemi in Cycles e, se possibile, raggruppa i problemi che si estendono oltre un ciclo in Modules. Scopri entrambe le opzioni nel menu a sinistra.",
      },
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_PROJECTS]: {
    key: EmptyStateType.WORKSPACE_PROJECTS,
    title: "Nessun progetto attivo",
    description:
      "Pensa a ogni progetto come al genitore per il lavoro orientato agli obiettivi. I progetti sono dove vivono Jobs, Cycles e Modules e, insieme ai tuoi colleghi, ti aiutano a raggiungere quell'obiettivo. Crea un nuovo progetto o filtra per progetti archiviati.",
    path: "/empty-state/onboarding/projects",
    primaryButton: {
      text: "Inizia il tuo primo progetto",
      comicBox: {
        title: "Tutto inizia con un progetto in Plane",
        description: "Un progetto potrebbe essere la roadmap di un prodotto, una campagna di marketing o il lancio di una nuova auto.",
      },
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_ALL_ISSUES]: {
    key: EmptyStateType.WORKSPACE_ALL_ISSUES,
    title: "Nessun problema nel progetto",
    description: "Primo progetto completato! Ora, suddividi il tuo lavoro in pezzi tracciabili con i problemi. Andiamo!",
    path: "/empty-state/all-issues/all-issues",
    primaryButton: {
      text: "Crea nuovo problema",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_ASSIGNED]: {
    key: EmptyStateType.WORKSPACE_ASSIGNED,
    title: "Nessun problema assegnato",
    description: "I problemi a te assegnati possono essere tracciati da qui.",
    path: "/empty-state/all-issues/assigned",
    primaryButton: {
      text: "Crea nuovo problema",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_CREATED]: {
    key: EmptyStateType.WORKSPACE_CREATED,
    title: "Nessun problema creato",
    description: "Tutti i problemi creati da te arrivano qui, tracciali direttamente da qui.",
    path: "/empty-state/all-issues/created",
    primaryButton: {
      text: "Crea nuovo problema",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_SUBSCRIBED]: {
    key: EmptyStateType.WORKSPACE_SUBSCRIBED,
    title: "Nessun problema ancora",
    description: "Iscriviti ai problemi che ti interessano, tracciali tutti qui.",
    path: "/empty-state/all-issues/subscribed",
  },
  [EmptyStateType.WORKSPACE_CUSTOM_VIEW]: {
    key: EmptyStateType.WORKSPACE_CUSTOM_VIEW,
    title: "Nessun problema ancora",
    description: "I problemi che corrispondono ai filtri, tracciali tutti qui.",
    path: "/empty-state/all-issues/custom-view",
  },
  [EmptyStateType.WORKSPACE_NO_PROJECTS]: {
    key: EmptyStateType.WORKSPACE_NO_PROJECTS,
    title: "Nessun progetto",
    description: "Per creare problemi o gestire il tuo lavoro, devi creare un progetto o far parte di uno.",
    path: "/empty-state/onboarding/projects",
    primaryButton: {
      text: "Inizia il tuo primo progetto",
      comicBox: {
        title: "Tutto inizia con un progetto in Plane",
        description: "Un progetto potrebbe essere la roadmap di un prodotto, una campagna di marketing o il lancio di una nuova auto.",
      },
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.WORKSPACE_SETTINGS_API_TOKENS]: {
    key: EmptyStateType.WORKSPACE_SETTINGS_API_TOKENS,
    title: "Nessun token API creato",
    description:
      "Le API di Plane possono essere utilizzate per integrare i tuoi dati in Plane con qualsiasi sistema esterno. Crea un token per iniziare.",
    path: "/empty-state/workspace-settings/api-tokens",
  },
  [EmptyStateType.WORKSPACE_SETTINGS_WEBHOOKS]: {
    key: EmptyStateType.WORKSPACE_SETTINGS_WEBHOOKS,
    title: "Nessun webhook aggiunto",
    description: "Crea webhook per ricevere aggiornamenti in tempo reale e automatizzare le azioni.",
    path: "/empty-state/workspace-settings/webhooks",
  },
  [EmptyStateType.WORKSPACE_SETTINGS_EXPORT]: {
    key: EmptyStateType.WORKSPACE_SETTINGS_EXPORT,
    title: "Nessuna esportazione precedente",
    description: "Ogni volta che esporti, avrai anche una copia qui per riferimento.",
    path: "",
  },
  [EmptyStateType.WORKSPACE_SETTINGS_IMPORT]: {
    key: EmptyStateType.WORKSPACE_SETTINGS_IMPORT,
    title: "Nessuna importazione precedente",
    description: "Trova tutte le tue importazioni precedenti qui e scaricale.",
    path: "/empty-state/workspace-settings/imports",
  },
  [EmptyStateType.PROFILE_ACTIVITY]: {
    key: EmptyStateType.PROFILE_ASSIGNED,
    title: "Nessuna attività ancora",
    description:
      "Inizia creando un nuovo problema! Aggiungi dettagli e proprietà. Esplora di più in Plane per vedere la tua attività.",
    path: "/empty-state/profile/activity",
  },
  [EmptyStateType.PROFILE_ASSIGNED]: {
    key: EmptyStateType.PROFILE_ASSIGNED,
    title: "Nessun problema assegnato a te",
    description: "I problemi a te assegnati possono essere tracciati da qui.",
    path: "/empty-state/profile/assigned",
  },
  [EmptyStateType.PROFILE_CREATED]: {
    key: EmptyStateType.PROFILE_CREATED,
    title: "Nessun problema creato",
    description: "Tutti i problemi creati da te arrivano qui, tracciali direttamente da qui.",
    path: "/empty-state/profile/created",
  },
  [EmptyStateType.PROFILE_SUBSCRIBED]: {
    key: EmptyStateType.PROFILE_SUBSCRIBED,
    title: "Nessun problema ancora",
    description: "Iscriviti ai problemi che ti interessano, tracciali tutti qui.",
    path: "/empty-state/profile/subscribed",
  },
  [EmptyStateType.PROJECT_SETTINGS_LABELS]: {
    key: EmptyStateType.PROJECT_SETTINGS_LABELS,
    title: "Nessuna etichetta ancora",
    description: "Crea etichette per aiutare a organizzare e filtrare i problemi nel tuo progetto.",
    path: "/empty-state/project-settings/labels",
  },
  [EmptyStateType.PROJECT_SETTINGS_INTEGRATIONS]: {
    key: EmptyStateType.PROJECT_SETTINGS_INTEGRATIONS,
    title: "Nessuna integrazione configurata",
    description: "Configura GitHub e altre integrazioni per sincronizzare i problemi del tuo progetto.",
    path: "/empty-state/project-settings/integrations",
  },
  [EmptyStateType.PROJECT_SETTINGS_ESTIMATE]: {
    key: EmptyStateType.PROJECT_SETTINGS_ESTIMATE,
    title: "Nessuna stima aggiunta",
    description: "Crea un set di stime per comunicare la quantità di lavoro per problema.",
    path: "/empty-state/project-settings/estimates",
  },
  [EmptyStateType.PROJECT_CYCLES]: {
    key: EmptyStateType.PROJECT_CYCLES,
    title: "Gruppo e tempo il tuo lavoro in Cycles.",
    description:
      "Suddividi il lavoro in pezzi limitati nel tempo, lavora a ritroso dalla scadenza del progetto per impostare le date e fai progressi concreti come team.",
    path: "/empty-state/onboarding/cycles",
    primaryButton: {
      text: "Imposta il tuo primo ciclo",
      comicBox: {
        title: "I cicli sono intervalli di tempo ripetitivi.",
        description:
          "Uno sprint, un'iterazione, o qualsiasi altro termine usato per tracciare settimanalmente o ogni due settimane il lavoro è un ciclo.",
      },
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_CYCLE_NO_ISSUES]: {
    key: EmptyStateType.PROJECT_CYCLE_NO_ISSUES,
    title: "Nessun problema aggiunto al ciclo",
    description: "Aggiungi o crea i problemi che desideri limitare nel tempo e consegnare all'interno di questo ciclo",
    path: "/empty-state/cycle-issues/",
    primaryButton: {
      text: "Crea nuovo problema",
    },
    secondaryButton: {
      text: "Aggiungi un problema esistente",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },

  [EmptyStateType.PROJECT_CYCLE_ACTIVE]: {
    key: EmptyStateType.PROJECT_CYCLE_ACTIVE,
    title: "Nessun ciclo attivo",
    description:
      "Un ciclo attivo include qualsiasi periodo che comprende la data odierna nel suo intervallo. Trova i progressi e i dettagli del ciclo attivo qui.",
    path: "/empty-state/cycle/active",
  },
  [EmptyStateType.PROJECT_CYCLE_COMPLETED_NO_ISSUES]: {
    key: EmptyStateType.PROJECT_CYCLE_COMPLETED_NO_ISSUES,
    title: "Nessun problema nel ciclo",
    description:
      "Nessun problema nel ciclo. I problemi sono stati trasferiti o nascosti. Per visualizzare i problemi nascosti, se presenti, aggiorna le proprietà di visualizzazione di conseguenza.",
    path: "/empty-state/cycle/completed-no-issues",
  },
  [EmptyStateType.PROJECT_ARCHIVED_NO_CYCLES]: {
    key: EmptyStateType.PROJECT_ARCHIVED_NO_CYCLES,
    title: "Nessun ciclo archiviato ancora",
    description: "Per tenere in ordine il tuo progetto, archivia i cicli completati. Trovali qui una volta archiviati.",
    path: "/empty-state/archived/empty-cycles",
  },
  [EmptyStateType.PROJECT_CYCLE_ALL]: {
    key: EmptyStateType.PROJECT_CYCLE_ALL,
    title: "Nessun ciclo",
    description:
      "Un ciclo attivo include qualsiasi periodo che comprende la data odierna nel suo intervallo. Trova i progressi e i dettagli del ciclo attivo qui.",
    path: "/empty-state/cycle/active",
  },
  // empty filters
  [EmptyStateType.PROJECT_EMPTY_FILTER]: {
    key: EmptyStateType.PROJECT_EMPTY_FILTER,
    title: "Nessun problema trovato corrispondente ai filtri applicati",
    path: "/empty-state/empty-filters/",
    secondaryButton: {
      text: "Rimuovi tutti i filtri",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_ARCHIVED_EMPTY_FILTER]: {
    key: EmptyStateType.PROJECT_ARCHIVED_EMPTY_FILTER,
    title: "Nessun problema trovato corrispondente ai filtri applicati",
    path: "/empty-state/empty-filters/",
    secondaryButton: {
      text: "Rimuovi tutti i filtri",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_DRAFT_EMPTY_FILTER]: {
    key: EmptyStateType.PROJECT_DRAFT_EMPTY_FILTER,
    title: "Nessun problema trovato corrispondente ai filtri applicati",
    path: "/empty-state/empty-filters/",
    secondaryButton: {
      text: "Rimuovi tutti i filtri",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  // project issues
  [EmptyStateType.PROJECT_NO_ISSUES]: {
    key: EmptyStateType.PROJECT_NO_ISSUES,
    title: "Crea un problema e assegnalo a qualcuno, anche a te stesso",
    description:
      "Pensa ai problemi come lavori, compiti, attività o JTBD. Che ci piacciono. Un problema e i suoi sotto-problemi sono solitamente azioni basate sul tempo assegnate ai membri del tuo team. Il tuo team crea, assegna e completa i problemi per portare il progetto verso il suo obiettivo.",
    path: "/empty-state/onboarding/issues",
    primaryButton: {
      text: "Crea il tuo primo problema",
      comicBox: {
        title: "I problemi sono i mattoni di Plane.",
        description:
          "Ridisegnare l'interfaccia di Plane, rebrandizzare l'azienda o lanciare il nuovo sistema di iniezione del carburante sono esempi di problemi che probabilmente hanno sotto-problemi.",
      },
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_ARCHIVED_NO_ISSUES]: {
    key: EmptyStateType.PROJECT_ARCHIVED_NO_ISSUES,
    title: "Nessun problema archiviato ancora",
    description:
      "Manuale o tramite automazione, puoi archiviare i problemi completati o cancellati. Trovali qui una volta archiviati.",
    path: "/empty-state/archived/empty-issues",
    primaryButton: {
      text: "Imposta automazione",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_DRAFT_NO_ISSUES]: {
    key: EmptyStateType.PROJECT_DRAFT_NO_ISSUES,
    title: "Nessun problema in bozza ancora",
    description:
      "Ti stai allontanando velocemente ma vuoi mantenere il punto in cui ti trovavi? Nessun problema – salva una bozza ora. I tuoi problemi saranno proprio qui ad aspettarti.",
    path: "/empty-state/draft/draft-issues-empty",
  },
  [EmptyStateType.VIEWS_EMPTY_SEARCH]: {
    key: EmptyStateType.VIEWS_EMPTY_SEARCH,
    title: "Nessuna vista corrispondente",
    description: "Nessuna vista corrisponde ai criteri di ricerca. \n Crea una nuova vista invece.",
    path: "/empty-state/search/views",
  },
  [EmptyStateType.PROJECTS_EMPTY_SEARCH]: {
    key: EmptyStateType.PROJECTS_EMPTY_SEARCH,
    title: "Nessun progetto corrispondente",
    description: "Nessun progetto rilevato con i criteri corrispondenti. Crea un nuovo progetto invece.",
    path: "/empty-state/search/project",
  },
  [EmptyStateType.MEMBERS_EMPTY_SEARCH]: {
    key: EmptyStateType.MEMBERS_EMPTY_SEARCH,
    title: "Nessun membro corrispondente",
    description: "Aggiungili al progetto se fanno già parte dello spazio di lavoro",
    path: "/empty-state/search/member",
  },
  // project module
  [EmptyStateType.PROJECT_MODULE_ISSUES]: {
    key: EmptyStateType.PROJECT_MODULE_ISSUES,
    title: "Nessun problema nel modulo",
    description: "Crea o aggiungi problemi che desideri completare come parte di questo modulo",
    path: "/empty-state/module-issues/",
    primaryButton: {
      text: "Crea nuovo problema ",
    },
    secondaryButton: {
      text: "Aggiungi un problema esistente",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_MODULE]: {
    key: EmptyStateType.PROJECT_MODULE,
    title: "Mappa le tappe del tuo progetto in Moduli e traccia facilmente il lavoro aggregato.",
    description:
      "Un gruppo di problemi che appartengono a un genitore logico e gerarchico forma un modulo. Pensali come un modo per tracciare il lavoro per tappe del progetto. Hanno anche i propri periodi e scadenze, nonché analisi per aiutarti a vedere quanto sei vicino o lontano da una tappa.",
    path: "/empty-state/onboarding/modules",
    primaryButton: {
      text: "Crea il tuo primo modulo",
      comicBox: {
        title: "I moduli aiutano a raggruppare il lavoro per gerarchia.",
        description: "Un modulo per il carrello, un modulo per il telaio e un modulo per il magazzino sono tutti buoni esempi di questo raggruppamento.",
      },
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
  [EmptyStateType.PROJECT_ARCHIVED_NO_MODULES]: {
    key: EmptyStateType.PROJECT_ARCHIVED_NO_MODULES,
    title: "Nessun modulo archiviato ancora",
    description: "Per tenere in ordine il tuo progetto, archivia i moduli completati o cancellati. Trovali qui una volta archiviati.",
    path: "/empty-state/archived/empty-modules",
  },
  // project views
  [EmptyStateType.PROJECT_VIEW]: {
    key: EmptyStateType.PROJECT_VIEW,
    title: "Salva viste filtrate per il tuo progetto. Crea quante ne hai bisogno",
    description:
      "Le viste sono un insieme di filtri salvati che usi frequentemente o a cui vuoi avere facile accesso. Tutti i tuoi colleghi in un progetto possono vedere le viste di tutti e scegliere quella che meglio si adatta alle loro esigenze.",
    path: "/empty-state/onboarding/views",
    primaryButton: {
      text: "Crea la tua prima vista",
      comicBox: {
        title: "Le viste funzionano sopra le proprietà dei problemi.",
        description: "Puoi creare una vista da qui con tutte le proprietà e i filtri che desideri.",
      },
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },
  // project pages
  [EmptyStateType.PROJECT_PAGE]: {
    key: EmptyStateType.PROJECT_PAGE,
    title: "Scrivi una nota, un documento o una base di conoscenza completa. Fai iniziare Galileo, l'assistente AI di Plane, a aiutarti",
    description:
      "Le pagine sono uno spazio per raccogliere pensieri in Plane. Prendi appunti delle riunioni, formatta facilmente, inserisci problemi, organizza utilizzando una libreria di componenti e tienili tutti nel contesto del tuo progetto. Per fare rapidamente qualsiasi documento, invoca Galileo, l'AI di Plane, con una scorciatoia o con un clic.",
    path: "/empty-state/onboarding/pages",
    primaryButton: {
      text: "Crea la tua prima pagina",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },
  [EmptyStateType.PROJECT_PAGE_PRIVATE]: {
    key: EmptyStateType.PROJECT_PAGE_PRIVATE,
    title: "Nessuna pagina privata ancora",
    description: "Tieni qui i tuoi pensieri privati. Quando sei pronto per condividerli, il team è a portata di clic.",
    path: "/empty-state/pages/private",
    primaryButton: {
      text: "Crea la tua prima pagina",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },
  [EmptyStateType.PROJECT_PAGE_PUBLIC]: {
    key: EmptyStateType.PROJECT_PAGE_PUBLIC,
    title: "Nessuna pagina pubblica ancora",
    description: "Guarda le pagine condivise con tutti nel tuo progetto qui.",
    path: "/empty-state/pages/public",
    primaryButton: {
      text: "Crea la tua prima pagina",
    },
    accessType: "project",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },
  [EmptyStateType.PROJECT_PAGE_ARCHIVED]: {
    key: EmptyStateType.PROJECT_PAGE_ARCHIVED,
    title: "Nessuna pagina archiviata ancora",
    description: "Archivia le pagine che non sono più nella tua mente. Accedi a queste pagine qui quando necessario.",
    path: "/empty-state/pages/archived",
  },
  [EmptyStateType.WORKSPACE_PAGE]: {
    key: EmptyStateType.WORKSPACE_PAGE,
    title: "Scrivi una nota, un documento o una base di conoscenza completa. Fai iniziare Galileo, l'assistente AI di Plane, a aiutarti",
    description:
      "Le pagine sono uno spazio per raccogliere pensieri in Plane. Prendi appunti delle riunioni, formatta facilmente, inserisci problemi, organizza utilizzando una libreria di componenti e tienili tutti nel contesto del tuo progetto. Per fare rapidamente qualsiasi documento, invoca Galileo, l'AI di Plane, con una scorciatoia o con un clic.",
    path: "/empty-state/onboarding/pages",
    primaryButton: {
      text: "Crea la tua prima pagina",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },

  [EmptyStateType.WORKSPACE_PAGE_PRIVATE]: {
    key: EmptyStateType.WORKSPACE_PAGE_PRIVATE,
    title: "Nessuna pagina privata ancora",
    description: "Tieni qui i tuoi pensieri privati. Quando sei pronto per condividerli, il team è a portata di clic.",
    path: "/empty-state/pages/private",
    primaryButton: {
      text: "Crea la tua prima pagina",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },
  [EmptyStateType.WORKSPACE_PAGE_PUBLIC]: {
    key: EmptyStateType.WORKSPACE_PAGE_PUBLIC,
    title: "Nessuna pagina pubblica ancora",
    description: "Guarda le pagine condivise con tutti nel tuo spazio di lavoro qui.",
    path: "/empty-state/pages/public",
    primaryButton: {
      text: "Crea la tua prima pagina",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER, EUserPermissions.GUEST],
  },
  [EmptyStateType.WORKSPACE_PAGE_ARCHIVED]: {
    key: EmptyStateType.WORKSPACE_PAGE_ARCHIVED,
    title: "Nessuna pagina archiviata ancora",
    description: "Archivia le pagine che non sono più nella tua mente. Accedi a queste pagine qui quando necessario.",
    path: "/empty-state/pages/archived",
  },

  [EmptyStateType.COMMAND_K_SEARCH_EMPTY_STATE]: {
    key: EmptyStateType.COMMAND_K_SEARCH_EMPTY_STATE,
    title: "Nessun risultato trovato",
    path: "/empty-state/search/search",
  },
  [EmptyStateType.ISSUE_RELATION_SEARCH_EMPTY_STATE]: {
    key: EmptyStateType.ISSUE_RELATION_SEARCH_EMPTY_STATE,
    title: "Nessun problema corrispondente trovato",
    path: "/empty-state/search/search",
  },
  [EmptyStateType.ISSUE_RELATION_EMPTY_STATE]: {
    key: EmptyStateType.ISSUE_RELATION_EMPTY_STATE,
    title: "Nessun problema trovato",
    path: "/empty-state/search/issues",
  },
  [EmptyStateType.ISSUE_COMMENT_EMPTY_STATE]: {
    key: EmptyStateType.ISSUE_COMMENT_EMPTY_STATE,
    title: "Nessun commento ancora",
    description: "I commenti possono essere usati come uno spazio per discussioni e \n follow-up sui problemi",
    path: "/empty-state/search/comments",
  },

  [EmptyStateType.NOTIFICATION_DETAIL_EMPTY_STATE]: {
    key: EmptyStateType.INBOX_DETAIL_EMPTY_STATE,
    title: "Seleziona per visualizzare i dettagli.",
    path: "/empty-state/intake/issue-detail",
  },
  [EmptyStateType.NOTIFICATION_ALL_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_ALL_EMPTY_STATE,
    title: "Nessun problema assegnato",
    description: "Gli aggiornamenti per i problemi a te assegnati sono \n visibili qui",
    path: "/empty-state/search/notification",
  },
  [EmptyStateType.NOTIFICATION_MENTIONS_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_MENTIONS_EMPTY_STATE,
    title: "Nessun problema assegnato",
    description: "Gli aggiornamenti per i problemi a te assegnati sono \n visibili qui",
    path: "/empty-state/search/notification",
  },
  [EmptyStateType.NOTIFICATION_MY_ISSUE_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_MY_ISSUE_EMPTY_STATE,
    title: "Nessun problema assegnato",
    description: "Gli aggiornamenti per i problemi a te assegnati sono \n visibili qui",
    path: "/empty-state/search/notification",
  },
  [EmptyStateType.NOTIFICATION_CREATED_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_CREATED_EMPTY_STATE,
    title: "Nessun aggiornamento sui problemi",
    description: "Gli aggiornamenti sui problemi creati da te sono \n visibili qui",
    path: "/empty-state/search/notification",
  },
  [EmptyStateType.NOTIFICATION_SUBSCRIBED_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_SUBSCRIBED_EMPTY_STATE,
    title: "Nessun aggiornamento sui problemi",
    description: "Gli aggiornamenti per qualsiasi problema a cui sei \n iscritto sono visibili qui",
    path: "/empty-state/search/notification",
  },
  [EmptyStateType.NOTIFICATION_UNREAD_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_UNREAD_EMPTY_STATE,
    title: "Nessuna notifica non letta",
    description: "Congratulazioni, sei aggiornato su \n tutto ciò che accade nei problemi \n che ti interessano",
    path: "/empty-state/search/notification",
  },
  [EmptyStateType.NOTIFICATION_SNOOZED_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_SNOOZED_EMPTY_STATE,
    title: "Nessuna notifica posticipata ancora",
    description: "Qualsiasi notifica che posticipi per dopo sarà \n disponibile qui per essere gestita",
    path: "/empty-state/search/snooze",
  },
  [EmptyStateType.NOTIFICATION_ARCHIVED_EMPTY_STATE]: {
    key: EmptyStateType.NOTIFICATION_ARCHIVED_EMPTY_STATE,
    title: "Nessuna notifica archiviata ancora",
    description: "Qualsiasi notifica che archivi sarà \n disponibile qui per aiutarti a concentrarti",
    path: "/empty-state/search/archive",
  },

  [EmptyStateType.ACTIVE_CYCLE_PROGRESS_EMPTY_STATE]: {
    key: EmptyStateType.ACTIVE_CYCLE_PROGRESS_EMPTY_STATE,
    title: "Aggiungi problemi al ciclo per visualizzare i \n progressi",
    path: "/empty-state/active-cycle/progress",
  },
  [EmptyStateType.ACTIVE_CYCLE_CHART_EMPTY_STATE]: {
    key: EmptyStateType.ACTIVE_CYCLE_CHART_EMPTY_STATE,
    title: "Aggiungi problemi al ciclo per visualizzare il \n grafico di progressione.",
    path: "/empty-state/active-cycle/chart",
  },
  [EmptyStateType.ACTIVE_CYCLE_PRIORITY_ISSUE_EMPTY_STATE]: {
    key: EmptyStateType.ACTIVE_CYCLE_PRIORITY_ISSUE_EMPTY_STATE,
    title: "Osserva i problemi ad alta priorità trattati nel \n ciclo a colpo d'occhio.",
    path: "/empty-state/active-cycle/priority",
  },
  [EmptyStateType.ACTIVE_CYCLE_ASSIGNEE_EMPTY_STATE]: {
    key: EmptyStateType.ACTIVE_CYCLE_ASSIGNEE_EMPTY_STATE,
    title: "Aggiungi assegnatari ai problemi per vedere una \n suddivisione del lavoro per assegnatari.",
    path: "/empty-state/active-cycle/assignee",
  },
  [EmptyStateType.ACTIVE_CYCLE_LABEL_EMPTY_STATE]: {
    key: EmptyStateType.ACTIVE_CYCLE_LABEL_EMPTY_STATE,
    title: "Aggiungi etichette ai problemi per vedere la \n suddivisione del lavoro per etichette.",
    path: "/empty-state/active-cycle/label",
  },
  [EmptyStateType.DISABLED_PROJECT_INBOX]: {
    key: EmptyStateType.DISABLED_PROJECT_INBOX,
    title: "L'Intake non è abilitato per il progetto.",
    description:
      "L'Intake ti aiuta a gestire le richieste in entrata per il tuo progetto e ad aggiungerle come problemi nel tuo flusso di lavoro. Abilita l'Intake \n dalle impostazioni del progetto per gestire le richieste.",
    accessType: "project",
    access: [EUserPermissions.ADMIN],
    path: "/empty-state/disabled-feature/intake",
    primaryButton: {
      text: "Gestisci funzionalità",
    },
  },
  [EmptyStateType.DISABLED_PROJECT_CYCLE]: {
    key: EmptyStateType.DISABLED_PROJECT_CYCLE,
    title: "I Cicli non sono abilitati per questo progetto.",
    description:
      "Scomponi il lavoro in porzioni temporali, lavora all'indietro dalla scadenza del progetto per impostare le date e fai progressi tangibili come squadra. Abilita la funzionalità dei cicli per il tuo progetto per iniziare ad usarli.",
    accessType: "project",
    access: [EUserPermissions.ADMIN],
    path: "/empty-state/disabled-feature/cycles",
    primaryButton: {
      text: "Gestisci funzionalità",
    },
  },
  [EmptyStateType.DISABLED_PROJECT_MODULE]: {
    key: EmptyStateType.DISABLED_PROJECT_MODULE,
    title: "I Moduli non sono abilitati per il progetto.",
    description:
      "Un gruppo di problemi che appartengono a un genitore logico e gerarchico forma un modulo. Pensali come un modo per tracciare il lavoro per tappe del progetto. Abilita i moduli dalle impostazioni del progetto.",
    accessType: "project",
    access: [EUserPermissions.ADMIN],
    path: "/empty-state/disabled-feature/modules",
    primaryButton: {
      text: "Gestisci funzionalità",
    },
  },
  [EmptyStateType.DISABLED_PROJECT_PAGE]: {
    key: EmptyStateType.DISABLED_PROJECT_PAGE,
    title: "Le Pagine non sono abilitate per il progetto.",
    description:
      "Le pagine sono uno spazio di raccolta in Plane. Prendi appunti durante le riunioni, formattali facilmente, incorpora problemi, disponili usando una libreria di componenti e tienili nel contesto del progetto. Abilita la funzionalità delle pagine per iniziare a crearle nel tuo progetto.",
    accessType: "project",
    access: [EUserPermissions.ADMIN],
    path: "/empty-state/disabled-feature/pages",
    primaryButton: {
      text: "Gestisci funzionalità",
    },
  },
  [EmptyStateType.DISABLED_PROJECT_VIEW]: {
    key: EmptyStateType.DISABLED_PROJECT_VIEW,
    title: "Le Visualizzazioni non sono abilitate per questo progetto.",
    description:
      "Le visualizzazioni sono un insieme di filtri salvati che usi frequentemente o ai quali vuoi accedere facilmente. Tutti i tuoi colleghi in un progetto possono vedere le visualizzazioni di tutti e scegliere quella che meglio si adatta alle loro necessità. Abilita le visualizzazioni nelle impostazioni del progetto per iniziare ad usarle.",
    accessType: "project",
    access: [EUserPermissions.ADMIN],
    path: "/empty-state/disabled-feature/views",
    primaryButton: {
      text: "Gestisci funzionalità",
    },
  },
  [EmptyStateType.INBOX_SIDEBAR_OPEN_TAB]: {
    key: EmptyStateType.INBOX_SIDEBAR_OPEN_TAB,
    title: "Nessun problema aperto",
    description: "Trova i problemi aperti qui. Crea un nuovo problema.",
    path: "/empty-state/intake/intake-issue",
  },

  [EmptyStateType.INBOX_SIDEBAR_CLOSED_TAB]: {
    key: EmptyStateType.INBOX_SIDEBAR_CLOSED_TAB,
    title: "Nessun problema chiuso",
    description: "Tutti i problemi, accettati o \n rifiutati, possono essere trovati qui.",
    path: "/empty-state/intake/intake-issue",
  },
  [EmptyStateType.INBOX_SIDEBAR_FILTER_EMPTY_STATE]: {
    key: EmptyStateType.INBOX_SIDEBAR_FILTER_EMPTY_STATE,
    title: "Nessun problema corrispondente",
    description: "Nessun problema corrisponde al filtro applicato nell'Intake. \n Crea un nuovo problema.",
    path: "/empty-state/intake/filter-issue",
  },
  [EmptyStateType.INBOX_DETAIL_EMPTY_STATE]: {
    key: EmptyStateType.INBOX_DETAIL_EMPTY_STATE,
    title: "Seleziona un problema per visualizzarne i dettagli.",
    path: "/empty-state/intake/issue-detail",
  },
  [EmptyStateType.WORKSPACE_DRAFT_ISSUES]: {
    key: EmptyStateType.WORKSPACE_DRAFT_ISSUES,
    title: "Problemi a metà scrittura, e presto, i commenti appariranno qui.",
    description: "Per provarlo, inizia ad aggiungere un problema e lascialo incompleto, oppure crea il tuo primo abbozzo qui sotto. 😉",
    path: "/empty-state/workspace-draft/issue",
    primaryButton: {
      text: "Crea il tuo primo abbozzo",
    },
    accessType: "workspace",
    access: [EUserPermissions.ADMIN, EUserPermissions.MEMBER],
  },
} as const;

export const EMPTY_STATE_DETAILS: Record<EmptyStateType, EmptyStateDetails> = emptyStateDetails;
