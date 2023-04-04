import VueRouter from "vue-router";

import MysqlPage from "@/components/MysqlPage.vue";
import DDLPage from "@/components/mysqlChildPage/DDLPage.vue";
import DMLPage from "@/components/mysqlChildPage/DMLPage.vue";
import DQLPage from "@/components/mysqlChildPage/DQLPage.vue";
import MainPage from "@/components/MainPage.vue";

export default new VueRouter({
        routes:[
            {
                path: '/',
                redirect: '/mysqlPage'
            },
            {
                path: '/mainPage',
                name: 'toMainPage',
                component: MainPage
            },
            {
                path: '/mysqlPage',
                name: 'toMysqlPage',
                component: MysqlPage,
                redirect: '/mysqlPage/DDLPage',
                children: [
                    {
                        path: 'DDLPage',
                        name: 'toDDLPage',
                        component: DDLPage
                    },
                    {
                        path: 'DMLPage',
                        name: 'toDMLPage',
                        component: DMLPage
                    },
                    {
                        path: 'DQLPage',
                        name: 'toDQLPage',
                        component: DQLPage
                    },
                ]
            }
        ]
    }
)