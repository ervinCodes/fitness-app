const deleteBtn = document.querySelectorAll(".del");
const workoutItem = document.querySelectorAll("span.not");
const workoutComplete = document.querySelectorAll("span.completed");
const workoutReset = document.querySelectorAll("button.reset");
const workoutCircle = document.querySelectorAll(".fa-circle");
const workoutCheck = document.querySelectorAll(".fa-circle-check");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteWorkout);
});

Array.from(workoutItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(workoutComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

Array.from(workoutCircle).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(workoutCheck).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

Array.from(workoutReset).forEach((el) => {
  el.addEventListener("click", resetWorkout);
});

async function deleteWorkout() {
  const workoutId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/post/deleteWorkout", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const workoutId = this.parentNode.dataset.id;
  console.log(this);
  try {
    const response = await fetch("/post/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const workoutId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/post/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function resetWorkout() {
  const workoutId = this.parentNode.dataset.id;
  console.log(this);
  try {
    const response = await fetch("/post/resetWorkout", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        workoutIdFromJSFile: workoutId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
