const apikey = "7AnqweWuXU8V6O1NuTTOwlI8v21Qulu8";
const columns = document.querySelector(".columns");
const column = document.querySelector("#column");
const custom = document.querySelector(".custom");
const submit = document.querySelector(".submit");
const input = document.querySelector(".input");

submit.addEventListener("click", e => {
  e.preventDefault();

  const val = input.value;
  let url = `http://api.giphy.com/v1/gifs/search?q=${val}&api_key=${apikey}&limit=6`;
  async function movie() {
    const res = await fetch(url);
    const response = await res.json();
    const data = response.data;
    console.log(data);

    data.forEach(el => {
      const div = document.createElement("div");
      div.innerHTML = ` <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src=${el.images.downsized.url}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p class="title is-4">${el.title}</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
      `;

      custom.append(div);
    });
  }

  movie();
  input.value = "";
  custom.innerHTML = "";
});

/*fetch(url)
  .then(res => res.json())
  .then(res => console.log(res));
*/
// Promise is basicly a toll that we can use whenever we need to do something that takes time.
//With the help of promises we dont need to wait for that particular request to return us data.
//Because promises will be happned in the future and and when it resolved or rejected it will give us a response.
//So for example Fetch Api in JS use promises because we use Fetch API to send Http request which takes times.
//And beucase fetch api use prommises we can later take that data and use however we want.
