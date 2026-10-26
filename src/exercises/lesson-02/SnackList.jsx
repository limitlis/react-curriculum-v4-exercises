export default function SnackList() {
  const snacks = [
    { name: '🍟 Fries', rank: 0.8 },
    { name: '🧁 Cupcake', rank: 0.1 },
    { name: '🍿 Popcorn', rank: 0.9 },
    { name: '🍪 Cookies', rank: 1 },
    { name: '🥤 Soda', rank: 0 },
  ];
  return (
    <article>
      <ol>
        {snacks
          .toSorted((a, b) => b.rank - a.rank)
          .map((snack, index) => (
            <li key={index}>{snack.name}</li>
          ))}
      </ol>
    </article>
  );
}
