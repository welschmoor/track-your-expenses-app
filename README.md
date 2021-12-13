# `Expense Tracker`

![alt text](https://repository-images.githubusercontent.com/437014721/83c61d6b-8e31-475d-8dc2-7cdd6f950e9a)

Visit the App here (use Google Chrome!):
https://expense-tracker-c6eb2.web.app/

Use Google Chrome !!! as Firefox does not have the font baldness and one other CSS property that I have used.

Woohoo, finished a fullstack app. You can sign up, log in, add expenses and it will show the total sum, and it will plot expenses onto a graph. 

A lot of detail went into styling it. Dark/Light modes are not yet implemented, but it would be a quick job, because the code for it is already there.


### Just some things nobody reads:
So, I wanted to add a simple chart after I was finished with the app. Can't be hard right?
So I tried Chart.js and it didn't work. Then I tried Plotly.js, and it didn't work either. Apparently it only works with class components, so I wrote it in class and it still didn't work.

So I said fek it, let's use D3, because everyone uses it and about 5 hours later I had a simple chart lol. Chart would not update correctly when data changed so I had to fight that too... But in the end I got it to work.


#### `The End`

