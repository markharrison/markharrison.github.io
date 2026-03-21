import React, { useEffect } from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import NotFoundContent from "@theme/NotFound/Content";

const lowercaseRedirectScript = `(function () {
  var path = window.location.pathname;
  var lower = path.toLowerCase();

  if (path !== lower) {
    window.location.replace(
      lower + window.location.search + window.location.hash
    );
  }
})();`;

export default function NotFound() {
  const title = translate({
    id: "theme.NotFound.title",
    message: "Page Not Found",
  });

  useEffect(() => {
    // Ensure the redirect also runs after client-side navigation.
    // eslint-disable-next-line no-new-func
    new Function(lowercaseRedirectScript)();
  }, []);

  return (
    <>
      <PageMetadata title={title} />
      <script dangerouslySetInnerHTML={{ __html: lowercaseRedirectScript }} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
