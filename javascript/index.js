// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

//Iteration 1 - using callbacks
function getInstruction(step, callback, errorrCallback) {
  document.querySelector(
    "#mashedPotatoes"
  ).innerHTML += `<li>${mashedPotatoes[step]}</li>`;
  if (!document.querySelector("#mashedPotatoes").innerHTML)
    errorrCallback("Instructions not found");
  else callback();
}

getInstruction(
  0,
  () => {
    getInstruction(
      1,
      () => {
        getInstruction(
          2,
          () => {
            getInstruction(
              3,
              () => {
                getInstruction(
                  4,
                  () => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>"Mashed potatoes are ready!"</li>`;
                  },
                  (err) => console.log(err)
                );
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

// Iteration 2 - using promises
function obtainInstruction(step) {
  return new Promise(function (resolve, reject) {
    document.querySelector("#steak").innerHTML += `<li>${steak[step]}</li>`;
    if (!document.querySelector("#steak").innerHTML)
      reject("instructions not found");
    else resolve();
  });
}

obtainInstruction(0)
  .then(() => obtainInstruction(1))
  .then(() => obtainInstruction(2))
  .then(() => obtainInstruction(3))
  .then(() => obtainInstruction(4))
  .then(() => obtainInstruction(5))
  .then(() => obtainInstruction(6))
  .then(() => obtainInstruction(7))
  .then(
    () =>
      (document.querySelector(
        "#steak"
      ).innerHTML += `<li>"Stake is ready!"</li>`)
  )
  .catch(() => console.log(err));

// Iteration 3 using async/await
function obtainInstructionBroccoli(step) {
  return new Promise(function (resolve, reject) {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoli[step]}</li>`;
    if (!document.querySelector("#broccoli").innerHTML)
      reject("instructions not found");
    else resolve();
  });
}

async function makeBroccoli() {
  try {
    await obtainInstructionBroccoli(0);
    await obtainInstructionBroccoli(1);
    await obtainInstructionBroccoli(2);
    await obtainInstructionBroccoli(3);
    await obtainInstructionBroccoli(4);
    await obtainInstructionBroccoli(5);
    await obtainInstructionBroccoli(6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>"Broccoli is ready!"</li>`;
  } catch (error) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all

function obtainInstructionBrussels(step) {
  return new Promise(function (resolve, reject) {
    document.querySelector(
      "#brusselsSprouts "
    ).innerHTML += `<li>${brusselsSprouts[step]}</li>`;
    if (!document.querySelector("#brusselsSprouts ").innerHTML)
      reject("instructions not found");
    else resolve();
  });
}

Promise.all([obtainInstructionBrussels(0),obtainInstructionBrussels(1),obtainInstructionBrussels(2),obtainInstructionBrussels(3),obtainInstructionBrussels(4),obtainInstructionBrussels(6), obtainInstructionBrussels(7)])
.then((values) => {console.log(values)})
.then(
  () =>
    (document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>"Brussels sprouts are ready!"</li>`)
)