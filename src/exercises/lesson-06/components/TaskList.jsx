import TaskItem from './TaskItem';
export default function TaskList({ visibleTasks }) {
  return (
    <ul>
      {visibleTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
