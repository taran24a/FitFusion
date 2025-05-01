const exercises = {
    legs: [
      {
        name: "Bodyweight Squats",
        sets: 3,
        time: "5 minutes",
        calories: 40,
        steps: [
          "Stand with feet shoulder-width apart.",
          "Lower your body as if sitting in a chair, keeping your back straight.",
          "Push through your heels to stand back up."
        ],
        image: "https://mindbodygreen-res.cloudinary.com/images/w_767,q_auto:eco,f_auto,fl_lossy/org/q4tu7ykbsklwlqg0z/bodyweight-squat.gif" // Add appropriate image or GIF link
      },
      {
        name: "Glute Bridges",
        sets: 3,
        time: "5 minutes",
        calories: 30,
        steps: [
          "Lie on your back with knees bent and feet flat on the ground.",
          "Lift your hips towards the ceiling, squeezing your glutes at the top.",
          "Lower back down to the starting position."
        ],
        image: "https://www.strengthlog.com/wp-content/uploads/2020/06/Glute-Bridge.gif"
      },
      {
        name: "Step-Ups",
        sets: 3,
        time: "5 minutes",
        calories: 35,
        steps: [
          "Step up onto a bench or elevated surface with one foot.",
          "Push through the heel of your foot to lift your body up.",
          "Step back down and repeat on the other leg."
        ],
        image: "https://c.tenor.com/xSLpFNJczysAAAAM/situps-situpsreach.gif" 
      },
      {
        name: "Wall Sits",
        sets: 3,
        time: "30 seconds per set",
        calories: 25,
        steps: [
          "Stand with your back against a wall and slide down into a sitting position.",
          "Keep your knees at 90 degrees and hold the position.",
          "Hold for the recommended duration."
        ],
        image: "https://www.verywellhealth.com/thmb/66ayKEGlqUkmPyzVRsV7mHW0p0c=/800x533/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-03-2696617-WallSlide01-SM-5979fb23d088c000106ea8d7.gif"
      },
      {
        name: "Leg Extensions (Bodyweight)",
        sets: 3,
        time: "5 minutes",
        calories: 30,
        steps: [
          "Sit on a chair or bench with your knees bent.",
          "Extend one leg straight in front of you, contracting your quads.",
          "Lower the leg back down and repeat."
        ],
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif"
      },
      {
        name: "Side-Lying Leg Raises",
        sets: 3,
        time: "5 minutes",
        calories: 25,
        steps: [
          "Lie on your side with your legs stacked.",
          "Lift your top leg up towards the ceiling, keeping it straight.",
          "Lower back down slowly and repeat."
        ],
        image: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/06/GRT-Side-Lying-Leg-Raise.gif"
      },
      {
        name: "Calf Raises",
        sets: 3,
        time: "5 minutes",
        calories: 20,
        steps: [
          "Stand with your feet shoulder-width apart.",
          "Rise up onto your toes, lifting your heels off the ground.",
          "Lower back down slowly and repeat."
        ],
        image: "https://flabfix.com/wp-content/uploads/2019/06/Calf-Raises.gif" // Add appropriate image or GIF link
      },
      {
        name: "Chair Squats",
        sets: 3,
        time: "5 minutes",
        calories: 35,
        steps: [
          "Stand in front of a chair with your feet shoulder-width apart.",
          "Lower your body as if sitting in the chair.",
          "Stop just before touching the chair and return to standing."
        ],
        image: "https://media1.tenor.com/images/2dad937d7785068adba5a9158f34578e/tenor.gif?itemid=17352648" // Add appropriate image or GIF link
      },
      {
        name: "Hip Thrusts",
        sets: 3,
        time: "6 minutes",
        calories: 40,
        steps: [
          "Sit on the ground with your upper back against a bench or elevated surface.",
          "Place your feet flat on the floor and drive your hips up toward the ceiling.",
          "Squeeze your glutes at the top and slowly lower back down."
        ],
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/10/hip-thrust-on-workout-bench.gif" // Add appropriate image or GIF link
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    // Access exercises.legs, not just exercises
    exercises.legs.forEach((exercise, index) => {
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
  }
  
  // Function to mark an exercise as complete
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.legs[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    exerciseDivs[index].classList.add("completed");
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  