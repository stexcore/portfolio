export interface ILangNavbar_Home {
    navbar: {
        back: {
            tooltip: string
        }
        projects: {
            label: string,
            tooltip: string
        },
        contact: {
            label: string,
            tooltip: string
        }
    }
}

export interface ILangHome {
    header: string,
    phrase: string
}

export interface ILangContact {
    contacts: {
        whatsapp: {
            label: string,
            tooltip: string
        },
        email: {
            label: string,
            tooltip: string
        },
        github: {
            label: string,
            tooltip: string
        }
    }
}

export interface ILangProjects {
    header: {
        title: string,
        description: string,
    },
    projects: {
        "api-engine": {
            date_creation: string,
            package_name: string,
            description: string
        },
        "http-status": {
            date_creation: string,
            package_name: string,
            description: string
        },
        "indexed-db": {
            date_creation: string,
            package_name: string,
            description: string
        },
        "create-stexcore-api": {
            date_creation: string,
            package_name: string,
            description: string
        }
    }
}

export interface ILangProjectItem {
    title: string,
    description: string
}

export interface IHeadPage {
    title: string,
    description: string,
    author: string,
    keywords: string
}

export interface ILang {
    "home": ILangHome,
    "projects": ILangProjects,
    "contact": ILangContact
    "navbar:home": ILangNavbar_Home,
    "project:api-engine": ILangProjectItem,
    "project:create-stexcore-api": ILangProjectItem,
    "project:http-status": ILangProjectItem,
    "project:indexed-db": ILangProjectItem,
    "head:home": IHeadPage,
    "head:projects": IHeadPage,
    "head:contact": IHeadPage,
    "head:project:api-engine": IHeadPage,
    "head:project:create-stexcore-api": IHeadPage,
    "head:project:http-status": IHeadPage,
    "head:project:indexed-db": IHeadPage
}

export type ILangType = "es" | "en";
