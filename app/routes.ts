import {RouteConfig, index, layout} from '@react-router/dev/routes';
export default [
    layout("./layout.tsx", [
        index("./App.tsx")
    ])
] satisfies RouteConfig;

