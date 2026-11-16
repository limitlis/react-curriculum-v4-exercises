import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import UserProfile from './components/UserProfile';
import FilterButtons from './components/FilterButtons';
import { filterTasks } from './utils/utils';
import { useTasks } from './hooks/hooks';

export default function StudentWork() {
  const { tasks, filter, setFilter, loading } = useTasks();

  let visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile />

      <FilterButtons filter={filter} onSetFilter={setFilter} />

      <TaskList visibleTasks={visibleTasks} />
    </div>
  );
}
