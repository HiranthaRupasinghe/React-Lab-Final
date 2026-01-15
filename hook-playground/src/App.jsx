import { useMemo, useState } from "react";
import UseStateLab from "./labs/UseStateLab";
import UseEffectLab from "./labs/UseEffectLab";
import UseRefLab from "./labs/UseRefLab";
import UseIdLab from "./labs/UseIdLab";
import UseMemoLab from "./labs/UseMemoLab";
import UseContextLab from "./labs/UseContextLab";
import UseCallbackLab from "./labs/UseCallbackLab";
import UseReducerLab from "./labs/UseReducerLab";
import UseToggleLab from "./labs/UseToggleLab";
import UseInputLab from "./labs/UseInputLab";
import UseDebounceLab from "./labs/UseDebouncedLab";
import UsePreviousLab from "./labs/UsePreviousLab";

const LABS = [
  {
    day: "Day 1",
    key: "useState",
    title: "State & Controlled Input",
    Comp: UseStateLab,
  },
  {
    day: "Day 1",
    key: "useEffect",
    title: "Timer + Cleanup",
    Comp: UseEffectLab,
  },
  {
    day: "Day 1",
    key: "useRef",
    title: "Focus + Previous Value",
    Comp: UseRefLab,
  },
  
  { day: "Day 1", key: "useId", title: "Accessible Form IDs", Comp: UseIdLab },

  {
    day: "Day 2",
    key: "useMemo",
    title: "Cached Derived Value",
    Comp: UseMemoLab,
  },
  {
    day: "Day 2",
    key: "useCallback",
    title: "Stable Function Identity",
    Comp: UseCallbackLab,
  },
  {
    day: "Day 2",
    key: "useContext",
    title: "No Prop Drilling",
    Comp: UseContextLab,
  },
  {
    day: "Day 2",
    key: "useReducer",
    title: "State Machine",
    Comp: UseReducerLab,
  },
  {
    day: "Day 3",
    key: "useToggle",
    title: "Custom Hook: Toggle",
    Comp: UseToggleLab,
  },
  {
    day: "Day 3",
    key: "useInput",
    title: "Custom Hook: Input",
    Comp: UseInputLab,
  },
  {
    day: "Day 3",
    key: "useDebounce",
    title: "Custom Hook: Debounce",
    Comp: UseDebounceLab,
  },
  {
    day: "Day 3",
    key: "usePrevious",
    title: "Custom Hook: Previous",
    Comp: UsePreviousLab,
  },
];

export default function App() {
  const [active, setActive] = useState("useState");
  const [q, setQ] = useState("");

  const filteredLabs = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return LABS;
    return LABS.filter((x) =>
      `${x.key} ${x.title} ${x.day}`.toLowerCase().includes(s)
    );
  }, [q]);

  const current = useMemo(
    () => LABS.find((x) => x.key === active) || LABS[0],
    [active]
  );
  const ActiveComp = current.Comp;

  return (
    <div className="shell">
      <header className="top glass">
        <div className="brand">
          <div className="logo">⚛️</div>
          <div>
            <div className="title">React Hooks Interactive Lab</div>
            <div className="sub">Teach hooks in isolation (click → demo)</div>
          </div>
        </div>

        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search hook… (ex: effect)"
        />
      </header>

      <div className="layout">
        <aside className="nav glass">
          {["Day 1", "Day 2", "Day 3"].map((d) => (
            <div key={d} className="group">
              <div className="groupTitle">{d}</div>

              {filteredLabs
                .filter((x) => x.day === d)
                .map((x) => (
                  <button
                    key={x.key}
                    className={`navBtn ${active === x.key ? "active" : ""}`}
                    onClick={() => setActive(x.key)}
                  >
                    <div className="navKey">{x.key}</div>
                    <div className="navSub">{x.title}</div>
                  </button>
                ))}
            </div>
          ))}
        </aside>

        <main className="main glass">
          <div className="mainHead">
            <div>
              <div className="mainKey">{current.key}</div>
              <div className="mainSub">{current.title}</div>
            </div>
            <div className="pill">{current.day}</div>
          </div>

          <ActiveComp />
        </main>
      </div>
    </div>
  );
}