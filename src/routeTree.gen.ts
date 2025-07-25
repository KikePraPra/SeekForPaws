/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SupportImport } from './routes/support'
import { Route as StartImport } from './routes/start'
import { Route as SeeMoreImport } from './routes/seeMore'
import { Route as ReportsListImport } from './routes/reportsList'
import { Route as ReportsImport } from './routes/reports'
import { Route as ReportFormsImport } from './routes/reportForms'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as ContactoImport } from './routes/contacto'
import { Route as ComplaintsImport } from './routes/complaints'
import { Route as AdoptionListImport } from './routes/adoptionList'
import { Route as AdoptionFormsImport } from './routes/adoptionForms'
import { Route as AdoptionImport } from './routes/adoption'
import { Route as AccountsImport } from './routes/accounts'
import { Route as AboutUsImport } from './routes/aboutUs'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SupportRoute = SupportImport.update({
  id: '/support',
  path: '/support',
  getParentRoute: () => rootRoute,
} as any)

const StartRoute = StartImport.update({
  id: '/start',
  path: '/start',
  getParentRoute: () => rootRoute,
} as any)

const SeeMoreRoute = SeeMoreImport.update({
  id: '/seeMore',
  path: '/seeMore',
  getParentRoute: () => rootRoute,
} as any)

const ReportsListRoute = ReportsListImport.update({
  id: '/reportsList',
  path: '/reportsList',
  getParentRoute: () => rootRoute,
} as any)

const ReportsRoute = ReportsImport.update({
  id: '/reports',
  path: '/reports',
  getParentRoute: () => rootRoute,
} as any)

