
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogDropDown = () => {
  const dropDownList = document.getElementById("drop-down-dog-list");
  const dropDownBox = document.getElementById("drop-down-dog-nav");
  dropDownBox.addEventListener("mouseenter", event => {
    console.log("hi")
    dropDownList.classList.add("open");
  });
  dropDownBox.addEventListener("mouseleave", event => {
    console.log("bye")
    dropDownList.classList.remove("open");
  });
  Object.entries(dogs).forEach(([name, link]) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.text = name;
    li.append(a);
    dropDownList.append(li);
  });
}
