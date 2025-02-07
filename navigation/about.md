---
layout: page
title: About
description: My name is John, often referred to as "Mr M(ort)" in my CompSci classes.
permalink: /about/
---

## As a conversation Starter

Gandhinagar and San Diego
<comment>
Flags are made using Wikipedia images
</comment>

<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [https://en.wikipedia.org/wiki/India]
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - forever"},
        {"flag": "0/02/Flag_of_India.svg", "greeting": "namaste","description": "Indian - Proud"},
    ];

    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

### Journey through Life

Here is what I did at those places

- 🏫 Lots of Elementary Schools in Ganhinagar up till 4th grade and fifth grade here at Turtleback Elemenetry
- 🏫 Middle and High School in Bernado Heights Middle School and 9th grade at Rancho Bernado
- Current School Del Norte Sophmore Year graduating 

### Culture, Family, and Fun
My family is From South India
My Mum is from Andhra Area in Konasemma District I believe
My Dad is from Telangana In Hyderbad

### Facts
- I am 15 year old person who loves cricket yes pls givew me bat and ball I will smash you like Sewhag ![alt text](image-4.png) 
- I freaking love to cook I am foodie 
- I love helping people during hard times 
- I love biolgy ![alt text](image-5.png)
- I love my dad mum and sister they are greatest being and supportive of me during tough times
- I love the West love yellowstoe my favorite game is yellowstone unleashed. 
- I hope you have nice day bye 

- Image gallery 
  - ![alt text](image-6.png)
  - ![alt text](image-7.png)
  - ![alt text](image-8.png)



