import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Inter } from "next/font/google";
import "./globals.css";
import "the-new-css-reset/css/reset.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Because reset.css breaks it otherwise

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quinn Cooperstein",
  description: "It's me, Quinn Cooperstein, the one and only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flexGridRow">
          <div className="left">
            <a href="/">
              <h1 className="quinncooperstein">Quinn&nbsp;Cooperstein</h1>
            </a>
            <div className="socialsContainer">
              <div className="socials">
                <a
                  href="//github.com/Quinn135"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="//youtube.com/@quinncoop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="right">{children}</div>
        </div>
      </body>
    </html>
  );
}
