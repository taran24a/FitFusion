const exercises = {
    core: [
      {
        name: "Russian Twists",
        sets: 3,
        time: "5 minutes",
        calories: 40,
        steps: [
          "Sit on the floor with your knees bent and feet lifted.",
          "Lean back slightly and clasp your hands together in front of you.",
          "Rotate your torso to the right, then to the left to complete one rep."
        ],
        image: "https://www.gymguider.com/wp-content/uploads/2020/03/russian-twist.gif"
      },
      {
        name: "Side Plank",
        sets: 3,
        time: "30 seconds per side",
        calories: 35,
        steps: [
          "Lie on your side with your elbow directly beneath your shoulder.",
          "Lift your hips to form a straight line from head to feet.",
          "Hold the position for the designated time and switch sides."
        ],
        image: "https://media1.popsugar-assets.com/files/thumbor/0Aj7tbQqLDifBW881NZNfCuISrU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/08/27/589/n/1922729/6c65851366545d8b_IMB_IFJw6V/i/Side-Plank-Reach-Through-Right-Side.GIF"
      },
      {
        name: "Leg Raises",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Lie flat on your back with your legs extended.",
          "Lift your legs up toward the ceiling, keeping them straight.",
          "Slowly lower your legs back down without touching the floor."
        ],
        image: "https://www.verywellfit.com/thmb/wY2NmB0-W3tCxZDntFbRtzUZHMQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/42-3498291-Captains-Chair-Leg-Raises-GIF-a2f30dc759fe474c94893c8bd19abecb.gif"
      },
      {
        name: "Bicycle Crunches",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Lie on your back with hands behind your head and knees bent.",
          "Bring one knee toward your chest while extending the opposite leg.",
          "Simultaneously twist your torso to bring the opposite elbow toward the knee."
        ],
        image: "https://www.icegif.com/wp-content/uploads/2022/08/icegif-111.gif"
      },
      {
        name: "V-Ups",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Lie flat on your back with arms extended above your head.",
          "Simultaneously raise your legs and torso toward each other, reaching your hands toward your feet.",
          "Lower back down and repeat."
        ],
        image: "https://media1.popsugar-assets.com/files/thumbor/fdH6bWPSb9--nUBDiwz1ZWmaDkA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/06/05/906/n/1922729/4a427ce25102cba0_V-Ups.gif"
      },
      {
        name: "Mountain Climbers",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Start in a plank position with your body in a straight line.",
          "Drive one knee toward your chest, then quickly switch legs.",
          "Continue alternating legs at a fast pace."
        ],
        image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/400x400_9_Best_Bodyweight_Shoulder_Exercises_for_Every_Body_Mountain_Climbers-1.gif?h=840"
      },
      {
        name: "Dead Bug",
        sets: 3,
        time: "5 minutes",
        calories: 35,
        steps: [
          "Lie on your back with your arms extended toward the ceiling and knees bent at 90 degrees.",
          "Slowly extend your right leg straight while lowering your left arm overhead.",
          "Return to the starting position and repeat on the opposite side."
        ],
        image: "https://www.vissco.com/wp-content/uploads/animation/sub/dead-bug.gif"
      },
      {
        name: "Flutter Kicks",
        sets: 3,
        time: "5 minutes",
        calories: 40,
        steps: [
          "Lie on your back with your hands under your glutes and legs extended.",
          "Lift your legs off the floor slightly and alternate kicking them up and down."
        ],
        image: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/04/6.1.FlutterKicks.gif"
      },
      {
        name: "Hanging Leg Raises",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Hang from a pull-up bar with your arms fully extended.",
          "Raise your legs straight in front of you until they're parallel to the floor.",
          "Lower your legs back down and repeat."
        ],
        image: "https://program.rapidloss.com.au/wp-content/uploads/hanging-leg-raise.gif"
      },
      {
        name: "Ab Wheel Rollouts",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Kneel down and grip the ab wheel with both hands.",
          "Roll the wheel forward, extending your body as far as possible.",
          "Pull the wheel back toward your knees to return to the starting position."
        ],
        image: "https://www.thisiswhyimfit.com/wp-content/uploads/2019/10/ab-wheel-roll-outs.gif"
      },
      {
        name: "Lying Windshield Wipers",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Lie on your back with your arms extended out to the sides.",
          "Lift your legs off the floor and rotate them from side to side, mimicking a windshield wiper motion."
        ],
        image: "https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/02/10003756/lying-windshield-wiper.gif"
      },
      {
        name: "Cable Woodchoppers",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Stand with your feet shoulder-width apart and hold a cable handle with both hands.",
          "Pull the cable diagonally across your body, rotating your torso as you do.",
          "Return to the starting position and repeat."
        ],
        image: "https://www.garagegymreviews.com/wp-content/uploads/cable-twist-low-to-high.gif"
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    // Ensure that exercises.core exists and has content
    if (exercises.core && exercises.core.length > 0) {
      exercises.core.forEach((exercise, index) => {
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
      console.error('No core exercises found');
    }
  }
  
  // Function to mark an exercise as complete
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.core[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    if (exerciseDivs[index]) {
      exerciseDivs[index].classList.add("completed");
    }
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  