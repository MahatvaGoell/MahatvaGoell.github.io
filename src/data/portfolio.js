export const profile = {
  name: 'Mahatva Goel',
  email: 'goelmahatva@gmail.com',
  github: 'https://github.com/MahatvaGoell',
  linkedin: 'https://www.linkedin.com/in/mahatva-goel24/',
}

export const projects = [
  {
    number: '01',
    slug: 'sentinels',
    name: 'Sentinels',
    subtitle: 'PASSIVE WEBSITE SECURITY AUDITOR',
    stack: ['Python', 'FastAPI', 'asyncio', 'Next.js', 'Tailwind'],
    description: 'A passive website security auditor that turns findings into reviewable fixes without attacking the target.',
    highlights: ['5 concurrent inspection agents', 'Deterministic 0–100 security score', 'GitHub fixes created on a separate branch', 'Optional plain-language AI summary'],
    details: 'Five agents inspect headers, reconnaissance information, TLS, exposed paths and DNS concurrently. Findings feed a deterministic scoring system; an optional Groq layer explains the result in plain language. Users can connect GitHub to create remediation changes on a separate branch, keeping the default branch available for review and merge. Checks are passive and intended for sites you own or are authorized to inspect.',
    url: 'https://github.com/TeamElara/SentinelsAI',
    caseStudy: {
      role: 'Security engineering',
      year: '2026',
      sections: [
        { id: 'problem', label: 'Problem', body: 'Security checks are most useful when they make a site easier to understand without behaving like an attack. But a report alone still leaves the user to translate findings into code changes. Sentinels turns public, read-only signals into an inspection report and a reviewable path to remediation for sites an operator owns or is authorised to inspect.' },
        { id: 'workflow', label: 'Workflow', body: 'Five agents run concurrently so a single scan can inspect several independent signals at once. Once a user connects their GitHub account, suggested remediation can be created in a separate branch for review.', points: ['Headers: CSP, HSTS, X-Content-Type-Options and related headers', 'Recon: site technology and sensitive paths disclosed by robots.txt', 'TLS, exposure and DNS: certificate information, public paths, SPF and DMARC', 'GitHub-connected changes are staged on a non-default branch'] },
        { id: 'decision', label: 'Key decision', decision: { chose: 'Passive, browser-like inspection only', rejected: ['SQL injection, brute force and fuzzing', 'Form submission or denial-of-service traffic'] }, body: 'The boundary is intentional: every check reads information already presented publicly. That keeps the workflow useful for an authorised review while avoiding harmful probe behaviour.' },
        { id: 'state', label: 'What it delivers', body: 'Findings feed a deterministic 0–100 score and A–F grade, so the same target produces the same result. An optional Groq-powered layer can translate the report into plain language; the core report still works without an AI key. For users who connect GitHub, fixes are created on a separate branch rather than applied directly to the default branch.', points: ['Live progress through Server-Sent Events', 'PDF report export using Playwright', 'GitHub-connected, branch-based remediation workflow', 'FastAPI backend with a Next.js and Tailwind interface'] },
      ],
    },
  },
  {
    number: '02',
    slug: 'gait',
    name: 'Gait Analysis',
    subtitle: 'FMG + INSOLE SIGNAL PROCESSING',
    stack: ['Python', 'NumPy', 'Pillow', 'FMG', 'Insole data'],
    description: 'A research workflow that aligns force-myography and insole signals, then prepares recordings for automatic gait-phase segmentation.',
    highlights: ['Per-recording signal alignment', '100 Hz segmented exports', 'Provisional six-phase gait labels'],
    details: 'FMG and insole streams are aligned through trigger events. The workflow preserves raw recordings, flags estimated samples, and exports graphs and segmented signals. Current phase labels are provisional; review and model training are the next stages.',
    url: 'https://github.com/MahatvaGoell/Gait-Analysis-',
    caseStudy: {
      role: 'Research data workflow',
      year: '2026',
      sections: [
        { id: 'problem', label: 'Problem', body: 'Walking recordings combine force-myography and insole streams that need to be aligned before they can be inspected or used for phase segmentation. Real recordings also contain missing samples, timestamp resets and inconsistent triggers that should be retained and documented rather than hidden.' },
        { id: 'workflow', label: 'Workflow', body: 'Each trial preserves its own elapsed recording time. Trigger events align the FMG and insole signals, while pressure-cycle landmarks and FMG activity help estimate the walking sequence.', points: ['Eight FMG channels, centre of pressure and vGRF graphed per recording', 'Six provisional phases: QS, GI, SSSW, SLT, SSLW and GT', '100 Hz exports include labels and flags for estimated samples'] },
        { id: 'decision', label: 'Key decision', decision: { chose: 'Per-recording timing estimates with visible missing-data flags', rejected: ['One fixed timing template for every participant', 'Treating incomplete recordings as fully observed data'] }, body: 'The workflow keeps original finite source values unchanged. When a value has to be estimated for a completed plot, the estimate is documented and flagged in the exported data.' },
        { id: 'state', label: 'Current state', body: 'The saved phase labels are signal-derived training candidates, not independently verified clinical or ground-truth annotations. The next stage is review, then a participant-aware sequence-segmentation model trained on the reviewed labels.', points: ['Completed graph folders for ten dataset folders', 'Verification files for Subjects 01–04', 'Review sheets and synchronisation reports kept alongside exports'] },
      ],
    },
  },
  {
    number: '03',
    slug: 'pneumonia',
    name: 'Pneumonia Detection',
    subtitle: 'RESNET50 + GRAD-CAM PROTOTYPE',
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Gradio', 'ResNet50'],
    description: 'A chest X-ray classification prototype using ResNet50 transfer learning with Grad-CAM visual explanations.',
    highlights: ['Normal / pneumonia classification', 'Grad-CAM heatmap visualisations', 'Gradio interface with confidence output'],
    details: 'This is a deep-learning prototype built around ResNet50 transfer learning for chest X-ray classification. Grad-CAM visualisations expose the areas used by the model in a prediction. It is presented as a technical project, not a clinical diagnostic tool.',
    url: 'https://github.com/MahatvaGoell/Pneumonia-Detection-Using-ResNet50',
    caseStudy: {
      role: 'Deep learning prototype',
      year: '2026',
      sections: [
        { id: 'problem', label: 'Problem', body: 'The project explores a reproducible workflow for classifying chest X-ray images into normal and pneumonia classes with transfer learning. It is a technical prototype rather than a clinical diagnostic tool.' },
        { id: 'workflow', label: 'Workflow', body: 'A ResNet50 model is trained and used for binary classification. The repository separates training, prediction and Grad-CAM generation into dedicated scripts.', points: ['train.py for model training', 'predict.py for inference', 'gradcam.py for model visualisation', 'app.py for the Gradio interface'] },
        { id: 'decision', label: 'Key decision', decision: { chose: 'Grad-CAM alongside prediction output', rejected: ['A confidence score without visual context'] }, body: 'The interface pairs the predicted class and confidence output with a heatmap of the image regions used by the model, making the model behaviour easier to inspect during development.' },
        { id: 'state', label: 'Current state', body: 'The repository documents the stack, training and launch workflow, plus a Gradio interface. It does not publish a validated clinical evaluation, so the project should be read as an engineering prototype and learning exercise.', points: ['TensorFlow and Keras implementation', 'OpenCV, NumPy and Matplotlib support', 'Chest X-ray Pneumonia dataset referenced in the repository documentation'] },
      ],
    },
  },
]

