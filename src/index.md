---
layout: Default.tsx
---

# Hackspace & Makeplace

Der Chaos Computer Club Flensburg e.V. ist die Anlaufstelle für alle technikbegeisterten Nerds in Flensburg und Umgebung. In unserem Space steht moderne Technik zum Kennenlernen und Ausprobieren bereit. Neben 3D-Druckern, Lötkolben, VR-Headsets, Siebdruck und Werkzeugen aller Art bieten wir Schulungen und Kurse für Kinder, Jugendliche und Erwachsene an. Wir beschäftigen uns mit allem, was mit Technik zu tun hat.

**Egal was dich interessiert, schau doch einfach mal vorbei, beim Open Space Dienstags ab 19:00 Uhr in der Apenrader Straße 49, Flensburg**

Unsere vorherigen Aktivitäten findest du in unserem [Blog](/blog/page/1) und auf unserem [Mastodon Account](https://chaos.social/@chaos_fl).

## Unsere nächsten Veranstaltungen

- Jeden Dienstag; 19:00 Uhr; [Open Space Dienstag](/mitmachen/openSpace/); Apenrader Str. 49, Flensburg; Offener Abend!
- Sonntag der 07.06.2026: 15:00 - 18:00: di.day - Flensburg 2026.5; [Alle Informationen](https://events.diday.org/events/9d46e5d9-b6a2-4585-8376-8c8f6e52c0a6); Wichtig: in der blau:pause, Friesische Straße 9, 24937 Flensburg

### Jung-Hacker*innen-Tag – Jugendveranstaltungen

Mehr zu unserem Jugendangebot: [Jung-Hacker*innen-Tag findest du hier](/jugendtreff/jung-hackerinnen-tag/).

<ul id="dsg-event-list"></ul>

Automatisch von <a href="https://termine.meinflensburg.de">termine.meinflensburg.de</a> geladen.

<noscript>
Aktuelle Jugendtreff-Termine findest du unter <a href="https://termine.meinflensburg.de">termine.meinflensburg.de</a> + Jugendtreff.
</noscript>

<script>
(function () {
  const DSG_URL = "https://termine.meinflensburg.de";
  const TERM = "Jugendtreff";
  const LIMIT = 5;

  async function loadJugendtreffEvents() {
    const list = document.getElementById("dsg-event-list");
    if (!list) return;

    try {
      const response = await fetch(DSG_URL + "/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          operationName: "SearchEvents",
          query: "query SearchEvents($beginsOn: DateTime, $limit: Int, $searchTarget: SearchTarget, $term: String) { searchEvents(beginsOn: $beginsOn, limit: $limit, searchTarget: $searchTarget, term: $term, sortBy: START_TIME_ASC) { elements { title uuid beginsOn ... on Event { externalParticipationUrl } } } }",
          variables: {
            beginsOn: new Date().toISOString(),
            limit: LIMIT,
            searchTarget: "INTERNAL",
            term: TERM,
          },
        }),
      });

      const json = await response.json();
      const events = (json && json.data && json.data.searchEvents && json.data.searchEvents.elements) || [];

      if (!events.length) {
        list.innerHTML = "<li>Zurzeit sind keine Jugendtreff-Termine geplant.</li>";
        return;
      }

      const fmt = new Intl.DateTimeFormat("de-DE", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin",
      });

      events.forEach(function (event) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = DSG_URL + "/events/" + event.uuid;

        const date = document.createElement("span");
        date.className = "date";
        date.style.paddingRight = "2px";
        date.textContent = fmt.format(new Date(event.beginsOn)) + ": ";

        const title = document.createElement("strong");
        title.textContent = event.title;

        a.appendChild(date);
        a.appendChild(title);
        li.appendChild(a);

        if (event.externalParticipationUrl) {
          const register = document.createElement("a");
          register.href = event.externalParticipationUrl;
          register.target = "_blank";
          register.rel = "noopener noreferrer";
          register.className = "jht-anmelden";
          register.textContent = "Jetzt kostenlos anmelden";
          li.appendChild(document.createTextNode(" – "));
          li.appendChild(register);
        }

        list.appendChild(li);
      });
    } catch (error) {
      list.innerHTML = '<li>Termine konnten nicht geladen werden – aktuelle Termine unter <a href="' + DSG_URL + '">termine.meinflensburg.de</a>.</li>';
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadJugendtreffEvents);
  } else {
    loadJugendtreffEvents();
  }
})();
</script>

### Hacks on the Beach 2026 #hotb26

11.09 - 13.09.2026 [Mehr Informationen auf der Event Webseite](https://hotb.c3fl.de/de/)
