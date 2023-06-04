// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title
} from "solid-start";
import "./root.css";
import Header from "./hearder";

export default function Root() {
  const location = useLocation();
  return (
    <Html lang="en">
      <Head>
        <Title>My Modern FE app</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Header locationPathname={location.pathname} />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
