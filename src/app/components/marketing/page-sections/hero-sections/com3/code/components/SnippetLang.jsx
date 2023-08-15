export default function SnippetLang({ lang, setLang }) {
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.currentTarget.value)}
      className="font-medium text-slate-900 focus:shadow-none  sm:text-sm"
    >
      <option value="html">HTML</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
    </select>
  );
}
