import { A } from "solid-start";

const active = (path: string) =>
    path == location.pathname
    ? "border-sky-600"
    : "border-transparent hover:border-sky-600";

const Header = () => (
    <nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
            <A href="/">Home</A>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
            <A href="/about">About</A>
        </li>
        </ul>
    </nav>
);

export default Header;
