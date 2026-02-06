let foundations = [
  "How This Course Will Work",
  "Introduction to Web Development",
  "Motivation and Mindset",
  "Asking For Help",
  "Join the Odin Community",
  "Computer Basics",
  "How Does the Web Work?",
  "Installation Overview",
  "Installations",
  "Text Editors",
  "Command Line Basics",
  "Setting up Git",
  "Introduction to Git",
  "Git Basics",
  "Introduction to HTML and CSS",
  "Elements and Tags",
  "HTML Boilerplate",
  "Working with Text",
  "Lists",
  "Links and Images",
  "Commit Messages",
  "Project: Recipes",
  "Intro to CSS",
  "The Cascade",
  "Inspecting HTML and CSS",
  "The Box Model",
  "Block and Inline",
  "Introduction to Flexbox",
  "Growing and Shrinking",
  "Axes",
  "Alignment",
  "Project: Landing Page",
  "Variables and Operators",
  "Installing Node.js",
  "Data Types and Conditionals",
  "JavaScript Developer Tools",
  "Function Basics",
  "Problem Solving",
  "Understanding Errors",
  "Project: Rock Paper Scissors",
  "Clean Code",
  "Loops and Arrays",
  "DOM Manipulation and Events",
  "Revisiting Rock Paper Scissors",
  "Project: Etch-a-Sketch",
  "Object Basics",
  "Project: Calculator",
  "Choose Your Path Forward"
]
let intermediates = ["Intermediate HTML Concepts",
  "Introduction",
  "Emmet",
  "SVG",
  "Tables",
  "Default Styles",
  "CSS Units",
  "More Text Styles",
  "More CSS Properties",
  "Advanced Selectors",
  "Positioning",
  "CSS Functions",
  "Custom Properties",
  "Browser Compatibility",
  "Frameworks and Preprocessors",
  "Form Basics",
  "Form Validation",
  "Project: Sign-up Form",
  "Introduction to Grid",
  "Creating a Grid",
  "Positioning Grid Elements",
  "Advanced Grid Properties",
  "Using Flexbox and Grid",
  "Project: Admin Dashboard"
]
let javascripts = [
  "How This Course Will Work",
  "A Quick Review",
  "Organizing Your JavaScript Code Introduction",
  "Objects and Object Constructors",
  "Project: Library",
  "Factory Functions and the Module Pattern",
  "Project: Tic Tac Toe",
  "Classes",
  "ES6 Modules",
  "npm",
  "Webpack",
  "Project: Restaurant Page",
  "Revisiting Webpack",
  "JSON",
  "OOP Principles",
  "Project: Todo List",
  "Linting",
  "Dynamic User Interface Interactions",
  "Form Validation with JavaScript",
  "What is ES6?",
  "Asynchronous Code",
  "Working with APIs",
  "Async and Await",
  "Project: Weather App",

  "Testing Basics",
  "Project: Testing Practice",
  "More Testing",
  "A Very Brief Intro to CS",
  "Recursive Methods",
  "Project: Recursion",
  "Time Complexity",
  "Space Complexity",
  "Common Data Structures and Algorithms",
  "Project: Linked Lists",
  "HashMap Data Structure",
  "Project: HashMap",
  "Project: Binary Search Trees",
  "Project: Knights Travails",
  "A Deeper Look at Git",
  "Working with Remotes",
  "Using Git in the Real World",
  
  "Project: Battleship",
  "Conclusion"
]
let advances = [
  "Transforms",
  "Transitions",
  "Keyframes",
  "Introduction to Web Accessibility",
  "The Web Content Accessibility Guidelines (WCAG)",
  "Semantic HTML",
  "Accessible Colors",
  "Keyboard Navigation",
  "Meaningful Text",
  "WAI-ARIA",
  "Accessibility Auditing",
  "Introduction to Responsive Design",
  "Natural Responsiveness",
  "Responsive Images",
  "Media Queries",
  "Project: Homepage"
]
let reacts = [
  "How This Course Will Work",
  "Introduction To React",
  "Setting Up A React Environment",
  "React Components",
  "What Is JSX?",
  "Rendering Techniques",
  "Keys In React",
  "Passing Data Between Components",
  "Introduction To State",
  "More On State",
  "Project: CV Application",
  "How To Deal With Side Effects",
  "Project: Memory Card",
  "Class Based Components",
  "Component Lifecycle Methods",
  "Introduction To React Testing",
  "Mocking Callbacks And Components",
  "Type Checking With PropTypes",
  "React Router",
  "Fetching Data In React",
  "Styling React Applications",
  "Project: Shopping Cart",
  "Managing State With The Context API",
  "Reducing State",
  "Refs And Memoization",
  "Conclusion"
]
let databases = ['Databases', 'DataBases and SQL', 'Project: SQL Zoo']
let nodes = [
  "Introduction to the Back End",
  "Introduction: What is NodeJS?",
  "Getting Started",
  "Debugging Node",
  "Project: Basic Informational Site",
  "Environment Variables",
  "Introduction to Frameworks",
  "Introduction to Express",
  "Routes",
  "Controllers",
  "Views",
  "Project: Mini Message Board",
  "Deployment",
  "Forms and Data Handling",
  "Installing PostgreSQL",
  "Using PostgreSQL",
  "Project: Inventory Application",
  "Authentication Basics",
  "Project: Members Only",
  "Prisma ORM",
  "Project: File Uploader",
  "API Basics",
  "API Security",
  "Project: Blog API",
  "Testing Routes and Controllers",
  "Testing Database Operations",
  "Project: Where's Waldo (A Photo Tagging App)",
  "Project: Messaging App",
 
  "Project: Odin-Book",
  "Conclusion"
]
let hires = [
  "How This Course Will Work",
  "Professional Networking",
  "Strategy",
  "It Starts with YOU",
  "What Companies Want",
  "What You Can Do to Prepare",
  "Project: Building Your Personal Website",
  "Collecting Job Leads",
  "Qualifying Job Leads",
  "Project: Building Your Resume",
  "Applying for Web Development Jobs",
  "Preparing to Interview and Interviewing",
  "Handling a Job Offer",
  "Conclusion"
]

