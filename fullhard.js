const exercises = {
    fullBodyHardcore: [
      {
        name: "Jumping Lunges",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Start in a lunge position with one foot forward and the other back.",
          "Jump explosively, switching your legs in mid-air to land in the opposite lunge position."
        ],
        image: "https://greatist.com/sites/default/files/styles/big_share/public/PERFECT-SERIES_LUNGE_ALTERNATIVE_SPLIT-LUNGE-JUMP_GRAIN.gif?itok=VhDUhvUN"
      },
      {
        name: "Battle Ropes",
        sets: 3,
        time: "30 seconds",
        calories: 60,
        steps: [
          "Hold one end of the battle rope in each hand.",
          "Quickly alternate whipping the ropes up and down in a continuous motion."
        ],
        image: "https://www.menshealth.com.au/wp-content/uploads/2022/11/battlerope.gif"
      },
      {
        name: "Clapping Push-Ups",
        sets: 3,
        time: "4 minutes",
        calories: 55,
        steps: [
          "Start in a push-up position.",
          "Lower your body and then explosively push up, clapping your hands in mid-air before landing back down."
        ],
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2017/09/clapping-push-ups-1506433419.gif?resize=640:*"
      },
      {
        name: "Tire Flips",
        sets: 3,
        time: "5 minutes",
        calories: 70,
        steps: [
          "Stand with feet shoulder-width apart and squat down to grip the tire.",
          "Use your legs and back to lift the tire and flip it over.",
          "Repeat for the designated number of reps."
        ],
        image: "https://scottwelle.com/wp-content/uploads/2019/12/GIF-image-4EA02F35CF89-1.gif"
      },
      {
        name: "Sled Push/Pull",
        sets: 3,
        time: "5 minutes",
        calories: 60,
        steps: [
          "Push or pull a weighted sled over a designated distance or time."
        ],
        image: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/07/400x400_How_To_Use_a_Sled_To_Build_Speed_Power_and_Endurance_Sled_Push.gif"
      },
      {
        name: "Handstand Push-Ups",
        sets: 3,
        time: "4 minutes",
        calories: 65,
        steps: [
          "Kick up into a handstand position with your feet against the wall.",
          "Lower your body into a push-up position, then press back up to the starting position."
        ],
        image: "https://cambiandoeljuego.com/wp-content/uploads/2018/10/handstandpushup.gif"
      },
      {
        name: "Farmer’s Walk (Heavy)",
        sets: 3,
        time: "5 minutes",
        calories: 60,
        steps: [
          "Hold a heavy dumbbell or kettlebell in each hand.",
          "Walk for a designated time or distance while maintaining a strong posture."
        ],
        image: "https://www.gymlivet.com/wp-content/uploads/2020/02/Farmers-walk-teknik-tips.gif"
      },
      {
        name: "Ring Dips",
        sets: 3,
        time: "4 minutes",
        calories: 55,
        steps: [
          "Grab the rings with your palms facing inward.",
          "Lower your body by bending your elbows and then press back up to the top position."
        ],
        image: "https://www.garagegymreviews.com/wp-content/uploads/ring-dips-1.gif"
      },
      {
        name: "Pistol Squats",
        sets: 3,
        time: "5 minutes",
        calories: 60,
        steps: [
          "Stand on one leg and lower your body into a deep squat, keeping the other leg extended in front of you.",
          "Push back up to the starting position."
        ],
        image: "https://media.giphy.com/media/xUPGcJGpd7ALzeLUOY/giphy.gif"
      },
      {
        name: "Jump Rope Intervals",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Jump rope at a high intensity for 30 seconds.",
          "Rest for 30 seconds, then repeat."
        ],
        image: "https://i.pinimg.com/originals/b5/29/67/b52967f8cdcb2093eb3cb34a5cbc7842.gif"
      },
      
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    // Ensure that exercises.fullBodyHardcore exists and has content
    if (exercises.fullBodyHardcore && exercises.fullBodyHardcore.length > 0) {
      exercises.fullBodyHardcore.forEach((exercise, index) => {
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
      console.error('No full body hardcore exercises found');
    }
  }
  
  // Function to mark an exercise as complete
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.fullBodyHardcore[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    if (exerciseDivs[index]) {
      exerciseDivs[index].classList.add("completed");
    }
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  