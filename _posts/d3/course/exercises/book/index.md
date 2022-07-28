%article
.book_cover

# D is for Data

## D3 is for Data Driven Documents

- content = %w(intro select append data enter-and-exit svg histogram scatterplot transition events scales color axes ajax parsing paths pie-layout)

-content.each do |c|
=partial :"/d3/course/exercises/#{c}/index"
