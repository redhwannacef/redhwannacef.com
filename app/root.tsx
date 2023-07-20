import * as React from "react";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  useRouteError,
} from "@remix-run/react";
import type { LinkDescriptor, V2_HtmlMetaDescriptor } from "@remix-run/node";
import globalStyles from "~/styles/global.css";
import darkStyles from "~/styles/dark.css";
import tailwindStyles from "~/styles/tailwind.css";

export function links(): LinkDescriptor[] {
  return [
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
    { rel: "stylesheet", href: globalStyles },
    {
      rel: "stylesheet",
      href: darkStyles,
      media: "(prefers-color-scheme: dark)",
    },
    { rel: "stylesheet", href: tailwindStyles },
  ];
}

export default function Component() {
  return (
    <Document>
      <header>
        <nav className="py-4 text-center">
          <h1>
            <Link to="/">Redhwan Nacef</Link>
          </h1>
        </nav>
      </header>
      <Outlet />
      <footer />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <Document>
      <p>Oops, something went wrong. Please refresh the page and try again.</p>
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <title>Redhwan Nacef</title>
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            data-domain="redhwannacef.com"
            data-api="/analytics/event"
            src="/analytics/event.js"
          />
        )}
        <Links />
      </head>
      <body className="font-sans text-primary bg-primary">
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
