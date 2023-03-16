export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>{title ? `${title} - "Chaostreff Flensburg"` : "Chaostreff Flensburg e. V."}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Chaostreff Flensburg e.V." />
      <meta name="publisher" content="Chaostreff Flensburg e.V." />
      <meta
        name="description"
        content={
          props.excerpt
            ? props.excerpt
            : "Der Chaostreff Flensburg e.V. ist die Anlaufstelle für alle technikbegeisterten Nerds im Raum Flensburg und Umgebung. In unserem Raum, Space steht moderne Technik zum Kennenlernen und Ausprobieren bereit."
        }
      />

      <link rel="stylesheet" href="/bootstrap.css" />
      <link rel="stylesheet" href="/code.css" />
      <link rel="stylesheet" href="/main.css" />
      <script defer src="/main.js" />
    </head>
    <body class="bg-body text-text flex flex-col justify-between min-h-screen relative">
      <section class="layout">
        <header>
          <div class="bg-light shadow">
            <props.comp.Header {...props} />
          </div>
        </header>

        <main class="content">
          {children}
        </main>

        <footer class="footer my-3 container mx-auto">
          <props.comp.Footer {...props} />
        </footer>
      </section>
    </body>
  </html>
);
