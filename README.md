Example for SolidZORO. Please disregard.

How to reproduce

1. npm install
2. npm run dev
3. navigate to http://localhost:3000/about
4. notice the button is not red
5. In line 29 of MasterLayout.tsx, uncomment line 29
6. refresh localhost page
7. notice how both are now red

Same thing is happening in my app where seemingly random things like this was breaking my app. One was an import of a component which only contained divs broke the styling. Thanks for looking at this SolidZORO!