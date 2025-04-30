const exercises = {
    arms: [
      {
        name: "Bicep Curls (Dumbbells)",
        sets: 3,
        time: "5 minutes",
        calories: 30,
        steps: [
          "Hold a dumbbell in each hand.",
          "Curl the dumbbells up towards your shoulders.",
          "Slowly lower them back down."
        ],
        image: "https://media1.tenor.com/m/As5RbeZ43bEAAAAd/seated-biceps-curl.gif"
      },
      {
        name: "Hammer Curls",
        sets: 3,
        time: "5 minutes",
        calories: 25,
        steps: [
          "Hold a dumbbell in each hand with palms facing in.",
          "Lift the dumbbells to shoulder height.",
          "Lower them back down."
        ],
        image: "https://cdn.shopify.com/s/files/1/0250/0362/2496/files/692.gif?v=1644817404"
      },
      {
        name: "Tricep Dips (Using Chair)",
        sets: 3,
        time: "7 minutes",
        calories: 40,
        steps: [
          "Sit on a chair and grip the edge.",
          "Slide off the chair and lower your body.",
          "Push back up to starting position."
        ],
        image: "https://www.strengthlog.com/wp-content/uploads/2021/11/bench-dips.gif"
      },
      {
        name: "Overhead Tricep Extension (Dumbbell)",
        sets: 3,
        time: "6 minutes",
        calories: 35,
        steps: [
          "Hold one dumbbell with both hands.",
          "Raise it above your head.",
          "Lower it behind your head and raise it back up."
        ],
        image: "https://cdn.shopify.com/s/files/1/0250/0362/2496/files/1512_a1c00d48-5fa2-457a-8645-4adba7ec3da0.gif?v=1644929689"
      },
      {
        name: "Arm Circles (No Equipment)",
        sets: 3,
        time: "5 minutes",
        calories: 20,
        steps: [
          "Extend your arms out to the sides.",
          "Make small forward circles for 30 seconds.",
          "Reverse the direction and repeat."
        ],
        image: "https://www.forhealthylifestyle.com/wp-content/uploads/2022/01/arm-circles1.gif"
      },
      {
        name: "Push-Ups (Modified)",
        sets: 3,
        time: "8 minutes",
        calories: 35,
        steps: [
          "Start on your knees in a plank position.",
          "Lower your chest towards the floor.",
          "Push back up to the starting position."
        ],
        image: "https://gmb.io/wp-content/uploads/2019/01/full-negative-to-kneeling-push-up.gif"
      },
      {
        name: "Resistance Band Bicep Curls",
        sets: 3,
        time: "6 minutes",
        calories: 30,
        steps: [
          "Stand on the band with feet shoulder-width apart.",
          "Hold the handles and curl them towards your shoulders.",
          "Lower back down slowly."
        ],
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_21/1721263/bicepcurl.gif"
      },
      {
        name: "Plank to Shoulder Tap",
        sets: 3,
        time: "6 minutes",
        calories: 40,
        steps: [
          "Start in a plank position.",
          "Tap your left shoulder with your right hand.",
          "Alternate sides while maintaining the plank."
        ],
        image: "https://static.oprah.com/2016/01/tummy_planks_gif_Plank_with_Shoulder_Taps_v2.gif"
      }
    ]
  };
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    // Access exercises.arms, not just exercises
    exercises.arms.forEach((exercise, index) => {
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
    alert(`Great job! You completed ${exercises.arms[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    exerciseDivs[index].classList.add("completed");
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  