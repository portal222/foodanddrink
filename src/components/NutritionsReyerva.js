import React, { useState } from "react";
import Groceries from "./Groceries"; // pretpostavka da koristiš ovu komponentu

const NutritionTable = ({ fruit }) => {
  // States za ručne unose
  const [inputValues, setInputValues] = useState({});
  const [inputValue1, setInputValue1] = useState(0); // za pirinač
  const [inputValue2, setInputValue2] = useState(0); // za ovsene pahuljice

  // Promene unosa iz JSON baze
  const handleInputChange = (id, value) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  // Promene za pirinač
  const handleChangeValue1 = (e) => {
    setInputValue1(parseFloat(e.target.value) || 0);
  };

  // Promene za ovsene pahuljice
  const handleChangeValue2 = (e) => {
    setInputValue2(parseFloat(e.target.value) || 0);
  };

  //kod koji pomaze da se sacuvaju podaci i kada se zatvori aplikacija

  useEffect(() => {
  const dataToSave = {
    inputValues,
    inputValue1,
    inputValue2
  };
  localStorage.setItem("nutritionData", JSON.stringify(dataToSave));
}, [inputValues, inputValue1, inputValue2]);

//za ponovno pokretanje ovo pomaze da se ucita

useEffect(() => {
  const savedData = JSON.parse(localStorage.getItem("nutritionData"));
  if (savedData) {
    setInputValues(savedData.inputValues || {});
    setInputValue1(savedData.inputValue1 || 0);
    setInputValue2(savedData.inputValue2 || 0);
  }
}, []);


//Dodaj deo koji prikazuje sve datume i kalorije iz dailyCalories. Na primer:

const [history, setHistory] = useState([]);

useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("dailyCalories")) || {};
    const formatted = Object.entries(savedHistory).map(([date, calories]) => ({
        date,
        calories
    }));
    setHistory(formatted);
}, []);


//Ako hoćeš da vodiš evidenciju po danima, možeš dodavati u localStorage po datumu:

const today = new Date().toISOString().slice(0, 10); // format YYYY-MM-DD
const dailyCalories = localStorage.getItem("dailyCalories") 
  ? JSON.parse(localStorage.getItem("dailyCalories")) 
  : {};

dailyCalories[today] = grandTotals.calories;
localStorage.setItem("dailyCalories", JSON.stringify(dailyCalories));

//Posle toga, možeš prikazati unose iz prethodnih dana ili čak da napraviš mali grafikon.
//  Ako ti to zvuči zanimljivo, mogu ti pomoći da to pretvoriš u funkcionalni deo aplikacije. 

  // Ukupno iz JSON baze
  const totalsFromFruit = fruit.reduce((acc, fr, id) => {
    const grams = parseFloat(inputValues[id]) || 0;
    acc.protein += (grams * fr.nutritions.protein) / 100;
    acc.carbs += (grams * fr.nutritions.carbohydrates) / 100;
    acc.fat += (grams * fr.nutritions.fat) / 100;
    acc.calories += (grams * fr.nutritions.calories) / 100;
    return acc;
  }, { protein: 0, carbs: 0, fat: 0, calories: 0 });

  // Ukupno iz ručnih unosa
  const totalsManual = {
    protein: (inputValue1 * 0.076) + (inputValue2 * 0.139),
    carbs: (inputValue1 * 0.78) + (inputValue2 * 0.644),
    fat: 0, // možeš dodati ako znaš vrednosti
    calories: (inputValue1 * 3.51) + (inputValue2 * 3.74)
  };

  // Kombinovani ukupni nutritivni podaci
  const grandTotals = {
    protein: totalsFromFruit.protein + totalsManual.protein,
    carbs: totalsFromFruit.carbs + totalsManual.carbs,
    fat: totalsFromFruit.fat + totalsManual.fat,
    calories: totalsFromFruit.calories + totalsManual.calories
  };

  // Ručne stavke
  const rice = "Pirinač";
  const oatmeal = "Ovsene pahuljice";

  return (
    <>
    <table className="nutrition-table">
      <tbody>
        {/* Prikaz voća iz JSON baze */}
        {fruit.map((fr, id) => {
          const grams = inputValues[id] || 0;
          return (
            <tr key={id} className="hydrates">
              <Groceries food={fr.name} />
              <td className="protein">
                <input
                  className="inputPro"
                  type="number"
                  value={grams}
                  onChange={(e) => handleInputChange(id, e.target.value)}
                />
              </td>
              <td className="protein">
                {((grams * fr.nutritions.protein) / 100).toFixed(1)}
              </td>
              <td className="protein">
                {((grams * fr.nutritions.carbohydrates) / 100).toFixed(1)}
              </td>
              <td className="protein">
                {((grams * fr.nutritions.fat) / 100).toFixed(1)}
              </td>
              <td className="protein">
                {((grams * fr.nutritions.calories) / 100).toFixed(1)}
              </td>
            </tr>
          );
        })}

        {/* Pirinač */}
        <tr className="hydrates">
          <Groceries food={rice} />
          <td className="protein">
            <input
              className="inputPro"
              type="number"
              value={inputValue1}
              onChange={handleChangeValue1}
            />
          </td>
          <td className="protein">{(inputValue1 * 0.076).toFixed(1)}</td>
          <td className="protein">{(inputValue1 * 0.78).toFixed(1)}</td>
          <td className="protein"></td>
          <td className="protein">{(inputValue1 * 3.51).toFixed(1)}</td>
        </tr>

        {/* Ovsene pahuljice */}
        <tr className="hydrates">
          <Groceries food={oatmeal} />
          <td className="protein">
            <input
              className="inputPro"
              type="number"
              value={inputValue2}
              onChange={handleChangeValue2}
            />
          </td>
          <td className="protein">{(inputValue2 * 0.139).toFixed(1)}</td>
          <td className="protein">{(inputValue2 * 0.644).toFixed(1)}</td>
          <td className="protein"></td>
          <td className="protein">{(inputValue2 * 3.74).toFixed(1)}</td>
        </tr>

        {/* Ukupne nutritivne vrednosti */}
        <tr className="total-row">
          <td>Ukupno:</td>
          <td></td>
          <td>{grandTotals.protein.toFixed(1)}</td>
          <td>{grandTotals.carbs.toFixed(1)}</td>
          <td>{grandTotals.fat.toFixed(1)}</td>
          <td>{grandTotals.calories.toFixed(1)}</td>
        </tr>
      </tbody>
    </table>

    {/* dodatak koji prikazuje ranije unose po danima */}
    <div className="history">
    <h3>📅 Istorija unosa kalorija</h3>
    <table>
        <thead>
            <tr>
                <th>Datum</th>
                <th>Kalorije</th>
            </tr>
        </thead>
        <tbody>
            {history.map((entry, index) => (
                <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.calories.toFixed(1)}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
</>
  );
};

export default NutritionTable;