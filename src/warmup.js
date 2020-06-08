
const partyHeader = document.getElementById('party');

/**
 * The desired behavior of this function is the input string will be converted into a <p> tag and then appended to the
 * input HTML Element.
 * @param {String} string
 * @param {HTMLElement} htmlElement
 */
export const htmlGenerator = (string, htmlElement) => {
  const element = document.createElement("p");
  element.innerText = string;
  htmlElement.append(element);
};

htmlGenerator('Party Time.', partyHeader);