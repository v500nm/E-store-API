const gridContainer = document.querySelector("#grid-container");

function fetchProducts(cb) {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then((response) => response.json())
        .then((data) => cb(data));
}

function renderUI() {
    fetchProducts((data) => {
        console.log(data);

        data.forEach((element) => {
            const output = `
  <div class="productCard"> 
							<div class="productImg">
								<img src="${element.image}" alt="">
								<h1 class="header">${element.title}</h1>
							</div>
							<div class="infoCard">
								<p class="descrip">${element.description}</p>
								<div class="footer">
									<div class="left-side">
										<div class="ratings">
											<div class="empty-stars"></div>
											<div class="full-stars" style="width:${calcRatings(element.rating.rate)}"></div>
										</div>   <p>Ratings: ${element.rating.rate}/5</p>
										<p class="price"><span>$</span><span>${element.price}</span></p>
									</div>
									<div class="right-side">
										<button>Buy now</button>
									</div>
								</div>
								
							</div>
						</div>
  `;
            gridContainer.innerHTML += output;
        });
    });
}

function calcRatings(value) {
    const totalValue = 5;
    return (value / totalValue) * 100 + "%";
}

renderUI();