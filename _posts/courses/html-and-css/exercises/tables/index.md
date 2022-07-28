%article



# Tables

Tables can be used for presenting tabular data. Create a table using the table tag.

* table - a table
* tr - a row in a table
* th - a table header cell
* td - a table data cell

Say you have a list of people, you might mark it up like this:

```html
  <table>
    <tr>
      <th>
        Name
      </th>
      <th>
        Age
      </th>
    </tr>
    <tr>
      <td>
        Dave
      </td>
      <td>
        42
      </td>
    </tr>
  </table>
```





This would display something like this:

%table{ border:'1' }
%tr
%th
Name
%th
Age
%tr
%td
Dave
%td
42



## Exercise

Mrs. Hat wants to buy a new pet for her grandchildren. Write HTML to create the following useful table that will help her decide which one to get:

%table{ border:'1' }
%tr
%th
%th Swimming Ability
%th Flying Ability
%th Love of Cheese
%th Furriness
%tr
%th
Cat
%td
3
%td
1
%td
8
%td
8
%tr
%th
Kitty
%td
2
%td
4
%td
9
%td
12
%tr
%th
Dog
%td
8
%td
0
%td
6
%td
6


Extend the table with an 'overall score' column.

%aside

## Downloads

* [Code from the board](https://www.dropbox.com/sh/7if9gozhawg9n0q/AACIO-jxFzGiZP1DQL9zNJDxa?dl=1)

