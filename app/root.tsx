import type { ReactNode } from "react";
import type { LinksFunction, MetaFunction } from "remix";
import { Links, LiveReload, Meta, useCatch } from "remix";
import { Link, Outlet } from "react-router-dom";

import resetStyles from "./styles/reset.css";
import globalStyles from "./styles/global.css";

export const meta: MetaFunction = () => ({ title: "Redhwan Nacef" });

export const links: LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    href: "/fonts/OpenSans-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/OpenSans-SemiBold.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: resetStyles },
  { rel: "stylesheet", href: globalStyles },
];

const Document = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      {title ? <title>{title}</title> : null}
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
  </html>
);

export default function App() {
  return (
    <Document>
      <nav>
        <h1>
          <Link to="/">Redhwan Nacef</Link>
        </h1>
      </nav>
      <Outlet />
      <footer />
    </Document>
  );
}

export const CatchBoundary = () => {
  const caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <p>This page doesn't exist</p>
          <Link to="/">Back to home page</Link>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <p>Oops, sorry something went wrong on my side.</p>
      <Link to="/">Back to home page</Link>
    </Document>
  );
};
