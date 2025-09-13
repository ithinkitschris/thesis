// Readings and references posts
export const resourcesPosts = [

// Human Interface Guidelines
{
    slug: 'hig',
    category: 'resources',
    title: 'Human Interface Guidelines',
    date: '2025-09-12',
    tags: ['Resources', 'Research', 'History of UI', 'Apple', 'iOS', 'Microsoft','Metro', 'Google', 'Android', 'Material Design', 'IBM', 'Accessibility'],
    excerpt: 'Human Interface Guidelines by Platforms',
    content: `## Apple
- **Apple Human Interface Guidelines:**

    *The Apple Desktop Interface (1987)*


- **Aqua Human Interface Guidelines (2001)**

    *Introduced translucency, drop shadows, and vibrant color for Mac OS X.*


- **iOS Human Interface Guidelines (c. 2010 for iOS 4, pre-flat)**

    *Codified skeuomorphism and early touch patterns.*


- **iOS 7 Human Interface Guidelines (2013)**

    *The pivot to flat design, emphasizing clarity, deference, and depth.*


- **Human Interface Guidelines (Current)**


## Microsoft
- **The Windows Interface: An Application Design Guide (1995)**

    *Guidelines for Windows 95, introducing the Start button and taskbar.*


- **User Experience Guidelines for Windows Vista (c. 2006)**

    *Defined the Windows Aero aesthetic with glass, reflections, and animations.*


- **Microsoft Design Language (Metro) (c. 2010-2012)**

    *Principles for Windows Phone 7/Windows 8, emphasizing typography, authenticity, and motion.*


- **Fluent Design System (Current)**

    *Microsoft's current open-source, cross-platform system based on Light, Depth, Motion, Material, and Scale.*


### Google
- **Android User Interface Guidelines (c. 2011, for Android 4.0 "Holo")**

    *Established the "Holo" theme, Android's first cohesive design language.*


- **Material Design 1.0 (2014)**

    *The original specification based on quantum paper, bold graphics, and intentional motion.*


- **Material Design 2.0 (Material Theming) (2018)**

    *Focused on customization, allowing companies to adapt Material to their brand.*


- **Material Design 3 (Material You) (2021)**

    *Emphasizes personalization, dynamic color extraction from wallpapers, and adaptive layouts.*


### IBM
(Must read)
- **Common User Access (CUA) Basic Interface Design Guide (1987)**

    *The initial standard for character-based interfaces.*


- **Common User Access (CUA) Advanced Interface Design Guide (1989)**

    *Updated for graphical interfaces, standardizing F1 for help, pull-down menus, and modal dialogs.*


### Open Source / Standards
- **OSF/Motif Style Guide (1990)**

    *The dominant toolkit and style for commercial UNIX workstations.*


- **GNOME Human Interface Guidelines (Current)**

    *Defines the design philosophy for the GNOME desktop environment, emphasizing simplicity and focus.*


- **KDE Human Interface Guidelines (Current)**

    *Defines design for the KDE Plasma desktop, emphasizing user choice and customizability.*


### Accessibility
(Must read)
- **Web Content Accessibility Guidelines (WCAG) 2.0 (2008) & 2.1 (2018)**

    *The stable, foundational standards for digital accessibility.*


- **WAI-ARIA (Accessible Rich Internet Applications) 1.1 (2017)**

    *A specification for adding semantics and roles to controls and elements not natively accessible.*
`},

// Core HCI Concepts
{
    slug: 'core-hci-concepts',
    category: 'resources',
    title: 'Core HCI Concepts',
    date: '2025-09-12',
    tags: ['Resources', 'Research', 'HCI'],
    excerpt: 'Quick reference guide to core HCI concepts',
    content: `### Fitts's Law
A predictive model of human movement, stating that the time to acquire a target is a function of the distance to and size of the target. It's why screen corners and large buttons are fast to click.
### Hick-Hyman Law
Describes the time it takes for a person to make a decision as a result of the possible choices: it increases logarithmically as the number of choices increases. This is the rationale for simple menus.
### Gulf of Execution & Evaluation
Two concepts by Don Norman. The Gulf of Execution is the gap between a user's goal and the actions required by the interface. The Gulf of Evaluation is the gap between the system's feedback and the user's ability to understand it.         
### Affordances & Signifiers
An affordance is a property of an object that suggests how it can be used (e.g., a chair affords sitting). A signifier is a perceptible cue (e.g., a label, a button's shadow) that communicates the affordance to the user.
### Direct Manipulation
An interaction style involving continuous representation of objects of interest, and rapid, reversible, incremental actions and feedback. Instead of typing commands, you do things to objects.
### GOMS/KLM (Goals, Operators, Methods, Selection Rules / Keystroke-Level Model)
A family of quantitative models used to predict user task performance without doing user testing. KLM is the simplest version, estimating time based on elemental actions like pointing, clicking, and typing.
### Mental Models
A user's internal representation of how a system works. Good design aligns the system's actual operation (the implementation model) with the user's mental model via a clear interface (the represented model).
### Feedback & Visibility
Visibility means making the system's state and possible actions apparent to the user. Feedback is the system's response to a user's action, which communicates the result and updates the user on the current state.
### Consistency
Designing interfaces so that similar tasks and elements have similar appearances and behaviors. This leverages prior learning and makes new parts of an interface easier to use.
### Error Tolerance
Designing systems to prevent errors from occurring and to make it easy for users to recover from errors when they do happen (e.g., confirmation dialogs, undo functionality).
`},

// Core UX Concepts
{
    slug: 'core-ux-concepts',
    category: 'resources',
    title: 'Core UX Concepts',
    date: '2025-09-12',
    tags: ['Resources', 'Research', 'History of UI', 'UX',],
    excerpt: 'Quick reference guide to core UX concepts',
     content: `### Usability
The ease with which users can achieve their goals using a product. Key factors include efficiency, learnability, and satisfaction.
### Accessibility (a11y)
The practice of designing products that can be used by people with a wide range of abilities, including those with visual, auditory, motor, or cognitive impairments. The term "a11y" is a numeronym, with "11" representing the eleven letters between 'a' and 'y'.
### User Persona
A fictional character created to represent a key user type. A persona consolidates research findings into a relatable profile with goals, needs, and pain points to guide design decisions.
### User Journey Map
A visual representation of the steps a user takes to accomplish a goal with a product. It maps out their actions, thoughts, and feelings at each stage to identify opportunities for improvement.
### Empathy Map
A collaborative tool used to gain a deeper understanding of a user. It's typically split into four quadrants: what the user Says, Thinks, Does, and Feels.
### A/B Testing
A method of comparing two versions of a design (Version A and Version B) to see which one performs better. For example, testing whether a green or a red "Buy Now" button results in more clicks.
### User Research
The systematic study of target users and their requirements to add realistic context and insights to the design process. Methods include interviews, surveys, and usability testing
### Card Sorting
A research method where participants are asked to organize topics into categories that make sense to them. It's used to help design the information architecture (IA) of a website or app. There are two types:
**Open Card Sort:** Participants create and name their own categories.  
**Closed Card Sort:** Participants sort topics into predefined categories.
### Tree Testing
A method used to evaluate the findability of topics in a website's structure. Participants are given a task (e.g., "Find the return policy") and must click through a simplified text version of the site's menu structure to find it. It's often done after card sorting to validate the IA.
### Diary Study
A qualitative research method where users self-report their activities, thoughts, and frustrations over an extended period. This helps researchers understand user habits and needs in their natural context.
### The Kano Model
A framework that prioritizes product features by classifying them into categories based on how they impact customer satisfaction. The categories are Basic (expected features), Performance (more is better), and Excitement (delightful, unexpected features).
### Jobs to Be Done (JTBD)
A framework that focuses on the user's underlying motivation or "job" they are trying to accomplish, rather than their demographics. For example, a person doesn't buy a drill because they want a drill; they buy it because they want a hole in their wall. This helps designers focus on outcomes rather than just features.
### Service Blueprint
A detailed diagram that visualizes the relationships between different service components—people, processes, and physical or digital artifacts—that are directly tied to touchpoints in a specific customer journey. It includes both what the customer sees ("frontstage") and the behind-the-scenes actions ("backstage").
### User Flow vs. Task Flow
**Task Flow:** A simple diagram showing the steps a user takes to complete a single, specific task, like "signing in." It's usually a linear path.
**User Flow:** A more comprehensive diagram showing the various paths a user can take through a product to achieve a goal. It often includes decision points and alternative routes, reflecting that users may not always follow a single, ideal path.
`},

// Core UI Concepts
{
    slug: 'core-ui-concepts',
    category: 'resources',
    title: 'Core UI Concepts',
    date: '2025-09-12',
    tags: ['Resources', 'Research', 'History of UI', 'UI'],
    excerpt: 'Core UI concepts',
     content: `### Information Architecture (IA)
The practice of organizing and structuring content in a logical and intuitive way. It's like the blueprint for a building, ensuring you can easily find the "kitchen" (your account settings) or the "living room" (the main feed).
### Wireframe
A low-fidelity, basic visual guide for a webpage or app. It focuses on structure and layout, often in black and white, without colors, fonts, or images. It's the skeleton of the design.
### Prototype
An interactive, clickable model of the final product used for testing before development.
Low-Fidelity Prototype: A simple, often paper-based or digitally sketched model to test concepts and flows.
High-Fidelity Prototype: A detailed, realistic model that looks and functions very similarly to the final product.
### Visual Hierarchy
The arrangement of visual elements (text, images, buttons) to show their order of importance. Larger headlines, brighter colors, and top-of-page placement guide the user's eye to what matters most.
### Component Library / Design System
A collection of reusable UI elements (like buttons, forms, and icons) and guidelines that ensure consistency across a product.
### Heuristics
A set of general principles or rules of thumb for interaction design. A common set is Jakob Nielsen's 10 Usability Heuristics, which includes principles like "visibility of system status" and "consistency and standards."
### Microinteractions
These are small, contained moments of engagement within a product that accomplish a single task. For example, the animation you see when you "like" a post—the button changes color, a heart icon appears, and a counter updates. These details provide feedback and make the interface feel more alive.
### Responsive vs. Adaptive Design
Both address how a design looks on different screen sizes, but they work differently.
Responsive Design: Fluidly adjusts the layout to fit any screen size. Think of it like a liquid that fills whatever container it's in.
Adaptive Design: Uses a set of fixed layouts that are activated for specific screen sizes (e.g., a "desktop" layout, a "tablet" layout, and a "mobile" layout).
### Grid System
An underlying structure of intersecting horizontal and vertical lines used to organize content. Grids create alignment, consistency, and rhythm in a design, making it easier for users to scan and understand.
### Gestural Interfaces
Interfaces that are controlled by physical gestures, such as swiping, pinching, or tapping on a touchscreen. The "swipe left to dismiss" action in many apps is a common example.

`},

// Artifacts
{
slug: 'artifacts',
category: 'resources',
title: 'Artifacts',
date: '2025-09-12',
tags: ['Resources', 'Research', 'History of UI'],
excerpt: 'Artifacts that shaped UI history',
content: `
- Engelbart, Douglas. 1968. **"A Research Center for Augmenting Human Intellect."** In AFIPS Conference Proceedings of the 1968 Fall Joint Computer Conference, 395–410. Also known as ["The Mother of All Demos."](https://www.youtube.com/watch?v=B6rKUf9DWRI)


- Xerox Corporation. 1982. **The Xerox 8010 Star Information System.** [Product brochure and documentation.](https://www.tech-insider.org/star/research/acrobat/8806.pdf) 


- Apple Computer, Inc. 1984. **"Macintosh System 1.0 Guided Tour."** [Video available on YouTube.](https://www.youtube.com/watch?v=jwvav862-NI)


- Kay, Alan, and Adele Goldberg. 1977. **"Personal Dynamic Media."** Computer 10 (3): 31–41. Pre-print describing the Smalltalk/Dynabook vision.


- Microsoft Corporation. 1995. **"Windows 95 Video Guide with Jennifer Aniston and Matthew Perry."** Instructional video. Video available on YouTube.


- Be Inc. 1998. **BeOS User's Guide.** Manual. Archived PDF available online. Demonstrates a multithreaded, media-centric UI.


- I-mode. c. 2001. **"i-mode service"** developer documentation. NTT DoCoMo. Examples at the W3C. Shows early mobile internet constraints and design.


- Jobs, Steve. 2007. **"iPhone Introduction at Macworld 2007."** Keynote address. Video available on YouTube.


- Palm, Inc. 1997. **PalmPilot Handbook.** Manual. Archived at the Internet Archive. Details the Graffiti input method and minimalist PIM interface.


- General Magic. 1995. **The AT&T PIC-100 PersonaLink Services Guidebook.** Manual. Archived at the Internet Archive. Early example of a cloud-based, agent-oriented mobile UI.


- MIT Architecture Machine Group. 1978. **"Aspen Movie Map."** Video Demonstration. Video via YouTube. A pioneering hypermedia and virtual reality system.


- IBM. 1989. **Systems Application Architecture: Common User Access Advanced Interface Design Guide.** Manual. Archived PDF via Bitsavers.


- Sun Microsystems. 1990. **Open Look Graphical User Interface Functional Specification.** Addison-Wesley. Archived PDF via Bitsavers.


- Open Software Foundation. 1993. **OSF/Motif Style Guide Release 1.2.** Prentice Hall.


- GNOME Project. 2000. **"GNOME Human Interface Guidelines 1.0."** Archived via Wayback Machine.
`},

// Prominent Figures
{
slug: 'prominent-figures',
category: 'resources',
title: 'Prominent Figures',
date: '2025-09-12',
tags: ['Resources', 'Research', 'History of UI'],
excerpt: 'Prominent figures that shaped and built the field of UI and UX',
 content: `### Vannevar Bush (1890–1974)
American engineer and science administrator. Envisioned the "memex," a proto-hypertext device that inspired decades of HCI research.
### J. C. R. Licklider (1915–1990)
American psychologist and computer scientist. Championed the vision of man-computer symbiosis and funded early ARPANET and HCI research.
### Douglas Engelbart (1925–2013)
American engineer and inventor. Developed the computer mouse, hypertext, and collaborative computing systems, aiming to augment human intellect.
### Ivan Sutherland (b. 1938)
American computer scientist and internet pioneer. Created Sketchpad, the origin of modern computer-aided design and graphical user interfaces.
### Alan Kay (b. 1940)
American computer scientist. A key member of Xerox PARC; conceived the Dynabook concept and was a pioneer of object-oriented programming (Smalltalk).
### Ted Nelson (b. 1937)
American sociologist and philosopher. Coined the terms "hypertext" and "hypermedia" and developed the Xanadu project.
### Ben Shneiderman (b. 1947)
American computer scientist. Defined direct manipulation, developed the treemap data visualization technique, and is a leader in usability research.
### Donald Norman (b. 1935)
American researcher and designer. His work on user-centered design and cognitive engineering introduced concepts like "affordances" to a wide audience.
### Jakob Nielsen (b. 1957)
Danish usability consultant. A leading voice in web usability, known for his "10 usability heuristics" and discount usability engineering methods.
### Bill Atkinson (b. 1951)
American computer engineer. A key designer of the Apple Macintosh GUI, MacPaint, and later, HyperCard.
### Susan Kare (b. 1954)
American artist and graphic designer. Created the original icons and fonts for the Apple Macintosh, defining the visual language of early GUIs.
### Matías Duarte (b. 1973)
Chilean-American designer. Led the design of webOS, Android Holo, and Google's Material Design, shaping the aesthetic of modern mobile operating systems.
### Tim Berners-Lee (b. 1955)
English computer scientist. Invented the World Wide Web, the first web browser, and the fundamental protocols (HTTP, HTML, URL).
### Grace Hopper (1906–1992)
American computer scientist and Navy rear admiral. Pioneered user-friendly computer languages (COBOL), moving computing closer to human language.
### Hiroshi Ishii (b. 1956)
Japanese computer scientist at MIT Media Lab. Pioneer of Tangible User Interfaces (TUIs), blending the physical and digital worlds.
### Allen Newell (1927–1992) & Stuart Card (b. 1943)
American cognitive scientists at Xerox PARC. Co-authored The Psychology of Human-Computer Interaction, creating the GOMS model.
## Key Institutions
### Xerox PARC (Palo Alto Research Center)
Founded 1970. The research institution where the Alto, GUI, Ethernet, and laser printing were invented.
### MIT Media Lab
Founded 1985. An interdisciplinary research lab at MIT known for unconventional research into human-computer interaction, tangible media, and AI.
### Bauhaus School (1919–1933)
German art school. Its "form follows function" ethos and focus on rationality, grids, and clean typography profoundly influenced modern graphic and industrial design, and later, UI.
`},
];
