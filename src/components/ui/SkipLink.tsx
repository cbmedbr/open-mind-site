/** Pular para o conteúdo — navegação por teclado (WCAG AA, SDD §8). */
export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only rounded-md bg-petrol-700 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200]"
    >
      Pular para o conteúdo
    </a>
  );
}
