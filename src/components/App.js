import Car from './Car';

const App = () => {
  let car1 = {
    type: 'Reno',
    model: 'Klio',
    color: 'Roze',
    doors: 2,
    hatchback: true,
  };
  let car2 = {
    type: 'Sitroen',
    model: 'Ksara',
    color: 'Bela',
    doors: 2,
    hatchback: false,
  };
  let car3 = {
    type: 'Pezo',
    model: '307',
    color: 'Teget',
    doors: 4,
    hatchback: true,
  };
  return (
    <div id='Carmodel'>
      <Car carInfo={car1} />
      <Car carInfo={car2} />
      <Car carInfo={car3} />
    </div>
  );
};

export default App;
