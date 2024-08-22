import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChainLink, Earth } from './_icons';
import Time from './_components/time';
import Titles from './_components/titles/titles';
import './page.scss';

export default function Home() {
  return (
    <main className="app-width">
      <div className="grid">
        <h1>
          <Image src="/logo.png" alt="" width={163} height={163} className="logo" />
          Portfolio
        </h1>
        <div className="cell intro">
          <div>
            <span className="welcome">Welcome</span>
            <p>
              Hi, I&apos;m <strong>Ash Johns</strong>, a Frontend Developer with a focus on design systems and user
              experience.
            </p>
          </div>
          {/* <Image src="/memoji.png" alt="My Memoji" className="memoji" width={353} height={353} priority /> */}
        </div>
        <div className="cell compact">
          <Titles />
        </div>
        <div className="cell projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <Link href="">
                <span className="icon-right">
                  Boston Scientific <ArrowRight />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span className="icon-right">
                  Epsilon <ArrowRight />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span className="icon-right">
                  Cracking Good Gifts <ArrowRight />
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span className="icon-right">
                  Blog <ArrowRight />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="cell about">
          <h2>Origin story</h2>
          <p>My latest focus has been on building out design systems from the ground up.</p>
          <p>
            That includes everything from developing React components, to setting up CI/CD and everything in-between.
            These experiences have made me very good at writing reusable code with a great developer experience. Code
            that abides to frontend best practices and accessibility standards. I&apos;m always looking to apply these
            skills in new ways, so don&apos;t hesitate to reach out!
          </p>
          <p>The stack I&apos;m most familiar with these days is</p>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
          <p>But I&apos;m always looking to learn new tech and use the right tool for the job.</p>
        </div>
        <div className="cell contact">
          <h2>Make contact</h2>
          <h3>Email</h3>
          <Link href="mailto:mail@ashpjohns.com">mail@ashpjohns.com</Link>

          <h3>Socials</h3>
          <ul>
            <li>
              <Link href="">GitHub</Link>
            </li>
            <li>
              <Link href="">LinkedIn</Link>
            </li>
          </ul>
        </div>
        <div className="cell now">
          <h2 className="icon-right">
            Status <div className="status"></div>
          </h2>
          <p>Currently open to work</p>
        </div>
        <Link href="resume.pdf" className="cell compact">
          <span className="icon-right">
            Resume <ArrowRight />
          </span>
        </Link>
        <Link href="https://www.ashjohns.dev" className="cell compact">
          <span className="icon-right">
            Blog <ArrowRight />
          </span>
        </Link>
        <div className="cell location">
          <h2>Boston, MA</h2>
          <Time />
          <Earth />
        </div>
      </div>
    </main>
  );
}
