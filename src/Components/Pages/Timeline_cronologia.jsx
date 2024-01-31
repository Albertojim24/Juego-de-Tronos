import React from "react";
import { Chrono } from "react-chrono";

export default function Timeline_cronologia({ cronologias }) {
  console.log("soy componente timeline:", cronologias);
  // Filtra cronologias que tienen name y age definidos
  const validCronologias = cronologias.filter(
    (cronologia) => cronologia.name && cronologia.age
  );

  return (
    <>
      <div>
        {validCronologias.map((cronologia) => (
          <div key={cronologia.id}>
            <ol>
                <p>{cronologia.id}</p>
              <p>{cronologia.name}</p>
              <p>{cronologia.age}</p>
              {cronologia.image && (
        <>
          <p>Image URL: {cronologia.images}</p>
          <img src={cronologia.image} alt="foto" />
        </>
      )}
    </ol>
          </div>
        ))}
      </div>

      {/* <Chrono
        items={validCronologias.map((cronologia) => ({
          title: "cronologia.name",
          content: "cronologia.age",
          
            title: "May 1940",
            cardTitle: "Dunkirk",
            url: "http://google.com",
            cardSubtitle:
              "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
          
        }))}
        mode="VERTICAL_ALTERNATING"
      /> */}
    </>
  );
}
