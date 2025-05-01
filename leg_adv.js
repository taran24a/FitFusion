const exercises = {
    legAdvanced: [
      {
        name: "Sumo Deadlifts",
        sets: 4,
        time: "6 minutes",
        calories: 60,
        steps: [
          "Stand with feet wider than shoulder-width and toes slightly pointed out.",
          "Grip the barbell with hands inside your knees.",
          "Lift the barbell by driving through your heels and keeping your back straight.",
          "Lower the barbell with control and repeat."
        ],
        image: "https://media.giphy.com/media/HZlCPrVBCY4yk/giphy.gif"
      },
      {
        name: "Hack Squats",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Position yourself on a hack squat machine with your shoulders under the pads.",
          "Keep your feet shoulder-width apart on the platform.",
          "Lower your body by bending your knees, then push back up to the starting position."
        ],
        image: "https://media.post.rvohealth.io/wp-content/uploads/2023/08/ElegantHarmoniousIslandwhistler-size_restricted.gif"
      },
      
      {
        name: "Hip Thrusts (Barbell)",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Sit on the floor with a bench behind you and a barbell across your hips.",
          "Push through your heels to lift your hips, squeezing your glutes at the top.",
          "Lower back down with control and repeat."
        ],
        image:"https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/02/Hip-thrust.gif"
      },
      {
        name: "Heavy Leg Press",
        sets: 4,
        time: "6 minutes",
        calories: 60,
        steps: [
          "Sit on a leg press machine and position your feet shoulder-width apart on the platform.",
          "Push the platform away by extending your legs.",
          "Lower it back down with control without locking your knees."
        ],
        image: "https://www.estarguapas.com/pics/2022/05/las-unicas-7-maquinas-de-ejercicio-que-merecen-la-pena-0.gif"
      },
      {
        name: "Box Step-Ups with Weights",
        sets: 3,
        time: "5 minutes",
        calories: 50,
        steps: [
          "Hold a dumbbell in each hand and stand in front of a sturdy box.",
          "Step onto the box with one foot, bringing the other foot up to meet it.",
          "Step back down and alternate legs."
        ],
        image: "https://blog.myfitnesspal.com/wp-content/uploads/2020/04/Goblet-step-ups.gif"
      },
      {
        name: "Single-Leg Romanian Deadlifts",
        sets: 3,
        time: "5 minutes",
        calories: 45,
        steps: [
          "Hold a dumbbell in one hand and stand on the opposite leg.",
          "Hinge at the hips to lower the dumbbell while extending the other leg back.",
          "Return to the starting position and switch sides."
        ],
        image: "https://mindbodygreen-res.cloudinary.com/image/upload/w_735,q_auto,f_auto,fl_lossy/org/vdy6wxs45kyyxrb3f.gif"
      },
      {
        name: "Vertical Jumps with Resistance",
        sets: 3,
        time: "4 minutes",
        calories: 50,
        steps: [
          "Wear a resistance band around your thighs.",
          "Jump as high as you can, extending your arms overhead.",
          "Land softly and immediately go into the next jump."
        ],
        image: "https://i.pinimg.com/originals/a0/1e/76/a01e76dad4ba0e9f17d04f90f6c888db.gif"
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    if (exercises.legAdvanced && exercises.legAdvanced.length > 0) {
      exercises.legAdvanced.forEach((exercise, index) => {
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
      console.error("No leg advanced exercises found");
    }
  }
  
  function markComplete(index) {
    alert(`Great job! You completed ${exercises.legAdvanced[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    if (exerciseDivs[index]) {
      exerciseDivs[index].classList.add("completed");
    }
  }
  
  document.addEventListener("DOMContentLoaded", renderExercises);
  