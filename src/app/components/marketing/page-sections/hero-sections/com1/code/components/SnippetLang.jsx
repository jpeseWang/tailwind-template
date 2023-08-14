export default function SnippetLang({ lang, setLang }) {
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.currentTarget.value)}
      className="text-black font-semibold text-base"
    >
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
    </select>
  );
}
