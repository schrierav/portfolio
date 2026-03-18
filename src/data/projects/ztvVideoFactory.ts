import pipelinePreview from '../../assets/ztv pipeline.png'
import functioningGui from '../../assets/ztv gui.png'

const ztvVideoFactory = {
  title: 'Cloud-Native Video Editor',
  slug: 'ztv-video-factory',

  role: 'Lead developer — designed and implemented cloud-based video pipeline',

  summary:
    'Migrated a local video generation pipeline to a scalable, cloud-native system using Azure services.',

  tech: [
    'Azure Functions',
    'Azure Storage Queues',
    'Azure Container Apps / Jobs',
    'FFmpeg',
    'Python',
    'Managed Identities',
  ],

  highlights: [
    'Designed a distributed pipeline using queues to orchestrate video generation tasks.',
    'Moved CPU-intensive rendering to containerized jobs for better scaling and cost control.',
    'Implemented end-to-end automation from script ingestion to final video output.',
    'Reduced manual intervention and improved reliability of long-running jobs.',
  ],

  writeup: `
    <p>
      Zinnia TV brought me onboard to update their video generation system, which I
      had originally built as an intern. The original pipeline was a local,
      sequential process that struggled to scale as content demands increased. It
      was also not as intuitive as we would have liked, which made it difficult
      to onboard new content producers.
    </p>
    <figure class="writeup-figure">
      <img src="${pipelinePreview}" alt="Pipeline orchestration preview" />
      <figcaption class="writeup-caption">
        Did the job, but was difficult for non-technical volunteers to use.
      </figcaption>
    </figure>
    <p>
      I redesigned the system as a distributed pipeline using Azure Functions and
      Storage Queues to break the process into independent steps. For steps
      requiring human intervention, like script creation and image review, I built
      a simple GUI that integrated directly with the backend queues. Everything
      that could be automated was automated, allowing content producers to focus
      on creative work instead of manual orchestration.
      <br>
      For the most resource-intensive steps, I introduced containerized jobs to
      handle FFmpeg rendering. This allowed the system to scale dynamically based
      on workload while keeping costs under control.
    </p>
    <figure class="writeup-figure">
      <img src="${functioningGui}" alt="Functioning GUI preview" />
      <figcaption class="writeup-caption">
        A GUI so intuitive that the CEOs kid can make videos.
      </figcaption>
    </figure>
  `,

lessonsLearned: [
  'Breaking a sequential pipeline into queue-driven stages makes failures easier to isolate and recover from.',
  'Not all steps should be automated. Building clear interfaces for human-in-the-loop workflows can dramatically improve usability.',
  'Moving to a distributed system forced me to rethink identity—jobs, assets, and intermediate outputs all needed to be explicitly tracked and passed between stages.',
  'Separating compute-heavy work into containerized jobs allows independent scaling and better cost control.',
  'Improving developer or operator experience (DX) is often just as impactful as improving system performance.',
]
}

export default ztvVideoFactory