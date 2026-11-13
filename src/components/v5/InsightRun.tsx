import { Fragment, useEffect, useRef, useState } from "react";
import type { Explorer } from "../../content/types";
import { ASK_IC, ENTER, LINK, Steps, Svg, still, wait } from "./consoleBits";
import {
  HeroExplorer,
  type ConsoleInsights,
  type ConsoleProps,
} from "./HeroExplorer";

/* Home's and /sample-output's Insights (13 Nov, James: the console's Insights tab shows whatever component a page sends
   it, as the AI will write it in production). One question across a group of companies, like Exa's agent. The question
   sits in the console's box over the tabs and the other questions under the window, where Search keeps its company and
   its other sources. The first time the tab opens, the first question types and runs: the companies are found and listed on the
   left as each is looked up, and the report fills in on the right, ending in the answer and 3 numbers. On the left the
   dot is the state: green in the index, hollow not yet, pulsing once watched. A company not in the index gets a Watch
   button in its row, and all at once under the report; watching is the reader's choice. Other questions sit under the
   report. Under reduced motion nothing types and every run shows its finished frame. */
export function useInsightRun(ex: Explorer): ConsoleInsights {
  const runId = useRef(0);
  const asked = useRef(false);
  const [folded, setFolded] = useState(true);
  /* Which question, how much of it has typed, how far the plan is (-1 while it types, 3 when the report is written),
     how many sources are looked up, which row shows its evidence, and which companies the reader watches. */
  const [qi, setQi] = useState(0);
  const ins = ex.insights[qi];
  const [qTyped, setQTyped] = useState(0);
  const [stage, setStage] = useState(-1);
  const [got, setGot] = useState(0);
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [watched, setWatched] = useState<string[]>([]);

  /* A run: the question types, the companies are found, each is looked up in the index, then the report is written. A
     newer run cancels an older one. */
  const ask = (k: number) => {
    const id = ++runId.current;
    const live = () => id === runId.current;
    const q = ex.insights[k];
    asked.current = true;
    setQi(k);
    setOpenRow(null);
    setWatched([]);
    if (still()) {
      setQTyped(q.question.length);
      setGot(q.sources.length);
      setStage(3);
      return;
    }
    setQTyped(0);
    setGot(0);
    setStage(-1);
    void (async () => {
      await wait(250);
      for (let i = 1; i <= q.question.length; i++) {
        if (!live()) return;
        setQTyped(i);
        await wait(16 + Math.random() * 22);
      }
      await wait(300);
      if (!live()) return;
      setStage(0);
      await wait(900);
      if (!live()) return;
      setStage(1);
      for (let i = 1; i <= q.sources.length; i++) {
        await wait(320);
        if (!live()) return;
        setGot(i);
      }
      await wait(300);
      if (!live()) return;
      setStage(2);
      await wait(800);
      if (live()) setStage(3);
    })();
  };
  useEffect(
    () => () => {
      runId.current++;
    },
    [],
  );

  const watch = (domains: string[]) =>
    setWatched((w) => [...w, ...domains.filter((d) => !w.includes(d))]);
  const covered = ins.sources.filter((s) => s.cells).length;
  const unwatched = ins.sources
    .filter((s) => !s.cells && !watched.includes(s.domain))
    .map((s) => s.domain);
  const watchBtn = (d: string) => (
    <button
      type="button"
      className="hx-watch"
      aria-label={`${ex.insight.watch} ${d}`}
      onClick={() => watch([d])}
    >
      {ex.insight.watch}
    </button>
  );
  const badge =
    stage >= 3
      ? ex.insight.done(ins.sources.length, covered)
      : stage >= 0
        ? ex.insight.collecting(got, ins.sources.length)
        : "";

  const bar = (
    <div className="hx-bar" data-ask="">
      <Svg html={ASK_IC} className="hx-ic" />
      <p className="hx-q">
        {qTyped ? (
          <span className="hx-typed">{ins.question.slice(0, qTyped)}</span>
        ) : (
          <span className="hx-ph">{ex.placeholder.insights}</span>
        )}
        {stage < 0 && <span className="hx-caret" aria-hidden="true" />}
      </p>
      <button
        type="button"
        className="hx-btn"
        aria-label={ex.buttons.insights}
        title={ex.buttons.insights}
        onClick={() => ask(qi)}
      >
        <Svg html={ENTER} />
      </button>
    </div>
  );

  const panel = (
    <div className="hx-main" data-ask="">
      {/* Left: who asks, and the companies collected for the question. */}
      <div className="hx-side">
        <div className="hx-grp">
          <p className="hx-gl">{ex.groups.asked}</p>
          <div className="hx-chips">
            <span className="hx-chip hx-fixed">{ins.persona}</span>
          </div>
        </div>
        <div className="hx-grp">
          <p className="hx-gl">
            {ex.groups.sources}
            {stage >= 1 && (
              <span className="hx-count">
                {got} / {ins.sources.length}
              </span>
            )}
          </p>
          {stage >= 1 ? (
            <ul className="hx-srcs">
              {ins.sources.map((s, k) => {
                const st =
                  k < got ? "done" : k === got && stage === 1 ? "now" : "next";
                const on = watched.includes(s.domain);
                const state = s.cells
                  ? ex.insight.inIndex
                  : on
                    ? ex.insight.watching
                    : ex.insight.notIn;
                return (
                  <li
                    key={s.domain}
                    data-st={st}
                    data-new={s.cells ? undefined : ""}
                    data-watching={on ? "" : undefined}
                    title={st === "done" ? state : undefined}
                  >
                    <span className="hx-dot" aria-hidden="true" />
                    <span className="hx-dom">{s.domain}</span>
                    {st === "done" && <span className="sr-only">{state}</span>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="hx-none">{ex.insight.waiting}</p>
          )}
        </div>
      </div>

      {/* Right: the report. */}
      <div className="hx-out">
        <div className="hx-utabs hx-ohead">
          <span className="hx-utab" data-on="">
            {ex.output.insights}
          </span>
          {badge && (
            <span className="hx-badge" data-state={stage >= 3 ? "in" : "new"}>
              {badge}
            </span>
          )}
        </div>
        <div className="hx-obody">
          <div className="hx-rep">
            {stage >= 3 ? (
              <div className="hx-ans">
                <p className="hx-ans-t">{ins.answer}</p>
                <div className="hx-stats">
                  {ins.stats.map((s) => (
                    <div className="hx-stat" key={s.l}>
                      <span className="hx-stat-v">{s.v}</span>
                      <span className="hx-stat-l">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              stage >= 0 && <Steps items={ins.plan} done={stage} />
            )}
            {got > 0 && (
              <div className="hx-tablewrap">
                <table className="hx-table">
                  <thead>
                    <tr>
                      {ins.cols.map((c) => (
                        <th key={c}>{c}</th>
                      ))}
                      <th>
                        <span className="sr-only">{ex.openRecord}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ins.sources.slice(0, got).map((s, k) => (
                      <Fragment key={s.domain}>
                        <tr data-new={s.cells ? undefined : ""}>
                          <td className="hx-td-dom">{s.domain}</td>
                          {s.cells ? (
                            <>
                              <td>{s.cells[0]}</td>
                              <td>{s.cells[1]}</td>
                            </>
                          ) : (
                            <td colSpan={2}>
                              <span className="hx-missing">
                                {watched.includes(s.domain)
                                  ? ins.watched
                                  : ex.insight.notIn}
                                {!watched.includes(s.domain) &&
                                  watchBtn(s.domain)}
                              </span>
                            </td>
                          )}
                          <td className="hx-td-link">
                            {s.evidence && (
                              <button
                                type="button"
                                className="hx-link"
                                aria-expanded={openRow === k}
                                aria-label={`${ex.openRecord}: ${s.domain}`}
                                title={ex.openRecord}
                                onClick={() =>
                                  setOpenRow((o) => (o === k ? null : k))
                                }
                              >
                                <Svg html={LINK} />
                              </button>
                            )}
                          </td>
                        </tr>
                        {openRow === k && s.evidence && (
                          <tr className="hx-evrow">
                            <td colSpan={4}>{s.evidence}</td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {stage >= 3 && covered < ins.sources.length && (
              <div className="hx-callout">
                <p>
                  {unwatched.length
                    ? ex.insight.missing(unwatched.length, ins.noun)
                    : ex.insight.allWatched(ins.persona)}
                </p>
                {unwatched.length > 0 && (
                  <button
                    type="button"
                    className="hx-go"
                    onClick={() => watch(unwatched)}
                  >
                    {ex.insight.watchAll(unwatched.length)}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  /* Other questions to try, under the window, folded until asked for. */
  const below = (
    <div className="hx-more">
      <button
        type="button"
        className="hx-morebtn"
        aria-expanded={!folded}
        onClick={() => setFolded((f) => !f)}
      >
        {ex.tryLabel.insights}
        <span className="hx-chev" aria-hidden="true" />
      </button>
      {!folded && (
        <div className="hx-try">
          {ex.insights.map((q, k) => (
            <button
              type="button"
              key={q.label}
              className="hx-trybtn hx-tryq"
              aria-pressed={k === qi}
              onClick={() => ask(k)}
            >
              <span className="hx-trykind">{q.kind}</span>
              {q.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return { bar, panel, more: below, opened: () => !asked.current && ask(0) };
}

/* Home's and /sample-output's console: the console with the question run in its Insights tab. */
export function QuestionConsole({
  ex,
  ...props
}: Omit<ConsoleProps, "ex" | "insights"> & { ex: Explorer }) {
  const run = useInsightRun(ex);
  return <HeroExplorer ex={ex} insights={run} {...props} />;
}
