export default function ProjectArtwork({ variant, title, number }) {
  return (
    <div className={`project-art project-art--${variant}`} role="img" aria-label={`${title} visual concept`}>
      <span className="project-art__grid" aria-hidden="true" />
      {variant === 'eco' && (
        <div className="eco-art" aria-hidden="true">
          <span className="eco-art__sun" />
          <span className="eco-art__hill eco-art__hill--back" />
          <span className="eco-art__hill eco-art__hill--front" />
          <span className="eco-art__badge">QUEST 01 / PLANET</span>
          <span className="eco-art__leaf">01</span>
          <span className="eco-art__caption">Small actions.<br />Living impact.</span>
        </div>
      )}
      {variant === 'truth' && (
        <div className="truth-art" aria-hidden="true">
          <span className="truth-art__card truth-art__card--back">DARE<br />TO<br />BE</span>
          <span className="truth-art__card truth-art__card--front">
            <span>01 — YOUR TURN</span>
            <strong>TRUTH<br />OR<br /><i>DARE?</i></strong>
            <span className="truth-art__mark">T / D</span>
          </span>
          <span className="truth-art__scribble">PLAY NICE.</span>
        </div>
      )}
      {variant === 'biometric' && (
        <div className="bio-art" aria-hidden="true">
          <span className="bio-art__ring bio-art__ring--one" />
          <span className="bio-art__ring bio-art__ring--two" />
          <span className="bio-art__ring bio-art__ring--three" />
          <span className="bio-art__cross bio-art__cross--one" />
          <span className="bio-art__cross bio-art__cross--two" />
          <span className="bio-art__label">IDENTITY / VERIFIED</span>
          <span className="bio-art__number">03</span>
        </div>
      )}
      {variant === 'drone' && (
        <div className="drone-art" aria-hidden="true">
          <span className="drone-art__radar drone-art__radar--one" />
          <span className="drone-art__radar drone-art__radar--two" />
          <span className="drone-art__route" />
          <span className="drone-art__signal drone-art__signal--one" />
          <span className="drone-art__signal drone-art__signal--two" />
          <span className="drone-art__drone">✳</span>
          <span className="drone-art__label">RESPONSE NETWORK / 04</span>
          <span className="drone-art__coords">23.6850° N<br />87.3105° E</span>
        </div>
      )}
      {variant === 'controller' && (
        <div className="controller-art" aria-hidden="true">
          <span className="controller-art__label">AI CONTROLLER / HOME NETWORK</span>
          <div className="controller-console">
            <div className="controller-console__top">
              <span><i /> ASSISTANT ONLINE</span>
              <span>•••</span>
            </div>
            <strong>How can I<br /><em>help you?</em></strong>
            <div className="controller-wave">
              <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <span className="controller-console__prompt">Ask anything about your home <b>↗</b></span>
          </div>
          <span className="controller-art__device controller-art__device--light"><i>✳</i><b>Living room</b><small>LIGHTS · ON</small></span>
          <span className="controller-art__device controller-art__device--climate"><i>°</i><b>Climate</b><small>22° · AUTO</small></span>
          <span className="controller-art__corner">CONNECTED / 04 DEVICES</span>
        </div>
      )}
      {variant === 'flappy' && (
        <div className="flappy-art" aria-hidden="true">
          <span className="flappy-art__sun" />
          <span className="flappy-art__cloud flappy-art__cloud--one" />
          <span className="flappy-art__cloud flappy-art__cloud--two" />
          <span className="flappy-art__score">SCORE <b>042</b></span>
          <span className="flappy-art__pipe flappy-art__pipe--top"><i /></span>
          <span className="flappy-art__pipe flappy-art__pipe--bottom"><i /></span>
          <span className="flappy-art__bird"><i /></span>
          <span className="flappy-art__caption">MEME<br />FLIGHT</span>
          <span className="flappy-art__ground" />
          <span className="flappy-art__pixel-label">TAP TO FLY · 8-BIT MODE</span>
        </div>
      )}
      <span className="project-art__index" aria-hidden="true">/ {number}</span>
    </div>
  )
}
