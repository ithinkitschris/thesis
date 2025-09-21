// Readings and references posts
export const statementsPosts = [

  // 20 September 2025
  {
    slug: 'thesis-statement-20-sept',
    category: 'Statements',
    title: 'Thesis Statement: 20 Sept',
    date: '2025-09-20',
    tags: ['Thesis Statement',],
    excerpt: 'Thesis Statement as of 20 September 2025',
    content: `# Part I – Introduction & Framing
## 1. Introduction
### 1.1 Motivation: Why Multimodality Matters Today and for the Future of UI
Digital interaction now spans screens, peripherals, cross-device flows, and environments.
Historically, each interface era stabilized around a recognizable affordance grammar (CLI → GUI → Touch → early Voice), but today these grammars are siloed by device and modality.
Users experience friction and discontinuity moving between phone, watch, car, speakers, and spatial devices.
Opportunity: position affordances as the common language that can maintain coherence across modalities and contexts.
### 1.2 Research Problem (Expanded)
Contemporary multimodal systems often lack affordance continuity and a shared cross-context design grammar.
The same action (pause, confirm, navigate) surfaces via different or conflicting signifiers across devices (button on phone, haptic squeeze on buds, "pause" by voice, ambient light in the car).
Some affordances vanish or become illegible when crossing devices (gesture on phone ≠ available on watch).
Redundant cues (visual + haptic + audio) sometimes conflict rather than reinforce.
Consequence: users can't rely on a stable cross-context logic; mental models fragment.
This is not incidental—it reflects the absence of a multimodal affordance grammar designed at the ecosystem level rather than per-device.
#### 1.2.1 Sources Supporting the Problem Statement (Footnotes)
Multimodal fusion/mapping "open issues" persist (e.g., surveys in multimodal HCI).
Cross-platform multimodal/LLM UIs face an "interface dilemma" (same function, divergent affordances).
Automotive studies show context-dependent multimodal cue efficacy; mismatches undermine trust.
XR reviews highlight inconsistent affordance perception across visual/haptic/spatial channels.
Multimodal design tools show even designers struggle to express intent consistently across channels.
### 1.3 Research Questions
- How can affordances guide multimodal UI design?
- What principles and heuristics ensure affordances remain consistent and intuitive across devices, modalities, and environments?
- How can speculative design outputs expose possibilities and pitfalls of affordance-driven multimodality?
### 1.4 Positioning the Work
Bridge rigor + craft: ecological/embodied theory (Gibson, Norman, Dourish, Oviatt) synthesized into designable principles and visual/speculative prototypes.
Claim: As skeuomorphism, flat, and material codified visual eras, the multimodal future requires an affordance grammar that operates across contexts.
### 1.5 Scope and Limitations
Scope: affordances as primary lens; modalities spanning visual, auditory, haptic, spatial/environmental; screen, peripheral, cross-device, in-situ.
Limits: not a turnkey enterprise design system; focuses on affordances (not all HCI theories); demonstrates via speculative outputs rather than full productization.
## 2. Theoretical Foundations
### 2.1 Affordances: Core Definitions and Relevance to UI
Gibson: affordances = action possibilities relative to agent + environment; ecological and relational.
Norman: perceived vs. real affordances; signifiers as bridges to perception; mappings and feedback.
HCI clarifications (e.g., perceptible, hidden, false affordances).
Mental models and embodied interaction: how bodies, tools, and contexts co-constitute meaning.
Takeaway: affordances are the grammar of interaction, not just properties of objects.
### 2.2 Affordances in Today's Device-Specific Practice (Study of the Present, with Emerging Signals)
#### 2.2.1 Touchscreen Devices
Mature global gestures: tap, swipe, pinch-to-zoom → widely codified, teachable, and portable within touch contexts.
#### 2.2.2 Voice Assistants
Wake words, conversational turn-taking, earcons.
Affordances of availability and attention more than direct manipulation.
#### 2.2.3 Automotive Interfaces
Tactile mappings (knobs, pedals, wheel) with strong sensorimotor coherence.
Increasing tension with touchscreens; risks to discoverability and glanceability.
#### 2.2.4 XR Controllers
Point, grab, press → embodied metaphors that leverage real-world action schemas.
#### 2.2.5 Wearables (Watches, Bands, Rings)
Raise-to-wake, tap-to-wake, haptic nudges → micro-affordances for attention, confirmation, urgency.
#### 2.2.6 AR/XR Glasses (Emerging Standard)
Pinch (index + thumb) to select (e.g., Vision Pro; Meta prototypes): a spatial click analog.
Codification moment: convergence hints at a cross-platform standard akin to pinch-to-zoom in mobile.
Requires signifiers (e.g., gaze cursor, visual focus ring, subtle haptics) to ground the affordance.
#### 2.2.7 Emerging Affordances (Direction of Travel)
Voice + gesture combos for redundancy/grounding.
Ambient/environmental cues (light, motion, acoustics) as state and affect signifiers.
AI-adaptive affordances that shift with context, intent, or prediction.
Takeaway: affordances are mature in some domains (touch), context-bound in others (voice/auto), and actively crystallizing in spatial computing—revealing the need for a cross-context grammar.
### 2.3 Signifiers, Mappings, Feedback, Mental Models
Signifiers vary by modality; salience/reliability differ (visual vs. haptic vs. audio).
Mappings break when the same goal implies different control-action relations across devices.
Feedback must be multimodal and coherent (avoid conflicting cues).
Mental models fragment when affordances don't translate across contexts.
### 2.4 Affordances as Fragmented Grammars (Today's Reality)
Device silos → fractured rules and learned workarounds; users memorize per-device dialects.
Result: friction, errors, and reduced trust when switching contexts.
### 2.5 Toward Affordances as a Common Thread (Ecological Framing)
Treat affordances as systemic contracts spanning devices, modalities, and environments.
Goal: a portable, coherent grammar that preserves action possibilities across contexts (continuity), while allowing complementarity (each modality adds distinct value) and redundancy (resilience).
## 3. Multimodality in Context
### 3.1 Defining Multimodality
Multimodality refers to interaction that unfolds across multiple channels — visual, auditory, haptic, and spatial or environmental. These modalities can act redundantly (reinforcing the same signal) or complementarily (contributing distinct cues). Human communication is inherently multimodal: we speak, gesture, and look simultaneously. Yet digital interfaces have historically privileged single dominant modalities. Designing for multimodality is thus not about inventing entirely new ways of interaction but about aligning digital systems with the natural ecology of human communication.
### 3.2 Historical Precedents
**CLI (Command Line Interfaces)**
Interaction was symbolic and text-based; affordances were minimal; the mental model framed the computer as a symbolic machine awaiting explicit input.
**GUI (Graphical User Interfaces)**
Direct manipulation via icons/windows/metaphors (trash can, folder); affordances became visual and metaphorical; the computer as workspace.
**Touch (Multi-Touch Interfaces)**
Embodied, kinetic affordances (tap, swipe, pinch-to-zoom); the iPhone codified global standards; the screen as extension of the body.
**Conversational Interfaces**
Early voice assistants were brittle and narrow. The rise of LLMs changed this: conversational input is reliable and flexible enough to be perceived as a repeatable, viable affordance.
Shift: explicit → implicit tasks (describe outcomes, let the system interpret).
Reliability conditions users to perceive prompting as an action possibility.
Pseudo-language emerges (prompt shorthand), formalizing conversational interaction into a semi-structured practice.
### 3.3 The Conversational Paradigm Today (Full Narrative)
Conversational interfaces, powered by LLMs, define today's dominant paradigm. Their strength lies in reliability: users are learning to trust that natural language can get tasks done. With repeated success, prompting becomes a recognizable affordance — an expectation that "I can get things done by asking."
But today's conversational affordances remain constrained by traditional GUI and touch-based containers. The vast majority of interactions take place inside chat windows, text input fields, and scrolling dialogue panes. Even voice-driven systems often render transcripts inside a chat-like feed.
The chat format itself is a crutch: a transitional affordance that makes conversation legible within older UI metaphors. It scaffolds adoption by embedding the new paradigm in the familiar 2D surfaces of GUI and mobile design. Users are developing new affordances (intent-based prompting), but through the frame of older ones (touchscreen keyboards, scrolling feeds).
This dynamic highlights an important principle of interface evolution: new affordances often emerge inside old containers until they achieve cultural familiarity. CLI commands once lived inside terminal windows even as GUIs proliferated; multitouch gestures were first taught through skeuomorphic affordances like photorealistic knobs and dials. In the same way, conversational affordances are currently stabilized by their GUI-bound containers.
For this reason, conversation as it exists today is not an endpoint but a bridge paradigm. It proves that intent can replace explicit sequences, but it is still heavily mediated by older affordance grammars.
### 3.4 Multimodality as the Next Step (Full Narrative)
If conversation has proven the viability of intent-based interaction, multimodality is the natural next step — extending this affordance beyond 2D chat surfaces into a more ecological grammar of interaction.
**Natural language extended:** Speech is combined with complementary modalities:
- Voice conveys intent.
- Gaze disambiguates targets.
- Gesture (e.g., pinching to select in Vision Pro or Meta Orion) confirms or modifies actions.
- Haptic feedback provides assurance and closure.
Together, these layers overcome the weaknesses of pure conversation — ambiguity, inefficiency, and social inappropriateness.
**Lowering the skill floor:** Once users grow accustomed to describing outcomes instead of issuing step-by-step commands, adding gesture, gaze, or haptic confirmation feels natural. "If I can just ask, I can also just point." Multimodality leverages the affordance of conversation and makes embodied interaction the obvious extension.
**Beyond the chat affordance:** Multimodality represents the shedding of the conversational crutch. Instead of typing or speaking inside bounded chat windows, users will interact fluidly in environments where affordances span voice, gesture, gaze, and touch. Interaction moves from being GUI-contained to being ecological, embodied, and ambient.
Thus, conversation is best understood not as the final paradigm, but as the gateway affordance that makes multimodality intelligible. By teaching users to rely on intent instead of explicit control, conversational systems normalize the leap into ecological, multimodal interaction. This transition completes the arc: from CLI's symbolic inputs to GUI's visual metaphors, to touch's embodied gestures, to conversation's intent-based prompting, and finally toward multimodality's distributed ecology of affordances.
## Part II – Domains of Exploration
### 4. Design Systems (Contextual, Multimodal)
#### 4.1 What Design Systems Encode Today
HIG, Material, Fluent: strong visual rules; partial motion/audio/haptic guidance; limited cross-modality continuity specifications.
#### 4.2 Gaps for Multimodality
Systems rarely treat affordances as atomic units portable across modalities/devices.
Need continuity rules (when an affordance migrates), redundancy policies (which signals reinforce), and conflict resolution (when cues disagree).
#### 4.3 Toward a Contextual Affordance System
Define affordance primitives (e.g., pause, confirm, select) abstracted from modality.
Map primitives to modal expressions (visual, audio, haptic, spatial).
Specify migration, fallback, resilience patterns across devices and contexts.
Include affective parameters (joy, calm, trust) as first-class attributes of affordance expression.
### 5. Design Language Evolution
#### 5.1 Timeline and Effects on Affordances
Skeuomorphism: high legibility via metaphor; strong signifiers.
Flat: minimalist signifiers; reliance on learned convention.
Material: physics-inspired motion/elevation; tactile metaphor revival.
#### 5.2 Next Step: Environment-Grounded, Multimodal Language
A language whose units are affordances, not widgets; expressed across senses and spaces.
Emphasis on ecological coherence (same affordance, consistent feel across contexts).
#### 5.3 Speculative Visualizations
Motion studies, ambient cues, cross-device states demonstrating a multimodal grammar.
### 6. Emotional Considerations (Within Affordance Design)
#### 6.1 Emotional Affordances
Joy (playful micro-interactions), Calm (ambient subtlety), Trust (reliable, redundant cues).
Encode affect as part of affordance expression, not an afterthought.
#### 6.2 Multimodal Emotion
Cross-modal signaling (light + tone + haptic) for mood, reassurance, urgency — beyond the screen.
## Part III – Principles & Toolkit
### 7. Principles (Affordance-Driven for Multimodal UI)
#### 7.1 Structure
Organized by modality (visual, audio, haptic, spatial) and context (screen, peripheral, cross-device, environment).
Each principle includes: theory grounding, case study, speculative example.
#### 7.2 Core Themes
Continuity (affordance survives migration).
Complementarity (each modality adds distinct value).
Redundancy with restraint (resilient, non-cacophonous).
Clarity of signifiers (no cross-modal contradiction).
Affective alignment (trust/joy/calm expressed consistently).
### 8. Heuristics / Evaluation Framework
#### 8.1 Checklist / Table
Map principle → signifier(s) → modality → expected perception → design implication.
Include stress tests (dark, noise, motion, gloves, social setting) and fallback/migration logic.
## Part IV – Applied Outputs / Speculative Demonstrations
### 9. Prototypes & Scenarios
#### 9.1 Mock-Ups and Motion Studies
Visual + motion prototypes showing affordance continuity across devices.
#### 9.2 Cross-Device Flows
E.g., navigation flowing phone → car → home speaker; health scenario across watch → ambient light → phone.
#### 9.3 Case Study Remix
Re-imagining an existing product through the affordance grammar (e.g., maps, automotive UI, home ecosystem).
## Part V – Discussion & Conclusion
### 10. Reflection
How multimodality reframes affordances from object-centric to ecological.
Implications for practice (design systems, teams, orgs) and theory (affordances as systemic contracts).
### 11. Limitations
Risks: invisibility without signifiers; cognitive load; context dependence.
### 12. Future Work
Adaptive/AI-negotiated affordances; multi-user/shared ecologies; accessibility and situational impairment; environment-embedded devices.
### 13. Conclusion
**Contributions:**
- Affordance-grounded multimodal principles.
- Case analyses of current systems and emerging affordances.
- Speculative designs demonstrating a cross-context affordance grammar.
## Thesis Output
A research-informed, design-led framework of affordance-driven principles for multimodal UI, with speculative prototypes and visualizations demonstrating application across devices and contexts.
## One-Liner (Formal)
Designing for a Multimodal Future: An Affordance-Centered Framework for Cross-Context Experiences.
  `},

  // 19 September 2025
  {
    slug: 'thesis-statement-19-sept',
    category: 'Statements',
    title: 'Thesis Statement: 19 Sept',
    date: '2025-09-19',
    tags: ['Thesis Statement',],
    excerpt: 'Thesis Statement as of 19 September 2025',
    content: `# Designing for a Multimodal Future: An Affordance-Centered Framework for Cross-Context Experiences
## Introduction & Framing
**Motivation: Why multimodality matters in the evolution of UI**
Research Questions
- How can affordances guide multimodal UI design?
- What principles and heuristics can ensure affordances remain consistent and intuitive across devices, modalities, and environments?
- How might speculative design outputs reveal the possibilities and pitfalls of multimodal affordance-driven design?
## Theoretical Foundations
Affordances, Signifiers, Mappings, and Mental Models
- Gibson: ecological affordances.
- Norman: perceived vs. actual affordances; role of signifiers.
- Dourish: embodied affordances.
- Oviatt, Treisman, Clark & Brennan: multimodal cognition.
**Deepening the Affordance Lens**
- Affordances as dynamic contracts, not static properties.
- Plural, overlapping, and sometimes conflicting in multimodality.
- Emotional affordances as affective scaffolds.
**Linking Affordances to Multimodal Contexts**
- Extending across visual, auditory, haptic, and spatial modalities.
- Signifiers as plural yet coherent expressions of affordances.
## Multimodality in Context
**Defining Multimodality**
- Modalities as sensory and interaction channels (visual, auditory, haptic, cross-device, environmental).
- Human communication as naturally multimodal.
**Historical and Contemporary Precedents**
- From command lines to GUIs to touch to conversational agents.
- Today's landscape: smart speakers, wearables, AR/VR, IoT.
**Affordances as a Common Language Across Contexts**
- From interface to environment: spaces as interfaces.
- Affordance continuity across devices and modalities.
- Redundancy vs. complementarity of multimodal affordances.
- Affordances as systemic contracts within ecologies.
## Domains of Exploration
**Design Systems**
- How systems encode affordances across modalities.
- Opportunity: continuity rules across devices and senses.
**Design Language Evolution**
- Skeuomorphism → Flat → Material.
- Next Step: Environmental Affordances
- Toward a multimodal grammar of affordances.
- Rules for consistency, complementarity, and emotional tone across ecologies.
**Emotion in UI**
- Emotional affordances via voice, haptics, and ambient cues.
- Affect as central to intuitive multimodal design.
## Principles & Toolkit
**Affordance-Driven Principles for Multimodal UI**
- Synthesized from ecological, embodied, and cognitive theories.
**Heuristics or Evaluation Framework**
- Structured by modality, tested across ecologies.
## Applied Outputs / Speculative Demonstrations
**Mock-ups and Motion Studies**
**Interaction Scenarios**
- Case studies of continuity across devices.
**Case Study Remix**
- Reimagining existing products with affordance-centered design.
## Discussion & Conclusion
**Implications**
- For designers and HCI theory.
**Limitations**
- Risks of invisibility, complexity, or conflict.
**Future Research**
- Affordances for adaptive AI.
- Social and collective affordances in multi-user ecologies.
## Thesis Output
- A research-informed, design-led framework of affordance-driven principles for multimodal UI.
- Speculative prototypes and visualizations demonstrating application across contexts.
`},



  // 18 September 2025
{
    slug: 'thesis-statement-18-sept',
    category: 'Statements',
    title: 'Thesis Statement: 18 Sept',
    date: '2025-09-18',
    tags: ['Thesis Statement',],
    excerpt: 'Thesis Statement as of 18 September 2025',
    content: `# Designing for the Multimodal Future: An Affordance-Centered Framework for Intuitive User Interfaces.
## Research Aim
To develop a set of affordance-driven principles for designing multimodal interfaces (spanning screen, peripheral, cross-device, and environmental contexts) and demonstrate their application through speculative design outputs.
## Structure
** 1. Introduction & Framing**
- Motivation: Why multimodality matters in the evolution of UI.
- Research questions: How can affordances guide multimodal UI design?
** 2. Theoretical Foundations** 
- Affordances, signifiers, mappings, and mental models (Gibson, Norman, Oviatt).
- Linking affordances to multimodal contexts.
** 3. Multimodality in Context**
- Defining multimodality (visual, auditory, haptic, cross-device).
- Historical and contemporary precedents.
** 4. Domains of Exploration**
- Design Systems: How they encode and extend affordances across modalities.
- Design Language Evolution: Skeuomorphism → Flat → Material → Toward environment-grounded languages.
- Emotion in UI: Emotional affordances in multimodal contexts (haptics, motion, ambient signals).
** 5. Principles & Toolkit**
- Synthesis of affordance-driven principles for multimodal UI.
- Heuristics or evaluation framework, structured by modality.
** 6. Applied Outputs / Speculative Demonstrations**
- Mock-ups, motion studies, and interaction scenarios showing principles in action.
** 7. Discussion & Conclusion**
- Reflection on implications, limitations, and future research.
## Thesis Output
A research-informed, design-led framework of affordance-driven principles for multimodal UI, accompanied by speculative prototypes and visualizations that demonstrate their application across devices and contexts.
`},
];
