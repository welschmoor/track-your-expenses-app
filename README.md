# `Expense Tracker`

![alt text](https://repository-images.githubusercontent.com/437014721/83c61d6b-8e31-475d-8dc2-7cdd6f950e9a)


## General Info, Links to a working App
Visit the App here (use Google Chrome! as Firefox does not have the font baldness and one other CSS property that I have used.):

Mirror: https://expense-tracker-c6eb2.web.app/

Mirror: https://nervous-banach-a18feb.netlify.app/

Woohoo, finished a fullstack app. You can sign up, log in, add expenses, remove them (doubleclick) and it will show the total sum, and also plot expenses onto a graph. 

## Styling

A lot of details went into styling it. Dark/Light modes are not yet implemented, but it would be a quick job, because the code for it is already there.

All CSS is hand-made, no libraries, using styled-components.





### Just some things nobody reads:
So, I wanted to add a **simple** chart after I was finished with the app. Can't be that hard right?
So I tried Chart.js and it didn't work. Then I tried Plotly.js, and it didn't work either. Apparently it only works with class components, so I wrote it in class and it still didn't work.

So I said fek it, let's use D3, because everyone uses it and about 5 hours later I had a simple chart lol. I've never had so many issues. And after I had a good looking something glued up, the chart would not update correctly when data changed so I had to fight that too... But in the end I got it working.

## To Do
responsiveness

dark mode

loading spinner

#### `The End`