const ReportFormsRoute = ReportFormsImport.update({
  id: '/reportForms',
  path: '/reportForms',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ContactoRoute = ContactoImport.update({
  id: '/contacto',
  path: '/contacto',
  getParentRoute: () => rootRoute,
} as any)

const ComplaintsRoute = ComplaintsImport.update({
  id: '/complaints',
  path: '/complaints',
  getParentRoute: () => rootRoute,
} as any)

const AdoptionListRoute = AdoptionListImport.update({
  id: '/adoptionList',
  path: '/adoptionList',
  getParentRoute: () => rootRoute,
} as any)

const AdoptionFormsRoute = AdoptionFormsImport.update({
  id: '/adoptionForms',
  path: '/adoptionForms',
  getParentRoute: () => rootRoute,
} as any)

const AdoptionRoute = AdoptionImport.update({
  id: '/adoption',
  path: '/adoption',
  getParentRoute: () => rootRoute,
} as any)

const AccountsRoute = AccountsImport.update({
  id: '/accounts',
  path: '/accounts',
  getParentRoute: () => rootRoute,
} as any)

const AboutUsRoute = AboutUsImport.update({
  id: '/aboutUs',
  path: '/aboutUs',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/aboutUs': {
      id: '/aboutUs'
      path: '/aboutUs'
      fullPath: '/aboutUs'
      preLoaderRoute: typeof AboutUsImport
      parentRoute: typeof rootRoute
    }
    '/accounts': {
      id: '/accounts'
      path: '/accounts'
      fullPath: '/accounts'
      preLoaderRoute: typeof AccountsImport
      parentRoute: typeof rootRoute
    }
    '/adoption': {
      id: '/adoption'
      path: '/adoption'
      fullPath: '/adoption'
      preLoaderRoute: typeof AdoptionImport
      parentRoute: typeof rootRoute
    }
    '/adoptionForms': {
      id: '/adoptionForms'
      path: '/adoptionForms'
      fullPath: '/adoptionForms'
      preLoaderRoute: typeof AdoptionFormsImport
      parentRoute: typeof rootRoute
    }
    '/adoptionList': {
      id: '/adoptionList'
      path: '/adoptionList'
      fullPath: '/adoptionList'
      preLoaderRoute: typeof AdoptionListImport
      parentRoute: typeof rootRoute
    }
    '/complaints': {
      id: '/complaints'
      path: '/complaints'
      fullPath: '/complaints'
      preLoaderRoute: typeof ComplaintsImport
      parentRoute: typeof rootRoute
    }
    '/contacto': {
      id: '/contacto'
      path: '/contacto'
      fullPath: '/contacto'
      preLoaderRoute: typeof ContactoImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/reportForms': {
      id: '/reportForms'
      path: '/reportForms'
      fullPath: '/reportForms'
      preLoaderRoute: typeof ReportFormsImport
      parentRoute: typeof rootRoute
    }
    '/reports': {
      id: '/reports'
      path: '/reports'
      fullPath: '/reports'
      preLoaderRoute: typeof ReportsImport
      parentRoute: typeof rootRoute
    }
    '/reportsList': {
      id: '/reportsList'
      path: '/reportsList'
      fullPath: '/reportsList'
      preLoaderRoute: typeof ReportsListImport
      parentRoute: typeof rootRoute
    }
    '/seeMore': {
      id: '/seeMore'
      path: '/seeMore'
      fullPath: '/seeMore'
      preLoaderRoute: typeof SeeMoreImport
      parentRoute: typeof rootRoute
    }
    '/start': {
      id: '/start'
      path: '/start'
      fullPath: '/start'
      preLoaderRoute: typeof StartImport
      parentRoute: typeof rootRoute
    }
    '/support': {
      id: '/support'
      path: '/support'
      fullPath: '/support'
      preLoaderRoute: typeof SupportImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/aboutUs': typeof AboutUsRoute
  '/accounts': typeof AccountsRoute
  '/adoption': typeof AdoptionRoute
  '/adoptionForms': typeof AdoptionFormsRoute
  '/adoptionList': typeof AdoptionListRoute
  '/complaints': typeof ComplaintsRoute
  '/contacto': typeof ContactoRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/reportForms': typeof ReportFormsRoute
  '/reports': typeof ReportsRoute
  '/reportsList': typeof ReportsListRoute
  '/seeMore': typeof SeeMoreRoute
  '/start': typeof StartRoute
  '/support': typeof SupportRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/aboutUs': typeof AboutUsRoute
  '/accounts': typeof AccountsRoute
  '/adoption': typeof AdoptionRoute
  '/adoptionForms': typeof AdoptionFormsRoute
  '/adoptionList': typeof AdoptionListRoute
  '/complaints': typeof ComplaintsRoute
  '/contacto': typeof ContactoRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/reportForms': typeof ReportFormsRoute
  '/reports': typeof ReportsRoute
  '/reportsList': typeof ReportsListRoute
  '/seeMore': typeof SeeMoreRoute
  '/start': typeof StartRoute
  '/support': typeof SupportRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/aboutUs': typeof AboutUsRoute
  '/accounts': typeof AccountsRoute
  '/adoption': typeof AdoptionRoute
  '/adoptionForms': typeof AdoptionFormsRoute
  '/adoptionList': typeof AdoptionListRoute
  '/complaints': typeof ComplaintsRoute
  '/contacto': typeof ContactoRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/reportForms': typeof ReportFormsRoute
  '/reports': typeof ReportsRoute
  '/reportsList': typeof ReportsListRoute
  '/seeMore': typeof SeeMoreRoute
  '/start': typeof StartRoute
  '/support': typeof SupportRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/aboutUs'
    | '/accounts'
    | '/adoption'
    | '/adoptionForms'
    | '/adoptionList'
    | '/complaints'
    | '/contacto'
    | '/login'
    | '/register'
    | '/reportForms'
    | '/reports'
    | '/reportsList'
    | '/seeMore'
    | '/start'
    | '/support'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/aboutUs'
    | '/accounts'
    | '/adoption'
    | '/adoptionForms'
    | '/adoptionList'
    | '/complaints'
    | '/contacto'
    | '/login'
    | '/register'
    | '/reportForms'
    | '/reports'
    | '/reportsList'
    | '/seeMore'
    | '/start'
    | '/support'
  id:
    | '__root__'
    | '/'
    | '/aboutUs'
    | '/accounts'
    | '/adoption'
    | '/adoptionForms'
    | '/adoptionList'
    | '/complaints'
    | '/contacto'
    | '/login'
    | '/register'
    | '/reportForms'
    | '/reports'
    | '/reportsList'
    | '/seeMore'
    | '/start'
    | '/support'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutUsRoute: typeof AboutUsRoute
  AccountsRoute: typeof AccountsRoute
  AdoptionRoute: typeof AdoptionRoute
  AdoptionFormsRoute: typeof AdoptionFormsRoute
  AdoptionListRoute: typeof AdoptionListRoute
  ComplaintsRoute: typeof ComplaintsRoute
  ContactoRoute: typeof ContactoRoute
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
  ReportFormsRoute: typeof ReportFormsRoute
  ReportsRoute: typeof ReportsRoute
  ReportsListRoute: typeof ReportsListRoute
  SeeMoreRoute: typeof SeeMoreRoute
  StartRoute: typeof StartRoute
  SupportRoute: typeof SupportRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutUsRoute: AboutUsRoute,
  AccountsRoute: AccountsRoute,
  AdoptionRoute: AdoptionRoute,
  AdoptionFormsRoute: AdoptionFormsRoute,
  AdoptionListRoute: AdoptionListRoute,
  ComplaintsRoute: ComplaintsRoute,
  ContactoRoute: ContactoRoute,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
  ReportFormsRoute: ReportFormsRoute,
  ReportsRoute: ReportsRoute,
  ReportsListRoute: ReportsListRoute,
  SeeMoreRoute: SeeMoreRoute,
  StartRoute: StartRoute,
  SupportRoute: SupportRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/aboutUs",
        "/accounts",
        "/adoption",
        "/adoptionForms",
        "/adoptionList",
        "/complaints",
        "/contacto",
        "/login",
        "/register",
        "/reportForms",
        "/reports",
        "/reportsList",
        "/seeMore",
        "/start",
        "/support"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/aboutUs": {
      "filePath": "aboutUs.tsx"
    },
    "/accounts": {
      "filePath": "accounts.tsx"
    },
    "/adoption": {
      "filePath": "adoption.tsx"
    },
    "/adoptionForms": {
      "filePath": "adoptionForms.tsx"
    },
    "/adoptionList": {
      "filePath": "adoptionList.tsx"
    },
    "/complaints": {
      "filePath": "complaints.tsx"
    },
    "/contacto": {
      "filePath": "contacto.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/reportForms": {
      "filePath": "reportForms.tsx"
    },
    "/reports": {
      "filePath": "reports.tsx"
    },
    "/reportsList": {
      "filePath": "reportsList.tsx"
    },
    "/seeMore": {
      "filePath": "seeMore.tsx"
    },
    "/start": {
      "filePath": "start.tsx"
    },
    "/support": {
      "filePath": "support.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
