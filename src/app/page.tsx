import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full px-4 sm:px-6 md:px-12 py-10 bg-[#021c3f] text-[#cfa9e8]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-6">
          <Link href="/">
            <button className="text-4xl py-2 hover:text-cyan-400 transition duration-200">
              <code className="neon-text">Grace Liu <span className="text-[#ffeead]">٩(＾◡＾)۶ </span></code>
            </button>
          </Link>
          <div className="flex flex-wrap justify-end gap-2 text-sm sm:text-base">
            <a href="https://www.linkedin.com/in/gracebyliu/" target="_blank" className="px-2 py-1 hover:text-pink-400 transition duration-200">
              <code>{'{'}say hi{'}'}</code>
            </a>
            <a href="https://github.com/graceliu1" target="_blank" className="px-2 py-1 hover:text-blue-400 transition duration-200">
              <code>{'{'}github{'}'}</code>
            </a>
            <a href="/extra" className="px-2 py-1 hover:text-purple-400 transition duration-200">
              <code>{'{'}extra{'}'}</code>
            </a>
          </div>
        </div>

        {/* Bio */}
        <section className="my-10">
          <p className="max-w-2xl text-sm leading-relaxed text-[#b3d3f5]">
            <code>
              I'm a third-year Computer Science student at Princeton. I grew up in the east Bay Area but am currently located in New Jersey.
              I'm interested in <b className="text-[#eddfa5]">software engineering</b> and <b className="text-[#bfdfa2]">machine learning engineer</b> roles.
              Some of my hobbies are video games, reading, puzzlehunts, and music.
              Reach out to chat!
            </code>
          </p>
        </section>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-2 my-10">
          <div className="p-6 rounded-md border border-[#bfdfa2] bg-[#021c3f] shadow-[0_0_10px_#bfdfa2cc]">
            <button className="text-lg mb-4 text-[#bfdfa2]">
              <code>{'{'}education{'}'}</code>
            </button>
            <ul className="space-y-1 text-sm text-[#b3d3f5]">
              <li><code>{'>>'} <span className="text-[#eddfa5]">CS @ Princeton</span></code></li>
              <li><code>{'>>'} minors in  <span className="text-[#eddfa5]"> statistics & ML, finance</span></code></li>
              <li>
                <code>{'>>'} <b>taken:</b>  Distributed Systems & Operating Systems, Probability & Stochastic Processes
                  Economics & Computing, Computer Vision, *Computer Networks, *Optimal Learning</code>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-md border border-[#f398a1] bg-[#021c3f] shadow-[0_0_10px_#f398a1cc]">
            <button className="text-lg mb-4 text-[#f398a1]">
              <code>{'{'}experience{'}'}</code>
            </button>
            <ul className="space-y-1 text-sm text-[#b3d3f5]">
              <li><code>{'>>'} Summer 2025 | SWE Intern @ <a href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer"><b className="text-[#eddfa5]">HRT</b><sup>↗</sup></a></code></li>
              <li><code>{'>>'} Fall 2024 – Now | Research Fellow @ <a href="https://pdss.princeton.edu/" target="_blank" rel="noopener noreferrer"><b className="text-[#eddfa5]">PDSS</b><sup>↗</sup></a></code></li>
              <li><code>{'>>'} Summer 2024 | SWE Intern @ <a href="https://www.bloomberg.com/company/" target="_blank" rel="noopener noreferrer"><b className="text-[#eddfa5]">Bloomberg</b><sup>↗</sup></a></code></li>
              <li><code>{'>>'} Spring 2024 | Intern @ <a href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer"><b className="text-[#eddfa5]">HRT</b><sup>↗</sup></a></code></li>
              <li><code>{'>>'} Spring 2023 – Now | Grader @ <a href="https://www.cs.princeton.edu/" target="_blank" rel="noopener noreferrer"><b className="text-[#eddfa5]">Princeton CS</b><sup>↗</sup></a></code></li>
              <li><code>{'>>'} Summer 2023 | SWE Intern @ <a href="https://www.cadence.com/" target="_blank" rel="noopener noreferrer"><b className="text-[#eddfa5]">Cadence</b><sup>↗</sup></a></code></li>
            </ul>
          </div>
        </div>

        {/* Papers & Projects */}
        <section className="my-10">
          <div className="p-6 rounded-md border border-[#a1c6f3] bg-[#021c3f] shadow-[0_0_10px_#a1c6f3cc]">
            <button className="text-lg mb-4 text-[#a1c6f3]">
              <code>{'{'}papers & projects{'}'}</code>
            </button>
            <ul className="space-y-4 text-sm text-[#b3d3f5]">
              <li>
                <code>
                  {'>>'} <b className="text-[#eddfa5]">It’s a Bird, Not a Plane: Automated Multi-Hummingbird Tracking in Videos</b> –
                  built an automated CV pipeline to analyze hummingbird movements for Princeton's Stoddard Lab.
                  <br />
                  <span className="text-[#eddfa5]">
                    <a href="https://your-link-to-paper.com" target="_blank" rel="noopener noreferrer">[pdf]</a> {' '}
                    <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">[code]</a>
                  </span>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} <b className="text-[#eddfa5]">Revisiting Input-Label Demonstrations: In-Context Learning with Large Language Models</b> –
                  explored verificability of label correctness with modern LLMs.
                  <br />
                  <span className="text-[#eddfa5]">
                    <a href="https://your-link-to-paper.com" target="_blank" rel="noopener noreferrer">[pdf]</a> {' '}
                    <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">[code]</a>
                  </span>
                </code>
              </li>
              <li>
                <code>
                  {'>>'} <b className="text-[#eddfa5]">Stereo Vision-Based 3D Tracking of Table Tennis Ball Trajectories</b> –
                  worked on a 2D vision system for ping pong tracking in a controlled  environment.
                  <br />
                  <span className="text-[#eddfa5]">
                    <a href="https://your-link-to-paper.com" target="_blank" rel="noopener noreferrer">[pdf]</a>{' '}
                    <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">[code]</a>
                  </span>
                </code>
              </li>
            </ul>
          </div>
        </section>

      </div>
      <footer className="mt-20 text-center text-xs text-[#b3d3f5]">
        <code className="mb-1">&copy; Grace Liu</code><br />
        <code className="text-[0.6rem] mb-1">Theme: VSCode Tomorrow Night Blue</code>
      </footer>
    </main>
  );
}
