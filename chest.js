const exercises = {
    chest: [
      {
        name: "Barbell Bench Press",
        sets: 4,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Lie back on a bench and grip the barbell with hands slightly wider than shoulder-width.",
          "Lower the barbell to your chest, keeping elbows at a 45-degree angle.",
          "Push the barbell back up to the starting position."
        ],
        image: "https://www.strengthlog.com/wp-content/uploads/2021/09/bench-press.gif" 
      },
      {
        name: "Incline Barbell Bench Press",
        sets: 4,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Set the bench to a 30-45 degree incline.",
          "Grip the barbell slightly wider than shoulder-width.",
          "Lower the barbell to your upper chest and push it back up."
        ],
        image: "https://www.garagegymreviews.com/wp-content/uploads/incline-close-grip-dumbbell-bench-press.gif" 
      },
      {
        name: "Dumbbell Chest Press",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Lie back on a bench with a dumbbell in each hand.",
          "Press the dumbbells up to the starting position and lower them slowly to your chest.",
          "Press the dumbbells back up."
        ],
        image: "https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1607767708037-FKYRMU433W3CL4S1P2DA/Dumbbell+Chest+Press+Exercise.gif"
      },
      {
        name: "Chest Dips",
        sets: 3,
        time: "6 minutes",
        calories: 40,
        steps: [
          "Use parallel bars or a dip station.",
          "Lower your body until your elbows are at a 90-degree angle.",
          "Push your body back up to the starting position."
        ],
        image: "https://j.gifs.com/Jy81qK.gif"
      },
      {
        name: "Decline Push-Ups",
        sets: 3,
        time: "5 minutes",
        calories: 35,
        steps: [
          "Place your feet on an elevated surface (like a bench).",
          "Perform a push-up by lowering your chest to the ground and pushing back up."
        ],
        image: "https://totalshape.com/wp-content/uploads/2021/08/decline-push-up.gif" 
      },
      {
        name: "Cable Chest Fly",
        sets: 3,
        time: "5 minutes",
        calories: 40,
        steps: [
          "Stand facing a cable machine with handles in both hands.",
          "Bring your hands together in front of your chest, keeping a slight bend in your elbows.",
          "Slowly return to the starting position."
        ],
        image: "https://post.greatist.com/wp-content/uploads/sites/2/2019/05/Decline-Fly-Mistake-leaning-forward.gif"
      },
      {
        name: "Pec Deck Machine",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Sit on the pec deck machine and adjust the seat height.",
          "Press your arms forward, squeezing your chest muscles together.",
          "Slowly return to the starting position."
        ],
        image: "https://www.strengthlog.com/wp-content/uploads/2020/04/pec-deck.gif"
      },
      
      {
        name: "Close-Grip Bench Press",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Grip the barbell with hands about shoulder-width apart.",
          "Lower the barbell to your chest, keeping elbows close to your sides.",
          "Push the barbell back up."
        ],
        image: "https://th.bing.com/th/id/R.e4141ea5111119f0b8158d68ab4731b4?rik=HH5TpHFb%2fLuyPA&riu=http%3a%2f%2fbodybuilding-wizard.com%2fwp-content%2fuploads%2f2014%2f04%2fclose-grip-barbell-bech-press-animation-2.gif&ehk=4jdsy5rEra1NDwI2%2bYdNyE8BgzqWvao1J1CbhHq5Llo%3d&risl=&pid=ImgRaw&r=0"
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    // Ensure that exercises.chest exists and has content
    if (exercises.chest && exercises.chest.length > 0) {
      exercises.chest.forEach((exercise, index) => {
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
      console.error('No chest exercises found');
    }
  }
  
  // Function to mark an exercise as complete
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.chest[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    if (exerciseDivs[index]) {
      exerciseDivs[index].classList.add("completed");
    }
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  