import Counter from '../components/Counter';
import ProjectInfo from '../components/ProjectInfo';
import Store from '../components/Store';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: 'auto', padding: '20px' }}>
      <h1>My Next.js Assignment</h1>
      
      <hr style={{ margin: '20px 0' }} />

      <h2>Counter App</h2>
      <p>Two instances of the same component with different props:</p>
      <Counter incrementBy={1} color="lightblue" />
      <Counter incrementBy={2} color="lightgreen" />

      <hr style={{ margin: '20px 0' }} />

      <ProjectInfo />

      <hr style={{ margin: '20px 0' }} />

      <Store />

    </main>
  );
}
