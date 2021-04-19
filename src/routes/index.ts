export interface IRouteProps {
    path?: string;
    redirect?: string;
    component?: any;
    children?: IRouteProps[];
}