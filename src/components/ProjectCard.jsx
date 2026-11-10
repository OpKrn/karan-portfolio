import { ArrowUpRight } from 'lucide-react'
import ProjectArtwork from './ProjectArtwork'

function ProjectAction({ href, children, pendingLabel }) {
  return href ? (
    <a className="project-action" href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  ) : (
    <span className="project-action project-action--pending">
      {pendingLabel || `${children} link not added`}
    </span>
  )
}

export default function ProjectCard({ project, featured = false }) {
  const artwork = (
    <ProjectArtwork variant={project.artwork} title={project.name} number={project.number} />
  )

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''} reveal`}>
      {project.demoUrl ? (
        <a
          className="project-card__art-link"
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} live project`}
        >
          {artwork}
        </a>
      ) : artwork}
      <div className="project-card__info">
        <div className="project-card__topline">
          <span>{project.number} / {project.category}</span>
          <span className="project-status">
            <i aria-hidden="true" /> {project.status}
          </span>
        </div>
        <h3>
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">{project.name}</a>
          ) : project.name}
        </h3>
        <p>{project.description}</p>
        <div className="project-card__bottom">
          <div className="project-tags" aria-label="Technologies">
            {(project.technologies.length ? project.technologies : ['Stack to add']).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="project-card__actions">
            <ProjectAction href={project.demoUrl} pendingLabel="Live demo not added">
              View project
            </ProjectAction>
            <ProjectAction href={project.repositoryUrl} pendingLabel="Repository link not added">
              GitHub
            </ProjectAction>
          </div>
        </div>
      </div>
    </article>
  )
}
