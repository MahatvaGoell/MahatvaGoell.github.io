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
    description: 'A passive website security auditor that produces graded inspection reports without attacking the target.',
    highlights: ['5 concurrent inspection agents', 'Deterministic 0–100 security score', 'Optional plain-language AI summary'],
    details: 'Five agents inspect headers, reconnaissance information, TLS, exposed paths and DNS concurrently. Findings feed a deterministic scoring system; an optional Groq layer explains the result in plain language. Checks are passive and intended for sites you own or are authorized to inspect.',
    url: 'https://github.com/TeamElara/SentinelsAI',
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
  },
  {
    number: '03',
    slug: 'pneumonia',
    name: 'Pneumonia Detection',
    subtitle: 'RESNET50 PROJECT — IN PROGRESS',
    stack: ['ResNet50'],
    description: 'An in-progress repository for a pneumonia-detection project. Public documentation and project visuals are forthcoming.',
    highlights: ['Repository created', 'Documentation forthcoming', 'Project visuals forthcoming'],
    details: 'The public repository is currently empty. Implementation details, evaluation results and visuals will be added when they are documented.',
    url: 'https://github.com/MahatvaGoell/Pneumonia-Detection-Using-ResNet50',
    inProgress: true,
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
