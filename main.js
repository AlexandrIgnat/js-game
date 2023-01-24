
document.addEventListener("DOMContentLoaded", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(numbers);
  const block = document.querySelector('.cards');
  for (number of numbers) {

    let flipcard = document.createElement('div');
    let front =  document.createElement('div');
    let back =  document.createElement('div');

    flipcard.setAttribute("data-number", number);

    flipcard.className = "flipcard h";
    front.className = "front";
    back.className = "back";

    back.textContent = number;

    flipcard.append(front, back);
    block.append(flipcard);
  }


  const card = document.querySelectorAll('.flipcard');
  let a = false;
  let count = 0;
  let conf = false;

  card.forEach((element) => {
    element.addEventListener('click', function() {
      element.classList.toggle('flip');
      if (!a) {
        let back = element.querySelector('.back');
        back.classList.toggle('boxshadow');
        a = element.dataset.number;
        this.style.pointerEvents = "none";
      } else {
        if (a !== element.dataset.number) {
            setTimeout(() => {
              document.querySelectorAll(`[data-number="${a}"]`).forEach(function (e) {
                let back = e.querySelector('.back');
                back.classList.remove('boxshadow');
                e.classList.remove('flip');
                e.style.pointerEvents = "unset";
              });
              element.classList.toggle('flip');
              a = false;
            }, 500);
        } else {
          document.querySelectorAll(`[data-number="${a}"]`).forEach(function (e) {
            let back = e.querySelector('.back');
            back.classList.remove('boxshadow');
            e.style.pointerEvents = "none";
          });
          a = false;
          count++;
          if (count == numbers.length/2) {
            setTimeout(() => {
              conf = confirm("Вы выйграли!!! Хотите повторить?");
              if (conf) {
                location.reload()
              }
            }, 500);
          }
        }
      }
    })
  });

  function refresh(value) {
    let refresh = value ?? location.reload();
  }
  })
