const exercises = {
    upperBodyHardcore: [
      {
        name: "Muscle-Ups",
        sets: 4,
        time: "6 minutes",
        calories: 70,
        steps: [
          "Start by gripping the pull-up bar with an overhand grip.",
          "Pull yourself explosively up, transitioning your chest above the bar.",
          "Push your arms straight to lift your torso over the bar.",
          "Lower yourself back down with control and repeat."
        ],
        image: "https://www.journalmenu.com/wp-content/uploads/2017/11/kipping-muscle-up-gif-oblique-slow-motion-kipping-muscle-up-technique.gif"
      },
      {
        name: "One-Arm Push-Ups",
        sets: 3,
        time: "5 minutes",
        calories: 60,
        steps: [
          "Start in a push-up position with one hand on the ground.",
          "Lower your body while keeping your core tight.",
          "Push back up to the starting position and switch arms."
        ],
        image: "https://www.garagegymreviews.com/wp-content/uploads/one-arm-push-up.gif"
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 3,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Hold a dumbbell in each hand at shoulder height.",
          "Press the dumbbells overhead until your arms are straight.",
          "Lower them back down and repeat."
        ],
        image: "https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/02/Dumbbell-shoulder-press.gif"
      },
      {
        name: "T-Bar Rows",
        sets: 4,
        time: "6 minutes",
        calories: 65,
        steps: [
          "Stand over a T-bar row machine and grip the handles.",
          "Pull the bar toward your chest while squeezing your shoulder blades.",
          "Lower it back down and repeat."
        ],
        image: "https://www.torquebarbell.com/wp-content/uploads/2019/06/tbar-row.gif"
      },
      {
        name: "Cable Crossovers",
        sets: 3,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Stand in a cable machine with handles at shoulder height.",
          "Pull the handles together in front of your chest.",
          "Slowly return to the starting position and repeat."
        ],
        image: "https://media.tenor.com/Gyi2X-d3keYAAAAd/cable-front-raise.gif"
      },
      {
        name: "Chest-to-Bar Pull-Ups",
        sets: 3,
        time: "5 minutes",
        calories: 60,
        steps: [
          "Grip the pull-up bar with palms facing away from you.",
          "Pull yourself up until your chest touches the bar.",
          "Lower yourself with control and repeat."
        ],
        image: "https://c.tenor.com/G5VO7Zck9BYAAAAM/weighted-pullup-extremist-pull-up.gif"
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    if (exercises.upperBodyHardcore && exercises.upperBodyHardcore.length > 0) {
      exercises.upperBodyHardcore.forEach((exercise, index) => {
        const exerciseDiv = document.createElement("div");
        exerciseDiv.className = "exercise";
        exerciseDiv.innerHTML = `
          <img src="${exercise.image}" alt="${exercise.name}">
          <div class="details">
            <h3>${exercise.name}</h3>
            <p><strong>Sets:</strong> ${exercise.sets}</p>
            <p><strong>Calories Burned:</strong> ${exercise.calories}</p>
            <p><strong>Time:</strong> ${exercise.time}</p>
            <p><strong>Steps:</strong></p>
            <ol>
              ${exercise.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <button onclick="markComplete(${index})">Mark as Complete</button>
          </div>
        `;
        exerciseList.appendChild(exerciseDiv);
      });
    } else {
      console.error("No upper body hardcore exercises found");
    }
  }
  
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.upperBodyHardcore[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    if (exerciseDivs[index]) {
      exerciseDivs[index].classList.add("completed");
    }
  }
  
  document.addEventListener("DOMContentLoaded", renderExercises);
  