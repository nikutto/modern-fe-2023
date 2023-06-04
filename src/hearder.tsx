import { A } from "solid-start";

const active = (path: string, locationPathname: string) =>
  path === locationPathname
    ? "border-sky-600"
    : "border-transparent hover:border-sky-600";

interface HeaderProps {
  locationPathname: string;
}
const Header = (props: HeaderProps) => (
  <nav class="bg-sky-800">
    <ul class="container flex items-center p-3 text-gray-200">
      <li
        class={`border-b-2 ${active(
          "/",
          props.locationPathname
        )} mx-1.5 sm:mx-6`}
      >
        <A href="/">Home</A>
      </li>
      <li
        class={`border-b-2 ${active(
          "/about",
          props.locationPathname
        )} mx-1.5 sm:mx-6`}
      >
        <A href="/about">About</A>
      </li>
    </ul>
  </nav>
);

export default Header;
