import { getClientIPAddress } from "remix-utils";
import type { ActionArgs } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  const ipAddress = getClientIPAddress(request.headers);
  const forwardedHeader = ipAddress ? { "X-Forwarded-For": ipAddress } : null;

  return await fetch("https://plausible.io/api/event", {
    method: "post",
    headers: {
      "User-Agent": request.headers.get("User-Agent") ?? "None",
      "Content-Type": "application/json",
      ...forwardedHeader,
    },
    body: await request.text(),
  });
}
