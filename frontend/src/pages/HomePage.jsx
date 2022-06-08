import ErrorMessage from '../components/ErrorMessage';
import List from '../components/List';
import useDiverrs from '../hooks/useDiverr';

const HomePage = () => {
  const { loading, diverrs, error } = useDiverrs();
  //Si sigue cargando devuelvo párrafo
  if (loading) return <p>cargando diverrs...</p>;
  //Si hay error devuelvo mensaje
  if (error) return <ErrorMessage message={error.message} />;
  //Si se cargaron los diverrs cargo la lista de tweets
  return (
    <section>
      <List diverrs={diverrs} />
    </section>
  );
};
export default HomePage;