export const stackRows = [
  ['PYTHON', 'REACT', 'FASTAPI', 'TENSORFLOW', 'C++', 'SQL', 'FLASK', 'OPENCV', 'SCIKIT-LEARN'],
  ['LANGGRAPH', 'KERAS', 'PANDAS', 'GRADIO', 'STREAMLIT', 'NUMPY', 'SPACY', 'GIT', 'LINUX'],
]

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'C++', 'Java', 'C', 'JavaScript', 'SQL'] },
  { label: 'Developer tools', items: ['VS Code', 'Google Cloud Platform', 'Git', 'GitHub', 'Jupyter Notebook', 'Linux', 'Postman'] },
  { label: 'Technologies / frameworks', items: ['FastAPI', 'Flask', 'React.js', 'TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'spaCy', 'LangGraph', 'Gradio', 'Streamlit'] },
]

export const achievements = [
  { value: '01', title: 'AMITY IDEATHON 2026', statement: 'FIRST\nPOSITION', note: 'AI, Digital Technologies & Smart Systems' },
  { value: '12', title: 'OMNIKON NATIONAL HACKATHON 2026', statement: '12TH\nNATIONWIDE', note: 'Among 3000 submitted models.' },
  { value: 'TOP\n6%', title: 'ADOBE HACKATHON 2026', statement: 'QUALIFIED', note: 'Qualified through a competitive national-level selection process.' },
]
