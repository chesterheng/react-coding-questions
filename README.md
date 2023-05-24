# React Coding Questions

## Holy Grail

- The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns. The left column contains navigation items, the middle column contains the page contents, and the right column contains ads.
- Implement the Holy Grail layout using just CSS. You shouldn't need to change the HTML too much.
- Requirements
  - Header
    - Stretches horizontally across the whole page.
    - 60px tall.
  - Columns
    - Both the left and right columns have a fixed width of 100px.
    - The center column is fluid-width.
    - All the columns should have the same height, regardless of which column is the tallest.
  - Footer
    - Stretches horizontally across the whole page.
    - 100px tall.
    - The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

## Contact Form

- The form should contain the following elements:
  - Name field
  - Email field
  - Message field. Since the message can be long, using a <textarea> will be more suitable.
  - Submit button
    - Contains the text "Send".
    - Clicking on the submit button submits the form.
- The form and submission should be implemented mostly in HTML.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.

## Counter

- Make the text within the button display the number of times the button has been clicked.