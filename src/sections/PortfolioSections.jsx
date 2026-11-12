import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Lightbulb,
  MapPin,
  Palette,
  Sparkles,
} from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import SectionIntro from '../components/SectionIntro'
import portraitImage from '../assets/karan-portrait.png'
import {
  experience,
  expertise,
  explorations,
  principles,
  profile,
  projects,
} from '../data/portfolio'

const copyrightYear = new Date().getFullYear()

function ProfileLink({ href, children }) {
  return href ? (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ) : (
    <span className="text-link text-link--pending">{children} <span>link to add</span></span>
  )
}

function getGmailComposeUrl(email) {
  return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`
}

function ProfileOrbit({ className, showPortrait = true }) {
  return (
    <div className={className} aria-hidden="true">
      <span className="profile-orbit__ring profile-orbit__ring--outer" />
      <span className="profile-orbit__ring profile-orbit__ring--middle" />
      <span className="profile-orbit__ring profile-orbit__ring--inner" />
      {showPortrait && <img src={portraitImage} alt="" />}
      <span className="profile-orbit__idea profile-orbit__idea--code"><Code2 size={15} /></span>
      <span className="profile-orbit__idea profile-orbit__idea--brain"><BrainCircuit size={15} /></span>
      <span className="profile-orbit__idea profile-orbit__idea--palette"><Palette size={15} /></span>
      <span className="profile-orbit__idea profile-orbit__idea--light"><Lightbulb size={15} /></span>
      <span className="profile-orbit__idea profile-orbit__idea--spark"><Sparkles size={14} /></span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero page-gutter" id="home" aria-labelledby="hero-title">
      <div className="hero__topline">
        <p className="eyebrow hero__role">{profile.role}</p>
        <span className="availability"><i aria-hidden="true" /> Open to opportunities</span>
      </div>
      <div className="hero__name-wrap">
        <span className="hero__index">PORTFOLIO / VOL. 01</span>
        <h1 className="hero__name" aria-label="Karan">KARAN<span>.</span></h1>
        <span className="hero__edition">CS ENGINEERING<br />STUDENT — INDIA</span>
      </div>
      <div className="hero__body">
        <div className="hero__visual" aria-hidden="true">
          <div className="hero-graphic">
            <span className="hero-graphic__orbit hero-graphic__orbit--one" />
            <span className="hero-graphic__orbit hero-graphic__orbit--two" />
            <span className="hero-graphic__orbit hero-graphic__orbit--three" />
            <img className="hero-graphic__core" src={portraitImage} alt="" />
            <span className="hero-idea hero-idea--code"><Code2 size={16} /></span>
            <span className="hero-idea hero-idea--brain"><BrainCircuit size={16} /></span>
            <span className="hero-idea hero-idea--palette"><Palette size={16} /></span>
            <span className="hero-idea hero-idea--light"><Lightbulb size={16} /></span>
            <span className="hero-idea hero-idea--spark"><Sparkles size={15} /></span>
            <span className="hero-graphic__cross hero-graphic__cross--one" />
            <span className="hero-graphic__cross hero-graphic__cross--two" />
            <span className="hero-graphic__legend">IDEAS IN MOTION <b>↗</b></span>
          </div>
        </div>
        <div className="hero__statement">
          <span className="eyebrow">01 / INTRODUCTION</span>
          <h2 id="hero-title">Building ideas into <em>digital experiences.</em></h2>
          <p>{profile.hero}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Start a conversation <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
          </div>
        </div>
      </div>
      <div className="hero__footer">
        <span><MapPin size={14} aria-hidden="true" /> {profile.location}</span>
        <a href="#about" className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-cue__line" aria-hidden="true" />
          <ArrowDownRight size={15} aria-hidden="true" />
        </a>
        <span>AVAILABLE FOR GOOD IDEAS</span>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section page-gutter about-section" id="about">
      <SectionIntro
        number="02"
        eyebrow="A LITTLE ABOUT ME"
        title={<>Curiosity is a<br />good place to start.</>}
        description="A student of systems, a maker of small things, and always learning what comes next."
      />
      <div className="about-grid">
        <div className="about-aside reveal">
          <img className="about-aside__portrait" src={portraitImage} alt="" />
          <span className="about-aside__scrim" aria-hidden="true" />
          <ProfileOrbit className="profile-orbit profile-orbit--about" showPortrait={false} />
          <p>Computer Science<br />Engineering Student</p>
          <span className="about-aside__coordinates">23°N / 87°E</span>
        </div>
        <div className="about-copy reveal">
          <p className="about-copy__lead">{profile.about}</p>
          <p>I’m interested in software engineering, web development, artificial intelligence, data science, open-source technology, and creative coding—especially where those fields meet real human needs.</p>
          <blockquote>{profile.philosophy}</blockquote>
        </div>
      </div>
    </section>
  )
}

export function Expertise() {
  return (
    <section className="section page-gutter expertise-section" id="expertise">
      <SectionIntro
        number="03"
        eyebrow="TOOLS & INTERESTS"
        title={<>A toolkit in<br />the making.</>}
        description="An honest snapshot of the technologies I’m using and learning. No scorecards—just a practice that keeps growing."
      />
      <div className="expertise-grid">
        {expertise.map((item) => (
          <article className="expertise-card reveal" key={item.number}>
            <span className="expertise-card__number">{item.number}</span>
            <h3>{item.title}</h3>
            <ul>
              {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section page-gutter projects-section" id="projects">
      <SectionIntro
        number="04"
        eyebrow="SELECTED PROJECTS"
        title={<>Ideas, made<br />tangible.</>}
        description="A selection of projects and concepts I’m exploring. Open a live project or repository whenever a link is available."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} featured={index === 0} />
        ))}
      </div>
      <p className="projects-note reveal"><span aria-hidden="true">✳</span> Visuals are original concept illustrations, not product screenshots.</p>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section page-gutter experience-section" id="experience">
      <SectionIntro
        number="05"
        eyebrow="THE PATH SO FAR"
        title={<>Learning by<br />doing the work.</>}
        description="A living timeline of what I’ve learned, built, and taken part in. More details will be added as my experience grows."
      />
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row reveal" key={item.number}>
            <span className="experience-row__number">{item.number}</span>
            <div className="experience-row__title">
              <span className="eyebrow">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
            <span className="experience-row__date">{item.date}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Principles() {
  return (
    <section className="section page-gutter principles-section" id="principles">
      <SectionIntro
        number="06"
        eyebrow="A WORKING PHILOSOPHY"
        title={<>A few things<br />I believe in.</>}
        description="Not rules set in stone. Just a compass for making thoughtful work."
      />
      <div className="principles-grid">
        {principles.map((item) => (
          <article className="principle-card reveal" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Exploring() {
  return (
    <section className="section page-gutter exploring-section" id="exploring">
      <SectionIntro
        number="07"
        eyebrow="CURRENTLY EXPLORING"
        title={<>The next<br />open tabs.</>}
        description="A few threads I’m following right now. Learning is part of the work."
      />
      <div className="exploration-list">
        {explorations.map((item) => (
          <article className="exploration-row reveal" key={item.number}>
            <span className="exploration-row__number">{item.number}</span>
            <h3>{item.label}</h3>
            <p>{item.note}</p>
            <span className="exploration-row__signal" aria-label="Currently exploring"><i /></span>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="contact-section page-gutter" id="contact">
      <div className="contact-section__top reveal">
        <span className="eyebrow"><span className="section-number">08</span> OPEN CHANNEL</span>
        <span className="availability"><i aria-hidden="true" /> Open to opportunities</span>
      </div>
      <div className="contact-section__main reveal">
        <h2>Have an interesting idea?<br /><em>Let’s build something.</em></h2>
        <p>Good things start with a conversation. I’m open to learning, collaborating, and working on meaningful ideas.</p>
        <div className="contact-section__links">
          <a
            className="button button--primary"
            href={getGmailComposeUrl(profile.email)}
            target="_blank"
            rel="noreferrer"
          >
            Email Karan <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <span className="contact-email-address">{profile.email}</span>
          <ProfileLink href={profile.links.github}>GitHub</ProfileLink>
          <ProfileLink href={profile.links.linkedin}>LinkedIn</ProfileLink>
          <ProfileLink href={profile.links.instagram}>Instagram</ProfileLink>
        </div>
      </div>
      <div className="contact-orbit" aria-hidden="true">
        <ProfileOrbit className="profile-orbit profile-orbit--contact" />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer page-gutter">
      <a className="wordmark wordmark--footer" href="#home" aria-label="Karan — back to top">K<span>.</span></a>
      <span>© {copyrightYear} Karan. Made with curiosity.</span>
      <nav aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="back-top" href="#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
    </footer>
  )
}
