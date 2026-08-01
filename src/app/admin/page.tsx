"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Specify explicit CMS config URL for Decap CMS
    const configLink = document.createElement("link");
    configLink.href = "/admin/config.yml";
    configLink.type = "text/yaml";
    configLink.rel = "cms-config-url";
    document.head.appendChild(configLink);

    const identityScript = document.createElement("script");
    identityScript.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    identityScript.async = true;
    document.head.appendChild(identityScript);

    const cmsScript = document.createElement("script");
    cmsScript.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    cmsScript.async = true;
    document.head.appendChild(cmsScript);

    return () => {
      if (document.head.contains(configLink)) {
        document.head.removeChild(configLink);
      }
      if (document.head.contains(identityScript)) {
        document.head.removeChild(identityScript);
      }
      if (document.head.contains(cmsScript)) {
        document.head.removeChild(cmsScript);
      }
    };
  }, []);

  return null;
}
