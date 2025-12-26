# Ex.07 Design of Interactive Image Gallery
## Date:26-12-2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
gallery.html
<html>

<head>
    <title>Gallery</title>
    <link rel="stylesheet" href="gallery.css">
    <script src="gallery.js" defer></script>

</head>

<body>
    <h1>Image Gallery</h1>
    <img src="image.png" alt="image not found" class="image">




    <div class="gallery-container">
        <img id="gallery-img" src="ben.png.jpeg" alt="Gallery Image">

        <div class="button-group">
            <button id="prev-btn">Previous</button>
            <button id="next-btn">Next</button>
        </div>
    </div>
    <footer class="footer">
        <p>ROHITH G(25018770) &copy; 2025</p>
    </footer>

</body>

</html>
gallery.css

       
        image{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }
        body {
            font-family: Arial, sans-serif;
            background-image: url('image.png');
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;

        }

        h1 {
            background-color: #0e356b;
            color: white;
            width: 100%;
            text-align: center;
            padding: 5px;
            margin-top: 200px;
            
        }

        .gallery-container {
            background-color: rgb(13, 123, 3);
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(3, 3, 3, 0.64);
            text-align: center;
            width: 600px;
            max-width: 500px;

        }

        .gallery-container img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 20px;
            height: 300px;
        }


        .button-group {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        button {
            background-color: #202b8a;
            color: white;
            border: none;
            padding: 10px 30px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #4c4c62;
        }

        .footer {
       background-color: #3e1f8a;
            color: white;
            width: 100%;
            text-align: center;
            padding: 5px;
            margin-top: 150px;
            
        }
gallery.js
 var gallery = [
    { src: "ben.png.jpeg" },
    { src: "diamond.jpeg" },
    { src: "alien x.png.jpeg" },
    { src: "atomix.png.jpeg" },
    { src: "bloxx.png.jpeg" },
    { src: "ghost.jpeg" },
    { src: "way big.png.jpeg" },
    { src: "gravattack.png.jpeg" },
    { src: "hopper.jpeg" },
    { src: "rath.jpeg" },
    { src:"shocksquatch.jpeg"},
    { src:"malware.jpeg"},
    { src:"vilgax.jpeg"}

];

var index = 0;
var imgElement = document.getElementById("gallery-img");

var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

function updateGallery() {
    imgElement.src = gallery[index].src;
}

nextBtn.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

prevBtn.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();

```

## OUTPUT:
![alt text](<Screenshot (55).png>)
![alt text](<Screenshot (56).png>)
![alt text](<Screenshot (57).png>)
![alt text](<Screenshot (58).png>)
![alt text](<Screenshot (59).png>)
![alt text](<Screenshot (60).png>)
![alt text](<Screenshot (61).png>)
![alt text](<Screenshot (62).png>)
![alt text](<Screenshot (63).png>)
![alt text](<Screenshot (64).png>)
![alt text](<Screenshot (65).png>)
![alt text](<Screenshot (66).png>)
![alt text](<Screenshot (67).png>)




## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
