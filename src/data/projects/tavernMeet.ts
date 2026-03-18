const tavernMeet = {
  title: 'Dlang Multiplayer Game',
  slug: 'tavern-meet',

  role: 'Technical lead — owned architecture decisions and coordinated development across a team of four',

  summary:
    'Led a team to build a real-time multiplayer 2D game in three weeks, featuring a large shared world and server-authoritative state.',

  tech: [
    'DLang',
    'OpenGL',
    'TCP Networking',
    'Client-Server Architecture',
    'Tile-Based Rendering',
  ],

  highlights: [
    'Led a team of four engineers to deliver a fully functional multiplayer game in three weeks.',
    'Implemented a server-authoritative architecture using TCP for real-time multiplayer interaction.',
    'Built a dynamic camera system to render a 4096×4096 tile world efficiently.',
    'Delivered a polished demo that set the benchmark for other teams in the course.',
  ],

  writeup: `
    <p>
      As part of a graduate-level software development course, I was assigned to a team of four and given three weeks
      to build a multiplayer 2D game. Beyond the requirement for online multiplayer and tile-based graphics,
      the design and implementation were entirely up to us.
    </p>

    <p>
      I took on a technical leadership role early, helping define the architecture and coordinate development across the team.
      I was the primary point of contact for deciding who worked on what and for making final calls on system design.
    </p>

    <p>
      We built TavernMeet: a shared 2D world where multiple players could explore, chat, and collect items together in real time.
      The game used a server-authoritative model over TCP, with a desktop client connecting to a local server.
    </p>

    <p>
      One of the more interesting technical challenges was rendering a large world efficiently.
      I implemented a dynamic camera system over a 4096×4096 tile map, allowing players to smoothly explore a space large enough
      to hide meaningful content without overwhelming performance.
    </p>

    <p>
      We worked in an agile style with daily scrums and frequent pair programming, and the team naturally collaborated across all parts of the codebase.
      By the end of the three weeks, we delivered a fully functional and polished game that worked live during the demo.
      Our project set a high bar for the course—subsequent teams often referenced it as a benchmark for what was possible.
    </p>
  `,

  lessonsLearned: [
    'Server-authoritative architectures simplify consistency in multiplayer systems, even in small projects.',
    'Rendering large worlds efficiently requires separating world size from what is actually drawn on screen.',
    'Clear ownership and decision-making early on helps small teams move quickly under tight deadlines.',
    'Polish and user experience can be a stronger differentiator than feature count in interactive systems.',
    'Even in short projects, treating systems as real products (playtesting, iteration, usability) leads to much better outcomes.',
  ],
}
export default tavernMeet