"use client"

import { UserMessageBubble, AssistantMessageBubble, LoadingDot } from "@/components/messages";

const mockMessages = [
  { role: "user" as const, content: "Cześć!" },
  { role: "assistant" as const, content: "Witaj! W czym mogę Ci dzisiaj pomóc?" },
  { role: "user" as const, content: "Napisz mi krótki tekst o pogodzie." },
  { role: "assistant" as const, content: "Dziś na dworze panuje **piękna słoneczna pogoda**. Temperatura wynosi około 22°C, a niebo jest bezchmurne.\n\n## Prognoza na najbliższe dni:\n- Poniedziałek: słonecznie, 24°C\n- Wtorek: częściowe zachmurzenie, 21°C\n- Środa: deszczowo, 18°C\n\nPamiętaj o kremie z filtrem UV!" },
  { role: "user" as const, content: "To jest bardzo długa wiadomość, która powinna rozciągnąć się na całą szerokość dostępną dla dymku wiadomości użytkownika. Chcę sprawdzić jak zachowa się komponent przy większej ilości tekstu i czy odpowiednio dostosuje margines." },
  { role: "user" as const, content: "Średni tekst do sprawdzenia" },
  { role: "user" as const, content: "OK" },
];

export default function MessagesPreview() {
  return (
    <div className="w-full space-y-4">
      {mockMessages.map((msg, index) => (
        <div key={index}>
          {msg.role === "user" ? (
            <UserMessageBubble content={msg.content} index={index} />
          ) : (
            <AssistantMessageBubble content={msg.content} />
          )}
        </div>
      ))}
      
      <div className="border-t pt-4 mt-8">
        <h2 className="text-lg font-medium mb-4">Loading Dot Preview</h2>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Ładowanie:</span>
          <LoadingDot />
        </div>
      </div>
    </div>
  );
}
