const exercises = {
    fullBodyIntermediate: [
      {
        name: "Burpees",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Start in a standing position.",
          "Drop into a squat and place your hands on the floor.",
          "Kick your feet back into a plank position.",
          "Immediately jump your feet back toward your hands.",
          "Jump into the air and repeat."
        ],
        image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/burpee-1457045324.gif?resize=1200:*"
      },
      {
        name: "Kettlebell Swings",
        sets: 3,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Stand with your feet shoulder-width apart and hold a kettlebell with both hands.",
          "Swing the kettlebell between your legs, hinging at the hips.",
          "Forcefully drive your hips forward to swing the kettlebell up to shoulder height.",
          "Control the swing back down and repeat."
        ],
        image: "https://www.journalmenu.com/wp-content/uploads/2017/11/kettlebell-swing-gif-side-slow-motion-kettlebell-swing-technique.gif"
      },
      {
        name: "Deadlifts",
        sets: 4,
        time: "6 minutes",
        calories: 60,
        steps: [
          "Stand with feet hip-width apart and a barbell in front of you.",
          "Bend at the hips and knees to grip the barbell.",
          "Lift the barbell by driving through your heels, keeping your back straight.",
          "Lower the barbell back down with control and repeat."
        ],
        image: "https://neoncherries.com/wp-content/uploads/2020/05/Romanian-Deadlift.gif"
      },
      {
        name: "Push Press",
        sets: 3,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Stand with a barbell at shoulder height and your feet shoulder-width apart.",
          "Dip your knees slightly, then explosively press the barbell overhead.",
          "Control the barbell back down and repeat."
        ],
        image: "https://www.verywellfit.com/thmb/q1K4afe4BhA9WN83SskzHWUXpeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24-Push-Press-GIF-03fe5d6d4fe2468885f1f626deabb764.gif"
      },
      {
        name: "Thrusters",
        sets: 3,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Hold a barbell at shoulder height with feet shoulder-width apart.",
          "Squat down while keeping your chest up.",
          "As you stand up, press the barbell overhead in one smooth motion."
        ],
        image: "https://www.crossfit.com/wp-content/uploads/2022/10/20053154/Thrusters.gif"
      },
      {
        name: "Renegade Rows",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Start in a plank position with a dumbbell in each hand.",
          "Row one dumbbell toward your torso while stabilizing your body with the other hand.",
          "Lower the dumbbell and repeat with the opposite arm."
        ],
        image: "https://trainerjosh.com/wp-content/uploads/2022/09/Dumbbell-Renegade-Rows.gif?resolution=800,1"
      },
      {
        name: "Lunges with Weights",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Hold a dumbbell in each hand and stand with feet hip-width apart.",
          "Step forward with one leg and lower your hips into a lunge.",
          "Push through the front foot to return to the starting position."
        ],
        image: "https://media1.tenor.com/images/e38bebc1ddb0fd98a52d5189109e088e/tenor.gif?itemid=14796856"
      },
      {
        name: "Pull-Ups",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Grip a pull-up bar with your palms facing away from you.",
          "Pull your chin above the bar by engaging your back and arms.",
          "Lower yourself back down with control and repeat."
        ],
        image: "https://media.giphy.com/media/0XW4EawaYvS5iTkbok/giphy.gif"
      },
      {
        name: "Dumbbell Snatch",
        sets: 3,
        time: "5 minutes",
        calories: 55,
        steps: [
          "Stand with feet shoulder-width apart, holding a dumbbell with one hand.",
          "Squat down and pull the dumbbell up explosively.",
          "Lock the dumbbell overhead and lower it back down to repeat."
        ],
        image: "https://i0.wp.com/greatist.com/sites/default/files/SingleArmDumbbellSnatch.gif?w=1155&h=1463"
      },
      {
        name: "Step-Ups with Weights",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Hold a dumbbell in each hand and stand in front of a bench or elevated surface.",
          "Step up with one foot and bring the other foot to meet it at the top.",
          "Step down with one foot and repeat."
        ],
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/146-weighted-step-up-1-1550760987.gif"
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    // Ensure that exercises.fullBodyIntermediate exists and has content
    if (exercises.fullBodyIntermediate && exercises.fullBodyIntermediate.length > 0) {
      exercises.fullBodyIntermediate.forEach((exercise, index) => {
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
      console.error('No full body exercises found');
    }
  }
  
  // Function to mark an exercise as complete
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.fullBodyIntermediate[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    if (exerciseDivs[index]) {
      exerciseDivs[index].classList.add("completed");
    }
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  