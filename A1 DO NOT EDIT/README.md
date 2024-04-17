# 22
Assignment work by the flaming hot "feeling 20 twoo" group in KIT202

## A1
Workload distribution:

- HD: Commander of Consistency: CSS + Site Navigation
- PJ: Home page, archived
- SK: login, create, about
- LJ: registration, js validation

Timeline:

- meeting @morris miller library see messenger at 12:30
- *21/3*
- *4/4*
  - github mongle jungle
- 11/4: login validation, fine tuning
  - LJ: registration validation
  - SK: create validation
- 18/4: qc, handin
- **19/4 IS HANDIN**

### Content
- Site navigation
  - [x] ~~logo~~
  - [x] ~~Create a site menu (top-level navigation) that provides links to each of the pages~~
  - [x] ~~Apply CSS styling to visually indicate when menu items have focus (i.e., are hovered over) and which menu item is currently active (i.e., which page is displayed)~~
  - [x] ~~consistently across all pages~~

- [Homepage](index.html)
  - [X] ~~first page visitors see~~
  - [X] ~~display four blogplosts  in reverse chronological order (i.e., the most recent post first).~~
    All posts include:
    - [X] ~~post title~~
    - [X] ~~post creation date with day, month, and year components~~
    - [X] ~~post tags/keywords~~
    - [X] ~~post content~~
  - [X] ~~styled~~
  - [X] ~~at least 200 words per post, [no need to make sense](https://loremipsum.io)~~
- [Archive page](archive.html)
  - [X] ~~5 archived posts different from the previous four~~
  - [X] ~~Archived posts should also be listed in reverse chronological order~~
  - [X] ~~All archived posts should include (min 200 words):~~
    - [X] ~~The content of each archived post should include at least the following:~~
    - [X] ~~post title~~
    - [X] ~~post creation date with day, month, and year components~~
    - [X] ~~post tags/keywords~~
    - [X] ~~a link, button or similar control allowing the user to read the full post~~
  - [X] ~~this button: Clicking this link/button should cause the post content to be displayed beneath, which you can achieve using CSS and JavaScript (and animation too if you choose). A link/button should also be provided to hide the content~~
 - [login page](login.html)
    - [X] ~~The page should include a form element with input fields and labels for a username, a password, and a login button~~
    - [X] ~~Include JavaScript field validation to prevent the form from being submitted if any of the fields are empty (see the common requirements for form handling above)~~
    - [X] ~~A register link/button should be included for those that are not current members (see next)~~
    - [X] ~~Remember, submitting the form should take the user back to the homepage; implementing a functional login system will be part of Assignment 2~~
- [registration page](registration.html)
  - [X]  ~~Decision point: Your group will need to decide between implementing user registration on the Login page by changing the displayed form (with JavaScript) or directing the user to a separate registration page (register.html)~~
  Whichever option you choose, the expected functionality of the registration form is as follows: The form should include input fields and associated labels for
  - [X] ~~username,~~
  - [X] ~~email address,~~
  - [X] ~~password, and~~
  - [X] ~~confirm password,~~
  - [X] ~~together with a button to register,~~
  - [X] ~~and a button to reset (clear) the form fields values~~
  Within your group, decide on a password policy (a set of rules governing password requirements)
  Your policy should incorporate a minimum length and a required combination of letters (uppercase and lowercase), digits (0–9), or symbols/special characters
  - [X] ~~policy (characters 2-22, one number)~~
  Include JavaScript field validation to prevent the registration form from being submitted if:
  - [X] ~~any of the fields are empty~~
  - [X] ~~the email address field does not contain a valid email address (i.e., is not well-formed; you do not need to check if exists) (check if @ is present)~~
  - [X] ~~the password and confirm password fields do not match (i.e., do not contain the same value)~~
  - [X] ~~the password does not conform to your password policy~~
  - [X] ~~Form validation (and behaviour upon successful validation/submission) should operate as specified for all forms (refering to login and registration)~~  
  - [X] ~~Clicking the reset button should clear all form field values~~
- [create post](create.html)
  - [X]  ~~The page should include a form element with input fields and labels for the post’s title, tags/keywords, and content with a button to create the post and a button to reset (clear) the form~~
  - [X]  ~~Include JavaScript field validation to prevent the form from being submitted if:~~
    - [X] ~~any of the fields are empty (yes, the author must always supply at least one tag/keyword)~~
    - [X] ~~the title field exceeds 80 characters~~
    - [X] ~~As with the other forms, built-in HTML validation will need to be disabled Form validation (and behaviour upon successful validation/submission) should operate as specified for all forms~~
  - [X] ~~Clicking the reset button should clear all form field values~~
- [About page](about.html)
  - [X] ~~Include the names and student IDs of each group member~~
  - [X] ~~Include a reference list for all assets used that have not been created by your group (e.g., images, fonts, icons, etc.)~~
  - [X] ~~References to web resources should include the link to the specific page used and not just the top-level site~~
 
### STYLE REQUIREMENTS
All pages should adhere to the following style requirements and function correctly in the Chrome browser.  Templates and prebuilt themes are prohibited: your design should represent an original creation by your group.

HTML
Use only valid HTML5 (do not use non-standard elements). You can use the W3C’s validator to check your pages
Include a title and author metdata in the <head> of each page. The author metadata value should be a list of each group member’s name
Adopt a sensible semantic page structure (do not use <div> and <span> for everything)
CSS
Use only raw CSS (libraries, frameworks, and preprocessors are prohibited)
Use external style sheets (including them in HTML pages with the link element)
Avoid inline CSS styles as much as possible
If an inline style is used, a HTML comment should be included justifying why
Avoid using the CSS !important flag
Use ID and class selectors appropriately: IDs for a unique elements and classes for multiple elements (or situations where they could apply to multiple elements)
JavaScript
Use only raw JavaScript (no libraries [this includes JQuery] or frameworks)
All variables should be declared using let or const (avoid var)
Minimise the use of global variables
Variable and function names should be meaningful and consistently adopt a camelCase or snake_case style
Use external script files (including them in relevant HTML pages with the script element)
In all cases, code indentation should be applied consistently (use either 2 or 4 spaces).
 
**Considerations for HD extensions**
Consider ways to embellish or expand on aspects of your blog beyond the core requirements specified above. This is an opportunity for your group to be creative and explore additional techniques that build on the core concepts discussed in workshops and tutorials. Successfully adding features to your website does not guarantee an HD outcome, but is necessary to reach it.

Some suggested embellishments include:

Responsive design (e.g., with CSS Flexbox or Grid) so the site dynamically adapts to different browser sizes
-- Sticky navigation so the menu remains pinned to the top or side of the page when scrolled
-- Scroll-to-top buttons that appear when the page is scrolled past a certain point
CSS animations for the reveal of post content on the archive page
A choice between light and dark CSS themes that can be toggled by the user
You may choose an embellishment not listed above provided it involves raw HTML/CSS/JavaScript and goes beyond the core requirements. The use of libraries is prohibited. If in doubt, consult with your tutor or the unit coordinator.


**CSS and Design Sources and References:**
Logo Generated from DALL-E 
Colour palette created with Adobe Colour
Scroll to top icon from https://icons8.com/icons/set/scroll-top--static--c-adc8d9


Sticky header : https://developer.chrome.com/blog/stick-your-landings-position-sticky-lands-in-webkit
Flexbox basics: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
Flex Direction: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
Scroll to top: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
DOMContentLoaded: https://stackoverflow.com/questions/39993676/code-inside-domcontentloaded-event-not-working, 

https://javascript.info/onload-ondomcontentloaded


https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

Sticky navigation so the menu remains pinned to the top or side of the page when scrolled
Scroll-to-top buttons that appear when the page is scrolled past a certain point
CSS animations for the reveal of post content on the archive page
A choice between light and dark CSS themes that can be toggled by the user
You may choose an embellishment not listed above provided it involves raw HTML/CSS/JavaScript and goes beyond the core requirements. The use of libraries is prohibited. If in doubt, consult with your tutor or the unit coordinator.
