export default function FilterButtons({ onSetFilter, filter }) {
  return (
    <div>
      <button onClick={() => onSetFilter('all')}>All</button>
      <button onClick={() => onSetFilter('completed')}>Completed</button>
      <button onClick={() => onSetFilter('pending')}>Pending</button>
      <p>Current filter: {filter}</p>
    </div>
  );
}
