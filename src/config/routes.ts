import LandingPage from "../pages/LandingPage"


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}
const routes: RouteType[] = [
    {
        path: '/',
        component: LandingPage,
        name: "Landing Page"
    }
]

export default routes