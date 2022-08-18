const dataHTML: any[] = [
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is the purpose of using HTML?</summary><br>
    <p class="text-center lg:w-3/4">HTML is the language for describing the structure of Web pages.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What are the advantages of HTML?</summary><br>
    <p class="text-center lg:w-3/4">Every browser supports HTML Language.
    Easy to learn and use.
    HTML is light weighted and fast to load.HTML has many tag and attributes which can short your line of code.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What are the disadvantages of HTML?</summary><br>
    <p class="text-center lg:w-3/4">It can create only static and plain pages so if we’d like dynamic pages then HTML isn’t useful.Security features are not good at HTML.Errors can be costly.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What semantic elements do you know?</summary><br>
    <p class="text-center lg:w-3/4"><ul>
    <li>Header tags ${"h1"} through ${"h6"}</li>
    <li>${"blockquote"}</li>
    <li>${"code"}</li>
    <li>${"em"}</li>
    <li>${"header"} :defines a header for the document or a section</li>
    <li>${"footer"} :defines a footer for the document or a section</li>
    <li>${"nav"} :defines navigation links in the document</li>
    <li>${"main"} :defines the main content of a document</li>
    <li>${"section"} :defines a section in the document—the spec defines this as “a thematic grouping of content, typically with a heading," so you can think of it as being like a chapter</li>
    <li>${"article"} :defines an article in the document</li>
    <li>${"aside"} :defines content aside from the page content</li>
    <li>${"address"} :defines the contact information for the author/owner of a document or an article</li>
    <li>${"figure"} :defines self-contained content, like illustrations, diagrams, photos, code blocks, etc.</li>
    </ul>
    </p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What do you know about HTML Entities?</summary><br>
    <p class="text-center lg:w-3/4">An HTML entity is a piece of text ("string") that begins with an ampersand (&) and ends with a semicolon (;) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.

    For e.g., (&)lt(;), (&)gt(;), (&)amp(;) ignore parenthesis </p>

  </details>` },
    
];
const dataCSS: any[] = [
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is flex and CSS grids? Which to use when?</summary><br>
    <p class="text-center lg:w-3/4">Flex and CSS grids are a great way to create a web page layout. However, the major difference here is: what are the features they have, which is more powerful and flexible, and which to use when?

    Flex is 1D. It means with flex you can have either rows and columns not both at the same time. In CSS grids you can have both at the same time. CSS grids are powerful as it has a lot of powerful and useful features which will help in making the complex layout easy to develop and control.
    
    One can merge both by using CSS grids for layout and flex for content.
    
    The interviewer here wants to know if you know the different techniques of layout creation and contrast between them.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>Explain how you maintain your CSS. Assuming you are handling enterprise projects.</summary><br>
    <p class="text-center lg:w-3/4">Managing big CSS could be challenging. One way is to use pre-processor such as SASS or LESS. Both are great pre-processor and helps in managing the CSS files very well. They have features such as partials, variables, nested CSS, etc. It is an effective way to avoid the conflicts in the stylesheet as well as to manage big CSS files too.

    *Here interview is interested to know do you have any experience in managing the CSS. As well as, do you consider this? *</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>Explain the difference between position fixed and sticky</summary><br>
    <p class="text-center lg:w-3/4">The positions are very interesting area when dev wants to develop the complex layouts. We know very well what is fixed position, it will remain 'fixed' to the position we have declared.sticky basically acts like position: relative until an element is scrolled beyond a specific offset, in which case it turns into position: fixed, causing the element to "stick" to its position instead of being scrolled out of view.

    Here interviewer wants to understand your knowledge on the positions. Positions are one of the most interesting part for creating the complex layout and controlling them on the different resolution is an art.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is specificity in CSS?</summary><br>
    <p class="text-center lg:w-3/4">If you have for an HTML element, having two conflicting styles then the browser decides which one to apply based on it’s specificity. Specificity is nothing but set of rules the browser has.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is shadow DOM?</summary><br>
    <p class="text-center lg:w-3/4">CSS is basically global. If i write an style for one element, it can effect other element. The Shadow DOM is a way to attach hidden separated DOM to an element, so that the CSS stays encapsulated.</p>

  </details>` },
    
];
const dataJS: any[] = [
    { info: `<details class="text-center lg:w-3/4">
    <summary>What are the differences between call, apply, and bind?</summary><br>
    <p class="text-center lg:w-3/4">call and apply immediately calls a function while bind creates a new function that can be invoked in the future. Arguments with call are passed in one by one, separated with a comma while apply expects an array as its argument.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is prototype in javascript?</summary><br>
    <p class="text-center lg:w-3/4">Prototypes are the mechanism by which JavaScript objects inherit from another object.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is ECMAScript?</summary><br>
    <p class="text-center lg:w-3/4">is a standard specification for scripting languages. JavaScript is based on ECMAScript.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is strict mode in JS?</summary><br>
    <p class="bg-stone-500/40 text-center lg:w-3/4">it is useful for writing secure JS code. It prevents some bugs from happening and throws more exceptions.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is the DOM?</summary><br>
    <p class="bg-stone-500/40 text-center lg:w-3/4">it stands for Document Object Model. This can be used to access and change the document structure, style, and content.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>Explain the difference between synchronous and asynchronous?</summary><br>
    <p class="bg-stone-500/40 text-center lg:w-3/4">Synchronous is blocking operation while asynchronous is not. Synchronous complete the current code before the next code is executed while asynchronous continue on the next code without completing the current code</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is the difference between null and undefined?</summary><br>
    <p class="bg-stone-500/40 text-center lg:w-3/4">null type is an object that is explicitly assigned to a variable.

    undefined type is undefined where the variable has been declared but has no assigned value.</p>

  </details>` },
    
];
const dataReactJS: any[] = [
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is the virtual DOM?</summary><br>
    <p class="text-center lg:w-3/4">The virtual DOM (Document Object Model) is a programming concept where an ideal or ‘virtual’ representation of the user interface is kept in memory and is synced with the ‘real’ DOM by a library such as ReactDom in a process called reconciliation. This is what enables developers to tell React what state you want the UI to be and React takes care of making sure the DOM matches that state. We don’t have to worry about manually updating the DOM ourselves.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What are the main differences between a class and functional component?</summary><br>
    <p class="text-center lg:w-3/4">A functional component is a plain JavaScript function that accepts props as an argument and returns a React element. Often considered Stateless components as they typically accept data and display it is responsible for rendering UI. Unless you start using hooks, in which case you can access state. It also does not have access to the lifecycle methods mentioned above. Again hooks such as useEffect can be used in place of these lifecycle methods.

    A class component requires you to extend from React.Component and the render() method must be used to return HTML as JSX. They are typically known as Stateful components responsible for implementing logic and state and you can use the lifecycle methods in class components.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is the difference between props and state?</summary><br>
    <p class="text-center lg:w-3/4">Props (short for properties) are a way of passing data from parent to child components. When received from above they are immutable as far as the Component receiving them is concerned, they cannot be changed. While a Component cannot change its props, it is responsible for putting together the props for its child Components.

    State is reserved only for interactivity, or data that changes over time. A Component manages its own state internally, it starts with a default value when a Component mounts and will undergo mutations in time usually generated from user events.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is JSX?</summary><br>
    <p class="text-center lg:w-3/4">Short for JavaScript XML (Extensible Markup Language), it is a syntax extension to JavaScript and it is recommended in React to describe what the UI should look like. JSX produces React ‘elements’ that are rendered to the DOM. It helps as a visual aid when working with UI in JavaScript code since it so closely resembles HTML. JSX converts HTML tags into React elements that are placed on the DOM without having to worry about createElement() or appendChild() methods.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is a state management tool you can use and why might you use it?</summary><br>
    <p class="text-center lg:w-3/4">I have used Redux as a state management tool and it is great for keeping the state of your app in one location. This becomes most beneficial when Components start having to send props down to grandchildren or great-grandchildren, or when multiple components not directly connected together are needing to access the same pieces of state. By using a tool such as Redux you can avoid this prop drilling and give components directly the pieces of the state they need. Another tool you can use is the React Context API which helps solve the same problems as Redux but is more lightweight.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>How do you pass a value from parent to child?</summary><br>
    <p class="text-center lg:w-3/4">Pass the value as a prop!</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>How do you pass a value from child to parent?</summary><br>
    <p class="text-center lg:w-3/4">To pass a value from a child component to its parent component, the parent must first supply a function for the child component to call with the value.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What is prop drilling?</summary><br>
    <p class="text-center lg:w-3/4">Prop drilling is where you pass props from some FirstComponent to another SecondComponent, which does not actually need the data and only passes it to another ThirdComponent and maybe beyond.</p>

  </details>` },
    
];
const dataDjango: any[] = [
    { info: `<details class="text-center lg:w-3/4">
    <summary>What are the features of django?</summary><br>
    <p class="text-center lg:w-3/4">Django is a secure, fast and rapid application development(RAD) framework. It offers/features are:

    ● Auto Admin Interface (CRUD)
    ● Templating
    ● Form handling
    ● Internationalization
    ● Session, user management, role-based permissions, messages
    ● Object-relational mapping (ORM)</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>Is Django an MVC framework?</summary><br>
    <p class="text-center lg:w-3/4">Django follows MTV pattern/architecture. MTV stands for Model, Template, View.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>How to write views in Django?</summary><br>
    <p class="text-center lg:w-3/4">There are 2 primary methods to write views in Django. First is the Django function-based views and second is Django's class-based views. Function-based views are simple and are a better option to go for if you know that you have to create less than 8-10 views.</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>How to create a model in Django?</summary><br>
    <p class="text-center lg:w-3/4">Models in Django inherit from the models class. The class offers multiple fields to work with. CharField(max_length=128)(tell the interviewer that max_length parameter is not optional)
    ImageField() - tell them that the ImageField inherits from FileField()
    BooleanField() - tell them it’s best to practice to use a default value for a boolean field.
    IntegerField() - Also mention the PositiveIntegerField()
    DateTimeField() - Tell them that you can pass auto_now_add=True as a parameter to get current timestamp saved into datetimefield()</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>How would you check your Django installation version?</summary><br>
    <p class="text-center lg:w-3/4">python -m django --version</p>

  </details>` },
    { info: `<details class="text-center lg:w-3/4">
    <summary>What does makemigrations command do?</summary><br>
    <p class="text-center lg:w-3/4">It creates migrations for the models that you define in models.py file.</p>

  </details>` },
    
];
const dataEnglish: any[] = [
    { info: `<br>
    <p class="text-center lg:w-3/4">"Could you run over that point again" (run over : quickly explain)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "Your work is praiseworthy" (Çalışmanız takdire şayan)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "I'm looking for a way out" (bir çıkış yolu arıyorum)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "If you don't stand for something, you'll fall for anything." (do something specified otherwise you can't do anything)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"After 14 years living and working in this country, she thinks it's time to call it a day."(stop working, make it later)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "The kids went bananas when they heard of the picnic."(to describe the feeling of anger, craziness, excitement or enthusiasm.)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "The decision taken by the referee was fair and square."(to describe something which is honest and fair)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"Don't beat about the bush, come to the point."(don't tell a long story, just say what you want)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"With enough money, I'll be able to have my own bussiness one day."(Future wishes)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "I haven't met her but I know her by sight"(I'm familiar her appearance.)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "I swear to God, positive thinking can achieve the impossible"(Tanrıya yemin ederim.... )</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"You mind your own bussiness" (kendi işine bak, kendi işini yap)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4"> "John set aside some money for his kid's future." (to seperate to reserve sth for a particular aim)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"If you avoid failure, you also avoid success." (Success is not possible without failure)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"You're gonna figure it out. Like you always have." (Believe, you can do it)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"As easy as pie" (It's not a difficult problem. In fact, it's as easy as pie.)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"Be all ears" (Tell me what happened yesterday. I'm all ears.)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"I knew I was in danger and that, at a word from its owner, the dog was ready to attack." (my situation : if the dog's owner orders, it instantly attacks me.)</p>

  ` },
    { info: `<br>
    <p class="text-center lg:w-3/4">"Our goal is to have all candidates have a pleasant experience and spend their time with us, in a constructive manner.</p>

  ` },
    
];


const btnHTML: HTMLElement | any = document.querySelector('.btnHTML');
const qaHTML: HTMLElement | any = document.querySelector('.qaHTML');
const btnCSS: HTMLElement | any = document.querySelector('.btnCSS');
const qaCSS: HTMLElement | any = document.querySelector('.qaCSS');
const btnJS: HTMLElement | any = document.querySelector('.btnJS');
const qaJS: HTMLElement | any = document.querySelector('.qaJS');
const btnReactJS: HTMLElement | any = document.querySelector('.btnReactJS');
const qaReactJS: HTMLElement | any = document.querySelector('.qaReactJS');
const btnDjango: HTMLElement | any = document.querySelector('.btnDjango');
const qaDjango: HTMLElement | any = document.querySelector('.qaDjango');
const btnEnglish: HTMLElement | any = document.querySelector('.btnEnglish');
const qaEnglish: HTMLElement | any = document.querySelector('.qaEnglish');

const getDataHTML = () => {
    
    const dataHTMLLength: number = dataHTML.length;
    const randomNum: number = Math.floor((Math.random()) * dataHTMLLength)
    qaHTML.innerHTML = dataHTML[randomNum].info;
};

const getDataCSS = () => {
    
    const dataCSSLength: number = dataCSS.length;
    const randomNum: number = Math.floor((Math.random()) * dataCSSLength)
    qaCSS.innerHTML = dataCSS[randomNum].info;
};

const getDataJS = () => {
    
    const dataJSLength: number = dataJS.length;
    const randomNum: number = Math.floor((Math.random()) * dataJSLength)
    qaJS.innerHTML = dataJS[randomNum].info;
};

const getDataReactJS = () => {
    
    const dataReactJSLength: number = dataReactJS.length;
    const randomNum: number = Math.floor((Math.random()) * dataReactJSLength)
    qaReactJS.innerHTML = dataReactJS[randomNum].info;
};

const getDataDjango = () => {
    
    const dataDjangoLength: number = dataDjango.length;
    const randomNum: number = Math.floor((Math.random()) * dataDjangoLength)
    qaDjango.innerHTML = dataDjango[randomNum].info;
};

const getDataEnglish = () => {
    
    const dataEnglishLength: number = dataEnglish.length;
    const randomNum: number = Math.floor((Math.random()) * dataEnglishLength)
    qaEnglish.innerHTML = dataEnglish[randomNum].info;
};


btnHTML.addEventListener('click', getDataHTML);
btnCSS.addEventListener('click', getDataCSS);
btnJS.addEventListener('click', getDataJS);
btnReactJS.addEventListener('click', getDataReactJS);
btnDjango.addEventListener('click', getDataDjango);
btnEnglish.addEventListener('click', getDataEnglish);








