import { addNewTask, updateTask } from "./server";

//make sure nothing is running on port 3001
(async function myFunc() {
  await addNewTask({
    name: "My task",
    id: "12334234",
  });

  await updateTask({
    id: "12334234",
    name: "My task - updated",
  });
})();
