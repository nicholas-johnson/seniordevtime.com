# Array Exercise

## Cats

 1. Create an array of cats
 2. Reverse it
 3. Use Array.map to capitalise all of the cats

## CSS Class attribute

I have a params hash that may or may not contain several values. I want to create a valid value for a class attribute.

my params may look like this:

    params = {controller: "hats", action:"bats", version:"mats"}

or it may look like this:

    params = {controller: "hats", action:"bats"}

 1. Create an array containing the controller, action and version values from the params hash.
 2. Remove empty values from the array.
 3. Join the array to construct a string that could be used as a class attribute, like this:

    "hats bats"

or

    "hats bats mats"