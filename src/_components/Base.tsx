export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>
        {title
          ? `${title} - "Chaos Computer Club Flensburg"`
          : "Chaos Computer Club Flensburg e. V."}
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Chaos Computer Club Flensburg e.V." />
      <meta name="publisher" content="Chaos Computer Club Flensburg e.V." />
      <meta name="fediverse:creator" content="@chaos_fl@chaos.social"></meta>
      <meta
        name="description"
        content={props.excerpt
          ? props.excerpt
          : "Der Chaos Computer Club Flensburg e.V. ist die Anlaufstelle für alle technikbegeisterten Nerds im Raum Flensburg und Umgebung. In unserem Raum, Space steht moderne Technik zum Kennenlernen und Ausprobieren bereit."}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
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
