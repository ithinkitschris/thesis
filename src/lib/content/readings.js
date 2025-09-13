// Readings and references posts
export const readingsPosts = [

  // The Design of Everyday Things, Don Norman
  {
    slug: 'the-design-of-everyday-things-don-norman',
    category: 'Readings',
    title: 'The Design of Everyday Things, Don Norman',
    date: '2025-09-12',
    tags: ['Readings', 'Research', 'HCI', 'UX', 'Affordances', 'Mental Models'],
    excerpt: 'Main Takeaways, Notes and Key Concepts from The Design of Everyday Things by Don Norman',
    content: `## Introduction: The Book's Central Thesis
Don Norman's **The Design of Everyday Things** (originally titled *The Psychology of Everyday Things*) is a foundational text in Human-Computer Interaction (HCI), Interaction Design, and User Experience (UX). Its profound significance lies in its ability to shift the perspective on technology from a machine-centric to a human-centric one.
The book's central thesis is that the design of an object should be intuitive, discoverable, and understandable. Norman argues compellingly that when users struggle with an object—be it a door, a phone, or a piece of software—it is not their fault. User "error" is most often a design error. The responsibility lies with the designer to create products that communicate their function and accommodate human psychology. This simple but revolutionary idea laid the groundwork for the entire field of user-centered design and remains the ethical and practical core of our work today.
## Core Principles of Interaction
Norman introduces a set of fundamental design principles that function as a powerful vocabulary for analyzing and creating interactive systems.
### Affordances & Signifiers
**Academic Definition**
An affordance is a relationship between the properties of an object and the capabilities of an agent that determine just how the object could possibly be used. It is an inherent potential for action. A chair affords sitting; a knob affords turning. Crucially, an affordance exists whether it is visible or not.
A signifier is any perceivable cue (visual, auditory, haptic) that communicates the purpose, structure, or operation of an object. Signifiers signal what actions are possible and how they should be done. They make affordances discoverable.
**Classic Physical Example**
A flat plate on a door has the affordance of being pushed. The plate's flat, solid surface is a signifier that communicates this affordance. In contrast, a large, rounded handle affords pulling, and its shape acts as a signifier for gripping and pulling. The infamous "Norman Door" is one where the signifiers are incorrect or ambiguous, such as having a pull-handle on a push-door.
**Contemporary Digital UI Example**
A blue, underlined piece of text in a web page has the affordance of being clicked to navigate. The color and underline are signifiers, a learned convention that communicates this "clickable" affordance. A button with a drop shadow looks slightly raised, signifying that it can be "pushed" or clicked.
**Takeaway for Modern UI Designers**
Your primary job is to make the affordances of your interface obvious. You do this by creating clear, unambiguous signifiers. Don't assume users will know what's interactive; you must show them.
### Mapping
**Academic Definition**
Mapping refers to the relationship between a control, its movement, and the result it produces in the world. Good mapping is natural and intuitive, leveraging physical analogies and cultural standards to create an immediate understanding.
**Classic Physical Example**
A well-designed stovetop has the control knobs arranged in the same pattern as the burners they control. This natural mapping makes it easy to know which knob operates which burner. A poor mapping would be four knobs in a straight line controlling four burners in a square.
**Contemporary Digital UI Example**
In a video editing timeline, dragging the playhead to the right moves the video forward in time; dragging it to the left moves it backward. The spatial mapping of the control directly corresponds to the temporal effect on the video.
**Takeaway for Modern UI Designers**
Arrange your controls in a way that logically corresponds to the system they affect. When the layout of the control matches the layout of the effect, the cognitive load on the user is drastically reduced.
### Feedback
**Academic Definition**
Feedback is information sent back to the user indicating that an action has been performed and communicating the outcome of that action. It must be immediate and informative.
**Classic Physical Example**
When you flip a light switch, you receive multiple forms of feedback: the tactile "click" of the switch moving, the audible "snap," and the visual confirmation of the light turning on or off.
**Contemporary Digital UI Example**
When you tap an app icon on your phone, it momentarily highlights or animates (feedback that the tap was registered), and then the app opens (feedback that the action was successful). A loading spinner after submitting a form is crucial feedback that the system is working and the user should wait.
**Takeaway for Modern UI Designers**
Every user action requires feedback. Without it, users become uncertain, anxious, and may repeat the action or assume the system is broken. Feedback is a fundamental part of a responsive and trustworthy interface.
### Conceptual Models
**Academic Definition**
A conceptual model, or mental model, is the user's internal, often simplified, explanation of how a system works. This model is formed through past experiences, the system's appearance, and interactions with it. Designers don't create the user's model directly, but they can—and must—project a clear and consistent system image that helps the user form an accurate and useful conceptual model.
**Classic Physical Example**
The conceptual model of a pair of scissors is simple: two blades pivot to cut things placed between them. The visual design (the system image) makes this model immediately apparent. A more complex example is a thermostat; many users have an incorrect model that turning it up higher will make the room heat up faster, when it only sets the target temperature.
**Contemporary Digital UI Example**
The "desktop metaphor" in graphical user interfaces. Users have a conceptual model of files, folders, and a trash can based on their real-world counterparts. They understand they can put files in folders and discard them by dragging them to the trash, even though the underlying system is just manipulating bits in memory.
**Takeaway for Modern UI Designers**
Design a consistent and coherent system image that allows users to form a simple, powerful conceptual model. When a user's mental model matches the system's operation, they can use it effectively and troubleshoot problems.
### Constraints
**Academic Definition**
Constraints are limitations on the possible actions a user can take, which serve to guide the user toward the correct action and prevent errors. Norman identifies four types: physical, semantic, cultural, and logical.
**Classic Physical Example**
A USB-A plug is a physical constraint; it only fits into the port one way. A red traffic light is a cultural constraint; we are culturally conditioned to stop.
**Contemporary Digital UI Example**
A "grayed out" or disabled submit button on a web form is a logical constraint. It prevents the user from submitting until all required fields are filled. A date-picker field that only allows the selection of future dates for a flight booking is a semantic constraint; the meaning of the task limits the possible inputs.
**Takeaway for Modern UI Designers**
Constraints are not limitations; they are a powerful design tool. Use them proactively to guide users, reduce the chance of error, and make interfaces feel simpler and more predictable.
## The Psychology of Action: The Two Gulfs
Norman provides a powerful framework for understanding user frustration through the "two gulfs" of interaction. Good design successfully bridges these gulfs.
**The Gulf of Execution:** This is the gap between the user's goal and the actions required by the system to achieve it. It's the "How do I do it?" question. A wide gulf means the interface is not discoverable or intuitive.
**The Gulf of Evaluation:** This is the gap between the system's state and the user's ability to perceive and interpret that state. It's the "What just happened?" question. A wide gulf means the feedback is poor or the system's response is unclear.
**Digital Interface Example**
**Failure (Wide Gulfs):** An early command-line interface for file transfer. The user wants to send a file (goal). How? They have to remember a specific, arcane command like \`scp -r /local/path/file.txt user@server:/remote/path/\` (a massive Gulf of Execution). After hitting enter, the cursor just blinks. Did it work? Is it in progress? Is there an error? The lack of feedback creates a wide Gulf of Evaluation.
**Success (Bridged Gulfs):** Using a service like WeTransfer. The user wants to send a file. The interface presents a large "+" button labeled "Upload files" (bridging the Gulf of Execution). After selecting a file, a clear progress bar appears showing the upload percentage and speed. When finished, a confirmation message with a shareable link is displayed (bridging the Gulf of Evaluation).
**The Seven Stages of Action**
The Seven Stages of Action are Norman's detailed model for how a person accomplishes a task. Designers can use this as a checklist to ensure they are bridging the gulfs:
1. **Goal** (Forming the goal)
2. **Plan** (the action)
3. **Specify** (an action sequence)
4. **Perform** (the action sequence) ← The Gulf of Execution (Stages 2-4)
5. **Perceive** (the state of the world)
6. **Interpret** (the perception)
7. **Compare** (the outcome with the goal) ← The Gulf of Evaluation (Stages 5-7)

## The Human-Centered Design (HCD) Process
To avoid the design failures he describes, Norman champions a philosophy and process known as Human-Centered Design (HCD). This is an iterative approach that places the needs and behaviors of the end-user at the center of the entire design and development process.
The process can be summarized in four iterative stages, often visualized in the "Double Diamond" model:
1. **Observation:** Research and understand the problem and the people you are designing for. This corresponds to the Discover phase of the first diamond, where you diverge to gather insights.
2. **Ideation (or Ideation/Generation):** Generate numerous potential solutions without judgment. This is the divergent part of the second diamond (Develop). The Define phase (converging after discovery) focuses on framing the right problem to solve.
3. **Prototyping:** Create early, low-cost mockups of the potential solutions.
4. **Testing:** Put the prototypes in front of real users to observe their behavior, gather feedback, and identify flaws. The results of testing feed back into the observation and ideation stages, making the process iterative. This corresponds to the Deliver phase (converging on a final solution that works).
**This iterative cycle is critical because it forces designers to confront their assumptions and build solutions based on real-world user behavior, not on their own mental models. It is the practical antidote to building a "Norman Door."**
## Synthesis: Relevance for the Future of UI
## Applying Norman's Principles to Future UIs
### Voice UIs (VUI) (e.g., Alexa, Siri)
- **Discoverability** is the primary challenge. A VUI has almost no signifiers. How does a user know what it can do? The Gulf of Execution is massive. "Wake words" are a form of signifier, but what comes next is a mystery.
- **Feedback** is purely auditory. The system must confirm it is listening, that it understood, and what it is doing. The tone of voice becomes a crucial form of feedback.
- **The conceptual model** is ambiguous. Is it an omniscient AI or a simple command-parser? Misalignment leads to user frustration.
### Augmented Reality (AR) & Gestural Interfaces
- **Signifiers** in a mixed-reality world are a new frontier. How do you signify that a real-world object has a digital affordance? A subtle glow? A floating icon?
- **Mapping** becomes three-dimensional. How do hand gestures map to actions? Is a "pinch-to-select" gesture universally understood? Bad mapping can lead to physical fatigue and error.
- **Constraints** are essential to prevent accidental activation. In an AR environment full of interactive elements, how do you constrain a user's gestures to only affect the intended object?
### Ambient Computing (Invisible Interfaces)
- This presents the biggest challenge to the **Gulf of Evaluation**. If an interface is truly invisible and acts automatically (e.g., a smart thermostat adjusting the temperature), how does the user perceive what the system has done and why?
- **The conceptual model** is paramount. Users must understand the system's "rules" to feel in control. Without a clear model, an ambient system can feel unpredictable, creepy, or untrustworthy.
### Key Challenges and Takeaways for Your Thesis
- **The Crisis of Discoverability:** The central challenge for the future of UI is how to create effective signifiers in interfaces that are not visual or are overlaid on a complex real world. Your research could explore how to create new conventions for auditory, haptic, and environmental signifiers.
- **Redefining Feedback:** You will need to think beyond visual indicators. Feedback will become multi-sensory. How can haptics, spatial audio, and even subtle lighting changes be used to bridge the Gulf of Evaluation?
- **The Primacy of the Conceptual Model:** When an interface has no visible form, the user's conceptual model is all they have. The designer's greatest task will be to communicate a clear, consistent, and trustworthy system image through every subtle interaction.
- **HCD is Non-Negotiable:** Designers' intuitions will fail them in these new contexts. A rigorous, iterative process of Observation, Prototyping, and Testing with real users in real environments is the only way to navigate this uncharted territory and avoid creating the "Norman Doors" of the future.
`},

  // Readings List
  {
    slug: 'history-of-ui-list',
    category: 'Readings',
    title: 'History of UI Readings List',
    date: '2025-09-12',
    tags: ['Readings', 'Research', 'History of UI'],
    excerpt: 'Readings and references for the history of UI.',
    content: `## Core:
- Buxton, Bill. 2007. **Sketching User Experiences: Getting the Design Right and the Right Design.**

    *Provides a historical and conceptual framework for interaction design, arguing for the importance of sketching and iteration. Connects technological development to design practice.*


- Card, Stuart K., Thomas P. Moran, and Allen Newell. 1983. **The Psychology of Human-Computer Interaction.**

    *The foundational text for the "Model Human Processor" and GOMS (Goals, Operators, Methods, and Selection Rules), a landmark in applying cognitive psychology to predict user performance.*


- Engelbart, Douglas C. 1962. **"Augmenting Human Intellect: A Conceptual Framework."** 

    *Engelbart's seminal report outlining his vision for using computers to amplify human intelligence, laying the theoretical groundwork for the mouse, hypertext, and collaborative computing.*


- Johnson, Jeff, Teresa L. Roberts, William Verplank, David C. Smith, Charles H. Irby, Marian Beard, and Kevin Mackey. 1989. **"The Xerox Star: A Retrospective."** 

    *A firsthand account from the Xerox PARC and Star development teams detailing the design principles, user testing, and conceptual breakthroughs (e.g., desktop metaphor) behind the first commercial GUI.*


- Moggridge, Bill. 2007. **Designing Interactions.**

    *A collection of interviews with over 40 influential designers, providing primary-source accounts of key interaction design projects from the GUI to mobile devices.*


- Norman, Donald A. 2013. **The Design of Everyday Things: Revised and Expanded Edition.**

    *Introduces foundational concepts like affordances, signifiers, conceptual models, and feedback. Though not strictly about UI, its principles are essential for understanding interaction design.*


- Shneiderman, Ben. 1983. **"Direct Manipulation: A Step Beyond Programming Languages."**

    *Formally defines "direct manipulation," articulating the principles of continuous representation, physical actions, and rapid, reversible operations that underpin modern GUIs.*


- Sutherland, Ivan E. 1963. **"Sketchpad: A Man-Machine Graphical Communication System."** 

    *The published version of Sutherland's PhD thesis, describing the first interactive graphical system with features like object-oriented drawing, constraints, and a light pen, a cornerstone of computer graphics and HCI.*


- Apple Computer, Inc. 1987. **Apple Human Interface Guidelines: The Apple Desktop Interface.**

    *The original HIG that codified the principles of the Macintosh desktop (e.g., consistency, user control, forgiveness). It established the canonical patterns for the WIMP (Windows, Icons, Menus, Pointer) paradigm.*


- Google. 2014. **[Material Design.](https://material.io/archive/guidelines/material-design/introduction.html)**

    *The specification for the first version of Material Design, which introduced a comprehensive, physics-based design system with principles of tactile surfaces, print-like typography, and meaningful motion.*


## Topics
### Proto-UI & Cybernetics
- **Bush, Vannevar. 1945. “As We May Think.” The Atlantic Monthly, July 1945.**

    *Takeaway: Proposed the "memex," a conceptual hypertext system that directly inspired future pioneers like Engelbart and Nelson.*


- Wiener, Norbert. 1948. **Cybernetics: Or Control and Communication in the Animal and the Machine.**

    *Established the principles of feedback and control systems, providing the theoretical language for understanding human-machine interaction as a conversation.*


- Müller-Brockmann, Josef. 1981. **Grid Systems in Graphic Design.**

    *The definitive text on Swiss Style typography and grid-based layout, which directly influenced the clean, structured aesthetic of modern UI from PARC to flat design.*


### Interactive Computing & The GUI
- Licklider, J. C. R. 1960. **"Man-Computer Symbiosis."** IRE Transactions on Human Factors in Electronics HFE-1 (1): 4–11.

    *Articulated the vision of a future partnership between humans and computers for real-time problem solving, moving beyond batch processing.*


- Kay, Alan C. 1977. **"Microelectronics and the Personal Computer."** Scientific American 237 (3): 230–44.

    *Described the Dynabook concept, a portable personal computer for children, which encapsulated the core ideas of GUIs, object-oriented programming, and user-centered design.*


- Smith, David Canfield, Charles Irby, Ralph Kimball, Bill Verplank, and Eric Harslem. 1982. **"Designing the Star User Interface."** Byte 7 (4): 242–82.

    *A more accessible, detailed look at the design process and rationale for the Xerox Star's interface, covering icons, windows, and the property sheet concept.*

### Web & Usability
- Nielsen, Jakob. 2000. **Designing Web Usability.**

    *Codified the core principles of usability for the web era, popularizing concepts like heuristic evaluation and user testing with data-driven, practical advice.*


- Krug, Steve. 2000. **Don't Make Me Think: A Common Sense Approach to Web Usability.**

    *Made usability accessible through its core mantra, emphasizing clarity, convention, and the elimination of cognitive friction for users.*


- Marcotte, Ethan. 2010. **"Responsive Web Design."** A List Apart, May 25, 2010.

    *The article that named and defined responsive web design (RWD), establishing the core techniques of fluid grids, flexible images, and media queries to adapt layouts across devices.*

### Mobile & Post-PC
- Vogel, Dan, and Patrick Baudisch. 2007. **"Shift: A Technique for Operating Pen-Based Interfaces Using Touch."** 

    *A key academic paper pre-iPhone that explored the "fat finger" problem and solutions for touch accuracy, representative of the research that paved the way for modern touch UIs.*


- Forstall, Scott, et al. 2007. **"Multi-touch gesture dictionary."** 

    *Not a reading, but a primary source showing the formal definition and patenting of the core multitouch gestures (pinch, swipe, etc.) that defined the first generation of iOS.*


- Matias, Duarte. 2011. **["Android Design: Android 3.0 Honeycomb."](https://www.youtube.com/watch?v=LcuDQd8SejM)** 

    *The public presentation of the Android Holo theme, which marked Google's first major, systematic effort to create a mature and distinct visual and interaction design language for its platform.*

### Design Systems & Modern Practice
- Frost, Brad. 2016. **"Atomic Design."** Brad Frost Web. June 10, 2016.

    *Introduced a methodology for creating design systems by breaking interfaces into fundamental components (atoms, molecules, organisms), providing a shared vocabulary for designers and developers.*


- Caled, W. G., P. G. Chisholm, and S. C. Gross. 1987. **"The IBM Systems Application Architecture Common User Access."** 

    *An official overview of IBM's Common User Access (CUA), the first major cross-platform design system aiming for interface consistency across operating systems, from mainframes to PCs.*


- WCAG Working Group. 2008. **"Web Content Accessibility Guidelines (WCAG) 2.0."** 

    *Established the modern, technology-agnostic principles for web accessibility (Perceivable, Operable, Understandable, Robust), becoming the basis for international standards and laws.*

`},
  
];
