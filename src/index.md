---
layout: Default.tsx
---

# Hackspace & Makeplace

Der Chaos Computer Club Flensburg e.V. ist die Anlaufstelle für alle technikbegeisterten Nerds in Flensburg und Umgebung. In unserem Space steht moderne Technik zum Kennenlernen und Ausprobieren bereit. Neben 3D-Druckern, Lötkolben, VR-Headsets, Siebdruck und Werkzeugen aller Art bieten wir Schulungen und Kurse für Kinder, Jugendliche und Erwachsene an. Wir beschäftigen uns mit allem, was mit Technik zu tun hat.

**Egal was dich interessiert, schau doch einfach mal vorbei, beim Open Space Dienstags ab 19:00 Uhr in der Apenrader Straße 49, Flensburg**

Unsere vorherigen Aktivitäten findest du in unserem [Blog](/blog/page/1) und auf unserem [Mastodon Account](https://chaos.social/@chaos_fl).

## Unsere nächsten Veranstaltungen

- Jeden Dienstag; 19:00 Uhr; [Open Space Dienstag](/mitmachen/openSpace/); Apenrader Str. 49, Flensburg; Offener Abend!

### di.day – Digital Independence Day

<ul id="diday-event-list"></ul>

Automatisch von <a href="https://events.diday.org">events.diday.org</a> geladen.

<noscript>
Aktuelle di.day-Termine findest du unter <a href="https://events.diday.org">events.diday.org</a>.
</noscript>


### Jung-Hacker*innen-Tag – Jugendveranstaltungen

Mehr zu unserem Jugendangebot: [Jung-Hacker*innen-Tag findest du hier](/jugendtreff/jung-hackerinnen-tag/).

<ul id="dsg-event-list"></ul>

Automatisch von <a href="https://termine.meinflensburg.de">termine.meinflensburg.de</a> geladen.

<noscript>
Aktuelle Jugendtreff-Termine findest du unter <a href="https://termine.meinflensburg.de">termine.meinflensburg.de</a> + Jugendtreff.
</noscript>

<script>
(function () {
  const MEINFLENSBURG = "https://termine.meinflensburg.de";
  const DIDAY = "https://events.diday.org";

  const fmt = new Intl.DateTimeFormat("de-DE", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin",
  });

  function formatAddress(address) {
    if (!address) return "";
    if (address.description) return address.description;
    const city = [address.postalCode, address.locality].filter(Boolean).join(" ");
    return [address.street, city].filter(Boolean).join(", ");
  }

  function renderEvents(config, events) {
    const list = document.getElementById(config.listId);
    if (!list) return;

    if (!events.length) {
      list.innerHTML = "<li>" + config.emptyText + "</li>";
      return;
    }

    events.forEach(function (event) {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.href = config.dsgUrl + "/events/" + event.uuid;

      const date = document.createElement("span");
      date.className = "date";
      date.style.paddingRight = "2px";
      date.textContent = fmt.format(new Date(event.beginsOn)) + ": ";

      const title = document.createElement("strong");
      title.textContent = event.title;

      a.appendChild(date);
      a.appendChild(title);
      li.appendChild(a);

      if (config.showAddress) {
        const address = formatAddress(event.physicalAddress);
        if (address) {
          const addr = document.createElement("span");
          addr.className = "event-address";
          addr.textContent = " – " + address;
          li.appendChild(addr);
        }
      }

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
  }

  async function loadEvents(config) {
    const list = document.getElementById(config.listId);
    if (!list) return;

    try {
      const response = await fetch(config.dsgUrl + "/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config.body()),
      });

      const json = await response.json();
      const events =
        (json && json.data && json.data.group && json.data.group.organizedEvents && json.data.group.organizedEvents.elements) ||
        (json && json.data && json.data.searchEvents && json.data.searchEvents.elements) ||
        [];

      const sorted = events.slice().sort(function (a, b) {
        return new Date(a.beginsOn) - new Date(b.beginsOn);
      });

      renderEvents(config, sorted);
    } catch (error) {
      list.innerHTML = '<li>Termine konnten nicht geladen werden – aktuelle Termine unter <a href="' + config.dsgUrl + '">' + config.dsgUrl.replace("https://", "") + "</a>.</li>";
    }
  }

  const CONFIGS = [
    {
      listId: "dsg-event-list",
      dsgUrl: MEINFLENSBURG,
      showAddress: false,
      emptyText: "Zurzeit sind keine Jugendtreff-Termine geplant.",
      body: function () {
        return {
          operationName: "SearchEvents",
          query: "query SearchEvents($beginsOn: DateTime, $limit: Int, $searchTarget: SearchTarget, $term: String) { searchEvents(beginsOn: $beginsOn, limit: $limit, searchTarget: $searchTarget, term: $term, sortBy: START_TIME_ASC) { elements { title uuid beginsOn ... on Event { externalParticipationUrl } } } }",
          variables: {
            beginsOn: new Date().toISOString(),
            limit: 5,
            searchTarget: "INTERNAL",
            term: "Jugendtreff",
          },
        };
      },
    },
    {
      listId: "diday-event-list",
      dsgUrl: DIDAY,
      showAddress: true,
      emptyText: "Zurzeit sind keine di.day-Termine geplant.",
      body: function () {
        return {
          operationName: "FetchGroupEvents",
          query: "query FetchGroupEvents($name: String!, $afterDateTime: DateTime, $limit: Int) { group(preferredUsername: $name) { organizedEvents(afterDatetime: $afterDateTime, limit: $limit) { elements { title uuid beginsOn externalParticipationUrl physicalAddress { description street locality postalCode } } } } }",
          variables: {
            name: "chaos_computer_club_flensburg_ev",
            afterDateTime: new Date().toISOString(),
            limit: 5,
          },
        };
      },
    },
  ];

  function start() {
    CONFIGS.forEach(loadEvents);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
</script>

