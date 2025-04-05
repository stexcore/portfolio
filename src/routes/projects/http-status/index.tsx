import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/http-status.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("http-status");
    const views = visits.count_visit;

    return { html, views };
});

export default component$(() => {
    // HTML and views
    const info = useContent();
    
    return (
        <Project
            title="http-status"
            description="A collection of HTTP status codes for general use in any HTTP framework."
            html={info.value.html}
            views={info.value.views}
        ></Project>
    );
});

export const head: DocumentHead = {
  title: "Http Status - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "A versatile collection of HTTP status codes designed for seamless use in any HTTP framework. Simplifies handling HTTP responses and errors with a user-friendly interface, fully compatible with TypeScript and various frameworks.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, project, typescript, api, http, status, library"
    }
  ],
};