document.addEventListener("DOMContentLoaded", () => {
  const clubs = document.querySelector(".clubs");
  const hobbies = document.querySelector(".hobbies");
  const facts = document.querySelector(".facts");
  const content = document.querySelector(".content");
  const expanded = document.getElementById("expanded-content");
  const closeBtn = document.getElementById("close-btn");
  const details = document.getElementById("content-details");

  const sections = [clubs, hobbies, facts];

  function showSection(sectionName) {
    // Hide all boxes
    sections.forEach(s => s.style.display = "none");
    expanded.classList.remove("hidden");

    // Content based on which box was clicked
    if (sectionName === "clubs") {
      details.innerHTML = `
        <div style="display: flex; align-items:center; gap:15px;">
            <img src="images/poker.png" style="width:60px;">
            <p style="font-family: 'Jua', sans-serif; color: #fff; font-size: 30px;">Clubs</p>
        </div>
            <div><a href="https://www.instagram.com/onuclubvball/" style="font-family: 'Jua', sans-serif; color: #60f2ffff; font-size: 30px;">ONU Womens Club Volleyball</a></div>
        <div>
            <img src="images/IMG-8642.jpg" style="width:300px;">
            <img src="images/IMG-0807.PNG" style="width:367px;">
            <img src="images/IMG-2920.JPG" style="width:207px;"> 
        </div>
      `;
    } else if (sectionName === "hobbies") {
      details.innerHTML = `
        <div style="display: flex; align-items:center; gap:15px;">
            <img src="images/lifestyle.png" style="width:60px;">
            <p style="font-family: 'Jua', sans-serif; color: #fff; font-size: 30px;">Hobbies</p>
        </div>
        <div>
            <div style="margin-bottom:30px;">
                <p style="font-family: 'Jua', sans-serif; color: white; font-size: 30px; margin-bottom: 10px;">Volleyball</p>
                <img src="images/IMG-0105.gif" style="width:350px;">
                <img src="images/IMG-0131.gif" style="width:350px;">
                <img src="images/IMG-9479.gif" style="width:350px;">
            </div>
            <hr>
            <div style="margin-bottom:30px;">
                <p style="font-family: 'Jua', sans-serif; color: white; font-size: 30px; margin-bottom: 10px;">Crochet</p>
                <img src="images/IMG-7053.jpeg" style="width:300px;">
                <img src="images/IMG-7874.jpeg" style="width:300px;">
                <img src="images/IMG-8786.jpeg" style="width:300px;">
            </div>
            <hr>
            <div style="margin-bottom:30px;">
                <p style="font-family: 'Jua', sans-serif; color: white; font-size: 30px; margin-bottom: 10px;">Reading</p>
                <img src="images/azkaban.png" style="width:207px;">
                <img src="images/HG.avif" style="width:200px;">
                <img src="images/MV.jpg" style="width:210px;">
            </div>
            <hr>
            <div>
                <p style="font-family: 'Jua', sans-serif; color: white; font-size: 30px; margin-bottom: 10px;">Video Games</p>
                <img src="images/subnautica.avif" style="width:400px;">
                <img src="images/littlenightmares.avif" style="width:400px;">
            </div>
        </div>
      `;
    } else if (sectionName === "facts") {
      details.innerHTML = `
        <div style="display: flex; align-items:center; gap: 15px">
            <img src="images/brain.png" style="width:60px;">
            <p style="font-family: 'Jua', sans-serif; color: #fff; font-size: 30px;">Fun Facts</p>
        </div>
        <div style="display: flex; justify-content: center; font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; color: #fff; font-size: 20px;">
            <div style="width: fit-content; text-align: left;">
                <ul>
                <li>I am a Hufflepuff</li>
                <li>MBTI: INFJ-T</li>
                <li>Favorite Musician: Taylor Swift</li>
                <ul>
                    <li>Favorite album: Speak Now</li>
                </ul>
                <li>Favorite Song: Abstract (Psychopomp) - Hozier</li>
                <li>Favorite Show: Criminal Minds</li>
                <li>Favorite Color: Purple</li>
                <li>I have a 16 year old cat named Tango</li>
                <li>I don't drink carbonated beverages (don't like them)</li>
                <li>I have visited Germany, France, and Spain</li>
                </ul>
            </div>
        </div>
      `;
    }
  }

  // Click listeners
  clubs.addEventListener("click", () => showSection("clubs"));
  hobbies.addEventListener("click", () => showSection("hobbies"));
  facts.addEventListener("click", () => showSection("facts"));

  // Close button
  closeBtn.addEventListener("click", () => {
    expanded.classList.add("hidden");
    sections.forEach(s => s.style.display = "flex");
  });
});
