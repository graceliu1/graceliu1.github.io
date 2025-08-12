import Link from "next/link";

const colors = {
  bgMain: "#021c3f",
  textMain: "#fafbfc",
  textAccent1: "#cfa9e8",
  textAccent2: "#ffeead",
  textYellow: "#eddfa5",
  textGreen: "#bfdfa2",
  textBlue: "#b3d3f5",
  borderGreen: "#bfdfa2",
  borderPink: "#f398a1",
  borderBlue: "#a1c6f3",
  shadowGreen: "#bfdfa2cc",
  shadowPink: "#f398a1cc",
  shadowBlue: "#a1c6f3cc",
  linkPink: "#f398a1",
  linkBlue: "#a1c6f3",
};

export default function Page() {
  return (
    <main
      className={`min-h-screen w-full px-3 sm:px-4 md:px-8 py-6`}
      style={{ backgroundColor: colors.bgMain, color: colors.textMain }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 my-4"
          style={{ color: colors.textAccent1 }}
        >
          <Link href="/">
            <button className="text-2xl sm:text-4xl py-1 sm:py-2 hover:text-cyan-400 transition duration-200 break-words text-left">
              <code className="neon-text">
                Grace Liu{" "}
                <span style={{ color: colors.textAccent2 }}>٩(＾◡＾)۶ </span>
              </code>
            </button>
          </Link>
          <div className="flex flex-wrap justify-start sm:justify-end gap-1 sm:gap-2 text-xs sm:text-sm">
            <a
              href="https://www.linkedin.com/in/gracebyliu/"
              target="_blank"
              className="px-2 py-1 hover:text-pink-400 transition duration-200"
            >
              <code>{'{'}say hi{'}'}</code>
            </a>
            <a
              href="https://github.com/graceliu1"
              target="_blank"
              className="px-2 py-1 hover:text-blue-400 transition duration-200"
            >
              <code>{'{'}github{'}'}</code>
            </a>
            <a
              href="/extra"
              className="px-2 py-1 hover:text-purple-400 transition duration-200"
            >
              <code>{'{'}extra{'}'}</code>
            </a>
          </div>
        </div>

        {/* Bio */}
        <section className="my-6 sm:my-10">
          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed break-words">
            <code>
              I'm a fourth-year CS student at Princeton. I grew up in the east
              Bay Area but am currently located in New Jersey!
              I'm interested in{" "}
              <b style={{ color: colors.textYellow }}>software engineer</b> and{" "}
              <b style={{ color: colors.textGreen }}>ML engineer</b> roles. Some
              of my hobbies are video games, reading, puzzle hunts, and music.
              Reach out through email to connect!
            </code>
          </p>
        </section>

        {/* Info Cards */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 my-6 sm:my-10">
          <div
            className="p-4 sm:p-6 rounded-md"
            style={{
              border: `1px solid ${colors.borderGreen}`,
              backgroundColor: colors.bgMain,
              boxShadow: `0 0 10px ${colors.shadowGreen}`,
            }}
          >
            <button
              className="text-base sm:text-lg mb-3"
              style={{ color: colors.textGreen }}
            >
              <code>{'{'}education{'}'}</code>
            </button>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <code>
                  {'>>'} <span style={{ color: colors.textYellow }}>CS @ Princeton</span>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} minors in{" "}
                  <span style={{ color: colors.textYellow }}>
                    statistics & ML, finance
                  </span>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} <b>taken:</b> Distributed Systems, OS, Probability &
                  Stochastics, Economics & Computing, Regression, CV, NLP,
                  Computer Networks*, Optimal Learning*
                </code>
              </li>
            </ul>
          </div>

          <div
            className="p-4 sm:p-6 rounded-md"
            style={{
              border: `1px solid ${colors.borderPink}`,
              backgroundColor: colors.bgMain,
              boxShadow: `0 0 10px ${colors.shadowPink}`,
            }}
          >
            <button
              className="text-base sm:text-lg mb-3"
              style={{ color: colors.borderPink }}
            >
              <code>{'{'}experience{'}'}</code>
            </button>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <code>
                  {'>>'} Summer 2025 | SWE Intern @{" "}
                  <a
                    href="https://www.hudsonrivertrading.com/"
                    target="_blank"
                  >
                    <b style={{ color: colors.textYellow }}>HRT</b>
                    <sup>↗</sup>
                  </a>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} Fall 2024 – Now | Research Fellow @{" "}
                  <a href="https://pdss.princeton.edu/" target="_blank">
                    <b style={{ color: colors.textYellow }}>PDSS</b>
                    <sup>↗</sup>
                  </a>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} Summer 2024 | SWE Intern @{" "}
                  <a
                    href="https://www.bloomberg.com/company/"
                    target="_blank"
                  >
                    <b style={{ color: colors.textYellow }}>Bloomberg</b>
                    <sup>↗</sup>
                  </a>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} Spring 2023 – Now | Grader @{" "}
                  <a href="https://www.cs.princeton.edu/" target="_blank">
                    <b style={{ color: colors.textYellow }}>Princeton CS</b>
                    <sup>↗</sup>
                  </a>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} Summer 2023 | SWE Intern @{" "}
                  <a href="https://www.cadence.com/" target="_blank">
                    <b style={{ color: colors.textYellow }}>Cadence</b>
                    <sup>↗</sup>
                  </a>
                </code>
              </li>
            </ul>
          </div>
        </div>

        {/* Papers & Projects */}
        <section className="my-6 sm:my-10">
          <div
            className="p-4 sm:p-6 rounded-md"
            style={{
              border: `1px solid ${colors.borderBlue}`,
              backgroundColor: colors.bgMain,
              boxShadow: `0 0 10px ${colors.shadowBlue}`,
            }}
          >
            <button
              className="text-base sm:text-lg mb-3"
              style={{ color: colors.textBlue }}
            >
              <code>{'{'}papers & projects{'}'}</code>
            </button>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <code>
                  {'>>'}{" "}
                  <b style={{ color: colors.textYellow }}>
                    Revisiting Input-Label Demonstrations: In-Context Learning with Large Language Models
                  </b>{" "}
                  – explored verificability of label correctness with newer
                  LLMs.
                  <br />
                  <span style={{ color: colors.textYellow }}>
                    <a
                      href="https://drive.google.com/file/d/15qJuwBdxtgSkhL2SH0vJRZ_0u5rlAkal/view?usp=drive_link"
                      target="_blank"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://github.com/yanda-dy/cos484-final-project"
                      target="_blank"
                    >
                      [code]
                    </a>
                  </span>
                </code>
              </li>
              <li>
                <code>
                  {'>>'}{" "}
                  <b style={{ color: colors.textYellow }}>
                    It’s a Bird, Not a Plane: Automated Multi-Hummingbird Tracking in Videos
                  </b>{" "}
                  – built an automated CV pipeline for hummingbird analysis.
                  <br />
                  <span style={{ color: colors.textYellow }}>
                    <a
                      href="https://drive.google.com/file/d/1kVblSqfMPRwHFESYTawMWS3K-kR0Rk9X/view?usp=sharing"
                      target="_blank"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://github.com/graceliu1/hummingbird-tracking"
                      target="_blank"
                    >
                      [code]
                    </a>
                  </span>
                </code>
              </li>
              <li>
                <code>
                  {'>>'}{" "}
                  <b style={{ color: colors.textYellow }}>
                    Stereo Vision-Based 3D Tracking of Table Tennis Ball Trajectories
                  </b>{" "}
                  – worked on a 2D vision system for ping pong tracking.
                  <br />
                  <span style={{ color: colors.textYellow }}>
                    <a
                      href="https://drive.google.com/file/d/15Qi18RVWF_oYEnqdCiawTr1pbF36OlH6/view?usp=drive_link"
                      target="_blank"
                    >
                      [pdf]
                    </a>
                  </span>
                </code>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        className="mt-12 sm:mt-20 text-center text-[0.65rem] sm:text-xs"
        style={{ color: colors.textBlue }}
      >
        <code className="mb-1">&copy; Grace Liu</code>
        <br />
        <code className="text-[0.55rem] sm:text-[0.6rem] mb-1">
          Theme: VSCode Tomorrow Night Blue
        </code>
      </footer>
    </main>
  );
}