import PetCard from './components/PetCard';

export default function App() {
  return (
    <div className="app-container">
      <h1>Ficha dos Pets</h1>
      <PetCard nome="Bidu" especie="Cachorro" />
      <PetCard nome="Malu" especie="Gato" />
      <PetCard nome="Louro" especie="Papagaio" />
    </div>
  );
}