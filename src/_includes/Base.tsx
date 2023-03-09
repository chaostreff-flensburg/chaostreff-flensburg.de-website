import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Chaostreff Flensburg e.V." />
      <meta name="publisher" content="Chaostreff Flensburg e.V." />

      <link rel="stylesheet" href="/bootstrap.css"></link>
      <link rel="stylesheet" href="/code.css"></link>
      <link rel="stylesheet" href="/main.css"></link>
    </head>
    <body class="bg-body text-text flex flex-col justify-between min-h-screen relative">
      <section class="layout">
        <header>
          <div class="bg-light shadow">
            <Header title={title} {...props} />
          </div>
        </header>

        <main class="content">
          { children }
        </main>

        <footer class="footer my-3 container">
          <Footer title={title} />
        </footer>
      </section>
    </body>
  </html>
);