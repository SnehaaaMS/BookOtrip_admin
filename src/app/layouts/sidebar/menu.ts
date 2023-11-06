import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'uil-home-alt',
        // badge: {
        //     variant: 'primary',
        //     text: '01', //'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/',
    },

    {
        id: 2,
        label: 'Home',
        icon: 'uil-comments-alt',
        link: '/home/nav',
    },
    // {
    //     id: 3,
    //     isLayout: true
    // },
    // {
    //     id: 4,
    //     label: 'MENUITEMS.APPS.TEXT',
    //     isTitle: true
    // // },
    // {
    //     id: 5,
    //     label: 'MENUITEMS.CALENDAR.TEXT',
    //     icon: 'uil-calender',
    //     link: '/',
    // },
    // {
    //     id: 6,
    //     label: 'MENUITEMS.CHAT.TEXT',
    //     icon: 'uil-comments-alt',
    //     link: '/',
    // },
    // {
    //     id: 6,
    //     label: 'MENUITEMS.FILEMANAGER.TEXT',
    //     icon: 'uil-comments-alt',
    //     link: '/',
    //     badge: {
    //         variant: 'success',
    //         text: 'MENUITEMS.FILEMANAGER.BADGE',
    //     },
    // },
    {
        id: 4,
        label: 'CMS',
        icon: 'uil-store',
        subItems: [
            {
                id: 5,
                label: 'City',
                link: '/cms-city/lists',
                parentId: 4
            },
            // {
            //     id: 9,
            //     label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
            //     link: '/',
            //     parentId: 7
            // },
       
        ]
    },
    {
        id: 4,
        label: 'SETTINGS',
        icon: 'uil-store',
        subItems: [
            {
                id: 5,
                label: 'ACCESS MANAGEMENT',
                link: '/role/nav',
                parentId: 4
            },                
        ]
    },

    // {
    //     id: 4,
    //     label: 'Home',
    //     icon: 'uil-store',
    //     subItems: [
    //         {
    //             id: 5,
    //             label: 'Home display',
    //             link: '/home/nav',
    //             parentId: 4
    //         },                
    //     ]
    // },

    // {
    //     id: 16,
    //     label: 'MENUITEMS.EMAIL.TEXT',
    //     icon: 'uil-envelope',
    //     subItems: [
    //         {
    //             id: 17,
    //             label: 'MENUITEMS.EMAIL.LIST.INBOX',
    //             link: '/',
    //             parentId: 16
    //         },
    //         {
    //             id: 18,
    //             label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
    //             link: '/',
    //             parentId: 16
    //         }
    //     ]
    // },
    // {
    //     id: 19,
    //     label: 'MENUITEMS.INVOICES.TEXT',
    //     icon: 'uil-invoice',
    //     subItems: [
    //         {
    //             id: 20,
    //             label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
    //             link: '/',
    //             parentId: 19
    //         },
    //         {
    //             id: 21,
    //             label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
    //             link: '/',
    //             parentId: 19
    //         },
    //     ]
    // },
    // {
    //     id: 22,
    //     label: 'MENUITEMS.CONTACTS.TEXT',
    //     icon: 'uil-book-alt',
    //     subItems: [
    //         {
    //             id: 23,
    //             label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
    //             link: '/',
    //             parentId: 22
    //         },
    //         {
    //             id: 24,
    //             label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
    //             link: '/',
    //             parentId: 22
    //         },
    //         {
    //             id: 25,
    //             label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
    //             link: '/',
    //             parentId: 22
    //         }
    //     ]
    // },
    // {
    //     id: 26,
    //     label: 'MENUITEMS.PAGES.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 27,
    //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
    //     icon: 'uil-user-circle',
    //     subItems: [
    //         {
    //             id: 28,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
    //             link: '/',
    //             parentId: 27
    //         },
    //         {
    //             id: 29,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
    //             link: '/',
    //             parentId: 27
    //         },
    //         {
    //             id: 30,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
    //             link: '/',
    //             parentId: 27
    //         },
    //         {
    //             id: 31,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
    //             link: '/',
    //             parentId: 27
    //         }
    //     ]
    // },
    // {
    //     id: 32,
    //     label: 'MENUITEMS.UTILITY.TEXT',
    //     icon: 'uil-file-alt',
    //     subItems: [
    //         {
    //             id: 34,
    //             label:'MENUITEMS.UTILITY.LIST.STARTER',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 35,
    //             label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 36,
    //             label: 'MENUITEMS.UTILITY.LIST.COMINGSOON',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 37,
    //             label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 38,
    //             label: 'MENUITEMS.UTILITY.LIST.FAQS',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 39,
    //             label: 'MENUITEMS.UTILITY.LIST.PRICING',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 40,
    //             label: 'MENUITEMS.UTILITY.LIST.ERROR404',
    //             link: '/',
    //             parentId: 32
    //         },
    //         {
    //             id: 41,
    //             label: 'MENUITEMS.UTILITY.LIST.ERROR500',
    //             link: '/',
    //             parentId: 32
    //         },
    //     ]
    // },
    // {
    //     id: 42,
    //     label: 'MENUITEMS.COMPONENTS.TEXT',
    //     isTitle: true
    // },
    // {
    //     id: 43,
    //     label: 'MENUITEMS.UIELEMENTS.TEXT',
    //     icon: 'uil-flask',
    //     subItems: [
    //         {
    //             id: 44,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 45,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 46,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 47,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 48,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 49,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 50,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 50,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 52,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 52,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.OFFCANVAS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 53,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 55,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 55,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 56,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 57,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 58,
    //             label:'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 58,
    //             label:'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
    //             link: '/',
    //             parentId: 43,
    //         },
    //         {
    //             id: 59,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 59,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 60,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 61,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
    //             link: '/',
    //             parentId: 43
    //         },
    //         {
    //             id: 62,
    //             label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
    //             link: '/',
    //             parentId: 43
    //         }
    //     ]
    // },
    // {
    //     id: 64,
    //     label: 'MENUITEMS.FORMS.TEXT',
    //     icon: 'uil-shutter-alt',
    //     badge: {
    //         variant: 'primary',
    //         text: '6',
    //     },
    //     subItems: [
    //         {
    //             id: 65,
    //             label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 66,
    //             label: 'MENUITEMS.FORMS.LIST.VALIDATION',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 67,
    //             label: 'MENUITEMS.FORMS.LIST.ADVANCED',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 68,
    //             label: 'MENUITEMS.FORMS.LIST.EDITOR',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 69,
    //             label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 71,
    //             label: 'MENUITEMS.FORMS.LIST.REPEATER',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 72,
    //             label: 'MENUITEMS.FORMS.LIST.WIZARD',
    //             link: '/',
    //             parentId: 64
    //         },
    //         {
    //             id: 73,
    //             label: 'MENUITEMS.FORMS.LIST.MASK',
    //             link: '/',
    //             parentId: 64
    //         }
    //     ]
    // },
    // {
    //     id: 74,
    //     icon: 'uil-list-ul',
    //     label: 'MENUITEMS.TABLES.TEXT',
    //     subItems: [
    //         {
    //             id: 75,
    //             label: 'MENUITEMS.TABLES.LIST.BASIC',
    //             link: '/',
    //             parentId: 74
    //         },
    //         {
    //             id: 76,
    //             label: 'MENUITEMS.TABLES.LIST.ADVANCED',
    //             link: '/',
    //             parentId: 74
    //         }
    //     ]
    // },
    // {
    //     id: 79,
    //     label: 'MENUITEMS.CHARTS.TEXT',
    //     icon: 'uil-chart',
    //     subItems: [
    //         {
    //             id: 80,
    //             label: 'MENUITEMS.CHARTS.LIST.APEX',
    //             link: '/',
    //             parentId: 79
    //         },
    //         {
    //             id: 81,
    //             label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
    //             link: '/',
    //             parentId: 79
    //         },
    //         {
    //             id: 82,
    //             label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
    //             link: '/',
    //             parentId: 79
    //         },
    //         {
    //             id: 83,
    //             label: 'MENUITEMS.CHARTS.LIST.ECHART',
    //             link: '/',
    //             parentId: 79
    //         },
    //     ]
    // },
    // {
    //     id: 85,
    //     label: 'MENUITEMS.ICONS.TEXT',
    //     icon: 'uil-streering',
    //     subItems: [
    //         {
    //             id: 86,
    //             label: 'MENUITEMS.ICONS.LIST.UNICONS',
    //             link: '/',
    //             parentId: 85
    //         },
    //         {
    //             id: 87,
    //             label: 'MENUITEMS.ICONS.LIST.BOXICONS',
    //             link: '/',
    //             parentId: 85
    //         },
    //         {
    //             id: 88,
    //             label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    //             link: '/',
    //             parentId: 85
    //         },
    //         {
    //             id: 89,
    //             label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
    //             link: '/',
    //             parentId: 85
    //         },
    //         {
    //             id: 90,
    //             label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    //             link: '/',
    //             parentId: 85
    //         },
    //     ]
    // },
    // {
    //     id: 100,
    //     label: 'MENUITEMS.MAPS.TEXT',
    //     icon: 'uil-location-point',
    //     subItems: [
    //         {
    //             id: 101,
    //             label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
    //             link: '/',
    //             parentId: 100
    //         },
    //         {
    //             id: 101,
    //             label: 'MENUITEMS.MAPS.LIST.LEAFLET',
    //             link: '/',
    //             parentId: 100
    //         }
    //     ]
    // },
    // {
    //     id: 104,
    //     label: 'MENUITEMS.MULTILEVEL.TEXT',
    //     icon: 'uil-share-alt',
    //     subItems: [
    //         {
    //             id: 105,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
    //             parentId: 104
    //         },
    //         {
    //             id: 106,
    //             label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
    //             parentId: 104,
    //             subItems: [
    //                 {
    //                     id: 107,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
    //                     parentId: 106,
    //                 },
    //                 {
    //                     id: 108,
    //                     label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
    //                     parentId: 106,
    //                 }
    //             ]
    //         },
    //     ]
    // }
];

