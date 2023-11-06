import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'uil-home-alt',
        link: '/',
    },
    {
        id: 2,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'uil-flask',
        isUiElement: true,
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.OFFCANVAS',
                link: '/',
                parentId: 2
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
                link: '/',
                parentId: 2
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/',
                parentId: 2
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/',
                parentId: 2
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/',
                parentId: 2
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/',
                parentId: 2
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/',
                parentId: 2
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/',
                parentId: 2
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/',
                parentId: 2
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/',
                parentId: 2
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/',
                parentId: 2
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/',
                parentId: 2
            },
            {
                id: 21,
                label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
                link: '/',
                parentId: 2
            },
            {
                id: 22,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/',
                parentId: 2
            },
            {
                id: 23,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/',
                parentId: 2
            },
            {
                id: 24,
                label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
                link: '/',
                parentId: 2
            },
            {
                id: 25,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/',
                parentId: 2
            }
        ]
    },
    {
        id: 22,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'uil-apps',
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '/',
            },
            {
                id: 24,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '/',
            },
            {
                id: 25,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 26,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '/',
                        parentId: 25
                    },
                    {
                        id: 27,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '/',
                        parentId: 25
                    }
                ]
            },
            {
                id: 28,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 29,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 30,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 32,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: '/',
                        parentId: 28
                    },
                ]
            },
            {
                id: 38,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 39,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '/',
                        parentId: 38
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '/',
                        parentId: 38
                    },
                ]
            },
            {
                id: 46,
                label: 'MENUITEMS.CONTACTS.TEXT',
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: '/',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: '/',
                        parentId: 46
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                        link: '/',
                        parentId: 46
                    }
                ]
            },
        ]
    },
    {
        id: 59,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        icon: 'uil-layers',
        subItems: [
            {
                id: 60,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 61,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 62,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 66,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/',
                        parentId: 60
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/',
                        parentId: 60
                    }
                ]
            },
            {
                id: 69,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 70,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/',
                        parentId: 69
                    },
                    {
                        id: 71,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '/',
                        parentId: 69
                    }
                ]
            },
            {
                id: 72,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 73,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '/',
                        parentId: 72
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '/',
                        parentId: 72
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: '/',
                        parentId: 72
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '/',
                        parentId: 72
                    },
                ]
            },
            {
                id: 77,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 78,
                        label: 'MENUITEMS.ICONS.LIST.UNICONS',
                        link: '/',
                        parentId: 77
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '/',
                        parentId: 77
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/',
                        parentId: 77
                    },
                    {
                        id: 80,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '/',
                        parentId: 77
                    },
                    {
                        id: 81,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/',
                        parentId: 77
                    },
                ]
            },
            {
                id: 82,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 83,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 83,
                        label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                        link: '/',
                        parentId: 82
                    }
                ]
            }
        ]
    },
    {
        id: 84,
        label: 'MENUITEMS.EXTRAS.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 88,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 89,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '/',
                        parentId: 88
                    },
                    {
                        id: 90,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '/',
                        parentId: 88
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '/',
                        parentId: 88
                    },
                    {
                        id: 92,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '/',
                        parentId: 88
                    }
                ]
            },
            {
                id: 93,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 94,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 95,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 96,
                        label: 'MENUITEMS.UTILITY.LIST.COMINGSOON',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 96,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 97,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 98,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 99,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '/',
                        parentId: 93
                    },
                    {
                        id: 100,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '/',
                        parentId: 93
                    },
                ]
            }
        ]
    }
];

