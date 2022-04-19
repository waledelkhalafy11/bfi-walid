export function hc(hoverdCard) {
  // (A) SELECTING CARDS
  const first = document.getElementById("firstCard"); // FIRST CARD
  const second = document.getElementById("secondCard"); // SECOND CARD
  const third = document.getElementById("thirdCard"); // THIRD CARD
  const fourth = document.getElementById("fourthCard"); // THIRD CARD

  // (B) THE CASES ARRAY
  const cards = [first, second, third, fourth];
  // (B , 1) IF THE MOUSE IS OUT
  if (hoverdCard === -1) {
    cards.map((card) => {
      card.classList.remove("hovered-card");
      card.classList.remove("hover-invert");
    });
  }

  // (B , 2) IF THE MOUSE HOVERD

  if (hoverdCard === 1) {
    cards.map((card, i) => {
      if (i === 0) {
        card.classList.remove("hover-invert");
        card.classList.add("hovered-card");
      } else {
        card.classList.remove("hovered-card");
        card.classList.add("hover-invert");
      }
    });
  }
  if (hoverdCard === 2) {
    cards.map((card, i) => {
      if (i === 1) {
        card.classList.remove("hover-invert");
        card.classList.add("hovered-card");
      } else {
        card.classList.remove("hovered-card");
        card.classList.add("hover-invert");
      }
    });
  }
  if (hoverdCard === 3) {
    cards.map((card, i) => {
      if (i === 2) {
        card.classList.remove("hover-invert");
        card.classList.add("hovered-card");
      } else {
        card.classList.remove("hovered-card");
        card.classList.add("hover-invert");
      }
    });
  }
  if (hoverdCard === 4) {
    cards.map((card, i) => {
      if (i === 3) {
        card.classList.remove("hover-invert");
        card.classList.add("hovered-card");
      } else {
        card.classList.remove("hovered-card");
        card.classList.add("hover-invert");
      }
    });
  }
}
