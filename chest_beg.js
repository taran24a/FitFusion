const exercises = [
    {
      name: "Push-Ups",
      image: "https://furthermore-cdn.equinox.com/Mag/2015/06/push-up/09.gif",
      sets: 3,
      reps: 15,
      calories: 50,
      time: "5 minutes",
      steps: [
        "Start in a high plank position.",
        "Lower your chest toward the floor while keeping your body straight.",
        "Push back up to the starting position."
      ],
    },
    {
      name: "Incline Push-Ups",
      image: "https://bodybuilding4arab.com/wp-content/uploads/2021/02/Incline-Push-Up-1.gif",
      sets: 3,
      reps: 12,
      calories: 40,
      time: "4 minutes",
      steps: [
        "Place your hands on an elevated surface like a bench or table.",
        "Lower your chest toward the surface.",
        "Push back up to the starting position."
      ],
    },
    {
      name: "Knee Push-Ups",
      image: "https://d39ziaow49lrgk.cloudfront.net/wp-content/uploads/2016/03/Knee_Push_Up.gif?x16148",
      sets: 3,
      reps: 15,
      calories: 35,
      time: "4 minutes",
      steps: [
        "Start in a modified plank position with your knees on the floor.",
        "Lower your chest to the ground.",
        "Push back up to the starting position."
      ],
    },
    {
      name: "Chest Press with Dumbbells (Lying on Floor)",
      image: "https://post.healthline.com/wp-content/uploads/2020/06/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Floor_Dumbbell_Chest_Press.gif",
      sets: 3,
      reps: 12,
      calories: 60,
      time: "6 minutes",
      steps: [
        "Lie on your back with a dumbbell in each hand.",
        "Press the dumbbells straight up over your chest.",
        "Lower them back down to the starting position."
      ],
    },
    {
      name: "Chest Flys with Dumbbells",
      image: "https://sporium.net/wp-content/uploads/2019/11/yana-a%C3%A7%C4%B1%C5%9F-hareketi.gif",
      sets: 3,
      reps: 10,
      calories: 50,
      time: "5 minutes",
      steps: [
        "Lie on your back with a dumbbell in each hand.",
        "Extend your arms above your chest, palms facing each other.",
        "Slowly lower your arms out to the sides, then bring them back together."
      ],
    },
    {
      name: "Wall Push-Ups",
      image: "https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/03/pushups-against-wall.gif",
      sets: 3,
      reps: 20,
      calories: 30,
      time: "3 minutes",
      steps: [
        "Stand facing a wall, arms extended and palms on the wall.",
        "Bend your elbows to bring your chest closer to the wall.",
        "Push back to the starting position."
      ],
    },
    {
      name: "Resistance Band Chest Press",
      image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/400x400_Resistance_Band_Chest_Workout_Standing_Chest_Fly.gif?h=840",
      sets: 3,
      reps: 15,
      calories: 45,
      time: "4 minutes",
      steps: [
        "Secure a resistance band behind you at chest height.",
        "Hold the handles and push them forward until your arms are fully extended.",
        "Slowly return to the starting position."
      ],
    }
  ];
  
  // Function to render exercises dynamically
  function renderExercises() {
    const exerciseList = document.getElementById("exercise-list");
  
    exercises.forEach((exercise, index) => {
      const exerciseDiv = document.createElement("div");
      exerciseDiv.className = "exercise";
      exerciseDiv.innerHTML = `
        <img src="${exercise.image}" alt="${exercise.name}">
        <div class="details">
          <h3>${exercise.name}</h3>
          <p><strong>Sets:</strong> ${exercise.sets}</p>
          <p><strong>Reps:</strong> ${exercise.reps}</p>
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
    alert(`Great job! You completed ${exercises[index].name}.`);
    const exerciseDivs = document.querySelectorAll(".exercise");
    exerciseDivs[index].classList.add("completed");
  }
  
  // Initialize the exercise list on page load
  document.addEventListener("DOMContentLoaded", renderExercises);
  