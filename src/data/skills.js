// ---------------------------------------------------------------------------
//  Local skill logos + the animated skill bars.
//  Swap an image simply by replacing the file in `src/assets/Skills/`.
// ---------------------------------------------------------------------------

import CSS from "../assets/Skills/CSS.png";
import Git from "../assets/Skills/Git.png";
import Github from "../assets/Skills/Github.png";
import HTML from "../assets/Skills/HTML.png";
import jQuery from "../assets/Skills/jQuery.png";
import JS from "../assets/Skills/JS.png";
import PugJs from "../assets/Skills/PugJs.png";
import Python from "../assets/Skills/Python.png";
import React from "../assets/Skills/React.png";
import SASS from "../assets/Skills/SASS.png";

// Logo strip shown in the About section.
export const techLogos = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "JavaScript", img: JS },
  { name: "React", img: React },
  { name: "SASS", img: SASS },
  { name: "PugJS", img: PugJs },
  { name: "jQuery", img: jQuery },
  { name: "Python", img: Python },
  { name: "Git", img: Git },
  { name: "GitHub", img: Github },
];

// Two balanced columns of progress bars for the Skills section.
export const skillBars = {
  left: [
    { name: "HTML", img: HTML, level: 95 },
    { name: "CSS", img: CSS, level: 90 },
    { name: "JavaScript", img: JS, level: 85 },
    { name: "React", img: React, level: 90 },
  ],
  right: [
    { name: "SASS", img: SASS, level: 90 },
    { name: "PugJS", img: PugJs, level: 88 },
    { name: "Python", img: Python, level: 85 },
    { name: "Git & GitHub", img: Git, level: 80 },
  ],
};