const foundationsModule = document.querySelector('.foundations')
const nodePath = document.querySelector('.nodepath');
const intermediateModule = document.querySelector('.intermediate');
const javascriptModule = document.querySelector('.javascript');
const advancedModule = document.querySelector('.advanced');
const reactModule = document.querySelector('.react');
const databasesModule= document.querySelector('.databases');
const nodeModule =document.querySelector('.node');
const hiredModule = document.querySelector('.hired');



console.log("Foundations:", foundations.length);
console.log("Intermediates:", intermediates.length);
console.log("Javascripts:", javascripts.length);
console.log("Advances:", advances.length);
console.log("Reacts:", reacts.length);
console.log("Databases:", databases.length);
console.log("Nodes:", nodes.length);
console.log("Hires:", hires.length);

const totalItems =
  foundations.length +
  intermediates.length +
  javascripts.length +
  advances.length +
  reacts.length +
  databases.length +
  nodes.length +
  hires.length;

console.log("Total items:", totalItems);


//foundations

foundations.forEach((foundation, index) => {
    
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper')
    
   

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = foundation;
    check.value = foundation;
   
    const label = document.createElement('label')
    label.setAttribute('for', foundation);
    label.textContent = foundation;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    foundationsModule.appendChild(wrapper);

    
})

//intermediate

intermediates.forEach((intermediate) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
    
   

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = intermediate;
    check.value = intermediate;
   
    const label = document.createElement('label')
    label.setAttribute('for', intermediate);
    label.textContent = intermediate;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    intermediateModule.appendChild(wrapper);

})

javascripts.forEach((javascript) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
    
    
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = javascript;
    check.value = javascript;
   
    const label = document.createElement('label')
    label.setAttribute('for', javascript);
    label.textContent = javascript;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    javascriptModule.appendChild(wrapper);

   
})
//advanced html and css
advances.forEach((advance) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
    
   
    
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = advance;
    check.value = advance;
   
    const label = document.createElement('label')
    label.setAttribute('for', advance);
    label.textContent = advance;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    advancedModule.appendChild(wrapper);

})

//react
reacts.forEach((react) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
   
   

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = react;
    check.value = react;
   
    const label = document.createElement('label')
    label.setAttribute('for', react);
    label.textContent = react;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    reactModule.appendChild(wrapper);

})
//database
databases.forEach((database) => {
   const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
   
   

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = database;
    check.value = database;
   
    const label = document.createElement('label')
    label.setAttribute('for', database);
    label.textContent = database;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    databasesModule.appendChild(wrapper);

})
//node
nodes.forEach((node) => {
   const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
    
   

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = node;
    check.value = node;
   
    const label = document.createElement('label')
    label.setAttribute('for', node);
    label.textContent = node;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    nodeModule.appendChild(wrapper);

})

//hired

hires.forEach((hire) => {
   const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'hidden wrapper');
    
 
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('class', 'checkbox');
    check.id = hire;
    check.value = hire;
   
    const label = document.createElement('label')
    label.setAttribute('for', hire);
    label.textContent = hire;

    wrapper.appendChild(check);
    wrapper.appendChild(label)
    hiredModule.appendChild(wrapper);
  
})


    

let bar = document.querySelector('.progress');
let checkboxes = document.querySelectorAll('.checkbox');
const totalDisplay = document.querySelector('.total');
totalDisplay.setAttribute('class', 'total')
const percent = document.querySelector('.percent')


function updateProgress() {
  let checkedCount = document.querySelectorAll('.checkbox:checked').length;
  let total = checkboxes.length;
  
  let progressValue =  (checkedCount / total)  * bar.max// scale to max
  console.log(checkedCount);
  totalDisplay.textContent = `${checkedCount} / ${total}`
  percent.textContent = ((checkedCount / total) * 100).toFixed(2) + '%';
//   localStorage.setItem('updateProgress', progressValue)

 localStorage.setItem('updateProgress', JSON.stringify({
  checked: checkedCount,
  total: total,
  progress: progressValue
}));
 bar.value = progressValue;
}

checkboxes.forEach(check => {
  check.addEventListener('change', () => {
    let states = {};
    checkboxes.forEach(box => {
        states[box.id] = box.checked;
    });
    localStorage.setItem('checkBoxStates', JSON.stringify(states));
    updateProgress();
  } );
});



const saved = localStorage.getItem('updateProgress');
if (saved) {
  const retrieveProgress = JSON.parse(saved);
  bar.value = retrieveProgress.progress;
  console.log(`Restored: ${retrieveProgress.checked} of ${retrieveProgress.total} checked`);
}
const savedStates = localStorage.getItem('checkBoxStates');
if (savedStates) {
  const states = JSON.parse(savedStates);
  checkboxes.forEach(box => {
    if (states[box.id]) {
      box.checked = states[box.id];
    }
  });
  updateProgress(); // update bar to reflect restored state
}
