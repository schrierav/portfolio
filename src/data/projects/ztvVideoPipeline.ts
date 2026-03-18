const ztvVideoPipeline = {
  title: 'Media Processing Engine',
  slug: 'ztv-video-pipeline',

  role: 'Designed and implemented end-to-end video generator',

  summary:
    'Built a modular pipeline to generate complete videos from structured inputs, including image sequencing, timing, and audio synchronization.',

  tech: [
    'Python',
    'FFmpeg',
    'PIL',
    'OpenAI API',
    'Stability',
  ],

highlights: [
  'Built an end-to-end system that generates complete videos from a high-level concept.',
  'Integrated AI agents, image generation, and text-to-speech into a single cohesive workflow.',
  'Reduced video production time from ~20 hours to ~30 minutes of human review.',
  'Shifted content creation from manual editing to AI-assisted generation and refinement.',
],

  writeup: `
  <p>
    Zinnia TV is a startup that creates bespoke videos for dementia patients and their caregivers.
    When I joined as an intern, all content was produced manually in video editing software—a time-intensive process that limited how much content could be created.
    <br>
    I was tasked with exploring whether parts of this process could be automated.
    I built a Python-based pipeline that could take a high-level idea and turn it into a complete, narrated slideshow video.
  </p>

  <p>
    The system combined several components:
  <ul>
    <li>Generating structured “scripts” using an AI agent</li>
    <li>Creating illustrations with text-to-image models</li>
    <li>Rendering slides with text and visual layout</li>
    <li>Sequencing slides with transitions and timing</li>
    <li>Generating narration with text-to-speech and syncing it to visuals</li>
  </ul>
  </p>

    The result was an end-to-end system that could turn an idea into a five-minute video ready to be shown in an assisted living home.
    What had previously taken around twenty hours of manual work could now be completed in about thirty minutes of reviewing AI-generated output.
    These videos were a huge hit with clients, helping patients feel like experts again and making content production dramatically more scalable.
    Once the core pipeline was in place, I was able to expand our library to include a wider variety of content, from educational documentaries to daily news updates.
    <br>
    (And if you're curious about what else has happened to this system, check my cloud-native video editor project!)
  </p>
  `,

lessonsLearned: [
  'End-to-end systems create disproportionate value—connecting multiple imperfect components into a usable workflow can be more impactful than optimizing any single step.',
  'AI-generated outputs are inherently inconsistent, so building review and correction into the workflow is essential.',
  'Adding onto that, AI is strongest when used intelligently and sparingly. It’s often better to have a human in the loop guiding the process than to try to automate everything.',
  'Automating a process changes the role of the user—from creator to editor—which requires different tooling and UX decisions.',
  'Early architectural decisions (like modular stages) made it much easier to later scale the system into a distributed pipeline.',
],
}

export default ztvVideoPipeline